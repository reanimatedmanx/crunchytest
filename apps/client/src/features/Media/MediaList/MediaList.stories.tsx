import type { Meta, StoryObj } from "@storybook/react";

import { MediaList } from "./MediaList";

const meta = {
  title: "Features/Media/MediaList",
  component: MediaList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MediaList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
