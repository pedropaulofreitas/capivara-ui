import { ComponentMeta, ComponentStory } from "@storybook/react";

import Checkbox from "./index";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    name: {
      description: "Name option",
    },
    value: {
      description: "Value option",
    },
    isDisabled: {
      options: [true, false],
      control: { type: "boolean" },
      defaultValue: false,
      description: "For the checkbox to be disabled (true)",
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const Examples: ComponentStory<typeof Checkbox> = (args) => (
  <>
    <Checkbox {...args} name="Brasilia" value="DF" />
    <Checkbox {...args} name="Rio" value="Rio de Janeiro" />
  </>
);
