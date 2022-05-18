import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dropdown from "components/Dropdown";

import Navbar from "./index";

export default {
  title: "Navbar",
  component: Navbar,
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
        "transparent",
        "black",
        "light",
        "white",
      ],
      control: { type: "select" },
      description: "Navbar color",
    },
    children: {
      description: "Component to place a logo, icon, image, etc...",
    },
    item: {
      description:
        "Item navbar must contain an array of objects with component (a text, dropdown, etc.) and isStart (boolean) that refers to whether the component will be left or right",
    },
  },
} as ComponentMeta<typeof Navbar>;

export const Examples: ComponentStory<typeof Navbar> = (args) => (
  <Navbar
    {...args}
    children={
      <img
        src="https://bulma.io/images/bulma-logo.png"
        width="112"
        height="28"
      />
    }
    item={[
      {
        component: (
          <Dropdown
            onChange={() => console.log("change")}
            placeholder="Estados"
            item={[
              {
                name: "Brasilia",
                value: "DF",
              },
              {
                name: "Rio de Janeiro",
                divider: true,
                value: "RJ",
              },
              {
                name: "Salvador",
                value: "BA",
              },
            ]}
          />
        ),
        isStart: true,
      },
      {
        component: (
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">Log in</a>
          </div>
        ),
        isStart: false,
      },
    ]}
  />
);
