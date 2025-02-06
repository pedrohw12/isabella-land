import "@fontsource/alexandria"; // Import Alexandria globally
import type { Metadata } from "next";
import { primaryFont } from "@/theme/typography";
import ThemeProvider from "../theme/index";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "IsabellaMentora",
  description: "Encontre o real sentido da vida",
  keywords:
    "landing page,landing, page, website, mentoria, espiritual, mentoria espiritual,template",
  // manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
