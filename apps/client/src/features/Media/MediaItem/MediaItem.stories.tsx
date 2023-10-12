import type { Meta, StoryObj } from '@storybook/react'

import { MediaItem } from './MediaItem'

const meta = {
  title: 'Features/Media/MediaItem',
  component: MediaItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MediaItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: '0',
    title: 'One Piece',
    type: 'tv-show',
    genre: 'Comedy',
    releaseYear: 1999,
    rating: 10,
  },
}
