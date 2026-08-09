"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import AnimateInView from "@/components/AnimateInView/AnimateInView";
import styles from "./informasi.module.css";

interface Agenda {
  id: string;
  judul: string;
  tanggal: string;
  waktu: string;
  kategori: string;
}

interface Galeri {
  id: string;
  judul: string;
  gambar_url: string;
  kategori: string;
}

interface ProdukHukum {
  id: string;
  nama_dokumen: string;
  jenis: string;
  tahun: number;
  file_url: string;
}

const filterTabs = ["Semua", "Kegiatan", "Infrastruktur", "Budaya", "Lainnya"];

function getCategoryColor(category: string) {
  switch (category?.toLowerCase()) {
    case "kesehatan": return "#16a34a";
    case "pembangunan": return "#2563eb";
    case "pemerintahan": return "#9333ea";
    case "keagamaan": return "#ea580c";
    default: return "#475569";
  }
}

function getJenisColor(jenis: string) {
  switch (jenis?.toLowerCase()) {
    case "peraturan desa": return "#dc2626";
    case "keputusan kepala desa": return "#ea580c";
    case "peraturan bpd": return "#2563eb";
    default: return "#475569";
  }
}

export default function Informasi() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const [agendaItems, setAgendaItems] = useState<Agenda[]>([]);
  const [galleryImages, setGalleryImages] = useState<Galeri[]>([]);
  const [dokumenItems, setDokumenItems] = useState<ProdukHukum[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    async function fetchData() {
      try {
        const [resAgenda, resGaleri, resDokumen] = await Promise.all([
          supabase.from("agenda").select("*").order("tanggal", { ascending: true }),
          supabase.from("galeri").select("*").order("created_at", { ascending: false }),
          supabase.from("produk_hukum").select("*").order("tahun", { ascending: false }),
        ]);

        if (resAgenda.data) setAgendaItems(resAgenda.data);
        if (resGaleri.data) setGalleryImages(resGaleri.data);
        if (resDokumen.data) setDokumenItems(resDokumen.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredImages = activeFilter === "Semua"
    ? galleryImages
    : galleryImages.filter((img) => img.kategori?.toLowerCase() === activeFilter.toLowerCase());

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDokumenItems = dokumenItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dokumenItems.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const agendaScrollRef = useRef<HTMLDivElement>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header Section */}
        <section className={styles.header}>
          <AnimateInView direction="up">
            <h1 className={styles.title}>Pusat Informasi Desa</h1>
            <p className={styles.subtitle}>
              Ikuti perkembangan terbaru, jadwal kegiatan, dan dokumentasi visual kehidupan bermasyarakat di Desa Jebed Utara.
            </p>
          </AnimateInView>
        </section>

        {/* Loading State */}
        {loading && (
          <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
            Memuat data dari database...
          </div>
        )}

        {!loading && (
          <>
            {/* Agenda Desa */}
            <section className={styles.section}>
              <AnimateInView direction="up">
                <div className={styles.sectionHeaderRow}>
                  <div className={styles.sectionHeaderLeft}>
                    <h2 className={styles.sectionTitle}>Agenda Desa</h2>
                  </div>
                </div>

                {agendaItems.length === 0 ? (
                  <div style={{ padding: "20px", textAlign: "center", color: "#64748b", background: "white", borderRadius: "12px" }}>
                    Belum ada agenda desa yang dijadwalkan.
                  </div>
                ) : (
                  <div className={styles.sliderWrapper}>
                    <button onClick={() => scrollLeft(agendaScrollRef)} className={styles.sliderBtnLeft}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <div className={styles.agendaGrid} ref={agendaScrollRef}>
                      {agendaItems.map((item) => {
                        const date = new Date(item.tanggal);
                      return (
                        <div key={item.id} className={styles.agendaCard}>
                          <div className={styles.agendaDate}>
                            <span className={styles.agendaDay}>{date.getDate()}</span>
                            <span className={styles.agendaMonth}>
                              {date.toLocaleDateString("id-ID", { month: "short" }).toUpperCase()}
                            </span>
                          </div>
                          <div className={styles.agendaInfo}>
                            <span className={styles.agendaCategory} style={{ color: getCategoryColor(item.kategori) }}>
                              {item.kategori?.toUpperCase()}
                            </span>
                            <h4 className={styles.agendaTitle}>{item.judul}</h4>
                            <div className={styles.agendaTime}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                              {item.waktu || "-"}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    </div>
                    <button onClick={() => scrollRight(agendaScrollRef)} className={styles.sliderBtnRight}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                  </div>
                )}
              </AnimateInView>
            </section>

            {/* Galeri Desa */}
            <section className={styles.section}>
              <AnimateInView direction="up" delay={0.1}>
                <div className={styles.sectionHeaderRow}>
                  <div className={styles.sectionHeaderLeft}>
                    <h2 className={styles.sectionTitle}>Galeri Desa</h2>
                  </div>
                  <div className={styles.filterTabs}>
                    {filterTabs.map((tab) => (
                      <button
                        key={tab}
                        className={`${styles.filterTab} ${activeFilter === tab ? styles.filterTabActive : ""}`}
                        onClick={() => setActiveFilter(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {filteredImages.length === 0 ? (
                  <div style={{ padding: "20px", textAlign: "center", color: "#64748b", background: "white", borderRadius: "12px" }}>
                    Belum ada foto galeri untuk kategori ini.
                  </div>
                ) : (
                  <div className={styles.sliderWrapper}>
                    <button onClick={() => scrollLeft(galleryScrollRef)} className={styles.sliderBtnLeft}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <div className={styles.galleryUniformGrid} ref={galleryScrollRef}>
                      {filteredImages.map((item) => (
                        <div key={item.id} className={styles.galleryUniformItem}>
                          <img
                            src={item.gambar_url}
                            alt={item.judul}
                            className={styles.galleryImage}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1590059338573-094195191395?q=80&w=400&auto=format&fit=crop";
                            }}
                          />
                          <div className={styles.galleryUniformOverlay}>
                            <span className={styles.galleryUniformTitle}>{item.judul}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => scrollRight(galleryScrollRef)} className={styles.sliderBtnRight}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                  </div>
                )}
              </AnimateInView>
            </section>

            {/* Produk Hukum Desa */}
            <section className={styles.section}>
              <AnimateInView direction="up" delay={0.2}>
                <div className={styles.sectionHeaderRow}>
                  <div className={styles.sectionHeaderLeft}>
                    <h2 className={styles.sectionTitle}>Produk Hukum Desa</h2>
                  </div>
                </div>

                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>NO.</th>
                        <th>NAMA DOKUMEN</th>
                        <th>JENIS</th>
                        <th>TAHUN</th>
                        <th>AKSI</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentDokumenItems.length === 0 ? (
                        <tr>
                          <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
                            Belum ada dokumen produk hukum.
                          </td>
                        </tr>
                      ) : (
                        currentDokumenItems.map((doc, index) => (
                          <tr key={doc.id}>
                            <td>{indexOfFirstItem + index + 1}</td>
                            <td className={styles.docName}>{doc.nama_dokumen}</td>
                            <td>
                              <span className={styles.docBadge} style={{ backgroundColor: getJenisColor(doc.jenis) }}>
                                {doc.jenis}
                              </span>
                            </td>
                            <td>{doc.tahun}</td>
                            <td>
                              <a
                                href={doc.file_url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.downloadBtn}
                                aria-label="Download"
                                style={{ display: "inline-flex", textDecoration: "none" }}
                              >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                              </a>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {totalPages > 1 && (
                  <div className={styles.pagination}>
                    <button 
                      onClick={prevPage} 
                      disabled={currentPage === 1} 
                      className={styles.pageBtn}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <span className={styles.pageInfo}>
                      {currentPage} / {totalPages}
                    </span>
                    <button 
                      onClick={nextPage} 
                      disabled={currentPage === totalPages} 
                      className={styles.pageBtn}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                  </div>
                )}
              </AnimateInView>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
