import type { Metadata, Viewport } from "next";
import { fontVariables } from "../fonts";
import { createSiteMetadata, siteViewport } from "../site-metadata";
import "../globals.css";

export const metadata: Metadata = createSiteMetadata("cs");
export const viewport: Viewport = siteViewport;

export default function CzechLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className={fontVariables}>{children}</body>
    </html>
  );
}
