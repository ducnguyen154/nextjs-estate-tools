import type { Meta, StoryObj } from "@storybook/react";

import FormText from "./FormText";

const meta: Meta<typeof FormText> = {
  title: "Atoms/FormText",
  component: FormText,
};

export default meta;
type Story = StoryObj<typeof FormText>;

export const Primary: Story = {
  args: {
    defaultValue: "sometimes",
    placeholder: "Sample placeholder",
    onChange(event) {
      console.log(event.target.value);
    },
  },
};
