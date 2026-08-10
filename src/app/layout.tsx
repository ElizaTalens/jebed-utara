import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jebed-utara.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Desa Jebed Utara - Kabupaten Pemalang | Website Resmi Desa",
    template: "%s | Desa Jebed Utara - Kabupaten Pemalang",
  },
  description:
    "Website resmi Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang, Jawa Tengah. Informasi pelayanan masyarakat, potensi desa, berita, agenda, dan profil pemerintahan desa.",
  keywords: [
    "Desa Jebed Utara",
    "Jebed Utara",
    "Jebed Utara Pemalang",
    "Desa Jebed Utara Pemalang",
    "Desa Jebed Utara Kabupaten Pemalang",
    "Kabupaten Pemalang",
    "Kecamatan Taman",
    "Jawa Tengah",
    "Sistem Informasi Desa",
    "Pemerintah Desa",
    "Website Desa",
    "Desa Jebed Utara Kecamatan Taman",
  ],
  authors: [{ name: "Pemerintah Desa Jebed Utara" }],
  creator: "Pemerintah Desa Jebed Utara",
  publisher: "Pemerintah Desa Jebed Utara, Kabupaten Pemalang",
  openGraph: {
    title: "Desa Jebed Utara - Kabupaten Pemalang | Website Resmi Desa",
    description:
      "Website resmi Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang. Mewujudkan desa yang mandiri, sejahtera, dan berbudaya.",
    url: siteUrl,
    siteName: "Desa Jebed Utara",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Pemandangan Desa Jebed Utara, Kabupaten Pemalang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desa Jebed Utara - Kabupaten Pemalang | Website Resmi Desa",
    description:
      "Website resmi Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang, Jawa Tengah.",
    images: ["/images/hero-bg.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "L4WkqNyunkVTxeqTziOegdycX2BYWxEITTZFoDkUgSM",
  },
  icons: {
    icon: "/images/pemalang-logo.svg",
    apple: "/images/pemalang-logo.svg",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GovernmentOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Pemerintah Desa Jebed Utara",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/pemalang-logo.svg`,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jebed Utara",
        addressRegion: "Jawa Tengah",
        addressCountry: "ID",
        streetAddress: "Desa Jebed Utara, Kecamatan Taman",
        postalCode: "52361",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Desa Jebed Utara",
      description:
        "Website resmi Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang, Jawa Tengah.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "id-ID",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
