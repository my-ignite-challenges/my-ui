import type { StoryObj, Meta } from "@storybook/react";

import { Box, Text, Checkbox, CheckboxProps } from "@my-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {} as Meta<CheckboxProps>,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta;

export const Default: StoryObj<CheckboxProps> = {};
