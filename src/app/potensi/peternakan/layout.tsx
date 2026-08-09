import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peternakan Desa Jebed Utara - Kambing, Sapi, Ayam & Bebek",
  description:
    "Data peternakan Desa Jebed Utara, Kabupaten Pemalang. Pengembangan ternak kambing, sapi, ayam, dan bebek oleh warga desa.",
  alternates: {
    canonical: "/potensi/peternakan",
  },
  openGraph: {
    title: "Peternakan Desa Jebed Utara - Kabupaten Pemalang",
    description:
      "Potensi peternakan Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang.",
  },
};

export default function PeternakanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
