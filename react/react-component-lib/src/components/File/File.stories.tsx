import { ComponentMeta, ComponentStory } from "@storybook/react";

import File from "./index";

export default {
  title: "File",
  component: File,
  argTypes: {
    name: {
      description: "Name option",
    },
    fileName: {
      description: "Name file",
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
      description: "File color",
    },
    isRight: {
      options: [true, false],
      control: { type: "boolean" },
      defaultValue: false,
      description: "The file name goes to the right (true)",
    },
    isBoxed: {
      options: [true, false],
      control: { type: "boolean" },
      defaultValue: false,
      description: "It's in a box format (true)",
    },
    isFullwidth: {
      options: [true, false],
      control: { type: "boolean" },
      defaultValue: false,
      description: "Stay in full screen (true)",
    },
  },
} as ComponentMeta<typeof File>;

export const Examples: ComponentStory<typeof File> = (args) => (
  <File {...args} name="Warning file…" />
);

export const ExamplesNameFile: ComponentStory<typeof File> = (args) => (
  <File
    {...args}
    name="Warning file…"
    fileName={"Screen Shot 2017-07-29 at 15.54.25.png"}
  />
);
