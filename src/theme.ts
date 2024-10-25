import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  palette: {
    colors: {
      backgrounds: {
        aquaDark: "rgba(108, 122, 137,0.2)",
        aquaLight: "rgba(239, 239, 240,1)",
        purple: "rgba(213, 218, 255, 1)",
      },
      texts: {
        black: "rgba(0, 0, 0, 1)",
        white: "rgba(255,255,255,1)",
      },
    },
  },
  spaces: {
    xl2: "100px",
    xl: "50px",
    l: "25px",
    m: "16px",
    s: "8px",
    xs: "4px",
  },
  fonts: {
    sizes: {
      titleLarge: "65px",
      title: "50px",
      titleMobile: "32px",
      subtitle: "24px",
      subtitleMobile: "18px",
      text: "16px",
      textLarge: "20px",
      textMobile: "12px",
    },
  },
  breakPoints: {
    small: "max-width: 700px",
    smallNumber: 700,
  },
};
