import { ComponentMeta, ComponentStory } from "@storybook/react";

import Radio from "./index";

export default {
  title: "Radio",
  component: Radio,
  argTypes: {
    name: {
      description: "Name option",
    },
    value: {
      description: "Value option",
    },
    isChecked: {
      options: [true, false],
      control: { type: "boolean" },
      defaultValue: false,
      description: "For option to be checked (true) or unchecked (false)",
    },
    isDisabled: {
      options: [true, false],
      control: { type: "boolean" },
      defaultValue: false,
      description: "For the radio to be disabled (true)",
    },
  },
} as ComponentMeta<typeof Radio>;

export const Examples: ComponentStory<typeof Radio> = (args) => (
  <>
    <Radio {...args} name="Brasilia" value="DF" />
    <Radio {...args} name="Rio" value="Rio de Janeiro" />
  </>
);
