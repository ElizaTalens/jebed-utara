import Image from "next/image";
import type { Metadata } from "next";
import styles from "./jebed.module.css";

export const metadata: Metadata = {
  title: "Dusun Jebed - Wilayah Desa Jebed Utara Kabupaten Pemalang",
  description: "Informasi wilayah administrasi Dusun Jebed, Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang. Fasilitas, demografi, dan potensi dusun.",
  alternates: {
    canonical: "/wilayah/jebed",
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
    title: "Pendidikan",
    desc: "Tersedia TK Pertiwi, SD Negeri (1, 2, 3, 5), serta 2 unit Taman Pendidikan Al-Qur'an (TPQ) untuk pendidikan anak dan warga.",
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
    desc: "Memiliki 1 Masjid (Baitul Amin) dan 5 Musholla yang menjadi pusat kegiatan keagamaan dan sosial masyarakat dusun.",
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
    title: "Kesehatan & Batas Wilayah",
    desc: "Terdapat layanan Posyandu. Wilayah seluas ±13 hektar berbatasan dengan Watgalih Utara (utara), Sungai Dusun Batan (barat), persawahan (selatan), dan Kali Waluh (timur).",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "UMKM & Ekonomi Lokal",
    desc: "Memiliki UMKM keripik tempe, keripik pisang, gendar, serta olahan jirem yang dikelola warga seperti Bu Retno dan Bu Herni.",
  },
];

export default function DusunJebed() {
  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Image
          src="/images/sejarah-desa.png"
          alt="Dusun Jebed Desa Jebed Utara"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Dusun Jebed</h1>
            <p className={styles.heroDesc}>
              Pusat pemerintahan Desa Jebed Utara dengan masyarakat produktif, UMKM kreatif, dan kehidupan sosial-keagamaan yang kuat.
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
                Dusun Jebed merupakan pusat pemerintahan Desa Jebed Utara yang dipimpin oleh Kepala Dusun <strong>Bapak  Kulup Subekhi</strong>, dengan dukungan BPD Tati Sugiarti dan Muhammad Syarif Iskandaro. Wilayah administrasi dusun ini terdiri atas <strong>3 RW</strong> dan <strong>9 RT</strong>, dengan total populasi penduduk mencapai sekitar <strong>2.000 jiwa (518 KK)</strong>. Mayoritas penduduk merupakan usia produktif.
              </p>
              <p>
                Secara geografis, Dusun Jebed membentang seluas kurang lebih 13 hektar. Batas wilayahnya meliputi Dusun Watgalih Utara dan Desa Banjaran di sebelah utara, Sungai yang berbatasan dengan Dusun Batan di sebelah barat, area persawahan di sebelah selatan, serta Kali Waluh di sebelah timur.
              </p>
              <p>
                Mata pencaharian utama masyarakat Dusun Jebed meliputi buruh tani, buruh bangunan, wiraswasta, dan PNS. Kehidupan sosial-keagamaan sangat aktif melalui wadah Karang Taruna, Majelis Taklim, serta Rukun Kematian Adi Pralaya. Tradisi lokal yang masih dilestarikan antara lain Tradisi Suro dan Sedekah Bumi. Secara rutin, dusun juga menggelar agenda tahunan seperti Rembug K3 dan peringatan HUT RI yang selalu melibatkan seluruh elemen masyarakat.
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
                src="/images/kadus-jebed.jpg"
                alt="Bapak Kulup Subekhi"
                className={styles.kadusAvatar}
              />
            </div>
            <h3 className={styles.kadusName}>Bapak Kulup Subekhi</h3>
            <span className={styles.kadusRole}>KEPALA DUSUN JEBED</span>

            <div className={styles.kadusDivider} />

            <p className={styles.kadusQuote}>
              &ldquo;Assalamu&apos;alaikum Warahmatullahi Wabarakatuh. Selamat datang di Dusun Jebed, Desa Jebed Utara. Dusun kami membentang seluas ±13 hektar dengan 3 RW dan 9 RT, dihuni sekitar 2.000 jiwa yang aktif mengembangkan UMKM lokal serta menjaga keguyuban melalui Karang Taruna, Majelis Taklim, dan tradisi Sedekah Bumi. Semoga kerja sama ini memberikan manfaat nyata bagi kemajuan Dusun Jebed. Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh.&rdquo;
            </p>


          </div>
        </section>
      </div>
    </main>
  );
}
