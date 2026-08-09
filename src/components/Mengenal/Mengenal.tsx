import styles from "./Mengenal.module.css";
import AnimateInView from "../AnimateInView/AnimateInView";

export default function Mengenal() {
  return (
    <section className={styles.mengenal} id="mengenal">
      <div className={styles.mengenalContainer}>
        {/* Section Header */}
        <AnimateInView direction="up" delay={0.1} className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Mengenal Jebed Utara</h2>
          <p className={styles.sectionSubtitle}>
            Desa di Kecamatan Taman, Kabupaten Pemalang, yang memiliki potensi
            pertanian, industri batu bata, usaha masyarakat, serta kekayaan
            sosial dan budaya yang terus dikembangkan.
          </p>
        </AnimateInView>

        {/* Visi & Misi Row */}
        <div className={styles.visiMisiRow}>
          {/* Visi & Misi Card */}
          <AnimateInView direction="up" delay={0.2} className={`${styles.card} ${styles.cardVisiMisi}`}>
            <div className={`${styles.cardIcon} ${styles.cardIconAccent}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Visi & Misi</h3>
            <p className={styles.cardDescription}>
              Mewujudkan &ldquo;Jebed Utara GEMEBYAR&rdquo; melalui pelayanan
              masyarakat yang prima, pembangunan infrastruktur dasar,
              peningkatan layanan kesehatan dan pendidikan, penguatan ekonomi
              desa melalui BUMDes, pertanian, peternakan, dan produk unggulan,
              serta peningkatan keamanan, kerukunan, kelembagaan, dan
              kreativitas masyarakat.
            </p>
          </AnimateInView>
        </div>

        {/* Stats & Map Grid */}
        <div className={styles.statsGrid}>
          {/* Total Penduduk Card */}
          <AnimateInView direction="up" delay={0.3} className={`${styles.card} ${styles.cardStat}`}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className={styles.statNumber}>3,245</span>
            <span className={styles.statLabel}>Total Penduduk</span>
          </AnimateInView>

          {/* Luas Wilayah Card */}
          <AnimateInView direction="up" delay={0.4} className={`${styles.card} ${styles.cardStat}`}>
            <div className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                <line x1="8" y1="2" x2="8" y2="18" />
                <line x1="16" y1="6" x2="16" y2="22" />
              </svg>
            </div>
            <span className={styles.statNumber}>184,610 Ha</span>
            <span className={styles.statLabel}>Luas Wilayah</span>
          </AnimateInView>

          {/* Kondisi Geografis Card */}
          <AnimateInView direction="up" delay={0.5} className={`${styles.card} ${styles.cardGeografis}`}>
            <div className={styles.geografisImage}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.8!2d109.4088262!3d-6.9240446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fdb713a607f49%3A0xe60d1e44cd7bb23c!2sNorth%20Jebed%2C%20Taman%2C%20Pemalang%20Regency%2C%20Central%20Java!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Desa Jebed Utara"
              />
            </div>
            <div className={styles.geografisContent}>
              <h3 className={styles.geografisTitle}>Kondisi Geografis</h3>
              <p className={styles.geografisDesc}>
                Peta Lokasi Desa Jebed Utara
              </p>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
