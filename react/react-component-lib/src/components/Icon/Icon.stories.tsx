import { ComponentMeta, ComponentStory } from "@storybook/react";

import Icon from "./index";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    size: {
      options: ["small", "normal", "medium", "large"],
      control: { type: "select" },
      description: "Icon size",
    },
    name: {
      options: ["delete", "arrowUp", "arrowDown"],
      control: { type: "select" },
      defaultValue: "delete",
      description: "Icon name",
    },
  },
} as ComponentMeta<typeof Icon>;

export const Examples: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);
