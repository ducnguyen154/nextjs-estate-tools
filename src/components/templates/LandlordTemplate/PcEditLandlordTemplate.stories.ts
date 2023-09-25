import type { Meta, StoryObj } from "@storybook/react";

import PcEditLandlordTemplate from "./PcEditLandlordTemplate";

const meta: Meta<typeof PcEditLandlordTemplate> = {
  title: "Pc/templates/EditLandlordTemplate",
  component: PcEditLandlordTemplate,
};

export default meta;

type Story = StoryObj<typeof PcEditLandlordTemplate>;
export const Primary: Story = {
  args: {
    id: 123,
    landlord: {
      name: "Landlord Name",
      mobile: "09090909xx",
      email: "main@mail.com",
      note: "",
    },
  },
};
