import type { StoryObj, Meta } from "@storybook/react";

import { Box, Text, TextArea, TextAreaProps } from "@my-ui/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {} as Meta<TextAreaProps>,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Description</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Type the description here...",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
