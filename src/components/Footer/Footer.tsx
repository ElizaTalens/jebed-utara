
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Column 1 - Desa Info */}
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Logo Desa Jebed Utara"
                width={60}
                height={60}
                className={styles.footerLogoImage}
              />
              <span className={styles.footerLogoText}>Desa Jebed Utara</span>
            </div>
            <p className={styles.footerDesc}>
              Melayani masyarakat dengan sepenuh hati, membangun desa yang maju
              dan sejahtera.
            </p>
          </div>

          {/* Column 2 - Info Kontak */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Info Kontak</h4>
            <Link href="mailto:info@jebedutara.desa.id" className={styles.footerLink}>
              <svg
                className={styles.footerLinkIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              info@jebedutara.desa.id
            </Link>
            <Link href="tel:+6281234561890" className={styles.footerLink}>
              <svg
                className={styles.footerLinkIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +62 812 3456 1890
            </Link>
          </div>

          {/* Column 3 - Tautan Cepat */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Tautan Cepat</h4>
            <Link href="/profil" className={styles.footerLink}>
              Tentang Desa
            </Link>
            <Link href="/layanan" className={styles.footerLink}>
              Layanan
            </Link>
            <Link href="/informasi" className={styles.footerLink}>
              Informasi
            </Link>
          </div>

          {/* Column 4 - Lokasi Kantor */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Lokasi Kantor</h4>
            <p className={styles.footerDesc}>
              Jl. Balai Desa No. 1, Jebed Utara, Kec. Taman, Kab. Pemalang,
              Jawa Tengah 52361
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>
            © 2024 Pemerintah Desa Jebed Utara. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
