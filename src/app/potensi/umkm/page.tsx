"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./umkm.module.css";

const categories = ["Semua", "Kuliner", "Kerajinan", "Jasa"];
const wilayahOptions = ["Semua Wilayah", "Dusun Kebanyon", "Dusun Batan", "Dusun Jebed", "Dusun Karanganyar", "Dusun Watgalih Selatan", "Dusun Watgalih Utara", "Dusun Sumurgesing"];

const umkmData = [
  {
    image: "/images/umkm-nagasari.png",
    category: "KULINER",
    categoryColor: "#dc2626",
    dusun: "Dusun Kebanyon",
    name: "Jajanan Tradisional Nagasari",
  },
  {
    image: "/images/umkm-bambu.png",
    category: "KERAJINAN",
    categoryColor: "#16a34a",
    dusun: "Dusun Batan",
    name: "Kerajinan Bambu Kreatif",
  },
  {
    image: "/images/umkm-keripik.png",
    category: "KULINER",
    categoryColor: "#dc2626",
    dusun: "Dusun Jebed",
    name: "Olahan Keripik Pisang",
  },
  {
    image: "/images/umkm-konveksi.png",
    category: "JASA",
    categoryColor: "#2563eb",
    dusun: "Dusun Karanganyar",
    name: "Konveksi Rumahan",
  },
];

export default function UMKM() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedWilayah, setSelectedWilayah] = useState("Semua Wilayah");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUmkm = umkmData.filter((item) => {
    const matchCategory = activeCategory === "Semua" || item.category === activeCategory.toUpperCase();
    const matchWilayah = selectedWilayah === "Semua Wilayah" || item.dusun === selectedWilayah;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchWilayah && matchSearch;
  });

  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Image
          src="/images/potensi-umkm.png"
          alt="UMKM Lokal Desa Jebed Utara"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>UMKM Lokal Desa Jebed Utara</h1>
            <p className={styles.heroDesc}>
              Mendukung pertumbuhan ekonomi mandiri melalui pemberdayaan usaha mikro, kecil, dan menengah asli dari warga Dusun Kebanyon, Batan, Jebed, dan Karanganyar.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* Filter Bar */}
        <section className={styles.filterSection}>
          <div className={styles.filterLeft}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Kategori Usaha</span>
              <div className={styles.filterTabs}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`${styles.filterTab} ${activeCategory === cat ? styles.filterTabActive : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Wilayah Dusun</span>
              <div className={styles.selectWrapper}>
                <select
                  className={styles.select}
                  value={selectedWilayah}
                  onChange={(e) => setSelectedWilayah(e.target.value)}
                >
                  {wilayahOptions.map((w) => (
                    <option key={w} value={w}>{w}</option>
                  ))}
                </select>
                <svg className={styles.selectIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.searchBox}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input
              type="text"
              placeholder="Cari nama UMKM..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        {/* UMKM Grid */}
        <section className={styles.gridSection}>
          <div className={styles.umkmGrid}>
            {filteredUmkm.map((item, index) => (
              <div key={index} className={styles.umkmCard}>
                <div className={styles.umkmImageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={styles.umkmImage}
                  />
                  <span className={styles.umkmCategoryBadge} style={{ backgroundColor: item.categoryColor }}>
                    {item.category}
                  </span>
                </div>
                <div className={styles.umkmContent}>
                  <div className={styles.umkmLocation}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {item.dusun}
                  </div>
                  <h3 className={styles.umkmName}>{item.name}</h3>
                  <button className={styles.hubungiBtn}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.29-1.24l-.3-.18-3.12.82.83-3.04-.2-.31A8 8 0 1 1 12 20z" /></svg>
                    Hubungi
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredUmkm.length === 0 && (
            <div className={styles.emptyState}>
              <p>Tidak ada UMKM yang ditemukan dengan filter tersebut.</p>
            </div>
          )}

          {/* Load More Button */}
          <div className={styles.loadMoreWrapper}>
            <button className={styles.loadMoreBtn}>
              Lihat Lebih Banyak
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
