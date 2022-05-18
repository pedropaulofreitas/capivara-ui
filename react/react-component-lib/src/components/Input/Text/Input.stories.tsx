import { ComponentMeta, ComponentStory } from "@storybook/react";

import Input from "./index";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    size: {
      options: ["small", "normal", "medium", "large"],
      control: { type: "select" },
    },
    type: {
      options: ["text", "password", "email", "tel"],
      control: { type: "select" },
    },
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
      control: { type: "select" },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },

    debounced: {
      control: {
        type: "boolean",
      },
    },
    isRounded: {
      control: {
        type: "boolean",
      },
    },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Input>;

export const Examples: ComponentStory<typeof Input> = (args) => (
  <Input {...args} onChange={(value) => console.log(value)} />
);
