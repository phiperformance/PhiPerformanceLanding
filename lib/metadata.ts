import { Metadata } from "next";
import { SITE_URL } from "./constants";

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? `${SITE_URL}/og-image.jpg`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Φ Performance Marketing",
      images: [{ url: image, width: 1200, height: 630 }],
      locale: "es_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
