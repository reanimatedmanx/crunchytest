import type { Meta, StoryObj } from '@storybook/react'

import { MediaFilterBar } from './MediaFilterBar'

const meta = {
  title: 'Features/Media/MediaFilterBar',
  component: MediaFilterBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MediaFilterBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
