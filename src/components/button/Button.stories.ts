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


export const Default: Story = {
  args:{
    children: 'Button',
  }
}