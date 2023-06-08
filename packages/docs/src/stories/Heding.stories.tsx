import type { StoryObj, Meta } from "@storybook/react";

import { Heading, HeadingProps } from "@my-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    children: "Lorem, ipsum.",
  } as Meta<HeadingProps>,
};

export const Primary: StoryObj<HeadingProps> = {};
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The heading component will always be an `h2` tag by default. If you want it to use another tag, define it as a value of the prop `as`.",
      },
    },
  },
};
