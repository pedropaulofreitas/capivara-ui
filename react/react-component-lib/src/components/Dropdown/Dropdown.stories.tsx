import { ComponentMeta, ComponentStory } from "@storybook/react";

import Dropdown from "./index";

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    item: {
      description: `Item Dropdown must contain an array of objects with name (string), value (string) and divider that is responsible for dividing the dropdown (true)`,
    },
    click: {
      options: ["active", "hoverable"],
      control: { type: "select" },
      description: "",
    },
    color: {
      options: [
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
      control: { type: "select" },
      description: "Dropdown color",
    },
    isRigh: {
      options: [true, false],
      control: { type: "boolean" },
      description: "",
    },
    isUp: {
      options: [true, false],
      control: { type: "boolean" },
      description: "",
    },
  },
} as ComponentMeta<typeof Dropdown>;

export const Examples: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown
    {...args}
    placeholder="Estados"
    item={[
      {
        name: "Brasilia",
        value: "DF",
      },
      {
        name: "Rio de Janeiro",
        value: "RJ",
      },
      {
        name: "Salvador",
        value: "BA",
        divider: true,
      },
    ]}
  />
);
