import Image from "next/image";
import Link from "next/link";
import styles from "./potensi.module.css";
import AnimateInView from "@/components/AnimateInView/AnimateInView";

export const metadata = {
  title: "Potensi Desa - Desa Jebed Utara",
  description: "Temukan kekayaan sumber daya alam, warisan pertanian, dan UMKM lokal yang mendorong pertumbuhan komunitas kami.",
};

export default function Potensi() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header Section */}
        <section className={styles.header}>
          <AnimateInView direction="up">
            <h1 className={styles.title}>Potensi Desa Jebed Utara</h1>
            <p className={styles.subtitle}>
              Temukan kekayaan sumber daya alam, warisan pertanian, dan UMKM lokal yang mendorong pertumbuhan komunitas kami.
            </p>
          </AnimateInView>
        </section>

        {/* UMKM Section */}
        <section className={styles.section}>
          <AnimateInView direction="up" delay={0.1} className={styles.heroCard}>
            <Image 
              src="/images/potensi-umkm.png"
              alt="UMKM Lokal Desa Jebed Utara"
              fill
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}>
              <h2 className={styles.heroTitle}>Jelajahi UMKM Lokal Desa Jebed Utara</h2>
              <p className={styles.heroDesc}>
                Dukung ekonomi mandiri warga dengan menjelajahi berbagai produk unggulan mulai dari kuliner tradisional hingga kerajinan tangan khas desa.
              </p>
              <Link href="/potensi/umkm" className={styles.btnPrimary}>
                Lihat Semua UMKM &rarr;
              </Link>
            </div>
          </AnimateInView>
        </section>

        {/* Pertanian & Peternakan Section */}
        <section className={styles.section}>
          <AnimateInView direction="up" delay={0.2} className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Pertanian & Peternakan</h2>
            <p className={styles.sectionSubtitle}>
              Tulang punggung ekonomi desa kami, ditandai dengan praktik berkelanjutan dan hasil panen yang melimpah.
            </p>
          </AnimateInView>

          <div className={styles.gridContainer}>
            {/* Pertanian Card */}
            <AnimateInView direction="up" delay={0.3} className={styles.gridCard}>
              <Image 
                src="/images/potensi-pertanian.png"
                alt="Pertanian Desa"
                fill
                className={styles.gridImage}
              />
              <div className={styles.gridOverlay}>
                <h3 className={styles.gridTitle}>Pertanian</h3>
                <p className={styles.gridDesc}>
                  Hasil pertanian utama Desa Jebed Utara, memanfaatkan irigasi canggih untuk panen padi yang melimpah sepanjang tahun.
                </p>
                <Link href="/potensi/pertanian" className={styles.btnSecondary}>
                  Jelajahi &rarr;
                </Link>
              </div>
            </AnimateInView>

            {/* Peternakan Card */}
            <AnimateInView direction="up" delay={0.4} className={styles.gridCard}>
              <Image 
                src="/images/potensi-peternakan.png"
                alt="Peternakan Desa"
                fill
                className={styles.gridImage}
              />
              <div className={styles.gridOverlay}>
                <h3 className={styles.gridTitle}>Peternakan</h3>
                <p className={styles.gridDesc}>
                  Pengembangan peternakan kambing dan unggas yang dikelola secara modern untuk melengkapi pendapatan warga desa.
                </p>
                <Link href="/potensi/peternakan" className={styles.btnSecondary}>
                  Jelajahi &rarr;
                </Link>
              </div>
            </AnimateInView>
          </div>
        </section>
      </div>
    </main>
  );
}
