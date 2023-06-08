import type { StoryObj, Meta } from "@storybook/react";

import { Box, BoxProps, Text } from "@my-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing the Box component</Text>
      </>
    ),
  } as Meta<BoxProps>,
};

export const Primary: StoryObj<BoxProps> = {};
