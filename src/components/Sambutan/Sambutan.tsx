import Image from "next/image";
import styles from "./Sambutan.module.css";
import AnimateInView from "../AnimateInView/AnimateInView";

export default function Sambutan() {
  return (
    <section className={styles.sambutan} id="sambutan">
      <div className={styles.sambutanContainer}>
        {/* Image */}
        <AnimateInView direction="right" delay={0.1} className={styles.imageWrapper}>
          <Image
            src="/images/kepala-desa-baru.jpg"
            alt="Kepala Desa Jebed Utara"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </AnimateInView>

        {/* Content */}
        <AnimateInView direction="left" delay={0.2} className={styles.textContent}>
          <span className={styles.label}>Sambutan Kepala Desa</span>
          <h2 className={styles.heading}>Bersama Mewujudkan Jebed Utara GEMEBYAR</h2>
          
          <p className={styles.paragraph}>
            Assalamu&apos;alaikum warahmatullahi wabarakatuh. Saya Setia Pambudi, Kepala Desa Jebed Utara, mengucapkan banyak terima kasih kepada seluruh masyarakat Jebed Utara atas partisipasi aktifnya dalam semua proses perencanaan dan pelaksanaan pembangunan di desa.
          </p>
          <p className={styles.paragraph}>
            Semoga sifat kegotongroyongan dan partisipasi aktif masyarakat Desa Jebed Utara bisa menjadikan Desa Jebed Utara lebih Gemebyar, Jebed Utara lebih baik, sesuai dengan visi kami yaitu Jebed Utara Gemebyar.
          </p>
          <p className={styles.paragraph}>
            Sekali lagi terima kasih dan permohonan maaf kami apabila dalam melaksanakan pelayanan kami selama ini ada kekurangan, semata-mata memang kekurangan dan kelemahan kami. Mudah-mudahan itikad baik kami dalam membangun Desa Jebed Utara menjadi lebih baik ini bisa terwujud menuju kesejahteraan masyarakat Jebed Utara.
          </p>
          <p className={styles.paragraph}>
            Terima kasih, wabillahi taufik wal hidayah, wassalamu&apos;alaikum warahmatullahi wabarakatuh.
          </p>
          <div className={styles.signature}>
            <p className={styles.signatureName}>Setia Pambudi</p>
            <p className={styles.signatureRole}>Kepala Desa Jebed Utara</p>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
