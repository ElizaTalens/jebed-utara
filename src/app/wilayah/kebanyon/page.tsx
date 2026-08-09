import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./kebanyon.module.css";

export const metadata: Metadata = {
  title: "Dusun Kebanyon - Wilayah Desa Jebed Utara Kabupaten Pemalang",
  description: "Informasi wilayah administrasi Dusun Kebanyon, Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang. Fasilitas, demografi, dan potensi dusun.",
  alternates: {
    canonical: "/wilayah/kebanyon",
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
    title: "TPQ & Pengajian",
    desc: "Dua kelompok TPQ dan pengajian anak-anak & remaja yang sering berkolaborasi.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M19 21v-8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8" />
        <path d="M12 3v8" />
      </svg>
    ),
    title: "2 Musholla",
    desc: "Sarana ibadah harian warga, kegiatan masjid dilaksanakan bersama Dusun Jambon.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Posyandu & Posbindu",
    desc: "Pelayanan kesehatan rutin 2x dalam sebulan dengan sistem rujukan puskesmas.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "UMKM & Peternakan",
    desc: "Rajutan tenun, keripik pisang, penggemukan lele, peternakan kambing, kerbau & itik.",
  },
];

export default function DusunKebanyon() {
  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Image
          src="/images/sejarah-desa.png"
          alt="Dusun Kebanyon Desa Jebed Utara"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Dusun Kebanyon</h1>
            <p className={styles.heroDesc}>
              Jantung agraris Desa Jebed Utara yang menawarkan kedamaian, kesuburan tanah, dan kekayaan budaya lokal yang terjaga lestari.
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
                Dusun Kebanyon merupakan pemukiman yang asri di wilayah Desa Jebed Utara berpenduduk sekitar <strong>500 jiwa (160 KK)</strong>. Wilayah administrasi ini terbagi menjadi <strong>3 RT</strong> (diketuai oleh Bpk. Mushori, Bpk. Maryono, dan Bpk. Sugiyanto) serta <strong>RW 1</strong> yang dipimpin oleh Bpk. Mukhlas.
              </p>
              <p>
                Mayoritas mata pencaharian warga adalah buruh tani dan pekerja serabutan. Dari segi pendidikan, rata-rata warga berpendidikan tingkat SMA. Kehidupan keagamaan dan kemasyarakatan sangat aktif melalui dua kelompok TPQ &amp; pengajian, dua musholla (dengan kegiatan masjid gabungan bersama Dusun Jambon), serta pelayanan kesehatan rutin Posyandu &amp; Posbindu dua kali sebulan.
              </p>
              <p>
                Perekonomian dusun ditopang oleh sektor UMKM produktif seperti usaha kerajinan rajutan &amp; tenun oleh Ibu Weni, produksi olahan keripik pisang dan rengginang, usaha kuliner kaki lima, budidaya penggemukan lele, serta sektor peternakan (kambing, kerbau, dan itik skala kecil). Budaya gotong royong terwujud erat melalui majelis taklim, kelompok tani, arisan PKK, kesenian gambus/hadroh, hingga tradisi tahunan ngaji bersama dan nyekar.
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
            <h2 className={styles.sectionTitle}>Fasilitas Dusun</h2>
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
                src="/images/kadus-kebanyon.jpg"
                alt="Bapak Dul Manan"
                className={styles.kadusAvatar}
              />
            </div>
            <h3 className={styles.kadusName}>Bapak Dul Manan</h3>
            <span className={styles.kadusRole}>KEPALA DUSUN KEBANYON</span>

            <div className={styles.kadusDivider} />

            <p className={styles.kadusQuote}>
              &ldquo;Assalamu&apos;alaikum warahmatullahi wabarakatuh. Selamat datang di situs resmi Dusun kami. Semoga informasi ini mempererat silaturahmi, memudahkan akses layanan, dan mendukung pemberdayaan bersama untuk kesejahteraan warga; mari bekerja sama menjaga tradisi, memajukan usaha lokal, dan membangun lingkungan yang harmonis.&rdquo;
            </p>

            <a
              href="https://wa.me/6285211705028"
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
