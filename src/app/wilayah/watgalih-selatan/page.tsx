import Image from "next/image";
import type { Metadata } from "next";
import styles from "./watgalih-selatan.module.css";

export const metadata: Metadata = {
  title: "Dusun Watgalih Selatan - Wilayah Desa Jebed Utara Kabupaten Pemalang",
  description: "Informasi wilayah administrasi Dusun Watgalih Selatan, Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang. Fasilitas, demografi, dan potensi dusun.",
  alternates: {
    canonical: "/wilayah/watgalih-selatan",
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
    desc: "Terdapat Posyandu Mekarsari 4 dan praktik bidan, namun belum ada sarana pendidikan formal.",
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
    desc: "Masyarakat Dusun Watgalih Selatan memiliki 1 fasilitas ibadah utama yaitu Mushola Al Ikhlas.",
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
    desc: "Berbatasan dengan Watgalih Utara (Utara), Dusun Jebed (Selatan), Silorug (Barat), dan Sungai Sirayak (Timur).",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "UMKM & Peternakan",
    desc: "Potensi ekonomi digerakkan melalui budidaya lele dan ayam petelur (KUB).",
  },
];

export default function DusunWatgalihSelatan() {
  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Image
          src="/images/sejarah-desa.png"
          alt="Dusun Watgalih Selatan Desa Jebed Utara"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Dusun Watgalih Selatan</h1>
            <p className={styles.heroDesc}>
              Wilayah dengan mayoritas penduduk lansia yang damai, dengan potensi wirausaha komunal yang terus berkembang.
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
                Dusun Watgalih Selatan dihuni oleh sekitar <strong>1.800 jiwa (600 KK)</strong>. Komposisi penduduknya unik dengan dominasi perempuan dan kelompok usia mayoritas lansia. Secara administratif, dusun ini memiliki 6 RT yang terbagi dalam 2 RW. <strong>RW 08</strong> dipimpin oleh Bapak Suwarno (menaungi RT 01 Surahman, RT 02 Suriatanto, RT 03 T. Suwardi), sedangkan <strong>RW 09</strong> dipimpin oleh Bpk. Hadi Santoso (menaungi RT 01 Suharto, RT 02 Wariyani, RT 03 Fandi).
              </p>
              <p>
                Dari segi pendidikan, mayoritas warga adalah lulusan SMA/SMK. Untuk mata pencaharian, penduduknya banyak yang berprofesi sebagai karyawan swasta dan petani. Menariknya, potensi ekonomi justru kuat di sektor peternakan yang dikelola secara komunal (KUB), seperti budidaya lele dan peternakan ayam petelur, sedangkan pertanian murni belum menjadi potensi unggulan.
              </p>
              <p>
                Meski belum memiliki fasilitas pendidikan formal sendiri dan Karang Taruna yang aktif, pelayanan dasar warga tetap terjamin berkat adanya Posyandu Mekarsari 4, praktik bidan, dan 1 bangunan ibadah sentral yakni Mushola Al Ikhlas.
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
                src="/images/kadus-watgalih-selatan.jpg"
                alt="Bapak Didit Sastomo"
                className={styles.kadusAvatar}
              />
            </div>
            <h3 className={styles.kadusName}>Bapak Didit Sastomo</h3>
            <span className={styles.kadusRole}>KEPALA DUSUN WATGALIH SELATAN</span>

            <div className={styles.kadusDivider} />

            <p className={styles.kadusQuote}>
              &ldquo;Assalamu&apos;alaikum warahmatullahi wabarakatuh. Selamat datang di website pengabdian masyarakat ini. Semoga kehadiran website ini bermanfaat sebagai media informasi dan inspirasi program KKN. Mari kita terus perkuat gotong royong, menjaga kebersihan, serta meningkatkan kewaspadaan demi lingkungan yang aman, harmonis, dan sejahtera. Terima kasih atas dukungan seluruh pihak. Wassalamu&apos;alaikum warahmatullahi wabarakatuh.&rdquo;
            </p>

            <a
              href="https://wa.me/6282313668464"
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
