import type { Meta, StoryObj } from '@storybook/react'

import { AddMediaButton } from './AddMediaButton'

const meta = {
  title: 'Features/Media/Shared/AddMediaButton',
  component: AddMediaButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddMediaButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
