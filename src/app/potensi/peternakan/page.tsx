"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./peternakan.module.css";

const dusunList = ["Semua Dusun", "Dusun Kebanyon", "Dusun Jebed", "Dusun Batan", "Dusun Karanganyar"];
const jenisList = ["Semua Jenis", "Kambing", "Sapi", "Ayam", "Bebek"];

const peternakanData = [
  {
    id: 1,
    image: "/images/ternak-kambing.png",
    isUnggulan: true,
    dusun: "Dusun Batan",
    jenis: "Kambing",
    title: "Peternakan Kambing - Dusun Batan",
    tags: ["Kambing Peranakan Etawa", "Pakan Organik"],
    tagBg: ["#f1f5f9", "#ecfdf5"],
    tagColor: ["#475569", "#059669"],
  },
  {
    id: 2,
    image: "/images/ternak-sapi.png",
    isUnggulan: false,
    dusun: "Dusun Kebanyon",
    jenis: "Sapi",
    title: "Peternakan Sapi - Dusun Kebanyon",
    tags: ["Sapi Potong", "Kandang Komunal"],
    tagBg: ["#f1f5f9", "#fff7ed"],
    tagColor: ["#475569", "#ea580c"],
  },
  {
    id: 3,
    image: "/images/ternak-ayam.png",
    isUnggulan: false,
    dusun: "Dusun Jebed",
    jenis: "Ayam",
    title: "Peternakan Ayam Petelur - Dusun Jebed",
    tags: ["Telur Ayam Segar", "Suplai Harian"],
    tagBg: ["#fff7ed", "#ecfdf5"],
    tagColor: ["#c2410c", "#15803d"],
  },
  {
    id: 4,
    image: "/images/potensi-peternakan.png",
    isUnggulan: false,
    dusun: "Dusun Karanganyar",
    jenis: "Bebek",
    title: "Peternakan Bebek - Dusun Karanganyar",
    tags: ["Bebek & Telur Asin", "Produksi Terpadu"],
    tagBg: ["#f1f5f9", "#fef3c7"],
    tagColor: ["#475569", "#b45309"],
  },
];

export default function PotensiPeternakan() {
  const [selectedDusun, setSelectedDusun] = useState("Semua Dusun");
  const [selectedJenis, setSelectedJenis] = useState("Semua Jenis");

  const filteredData = peternakanData.filter((item) => {
    const matchDusun = selectedDusun === "Semua Dusun" || item.dusun === selectedDusun;
    const matchJenis = selectedJenis === "Semua Jenis" || item.jenis === selectedJenis;
    return matchDusun && matchJenis;
  });

  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <Image
          src="/images/potensi-peternakan.png"
          alt="Potensi Peternakan Desa Jebed Utara"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Potensi Peternakan Desa Jebed Utara</h1>
            <p className={styles.heroDesc}>
              Desa Jebed Utara memiliki beragam potensi peternakan yang tersebar di beberapa dusun, mulai dari peternakan kambing, sapi, ayam, hingga jenis ternak lainnya. Setiap dusun memiliki karakteristik dan komoditas unggulan yang berbeda.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.container} id="daftar-peternakan">
        {/* Filter Bar */}
        <section className={styles.filterSection}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>FILTER WILAYAH DUSUN</span>
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
            <span className={styles.filterLabel}>JENIS TERNAK</span>
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
              <p>Tidak ada data peternakan yang sesuai dengan filter yang dipilih.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
