import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "components/Icon";

import Breadcrumb from "./index";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    item: {
      description: `Item breacrumb must contain an array of objects with active (boolean), name (string)
      and an component icon if you want`,
    },
    iconSeparator: {
      control: {
        type: "select",
        options: ["arrow", "dot", "bullet", "succeeds"],
      },
    },
    alignment: {
      control: {
        type: "select",
        options: ["centered", "right"],
      },
    },
  },
} as ComponentMeta<typeof Breadcrumb>;

export const Examples: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb
    {...args}
    item={[
      {
        active: true,
        name: "Home",
      },
      {
        active: true,
        name: "My account",
      },
      {
        active: false,
        name: "My account",
      },
    ]}
  />
);

export const ExampleWithIcon: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb
    {...args}
    item={[
      {
        active: false,
        name: "Home",
        icon: <Icon name="delete" size="small" />,
      },
      {
        active: true,
        name: "My account",
        icon: <Icon name="delete" size="small" />,
      },
    ]}
  ></Breadcrumb>
);
