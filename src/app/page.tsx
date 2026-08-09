import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import Sambutan from "@/components/Sambutan/Sambutan";
import Mengenal from "@/components/Mengenal/Mengenal";

export const metadata: Metadata = {
  title: "Beranda - Website Resmi Desa Jebed Utara Kabupaten Pemalang",
  description:
    "Selamat datang di website resmi Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang, Jawa Tengah. Informasi layanan publik, potensi desa, berita, agenda, dan profil pemerintahan.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Sambutan />
      <Mengenal />
    </main>
  );
}
