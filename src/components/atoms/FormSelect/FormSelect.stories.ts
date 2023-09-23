import type { Meta, StoryObj } from "@storybook/react";

import FormSelect from "./FormSelect";

const meta: Meta<typeof FormSelect> = {
  title: "atoms/FormSelect",
  component: FormSelect,
};

export default meta;
type Story = StoryObj<typeof FormSelect>;

export const Primary: Story = {
  args: {
    options: [
      {
        value: 2,
        text: "select",
      },
      {
        value: 1,
        text: "string 1",
      },
    ],
    isBlankFirst: false,
    defaultValue: 2,
    onChange(event) {
      console.log(event.target.value);
    },
  },
};
