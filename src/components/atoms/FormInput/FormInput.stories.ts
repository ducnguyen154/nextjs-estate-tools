import type { Meta, StoryObj } from "@storybook/react";

import FormInput from "./FormInput";

const meta: Meta<typeof FormInput> = {
  title: "atoms/FormInput",
  component: FormInput,
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Primary: Story = {
  args: {
    defaultValue: "sample text",
    onChange(event) {
      console.log(event.target.value);
    },
  },
};
