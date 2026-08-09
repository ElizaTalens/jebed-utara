"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./pertanian.module.css";

const dusunList = ["Semua Dusun", "Dusun Kebanyon", "Dusun Jebed", "Dusun Batan", "Dusun Karanganyar"];
const jenisList = ["Semua Komoditas", "Padi", "Jagung", "Sayuran", "Buah"];

const pertanianData = [
  {
    id: 1,
    image: "/images/potensi-pertanian.png",
    isUnggulan: true,
    dusun: "Dusun Jebed",
    jenis: "Padi",
    title: "Pertanian Padi Sawah Irigasi - Dusun Jebed",
    tags: ["Padi IR-64", "Irigasi Teknis"],
    tagBg: ["#ecfdf5", "#f1f5f9"],
    tagColor: ["#059669", "#475569"],
  },
  {
    id: 2,
    image: "/images/berita-kerjabakti.png",
    isUnggulan: false,
    dusun: "Dusun Batan",
    jenis: "Jagung",
    title: "Budidaya Jagung & Palawija - Dusun Batan",
    tags: ["Jagung Hibrida", "Panen Melimpah"],
    tagBg: ["#fef3c7", "#f1f5f9"],
    tagColor: ["#b45309", "#475569"],
  },
  {
    id: 3,
    image: "/images/berita-utama.png",
    isUnggulan: false,
    dusun: "Dusun Kebanyon",
    jenis: "Sayuran",
    title: "Pertanian Hortikultura Sayur - Dusun Kebanyon",
    tags: ["Sayuran Organik", "Pasar Lokal"],
    tagBg: ["#ecfdf5", "#eff6ff"],
    tagColor: ["#15803d", "#1d4ed8"],
  },
  {
    id: 4,
    image: "/images/sejarah-desa.png",
    isUnggulan: false,
    dusun: "Dusun Karanganyar",
    jenis: "Buah",
    title: "Perkebunan Buah-buahan - Dusun Karanganyar",
    tags: ["Buah Segar", "Kelompok Tani"],
    tagBg: ["#fff7ed", "#f1f5f9"],
    tagColor: ["#c2410c", "#475569"],
  },
];

export default function PotensiPertanian() {
  const [selectedDusun, setSelectedDusun] = useState("Semua Dusun");
  const [selectedJenis, setSelectedJenis] = useState("Semua Komoditas");

  const filteredData = pertanianData.filter((item) => {
    const matchDusun = selectedDusun === "Semua Dusun" || item.dusun === selectedDusun;
    const matchJenis = selectedJenis === "Semua Komoditas" || item.jenis === selectedJenis;
    return matchDusun && matchJenis;
  });

  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Image
          src="/images/potensi-pertanian.png"
          alt="Potensi Pertanian Desa Jebed Utara"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Potensi Pertanian Desa Jebed Utara</h1>
            <p className={styles.heroDesc}>
              Pertanian merupakan tulang punggung ekonomi Desa Jebed Utara. Lahan persawahan hijau dan tanah yang subur didukung sistem irigasi berkelanjutan menghasilkan panen padi, palawija, dan hortikultura berkualitas tinggi.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.container} id="daftar-pertanian">
        {/* Filter Bar */}
        <section className={styles.filterSection}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Filter Wilayah Dusun</span>
            <div className={styles.filterTabs}>
              {dusunList.map((dusun) => (
                <button
                  key={dusun}
                  className={`${styles.filterTab} ${selectedDusun === dusun ? styles.filterTabActive : ""}`}
                  onClick={() => setSelectedDusun(dusun)}
                >
                  {dusun}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>JENIS KOMODITAS</span>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={selectedJenis}
                onChange={(e) => setSelectedJenis(e.target.value)}
              >
                {jenisList.map((j) => (
                  <option key={j} value={j}>{j}</option>
                ))}
              </select>
              <svg className={styles.selectIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </section>

        {/* Cards Grid */}
        <section className={styles.gridSection}>
          <div className={styles.cardsGrid}>
            {filteredData.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.cardImage}
                  />
                  {item.isUnggulan && (
                    <span className={styles.badgeUnggulan}>UNGGULAN</span>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.locationTag}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {item.dusun}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <div className={styles.tagsRow}>
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={styles.tagPill}
                        style={{ backgroundColor: item.tagBg[idx], color: item.tagColor[idx] }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className={styles.emptyState}>
              <p>Tidak ada data pertanian yang sesuai dengan filter yang dipilih.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
