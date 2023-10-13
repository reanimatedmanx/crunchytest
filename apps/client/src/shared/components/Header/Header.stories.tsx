import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Header'

const meta = {
  title: 'Components/Header',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
