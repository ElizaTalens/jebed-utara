import Image from "next/image";
import styles from "./profil.module.css";
import AnimateInView from "@/components/AnimateInView/AnimateInView";

export const metadata = {
  title: "Profil Desa - Desa Jebed Utara",
  description: "Mengenal lebih dekat Desa Jebed Utara, sejarah, visi, misi, dan struktur pemerintahan yang melayani masyarakat.",
};

export default function ProfilPage() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <section className={styles.header}>
        <AnimateInView direction="up" className={styles.container}>
          <h1 className={styles.title}>Profil Desa</h1>
          <p className={styles.subtitle}>
            Mengenal lebih dekat Desa Jebed Utara, sejarah, visi, misi, dan struktur pemerintahan yang melayani masyarakat.
          </p>
        </AnimateInView>
      </section>

      {/* Sejarah Desa */}
      <section className={styles.section}>
        <AnimateInView direction="up" className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Sejarah Desa</h2>
          </div>
          <div className={styles.sejarahGrid}>
            <div className={styles.sejarahText}>
              <p>
                Penamaan Desa Jebed Utara (sebelumnya bernama Jebed) memiliki akar sejarah yang kuat, dipercaya sudah ada sejak zaman Kerajaan Mataram dan terus dilestarikan hingga masa penjajahan Belanda. Menurut para sesepuh desa, nama &quot;Jebed&quot; sendiri konon merupakan akronim dari <strong>&quot;Kerjone Ubad-Ubed&quot;</strong>, yang memiliki arti bekerja tak kenal lelah untuk menyelesaikan pekerjaan secepatnya.
              </p>
              <p>
                Istilah ini muncul karena mayoritas penduduk awal desa adalah pendatang dari wilayah timur (Pekalongan) yang bekerja sebagai buruh di Pabrik Gula Banjardawa pada masa kejayaannya sekitar tahun 1901. Sebagai buruh pabrik, mereka dituntut untuk selalu bekerja keras dan cepat demi menghasilkan yang terbaik.
              </p>
              <p>
                Adapun penambahan kata &quot;Utara&quot; terjadi karena pemekaran wilayah menjadi dua desa berdasarkan Keputusan Gubernur Jawa Tengah Tahun 1996. Desa ini dibagi menjadi Jebed Utara sebagai desa induk (seluas 184,6 Ha) dan Jebed Selatan sebagai desa pecahan. Hingga kini, Desa Jebed Utara secara administratif resmi diakui sebagai bagian dari tata pemerintahan Kabupaten Pemalang.
              </p>
            </div>
            <div className={styles.sejarahImageWrapper}>
              <Image
                src="/images/sejarah-desa.png"
                alt="Pemandangan Desa Jebed Utara"
                width={800}
                height={500}
                className={styles.sejarahImage}
              />
            </div>
          </div>
        </AnimateInView>
      </section>

      {/* Visi & Misi */}
      <section className={styles.section}>
        <AnimateInView direction="up" className={styles.container}>
          <div className={styles.visiMisiGrid}>
            {/* Visi */}
            <div className={styles.visiBox}>
              <div className={styles.visiHeader}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <h3>Visi</h3>
              </div>
              <p className={styles.visiText}>
                &ldquo;Mewujudkan &apos;Jebed Utara GEMEBYAR&apos; melalui pelayanan masyarakat yang prima, pembangunan infrastruktur dasar, peningkatan layanan kesehatan dan pendidikan, penguatan ekonomi desa melalui BUMDes, pertanian, peternakan, dan produk unggulan, serta peningkatan keamanan, kerukunan, kelembagaan, dan kreativitas masyarakat.&rdquo;
              </p>
            </div>

            {/* Misi */}
            <div className={styles.misiBox}>
              <div className={styles.misiHeader}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.iconDark}>
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
                <h3>Misi</h3>
              </div>
              <ul className={styles.misiList}>
                <li><span>01</span> Memberikan pelayanan masyarakat yang prima.</li>
                <li><span>02</span> Meningkatkan infrastruktur dasar, pelayanan kesehatan, dan pendidikan.</li>
                <li><span>03</span> Mengembangkan ekonomi desa melalui BUMDes, kelompok usaha, pertanian, peternakan, serta produk unggulan desa.</li>
                <li><span>04</span> Meningkatkan kapasitas kelembagaan desa.</li>
                <li><span>05</span> Menjaga keamanan, ketertiban, dan kerukunan hidup beragama.</li>
                <li><span>06</span> Mengembangkan sarana olahraga dan memberikan ruang kreativitas bagi masyarakat.</li>
              </ul>
            </div>
          </div>
        </AnimateInView>
      </section>

      {/* Kondisi Geografis */}
      <section className={styles.section}>
        <AnimateInView direction="up" className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Kondisi Geografis</h2>
          </div>
          <div className={styles.geografisGrid}>
            <div className={styles.geoMapBox}>
              <Image
                src="/images/geografis-map.png"
                alt="Peta Desa Jebed Utara"
                width={800}
                height={500}
                className={styles.geoMapImage}
              />
              <div className={styles.mapBadge}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Balai Desa Jebed Utara</span>
              </div>
            </div>

            <div className={styles.geoStatsWrapper}>
              {/* Topografi & Batas Wilayah */}
              <div className={styles.geoStatCard}>
                <div className={styles.geoStatHeader}>
                  <h4>Topografi & Batas Wilayah</h4>
                </div>
                <p style={{ marginBottom: '12px' }}>
                  Desa Jebed Utara merupakan daerah <strong>dataran rendah</strong> dengan curah hujan <strong>35 mm/tahun</strong>.
                </p>
              </div>

              {/* Jarak Pusat Pemerintahan (Orbitasi) */}
              <div className={styles.geoStatCard}>
                <div className={styles.geoStatHeader}>
                  <h4>Jarak Pusat Pemerintahan</h4>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.85rem' }}>
                  <div><strong>Kecamatan:</strong> 1 Km</div>
                  <div><strong>Kabupaten:</strong> 5 Km</div>
                  <div><strong>Provinsi:</strong> 129 Km</div>
                  <div><strong>Negara:</strong> 350 Km</div>
                </div>
              </div>

              {/* Grid Luas & Ketinggian */}
              <div className={styles.geoStatsBottomGrid}>
                <div className={styles.geoStatSmallCard}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span className={styles.geoStatLabel}>Luas Wilayah</span>
                  <span className={styles.geoStatValue}>184,61 Ha</span>
                </div>

                <div className={styles.geoStatSmallCard}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                  </svg>
                  <span className={styles.geoStatLabel}>Ketinggian</span>
                  <span className={styles.geoStatValue}>16 m dpl</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateInView>
      </section>

      {/* Struktur Organisasi */}
      <section className={`${styles.section} ${styles.sectionOrg}`}>
        <AnimateInView direction="up" className={styles.container}>
          <div className={styles.orgHeader}>
            <h2>Struktur Organisasi</h2>
            <p>Susunan aparatur pemerintahan Desa Jebed Utara yang berdedikasi melayani masyarakat.</p>
          </div>

          <div className={styles.orgChartContainer} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Image 
              src="/images/struktur-organisasi.png" 
              alt="Struktur Organisasi Desa Jebed Utara" 
              width={1000} 
              height={600} 
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
        </AnimateInView>
      </section>
    </main>
  );
}
