import { extendTheme } from "@chakra-ui/react";

var fonts = {
  heading: "Cubano, sans-serif",
  body: `'GT Walsheim Pro', sans-serif`,
  button: `'GT Walsheim Pro', sans-serif`,
};

var colors = {
  b: {
    primary: "#DF583B",
    text0: "#1C1F24",
    text1: "#1C1F2460",
    bg: "#FCFCFC",
    border: "#F5F5F5",
  },
};

export var chakraTheme = extendTheme({ fonts, colors });

export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}
