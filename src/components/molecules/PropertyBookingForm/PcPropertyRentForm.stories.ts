import type { Meta, StoryObj } from "@storybook/react";

import PcPropertyRentForm from "./PcPropertyRentForm";

const meta: Meta<typeof PcPropertyRentForm> = {
  title: "PC/molecules/PropertyBookingForm",
  component: PcPropertyRentForm,
};

export default meta;
type Story = StoryObj<typeof PcPropertyRentForm>;

export const Primary: Story = {
  args: {
    properties: [
      { value: 1, text: "Property 1" },
      { value: 2, text: "Property 2" },
      { value: 3, text: "Property 3" },
      { value: 4, text: "Property 4" },
    ],
    users: [
      { value: 1, text: "User 1" },
      { value: 2, text: "User 2" },
      { value: 3, text: "User 3" },
      { value: 4, text: "User 4" },
    ],
    data: {
      startDate: "2023-03-03",
      endDate: "2023-03-05",
      price: 5000000,
      description: "",
      userId: "1",
      propertyId: "2",
    },
  },
};
