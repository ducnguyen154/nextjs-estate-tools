import type { Meta, StoryObj } from "@storybook/react";
import PcLandlordFormTemplate from "./PcLandlordTemplate";

const meta: Meta<typeof PcLandlordFormTemplate> = {
  title: "PC/templates/LandlordFormTemplate",
  component: PcLandlordFormTemplate,
};
export default meta;
type Story = StoryObj<typeof PcLandlordFormTemplate>;

export const Primary: Story = {
  args: {},
};
