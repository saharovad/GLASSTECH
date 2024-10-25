import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      colors: {
        backgrounds: {
          aquaLight: string;
          aquaDark: string;
          purple: string;
        };
        texts: {
          black: string;
          white: string;
        };
      };
    };
    spaces: {
      xl2: string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    fonts: {
      sizes: {
        titleLarge: string;
        title: string;
        titleMobile: string;
        subtitle: string;
        subtitleMobile: string;
        text: string;
        textLarge: string;
        textMobile: string;
      };
    };
    breakPoints: {
      small: string;
      smallNumber: number;
    };
  }
}
