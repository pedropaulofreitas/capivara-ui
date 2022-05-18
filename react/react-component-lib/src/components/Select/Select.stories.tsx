import { ComponentMeta, ComponentStory } from "@storybook/react";

import Select from "./index";

export default {
  title: "Select",
  component: Select,
  argTypes: {
    size: {
      options: ["small", "normal", "medium", "large"],
      control: { type: "select" },
      description: "Select size",
      defaultValue: "normal",
    },
    color: {
      options: [
        "",
        "dark",
        "primary",
        "link",
        "info",
        "success",
        "warning",
        "danger",
      ],
      defaultValue: "primary",
      description: "Select color",
    },
    isLoading: {
      options: [true, false],
      control: { type: "boolean" },
      description: "For the radio to be loaded (true)",
      defaultValue: false,
    },
    isMultiple: {
      options: [true, false],
      control: { type: "boolean" },
      description: "For the select not to be in dropdown format (true)",
      defaultValue: false,
    },
    isRounded: {
      options: [true, false],
      control: { type: "boolean" },
      description: "For the select not to have rounded edges (true)",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Select>;

export const Examples: ComponentStory<typeof Select> = (args) => (
  <Select
    {...args}
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
      },
    ]}
  />
);
