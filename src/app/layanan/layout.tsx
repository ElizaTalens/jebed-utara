import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Desa & Berita Terkini - Desa Jebed Utara",
  description:
    "Layanan administrasi desa, pengaduan masyarakat, dan berita terkini dari Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang, Jawa Tengah.",
  alternates: {
    canonical: "/layanan",
  },
  openGraph: {
    title: "Layanan Desa & Berita - Desa Jebed Utara Kabupaten Pemalang",
    description:
      "Informasi layanan administrasi, pengaduan masyarakat, dan berita terbaru dari Desa Jebed Utara.",
  },
};

export default function LayananLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
