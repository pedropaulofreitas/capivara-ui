import { ComponentMeta, ComponentStory } from "@storybook/react";

import Tag from "./index";

export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    color: {
      options: [
        "",
        "primary",
        "link",
        "info",
        "success",
        "warning",
        "danger",
        "white",
        "light",
        "dark",
        "black",
        "text",
        "ghost",
      ],
      description: "Tag color",
    },
    size: {
      options: ["small", "normal", "medium", "large"],
      control: { type: "select" },
      description: "Tag size",
    },
    isRounded: {
      options: [true, false],
      control: { type: "boolean" },
      description: "Tag has round border",
    },
  },
} as ComponentMeta<typeof Tag>;

export const Examples: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args}>tag text</Tag>
);
