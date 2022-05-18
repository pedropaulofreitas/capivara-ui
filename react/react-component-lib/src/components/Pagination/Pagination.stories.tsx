import { ComponentMeta, ComponentStory } from "@storybook/react";

import Pagination from "./index";

export default {
  title: "Pagination",
  component: Pagination,
  argTypes: {
    showFirstLast: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    showPrevNext: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    current: {
      control: {
        type: "number",
      },
      defaultValue: 3,
    },
    total: {
      control: {
        type: "number",
      },
      defaultValue: 5,
    },
    firstNumber: {
      control: {
        type: "number",
      },
      defaultValue: 1,
    },
    rounded: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    align: {
      control: {
        type: "select",
        options: ["center", "right"],
      },
    },
    previous: {
      control: {
        type: "text",
      },
      defaultValue: "Previous",
    },
    next: {
      control: {
        type: "text",
      },
      defaultValue: "Next",
    },
  },
} as ComponentMeta<React.FC>;

export const Examples: ComponentStory<React.FC> = (args) => (
  <Pagination {...args} onChange={(value) => console.log(value)} total={5} />
);
