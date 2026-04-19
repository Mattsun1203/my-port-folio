import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HttpResponse, http } from 'msw';
import { describe, expect, it } from 'vitest';
import { server } from '@/test/server';
import { ContactForm } from './ContactForm';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

describe('ContactForm', () => {
  const user = userEvent.setup();

  it('フォームの各フィールドが表示される', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/お名前/)).toBeInTheDocument();
    expect(screen.getByLabelText(/メールアドレス/)).toBeInTheDocument();
    expect(screen.getByLabelText(/メッセージ/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '送信する' })).toBeInTheDocument();
  });

  it('空のフォームを送信するとバリデーションエラーが表示される', async () => {
    render(<ContactForm />);
    await user.click(screen.getByRole('button', { name: '送信する' }));

    await waitFor(() => {
      expect(screen.getByText('名前を入力してください')).toBeInTheDocument();
    });
    expect(screen.getByText('有効なメールアドレスを入力してください')).toBeInTheDocument();
    expect(screen.getByText('10文字以上入力してください')).toBeInTheDocument();
  });

  it('有効なデータを入力して送信すると成功メッセージが表示される', async () => {
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/お名前/), '山田 太郎');
    await user.type(screen.getByLabelText(/メールアドレス/), 'taro@example.com');
    await user.type(
      screen.getByLabelText(/メッセージ/),
      'お問い合わせのテストメッセージです。よろしくお願いします。',
    );

    await user.click(screen.getByRole('button', { name: '送信する' }));

    await waitFor(() => {
      expect(
        screen.getByText('メッセージを送信しました。ありがとうございます！'),
      ).toBeInTheDocument();
    });
  });

  it('API エラー時にエラーメッセージが表示される', async () => {
    server.use(
      http.post(`${BASE_URL}/contact`, () => {
        return HttpResponse.json({ message: 'Internal Server Error' }, { status: 500 });
      }),
    );

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/お名前/), '山田 太郎');
    await user.type(screen.getByLabelText(/メールアドレス/), 'taro@example.com');
    await user.type(
      screen.getByLabelText(/メッセージ/),
      'お問い合わせのテストメッセージです。よろしくお願いします。',
    );

    await user.click(screen.getByRole('button', { name: '送信する' }));

    await waitFor(() => {
      expect(
        screen.getByText('送信に失敗しました。時間をおいて再度お試しください。'),
      ).toBeInTheDocument();
    });
  });
});
