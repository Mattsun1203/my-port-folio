import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ContactForm } from './ContactForm';

// openapi-fetch のモック
vi.mock('@/lib/api-client', () => ({
  apiClient: {
    POST: vi.fn(),
  },
}));

import { apiClient } from '@/lib/api-client';

describe('ContactForm', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
  });

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
    vi.mocked(apiClient.POST).mockResolvedValue({ data: { success: true }, error: undefined } as never);

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

    expect(apiClient.POST).toHaveBeenCalledWith('/contact', {
      body: {
        name: '山田 太郎',
        email: 'taro@example.com',
        message: 'お問い合わせのテストメッセージです。よろしくお願いします。',
      },
    });
  });

  it('API エラー時にエラーメッセージが表示される', async () => {
    vi.mocked(apiClient.POST).mockRejectedValue(new Error('Network error'));

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
