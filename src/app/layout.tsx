import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desa Jebed Utara - Kabupaten Pemalang | Sistem Informasi Desa Terpadu",
  description:
    "Website resmi Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang, Jawa Tengah. Sistem Informasi Desa Terpadu untuk pelayanan masyarakat yang transparan, cepat, dan mudah.",
  keywords: [
    "Desa Jebed Utara",
    "Kabupaten Pemalang",
    "Kecamatan Taman",
    "Jawa Tengah",
    "Sistem Informasi Desa",
    "Pemerintah Desa",
  ],
  openGraph: {
    title: "Desa Jebed Utara - Kabupaten Pemalang",
    description:
      "Website resmi Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang. Mewujudkan desa yang mandiri, sejahtera, dan berbudaya.",
    type: "website",
    locale: "id_ID",
  },
};

import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

