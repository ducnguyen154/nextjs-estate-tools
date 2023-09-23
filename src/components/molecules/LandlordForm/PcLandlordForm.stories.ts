import type { Meta, StoryObj } from "@storybook/react";
import PcLandlordForm from "./PcLandlordForm";

const meta: Meta<typeof PcLandlordForm> = {
  title: "PC/molecules/LandlordForm",
  component: PcLandlordForm,
};
export default meta;
type Story = StoryObj<typeof PcLandlordForm>;

export const Primary: Story = {
  args: {
    data: {
      name: "Sample landlord name",
      mobile: "0909090909",
      email: "mail@gmail.com",
      notes: "",
    },
  },
};
