import { ComponentMeta, ComponentStory } from "@storybook/react";

import Addons from "./index";
import Button from "../Button";
import Tag from "../Tag";
import Icon from "../Icon";

export default {
  title: "Addons",
  component: Addons,
  argTypes: {
    items: {
      description:
        "This should be an array of Buttons or Tags(there is no type checking though).",
    },
  },
} as ComponentMeta<typeof Addons>;

export const Examples: ComponentStory<typeof Addons> = (args) => (
  <>
    <Addons
      {...args}
      items={[
        <Button size="small">Left</Button>,
        <Button size="small">Center</Button>,
        <Button size="small">Right</Button>,
      ]}
    />
  </>
);

export const ExampleWithTags: ComponentStory<typeof Addons> = (args) => (
  <>
    <Addons
      {...args}
      items={[
        <Tag size="small" color="dark">
          npm
        </Tag>,
        <Tag size="small" color="primary">
          0.1.1
        </Tag>,
      ]}
    />
  </>
);

export const ExampleWithIcons: ComponentStory<typeof Addons> = (args) => (
  <>
    <Addons
      {...args}
      items={[
        <Button>
          <Icon name="delete" />
        </Button>,
        <Button>
          <Icon name="delete" />
        </Button>,
      ]}
    />
  </>
);
