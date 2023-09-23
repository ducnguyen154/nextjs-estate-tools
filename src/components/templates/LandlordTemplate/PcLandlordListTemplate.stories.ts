import { Meta, StoryObj } from "@storybook/react";

import PcLandlordListTemplate from "./PcLandlordListTemplate";

const meta: Meta<typeof PcLandlordListTemplate> = {
  title: "Pc/templates/LandlordListTemplate",
  component: PcLandlordListTemplate,
};
export default meta;

type Story = StoryObj<typeof PcLandlordListTemplate>;

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
