import type { StoryObj, Meta } from "@storybook/react";

import { Box, MultiStep, MultiStepProps } from "@my-ui/react";

export default {
  title: "Form/MultiStep",
  component: MultiStep,
  args: {
    length: 4,
    currentStep: 1,
  } as Meta<MultiStepProps>,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta;

export const Default: StoryObj<MultiStepProps> = {
  args: {},
};

export const Complete: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
