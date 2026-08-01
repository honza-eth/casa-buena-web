import type { Metadata, Viewport } from "next";

const metadataBase = new URL("https://casabuena.cz");

const metadataByLanguage = {
  en: {
    title: "Casa Buena | European Vehicle Import Coordination",
    description:
      "European-side coordination for China-origin vehicle imports from an agreed EU port to the Czech handover route.",
    canonical: "/",
    locale: "en_GB",
    imageAlt: "Casa Buena — European vehicle import coordination",
  },
  cs: {
    title: "Casa Buena | Koordinace dovozu vozidel v Evropě",
    description:
      "Koordinace evropské části dovozu vozidel z Číny od dohodnutého přístavu po cestu k předání v Česku.",
    canonical: "/cs",
    locale: "cs_CZ",
    imageAlt: "Casa Buena — koordinace dovozu vozidel v Evropě",
  },
} as const;

export const siteViewport: Viewport = {
  colorScheme: "light",
  themeColor: "#11110f",
  width: "device-width",
  initialScale: 1,
};

export function createSiteMetadata(language: keyof typeof metadataByLanguage): Metadata {
  const current = metadataByLanguage[language];

  return {
    metadataBase,
    title: current.title,
    description: current.description,
    alternates: {
      canonical: current.canonical,
      languages: {
        en: "/",
        cs: "/cs",
        "x-default": "/",
      },
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      url: current.canonical,
      siteName: "Casa Buena",
      title: current.title,
      description: current.description,
      locale: current.locale,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: current.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: current.title,
      description: current.description,
      images: ["/og.png"],
    },
  };
}
