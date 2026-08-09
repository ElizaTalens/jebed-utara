import Image from "next/image";
import type { Metadata } from "next";
import styles from "./watgalih-utara.module.css";

export const metadata: Metadata = {
  title: "Dusun Watgalih Utara - Wilayah Desa Jebed Utara Kabupaten Pemalang",
  description: "Informasi wilayah administrasi Dusun Watgalih Utara, Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang. Fasilitas, demografi, dan potensi dusun.",
  alternates: {
    canonical: "/wilayah/watgalih-utara",
  },
};

const fasilitasData = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Sarana Pendidikan",
    desc: "Terdapat TPQ Al Hidayat, pengajian TPQ perorangan, serta Madrasah milik Ustaz Arif sebagai sarana pendidikan keagamaan warga.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M19 21v-8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8" />
        <path d="M12 3v8" />
      </svg>
    ),
    title: "Tempat Ibadah",
    desc: "Memiliki Masjid Dua Kalimat Syahadat serta 4 Musholla: Baiturrahman, Baiturrahim, As Sholihin, dan Baitussalam.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4c0-1.1.9-2 2-2" />
        <path d="M20 2c1.1 0 2 .9 2 2" />
        <path d="M22 8c0 1.1-.9 2-2 2" />
        <path d="M16 10c-1.1 0-2-.9-2-2" />
        <path d="M2 14c0-1.1.9-2 2-2" />
        <path d="M8 12c1.1 0 2 .9 2 2" />
        <path d="M10 18c0 1.1-.9 2-2 2" />
        <path d="M4 20c-1.1 0-2-.9-2-2" />
      </svg>
    ),
    title: "Layanan Kesehatan & Sosial",
    desc: "Tersedia layanan Posyandu/Posbindu, pemeriksaan ibu hamil, serta cek kolesterol bergilir tiap 6 bulan sekali. Terdapat juga lembaga Rukun Kematian.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "UMKM & Peternakan",
    desc: "Memiliki sentra UMKM rengginang serta peternakan lele yang menjadi potensi ekonomi unggulan dusun.",
  },
];

export default function DusunWatgalihUtara() {
  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Image
          src="/images/sejarah-desa.png"
          alt="Dusun Watgalih Utara Desa Jebed Utara"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Dusun Watgalih Utara</h1>
            <p className={styles.heroDesc}>
              Wilayah dengan potensi peternakan lele dan UMKM rengginang, kehidupan keagamaan yang erat, serta kesenian pencak silat Perguruan Melati Putih.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* Section 1: Gambaran Dusun */}
        <section className={styles.section}>
          <div className={styles.cardBox}>
            <div className={styles.sectionHeader}>
              <div className={styles.iconCircle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className={styles.sectionTitle}>Gambaran Dusun</h2>
            </div>

            <div className={styles.gambaranText}>
              <p>
                Dusun Watgalih Utara dipimpin oleh para ketua RW dan RT di bawah koordinasi Ketua <strong>RW 06 Bpk. Riyadi</strong> (menaungi RT 01 Bpk. Sehudin, RT 02 Bpk. Sutarjo, RT 03 Ibu Kastini) dan Ketua <strong>RW 07 Bpk. Taryono</strong> (menaungi RT 01 Bpk. Suhari, RT 02 Bpk. Roipi, RT 03 Bpk. Casyadi, RT 04 Bpk. Sugiyono). Dusun ini terdiri dari <strong>9 RT</strong> dengan jumlah penduduk sekitar <strong>2.000 jiwa</strong> atau kurang lebih <strong>500 KK</strong>.
              </p>
              <p>
                Mayoritas warga berusia 40–50 tahun dengan tingkat pendidikan terakhir SMP dan SMA, serta sebagian kecil mengenyam pendidikan tinggi. Mata pencaharian utama masyarakat adalah petani dan pedagang. Potensi ekonomi dusun terlihat dari UMKM rengginang dan peternakan lele yang mendominasi, didukung oleh Kelompok Tani yang diketuai oleh Bpk. Taryono.
              </p>
              <p>
                Kehidupan sosial-keagamaan di Dusun Watgalih Utara berjalan sangat aktif. Pengajian rutin digelar setiap hari Sabtu, Selasa, dan Rabu. Kesenian daerah tetap dilestarikan melalui Pencak Silat Perguruan Melati Putih. Kelembagaan masyarakat juga didukung oleh adanya Rukun Kematian yang memperkuat solidaritas antarwarga.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Fasilitas Dusun */}
        <section className={styles.section}>
          <div className={styles.sectionHeaderNoCard}>
            <div className={styles.iconCircle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h2 className={styles.sectionTitle}>Fasilitas & Potensi Dusun</h2>
          </div>

          <div className={styles.fasilitasGrid}>
            {fasilitasData.map((item, index) => (
              <div key={index} className={styles.fasilitasCard}>
                <div className={styles.fasilitasIconBox}>
                  {item.icon}
                </div>
                <h3 className={styles.fasilitasTitle}>{item.title}</h3>
                <p className={styles.fasilitasDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Profil Kepala Dusun */}
        <section className={styles.sectionKadus}>
          <div className={styles.kadusCard}>
            <div className={styles.kadusAvatarWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/kadus-watgalih-utara.jpg"
                alt="Bapak Sudoko"
                className={styles.kadusAvatar}
              />
            </div>
            <h3 className={styles.kadusName}>Bapak Sudoko</h3>
            <span className={styles.kadusRole}>KEPALA DUSUN WATGALIH UTARA</span>

            <div className={styles.kadusDivider} />

            <p className={styles.kadusQuote}>
              &ldquo;Assalamualaikum warahmatullahi wabarakatuh. Selamat datang di website resmi Desa Jebed Utara. Melalui halaman ini, kami ingin memperkenalkan Dusun Watgalih Utara sebagai dusun yang memiliki masyarakat rukun, beragam potensi, serta kegiatan sosial dan keagamaan yang aktif. Semoga website ini menjadi media informasi untuk mengenal lebih dekat profil dan potensi Dusun Watgalih Utara. Wassalamualaikum warahmatullahi wabarakatuh.&rdquo;
            </p>

            <a
              href="https://wa.me/6285325114900"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.hubungiKadusBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Hubungi Kadus
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
