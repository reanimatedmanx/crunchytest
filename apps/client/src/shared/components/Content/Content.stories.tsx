import type { Meta, StoryObj } from '@storybook/react'

import { Content } from './Content'

const meta = {
  title: 'Components/Content',
  component: Content,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Content>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
