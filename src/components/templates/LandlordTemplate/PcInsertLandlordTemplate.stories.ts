import type { Meta, StoryObj } from "@storybook/react";

import PcInsertLandlordTemplate from "./PcInsertLandlordTemplate";

const meta: Meta<typeof PcInsertLandlordTemplate> = {
  title: "PC/templates/InsertLandlordTemplate",
  component: PcInsertLandlordTemplate,
};
export default meta;
type Story = StoryObj<typeof PcInsertLandlordTemplate>;

export const Primary: Story = {
  args: {},
};
