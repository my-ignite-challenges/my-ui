import type { StoryObj, Meta } from "@storybook/react";
import { ArrowRight } from "phosphor-react";

import { Button, ButtonProps } from "@my-ui/react";

export default {
  title: "Data display/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Send",
  } as Meta<ButtonProps>,
};

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Preview",
  },
};

export const Text: StoryObj<ButtonProps> = {
  args: {
    variant: "text",
    children: "Cancel",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
