import { bootstrap } from "@theme-ui/presets";

// $primary: #e85d45;

// $dark: #1b1b1b;
// $dark-2: #353535;
// $text-1: #0e0e16;
// $muted: #808080;
// $gray: #878787;
// $light: #fff;
// $light-2: #f1f1f1;
// $secondary: #e9ecef;

export const theme = {
  // ...bootstrap,
  ...bootstrap,
  colors: {
    text: "#0e0e16",
    background: "#fff",
    base: ["#e85d45", "#564FCC"], //"#564FCC", //"#11e",
    primary: "#e43f23",
    white: "#fff",
    secondary: "#c4c4c4",
    highlight: "#F7E8DB",
    muted: "#808080",
    error: "#f65",
    black: "#333",
    green: "#004150",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#e85d45",
        secondary: "#353535",
        highlight: "#f0c",
        muted: "#111",
      },
    },
  },
  fonts: {
    body: '"Popins", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  buttons: {
    ...bootstrap.button,
    primary: {
      padding: "0.6rem 3.125rem",
      borderRadius: "3.125rem",
    },
    secondary: {
      bg: "secondary",

      color: "text",
    },
  },
};
