import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@portfolio/ui';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    hoverable: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="font-bold text-slate-900">カードタイトル</h3>
        <p className="mt-2 text-sm text-slate-600">カードのコンテンツが入ります。</p>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <div>
        <h3 className="font-bold text-slate-900">ホバー可能なカード</h3>
        <p className="mt-2 text-sm text-slate-600">マウスを乗せると影が変わります。</p>
      </div>
    ),
  },
};
