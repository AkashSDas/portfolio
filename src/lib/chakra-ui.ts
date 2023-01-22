import { extendTheme } from "@chakra-ui/react";
import localFont from "@next/font/local";

var fonts = {
  heading: "Cubano, sans-serif",
  body: `'GT Walsheim Pro', sans-serif`,
  button: `'GT Walsheim Pro', sans-serif`,
};

export const cubano = localFont({
  src: "../../public/fonts/cubano.ttf",
  variable: "--font-cubano",
});

export const gtWalsheimPro = localFont({
  src: [
    {
      path: "../../public/fonts/GTWalsheimPro/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GTWalsheimPro/medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GTWalsheimPro/bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gtwalsheimpro",
});

var colors = {
  b: {
    primary: "#DF583B",
    text0: "#1C1F24",
    text1: "#1d2025",
    bg: "#FCFCFC",
    border: "#F5F5F5",
  },
};

var Button = {
  variants: {
    solid: {
      bg: "b.primary",
      color: "b.bg",
      fontFamily: "body",
      fontWeight: "normal",
      rounded: "full",
      h: pxToRem(40),
      px: pxToRem(24),
      _hover: { bg: "#D65538" },
      _active: { bg: "#CC5136" },
    },
    ghost: {
      color: "b.text0",
      fontFamily: "body",
      fontWeight: "normal",
      rounded: "full",
      h: pxToRem(40),
      px: pxToRem(24),
      _hover: { bg: "#F5F5F5" },
      _active: { bg: "#E5E5E5" },
    },
  },
};

export var chakraTheme = extendTheme({ fonts, colors, components: { Button } });

export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}
