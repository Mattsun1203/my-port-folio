import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@portfolio/ui';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '実績を見る',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'お問い合わせ',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'もっと見る',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: '小さいボタン',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: '大きいボタン',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '送信中...',
  },
};
