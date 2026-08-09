import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informasi Desa - Agenda, Galeri & Produk Hukum",
  description:
    "Pusat informasi Desa Jebed Utara, Kabupaten Pemalang. Jadwal agenda desa, galeri dokumentasi kegiatan, dan produk hukum desa.",
  alternates: {
    canonical: "/informasi",
  },
  openGraph: {
    title: "Informasi Desa Jebed Utara - Agenda, Galeri & Produk Hukum",
    description:
      "Agenda kegiatan, galeri foto, dan dokumen produk hukum Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang.",
  },
};

export default function InformasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
