import { Box } from "@radix-ui/themes";

import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";

const meta = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [<Box>1</Box>, <Box>2</Box>, <Box>3</Box>],
  },
};

export const WithDefaultFallback: Story = {
  args: {
    items: [],
  },
};

export const WithCustomFallback: Story = {
  args: {
    items: [],
    fallback: <Box>Yo, no way 🤯</Box>,
  },
};
