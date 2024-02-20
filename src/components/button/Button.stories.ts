import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta : Meta<typeof Button> = {
  component: Button,
  parameters:{
    layout: 'centered',
  },
  tags: ["autodocs"],
  title: 'Components/Button'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args:{
    children: 'Button',
    variant:"solid",
  }
}
export const Outline: Story = {
  args:{
    children: 'Button',
    variant:"outline",
  }
}
export const Ghost: Story = {
  args:{
    children: 'Button',
    variant:"ghost",
  }
}