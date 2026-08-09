import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita Desa Jebed Utara",
  description:
    "Baca berita dan informasi terkini dari Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang, Jawa Tengah.",
  openGraph: {
    title: "Berita Desa Jebed Utara - Kabupaten Pemalang",
    description:
      "Berita dan informasi terbaru dari Desa Jebed Utara.",
  },
};

export default function BeritaDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
