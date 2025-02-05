import { Public_Sans, Barlow } from "next/font/google";
import { Alexandria } from "next/font/google";

// ----------------------------------------------------------------------

export const robotoFont = Alexandria({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontWeightSemiBold: React.CSSProperties["fontWeight"];
  }
}
export const primaryFont = Public_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Alexandria", "Helvetica", "Arial", "sans-serif"],
});

export const secondaryFont = Barlow({
  weight: ["900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Alexandria", "Helvetica", "Arial", "sans-serif"],
});

// ----------------------------------------------------------------------

// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts

export const typography = {
  fontFamily: "Alexandria, Arial, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: "Alexandria, Arial, sans-serif",
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(48),
    ...responsiveFontSizes({ sm: 48, md: 96, lg: 96 }),
  },
  h2: {
    fontFamily: "Alexandria, Arial, sans-serif",
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(34),
    ...responsiveFontSizes({ sm: 34, md: 60, lg: 60 }),
  },
  h3: {
    fontFamily: "Alexandria, Arial, sans-serif",
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 24, md: 40, lg: 40 }),
  },
  h4: {
    fontFamily: "Alexandria, Arial, sans-serif",
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 34, lg: 34 }),
  },
  h5: {
    fontFamily: "Alexandria, Arial, sans-serif",
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 24, lg: 24 }),
  },
  h6: {
    fontFamily: "Alexandria, Arial, sans-serif",
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 14, md: 20, lg: 20 }),
  },
  subtitle1: {
    fontFamily: "Alexandria, Arial, sans-serif",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontFamily: "Alexandria, Arial, sans-serif",
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontFamily: "Alexandria, Arial, sans-serif",
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    fontFamily: "Alexandria, Arial, sans-serif",
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    fontFamily: "Alexandria, Arial, sans-serif",
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontFamily: "Alexandria, Arial, sans-serif",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontFamily: "Alexandria, Arial, sans-serif",
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "unset",
  },
} as const;
