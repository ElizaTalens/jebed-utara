import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pertanian Desa Jebed Utara - Hasil Panen & Komoditas Unggulan",
  description:
    "Data pertanian Desa Jebed Utara, Kabupaten Pemalang. Komoditas padi, jagung, sayuran, dan buah-buahan yang dihasilkan oleh petani desa.",
  alternates: {
    canonical: "/potensi/pertanian",
  },
  openGraph: {
    title: "Pertanian Desa Jebed Utara - Kabupaten Pemalang",
    description:
      "Potensi pertanian dan komoditas unggulan Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang.",
  },
};

export default function PertanianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
