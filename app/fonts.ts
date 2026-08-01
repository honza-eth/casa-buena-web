import { Bodoni_Moda, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

export const displayFont = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export const utilityFont = IBM_Plex_Mono({
  variable: "--font-utility",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

export const fontVariables = `${displayFont.variable} ${bodyFont.variable} ${utilityFont.variable}`;
