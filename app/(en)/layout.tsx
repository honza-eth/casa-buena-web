import type { Metadata, Viewport } from "next";
import { fontVariables } from "../fonts";
import { createSiteMetadata, siteViewport } from "../site-metadata";
import "../globals.css";

export const metadata: Metadata = createSiteMetadata("en");
export const viewport: Viewport = siteViewport;

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={fontVariables}>{children}</body>
    </html>
  );
}
