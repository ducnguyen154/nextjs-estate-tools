import { Meta, StoryObj } from "@storybook/react";

import PcLandlordList from "./PcLandlordList";

const meta: Meta<typeof PcLandlordList> = {
  title: "PC/molecules/LandlordList",
  component: PcLandlordList,
};

export default meta;
type Story = StoryObj<typeof PcLandlordList>;

export const Primary: Story = {
  args: {
    landlords: [
      {
        id: 1,
        name: "Landlord 1",
        mobile: "12345xx",
        email: "mail@mail.com",
        notes: "",
      },
    ],
  },
};
