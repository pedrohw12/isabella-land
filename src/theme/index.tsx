"use client";

import merge from "lodash/merge";
import { useMemo } from "react";
// @mui
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from "@mui/material/styles";
// system
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography"; // Import the updated typography config
import { customShadows } from "./custom-shadows";
import { componentsOverrides } from "./overrides";
//
import NextAppDirEmotionCacheProvider from "./next-emotion-cache";

// Import Roboto font
import "@fontsource/roboto";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const baseOption = useMemo(
    () => ({
      palette: palette("light"),
      shadows: shadows("light"),
      customShadows: customShadows("light"),
      typography, // Include the updated typography here
      shape: { borderRadius: 8 },
    }),
    []
  );

  const memoizedValue = useMemo(() => merge(baseOption), [baseOption]);

  const theme = createTheme(memoizedValue as ThemeOptions);

  theme.components = merge(componentsOverrides(theme));

  const themeWithLocale = useMemo(() => createTheme(theme), []);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
      <MuiThemeProvider theme={themeWithLocale}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
