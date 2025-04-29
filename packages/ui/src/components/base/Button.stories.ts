import { Button } from './button';

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'base/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'default ',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'link',
  },
};

export const SizeDefault: Story = {
  args: {
    size: 'default',
    children: 'size default',
    variant: 'outline',
  },
};

export const SizeSm: Story = {
  args: {
    variant: 'outline',
    size: 'sm',
    children: 'size sm',
  },
};

export const SizeLg: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    children: 'size lg',
  },
};

export const SizeIcon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: `icon`,
  },
};