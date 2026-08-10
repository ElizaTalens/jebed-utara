import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import AnimateInView from "../AnimateInView/AnimateInView";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background Image */}
      <div className={styles.heroBg}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Pemandangan Desa Jebed Utara"
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={90}
        />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <AnimateInView direction="up" delay={0.1}>
          <h1 className={styles.title}>
            Selamat Datang di
            <br />
            Desa Jebed Utara
          </h1>
        </AnimateInView>
        <AnimateInView direction="up" delay={0.2}>
          <p className={styles.subtitle}>
            Desa yang tumbuh dengan semangat gotong royong, pelayanan publik yang terbuka, 
            serta pengembangan potensi pertanian, industri lokal, 
            dan UMKM untuk mewujudkan masyarakat yang mandiri dan sejahtera.
          </p>
        </AnimateInView>
        <AnimateInView direction="up" delay={0.3}>
          <div className={styles.heroButtons}>
            <Link href="/potensi" className={styles.btnPrimary}>
              Jelajahi Potensi
            </Link>
            <Link href="/layanan" className={styles.btnSecondary}>
              Layanan Masyarakat
            </Link>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
