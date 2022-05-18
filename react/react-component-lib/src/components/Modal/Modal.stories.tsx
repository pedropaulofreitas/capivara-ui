import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "components/Button";
import { useState } from "react";

import Modal from "./index";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      defaultValue: "Title",
    },
    close: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const ModalExample: React.FC<any> = ({ args }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button
        color="info"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        {...args}
        onClose={() => setOpenModal(false)}
        active={openModal}
        children={
          <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque risus mi, tempus quis placerat ut, porta nec
            nulla.Nullam gravida purus diam, et dictum felis venenatis
            efficitur. Aenean ac eleifend lacus, in mollis lectus."
          </span>
        }
        button={
          <>
            <Button color="success">Like</Button>
            <Button>Share</Button>
          </>
        }
      />
    </>
  );
};
export const Examples: ComponentStory<typeof Modal> = (args) => (
  <ModalExample args={args} />
);
