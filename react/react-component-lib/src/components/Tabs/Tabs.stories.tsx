import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "components/Icon";

import Tabs from "./index";

export default {
  title: "Tabs",
  component: Tabs,
  argTypes: {
    item: {
      description: `The tabs item must contain an array of objects with active (boolean), name (string), value (string) and a component icon if you like`,
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "Tabs size",
    },
    styles: {
      options: ["", "boxed", "toggle", "toggle-rounded"],
      control: { type: "select" },
      description: "Tabs style",
    },
    alignment: {
      options: ["right", "centered", "fullwidth"],
      control: { type: "select" },
      description: "Tabs alignment",
    },
  },
} as ComponentMeta<typeof Tabs>;

export const Examples: ComponentStory<typeof Tabs> = (args) => (
  <Tabs
    {...args}
    item={[
      {
        name: "Brasilia",
        value: "DF",
        active: false,
      },
      {
        name: "Rio de Janeiro",
        value: "RJ",
        active: false,
      },
      {
        name: "Salvador",
        value: "BA",
        active: true,
      },
    ]}
  />
);
