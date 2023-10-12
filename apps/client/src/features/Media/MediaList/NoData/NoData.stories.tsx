import type { Meta, StoryObj } from '@storybook/react'

import { NoData } from './NoData'

const meta = {
  title: 'Features/Media/MediaList/NoData',
  component: NoData,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NoData>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
