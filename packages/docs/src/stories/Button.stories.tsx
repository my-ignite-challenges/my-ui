import type { StoryObj, Meta } from "@storybook/react";
import { ArrowRight } from "phosphor-react";

import { Button, ButtonProps } from "@my-ui/react";

export default {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Send",
    variant: "default",
    size: "md",
    disabled: false,
  } as Meta<ButtonProps>,
  argTypes: {
    variant: {
      options: ["default", "outlined", "text"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
    },
  },
};

export const Default: StoryObj<ButtonProps> = {};

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: "outlined",
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
