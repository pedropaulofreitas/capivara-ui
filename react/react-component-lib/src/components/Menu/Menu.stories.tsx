import { ComponentMeta, ComponentStory } from "@storybook/react";

import Menu from "./index";

export default {
  title: "Menu",
  component: Menu,
  argTypes: {
    item: {
      description: `Item menu must contain an array of objects with name (string) and value (string)`,
    },
  },
} as ComponentMeta<typeof Menu>;

export const Examples: ComponentStory<typeof Menu> = (args) => (
  <Menu
    {...args}
    title="Estados"
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
