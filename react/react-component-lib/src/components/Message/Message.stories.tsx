import { ComponentMeta, ComponentStory } from "@storybook/react";

import Message from "./index";

export default {
  title: "Message",
  component: Message,
  argTypes: {
    color: {
      options: [
        "dark",
        "primary",
        "link",
        "info",
        "success",
        "warning",
        "danger",
      ],
      control: { type: "select" },
      description: "Message color",
    },
    size: {
      options: ["small", "normal", "medium", "large"],
      control: { type: "select" },
      description: "Message size",
    },
  },
} as ComponentMeta<typeof Message>;

export const Examples: ComponentStory<typeof Message> = (args) => (
  <Message
    {...args}
    title="Message"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus."
  />
);
export const ExamplesUntitled: ComponentStory<typeof Message> = (args) => (
  <Message
    {...args}
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus."
  />
);
