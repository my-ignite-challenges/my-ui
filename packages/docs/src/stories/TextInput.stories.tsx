import type { StoryObj, Meta } from "@storybook/react";

import { Box, Text, TextInput, TextInputProps } from "@my-ui/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {} as Meta<TextInputProps>,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta;

export const Default: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "call.com/",
    placeholder: "your-username",
  },
};
