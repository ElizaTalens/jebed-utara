import Image from "next/image";
import type { Metadata } from "next";
import styles from "./batan.module.css";

export const metadata: Metadata = {
  title: "Dusun Batan - Wilayah Desa Jebed Utara Kabupaten Pemalang",
  description: "Informasi wilayah administrasi Dusun Batan, Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang. Fasilitas, demografi, dan potensi dusun.",
  alternates: {
    canonical: "/wilayah/batan",
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
    title: "Pendidikan & Kesehatan",
    desc: "Pendidikan berpusat di luar dusun. Terdapat Posyandu Mekarsari 2 yang rutin pada tanggal 4 setiap bulan.",
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
    desc: "Memiliki 2 fasilitas ibadah utama yaitu Masjid Istiqomah dan Masjid Rabbal Al-Amin.",
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
    title: "Batas Wilayah",
    desc: "Berbatasan dengan SMP 1 Taman (Utara), Dusun Cibelok (Barat), dan Area Persawahan & Pemakaman (Selatan).",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "UMKM & Ekonomi Lokal",
    desc: "Produksi aneka keripik (tempe, pisang, kacang), pengrajin batik tulis, dan budidaya lele.",
  },
];

export default function DusunBatan() {
  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Image
          src="/images/sejarah-desa.png"
          alt="Dusun Batan Desa Jebed Utara"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Dusun Batan</h1>
            <p className={styles.heroDesc}>
              Wilayah dengan keragaman aktivitas ekonomi kreatif, sosial, budaya, dan semangat warga yang menjunjung kebersamaan dan tradisi.
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
                Dusun Batan adalah pemukiman produktif dengan populasi kurang lebih <strong>1.800 jiwa (500 KK)</strong>, yang secara komposisi usia terbilang merata namun didominasi oleh remaja serta perempuan. Wilayah administrasi ini mencakup 2 RW dan 7 RT, di mana <strong>RW 04</strong> dipimpin Bpk. Tarmidi (menaungi RT 01 Bpk. Selamet Sasnadi, RT 02 Bpk. Surono, RT 03 Bpk. Kusnandar) dan <strong>RW 05</strong> dipimpin Bpk. Hj. Agung Aji Prabowo (menaungi RT 01 Ibu Kusmaeni, RT 02 Bpk. Rohman, RT 03 Bpk. Warsono, RT 04 Bpk. Wijotinarko).
              </p>
              <p>
                Mata pencaharian warga sangat didominasi oleh sektor wiraswasta dan buruh. Semangat kewirausahaan terlihat jelas dari beragamnya aktivitas UMKM seperti produksi keripik tempe, pisang, keripik kacang (Ibu Wastiah), hingga pengrajin batik tulis. Tak hanya itu, sektor peternakan pun turut ditekuni melalui budidaya ikan lele, salah satunya yang dikelola langsung oleh Bpk. Tarmidi.
              </p>
              <p>
                Kehidupan sosial warga pun terjalin amat erat. Terdapat kegiatan rutin Majelis Taklim (Baitul Makmur, Istiqomah, Rabbal), kegiatan PKK tiap tanggal 30, serta tradisi keagamaan seperti tahlilan 7 harian dan malam tirakatan. Seni budaya lokal juga masih hidup lewat kesenian Sintren dan Qasidah. Dusun Batan juga senantiasa kompak dalam menyambut momen besar, misalnya lewat musyawarah, jalan sehat, dan berbagai event keramaian dalam menyambut HUT Kemerdekaan RI.
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
                src="/images/kadus-batan.jpg"
                alt="Bapak Sadiman (Pak Diman)"
                className={styles.kadusAvatar}
              />
            </div>
            <h3 className={styles.kadusName}>Bapak Sadiman</h3>
            <span className={styles.kadusRole}>KEPALA DUSUN BATAN</span>

            <div className={styles.kadusDivider} />

            <p className={styles.kadusQuote}>
              &ldquo;Assalamu&apos;alaikum Wr. Wb. Alhamdulillah kita senantiasa diberikan nikmat sehat. Kami ucapkan terima kasih kepada mahasiswa KKN UNDIP yang telah membantu mengaktifkan kembali website ini. Warga Dusun Batan adalah masyarakat yang beragam, kreatif, dan semangat menggali potensi ekonomi lokal. Semoga website ini mampu menyajikan informasi yang bermanfaat mengenai dusun kami. Terima kasih.&rdquo;
            </p>

            <a
              href="https://wa.me/6281328808761"
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
