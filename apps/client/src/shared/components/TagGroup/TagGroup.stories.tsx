import type { Meta, StoryObj } from '@storybook/react'

import { TagGroup } from './TagGroup'

const meta = {
  title: 'Components/TagGroup',
  component: TagGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TagGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tags: ['a', 'b', 'c'],
  },
}
