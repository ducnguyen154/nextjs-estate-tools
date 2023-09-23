import type { Meta, StoryObj } from "@storybook/react";

import PcPropertyBookingTemplate from "./PcPropertyBookingTemplate";

const meta: Meta<typeof PcPropertyBookingTemplate> = {
  title: "PC/templates/PropertyBookingTemplate",
  component: PcPropertyBookingTemplate,
};
export default meta;

type Story = StoryObj<typeof PcPropertyBookingTemplate>;
export const Primary: Story = {
  args: {
    properties: [
      { value: 1, text: "Sample property 1" },
      { value: 2, text: "Sample property 2" },
      { value: 3, text: "Sample property 3" },
      { value: 4, text: "Sample property 4" },
    ],
    users: [
      { value: 1, text: "Sample user 1" },
      { value: 2, text: "Sample user 2" },
      { value: 3, text: "Sample user 3" },
      { value: 4, text: "Sample user 4" },
    ],
  },
};
