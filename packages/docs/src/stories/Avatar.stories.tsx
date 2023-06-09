import type { StoryObj, Meta } from "@storybook/react";

import { Avatar, AvatarProps } from "@my-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://i.pravatar.cc",
    alt: "",
  } as Meta<AvatarProps>,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
};

export const Default: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
