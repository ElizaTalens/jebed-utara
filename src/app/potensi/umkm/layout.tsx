import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UMKM Desa Jebed Utara - Produk Lokal & Usaha Masyarakat",
  description:
    "Daftar UMKM dan produk unggulan Desa Jebed Utara, Kabupaten Pemalang. Kuliner tradisional, kerajinan tangan, dan jasa dari warga desa.",
  alternates: {
    canonical: "/potensi/umkm",
  },
  openGraph: {
    title: "UMKM Desa Jebed Utara - Kabupaten Pemalang",
    description:
      "Produk UMKM lokal dan usaha masyarakat Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang.",
  },
};

export default function UmkmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
