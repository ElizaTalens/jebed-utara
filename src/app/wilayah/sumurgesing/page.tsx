import Image from "next/image";
import styles from "./sumurgesing.module.css";

export const metadata = {
  title: "Dusun Sumurgesing - Desa Jebed Utara",
  description: "Informasi wilayah administrasi Dusun Sumurgesing, Desa Jebed Utara, Kecamatan Taman, Kabupaten Pemalang.",
};

const fasilitasData = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Pendidikan & TPQ",
    desc: "Terdapat PAUD Al Hikam 01, TPQ Al Hikmat, serta Majelis Taklim Al Maksum untuk pendidikan anak dan warga.",
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
    desc: "Memiliki 1 Masjid (Al Jainab), 3 Musholla (Nurul Salam, At Taqwa, Al Ikhlas), dan 1 Gereja Kristen Jawa (GKJ).",
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
    desc: "Berbatasan dengan Karang Talon (Selatan), Sungai Waluh (Timur), dan area Dusun Jebed (Utara & Barat).",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "UMKM & Pertanian",
    desc: "Usaha kuliner (Tongseng Bu Yatin, dsb), pengrajin batu bata, dan 1 Kelompok Tani lokal.",
  },
];

export default function DusunSumurgesing() {
  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Image
          src="/images/sejarah-desa.png"
          alt="Dusun Sumurgesing Desa Jebed Utara"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Dusun Sumurgesing</h1>
            <p className={styles.heroDesc}>
              Pemukiman padat penduduk yang dinamis dengan keragaman masyarakat, kehidupan sosial yang aktif, dan toleransi antarumat beragama yang harmonis.
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
                Dusun Sumurgesing merupakan pemukiman dengan jumlah penduduk mencapai kurang lebih <strong>1.700 jiwa (626 KK)</strong>. Wilayah administrasi ini terbagi menjadi 2 RW, yaitu <strong>RW 11</strong> (dipimpin Bpk. Kargo, menaungi RT 1 Bpk. Wahyono, RT 2 Bpk. Karyadi, dan RT 3 Bpk. Samuji) serta <strong>RW 12</strong> (dipimpin Bpk. Saruji, menaungi RT 1 Bpk. Tono dan RT 2 Bpk. Sarmuji). Masyarakat hidup rukun dalam keberagaman dengan mayoritas beragama Islam serta beberapa keluarga beragama Kristen (6 rumah dengan 10 KK).
              </p>
              <p>
                Perekonomian warga sangat beragam. Mayoritas penduduk, terutama usia 50 tahun ke atas, berprofesi sebagai buruh tani, pekerja bangunan (kuli proyek), dan beberapa sebagai buruh peternakan kambing. Terdapat juga banyak pensiunan PNS, sejumlah pedagang kuliner (nasi goreng, tongseng, bakso, sayur), serta kelompok warga muda lulusan SMA/SMK yang langsung terjun ke dunia kerja. Terdapat potensi lokal seperti UMKM Tongseng Bu Yatin dan pengrajin batu bata lokal, meski sektor pertanian sayur hanya ditekuni secara perseorangan.
              </p>
              <p>
                Kehidupan sosial dan keagamaan berjalan aktif dan toleran. Warga rutin mengadakan kegiatan Majelis Taklim Khusnul Khotimah (tahlil) secara bergiliran tiap malam Jumat. Event tahunan seperti sedekah anak yatim saat Ramadhan dan peringatan 9 Muharram selalu digelar oleh pihak masjid, melengkapi dinamika kegiatan sosial budaya serta semangat kelompok pemuda setempat.
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
                src="/images/kadus-sumurgesing.jpg"
                alt="Bapak Ilham"
                className={styles.kadusAvatar}
              />
            </div>
            <h3 className={styles.kadusName}>Bapak Ilham</h3>
            <span className={styles.kadusRole}>KEPALA DUSUN SUMURGESING</span>

            <div className={styles.kadusDivider} />

            <p className={styles.kadusQuote}>
              &ldquo;Assalamu&apos;alaikum warahmatullahi wabarakatuh. Selamat datang di situs Dusun Sumurgesing. Semoga kerukunan beragama dan gotong royong antar warga yang telah terjalin baik ini terus menjadi kekuatan kita membangun desa yang sejahtera dan harmonis.&rdquo;
            </p>

            <a
              href="https://wa.me/6285867856574"
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
