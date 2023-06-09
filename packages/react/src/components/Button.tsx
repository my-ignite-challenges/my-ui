import { ComponentProps, ElementType } from "react";

import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  padding: "0 $4",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray100",
  },

  variants: {
    variant: {
      default: {
        color: "$white",
        background: "$myui500",

        "&:not(:disabled):hover": {
          background: "$myui300",
        },

        "&:disabled": {
          background: "$gray200",
        },
      },
      outlined: {
        color: "$myui300",
        border: "2px solid $myui500",

        "&:not(:disabled):hover": {
          background: "$myui500",
          color: "$white",
        },

        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200",
        },
      },
      text: {
        color: "$gray100",

        "&:not(:disabled):hover": {
          color: "$white",
        },

        "&:disabled": {
          color: "$gray600",
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType;
};

Button.displayName = "Button";
