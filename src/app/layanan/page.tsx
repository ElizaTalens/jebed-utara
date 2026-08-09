"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import AnimateInView from "@/components/AnimateInView/AnimateInView";
import styles from "./layanan.module.css";



interface Berita {
  id: string;
  judul: string;
  konten: string;
  gambar_url: string;
  kategori: string;
  created_at: string;
}

export default function Layanan() {

  const [beritaItems, setBeritaItems] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);

  // Pengaduan form state
  const [nama, setNama] = useState("");
  const [jenis, setJenis] = useState("");
  const [pesan, setPesan] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [resBerita] = await Promise.all([
          supabase.from("berita").select("*").order("created_at", { ascending: false }),
        ]);
        if (resBerita.data) setBeritaItems(resBerita.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSubmitPengaduan = async () => {
    if (!nama || !jenis || !pesan) {
      setSubmitError("Harap isi semua kolom.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const { error } = await supabase
        .from("pengaduan")
        .insert({ nama, jenis, pesan });

      if (error) {
        throw error;
      }

      setSubmitSuccess(true);
      setNama("");
      setJenis("");
      setPesan("");

      // Sembunyikan notifikasi sukses setelah 5 detik
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err: any) {
      setSubmitError("Gagal mengirim: " + (err.message || "Terjadi kesalahan"));
    } finally {
      setSubmitting(false);
    }
  };

  const beritaScrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -374, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 374, behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header Section */}
        <section className={styles.header}>
          <AnimateInView direction="up">
            <h1 className={styles.title}>Layanan Publik & Berita Desa</h1>
            <p className={styles.subtitle}>
              Akses layanan administrasi desa dan dapatkan informasi terbaru seputar kegiatan dan pengumuman resmi Desa Jebed Utara.
            </p>
          </AnimateInView>
        </section>

        {loading ? (
          <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
            Memuat data dari database...
          </div>
        ) : (
          <>


            {/* Pengaduan Masyarakat Section (Static) */}
            <section className={styles.section}>
              <div className={styles.pengaduanGrid}>
                <AnimateInView direction="right" delay={0.1} className={styles.pengaduanInfo}>
                  <h2 className={styles.sectionTitle}>Pengaduan Masyarakat</h2>
                  <p className={styles.sectionDesc}>
                    Sampaikan aspirasi, keluhan, atau laporan Anda terkait infrastruktur, pelayanan, maupun ketertiban di lingkungan Desa Jebed Utara. Laporan Anda akan ditindaklanjuti oleh perangkat desa terkait.
                  </p>

                  <div className={styles.featureList}>
                    <div className={styles.featureItem}>
                      <div className={styles.featureIconBox}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className={styles.featureTitle}>Respons Cepat</h4>
                        <p className={styles.featureDesc}>Tim desa memantau laporan secara berkala.</p>
                      </div>
                    </div>

                    <div className={styles.featureItem}>
                      <div className={styles.featureIconBox}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className={styles.featureTitle}>Kerahasiaan Terjaga</h4>
                        <p className={styles.featureDesc}>Data pelapor dijamin aman.</p>
                      </div>
                    </div>
                  </div>
                </AnimateInView>

                <AnimateInView direction="left" delay={0.2} className={styles.pengaduanFormCard}>
                  <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    {submitSuccess && (
                      <div style={{ padding: "12px 16px", background: "#ecfdf5", color: "#059669", borderRadius: "10px", fontSize: "0.9rem", fontWeight: 600, marginBottom: "8px" }}>
                        Laporan berhasil dikirim! Terima kasih.
                      </div>
                    )}
                    {submitError && (
                      <div style={{ padding: "12px 16px", background: "#fef2f2", color: "#dc2626", borderRadius: "10px", fontSize: "0.9rem", fontWeight: 600, marginBottom: "8px" }}>
                        ❌ {submitError}
                      </div>
                    )}

                    <div className={styles.formGroup}>
                      <label htmlFor="nama">Nama Lengkap</label>
                      <input type="text" id="nama" placeholder="Masukkan nama Anda" className={styles.input} value={nama} onChange={(e) => setNama(e.target.value)} />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="jenis">Jenis Laporan</label>
                      <div className={styles.selectWrapper}>
                        <select id="jenis" className={styles.select} value={jenis} onChange={(e) => setJenis(e.target.value)}>
                          <option value="" disabled>Pilih jenis laporan...</option>
                          <option value="Infrastruktur">Infrastruktur</option>
                          <option value="Pelayanan Publik">Pelayanan Publik</option>
                          <option value="Ketertiban & Keamanan">Ketertiban &amp; Keamanan</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                        <svg className={styles.selectIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="pesan">Pesan / Laporan</label>
                      <textarea id="pesan" rows={4} placeholder="Deskripsikan laporan Anda secara detail..." className={styles.textarea} value={pesan} onChange={(e) => setPesan(e.target.value)}></textarea>
                    </div>

                    <button type="button" className={styles.submitBtn} onClick={handleSubmitPengaduan} disabled={submitting}>
                      {submitting ? "Mengirim..." : "Kirim Laporan"}
                    </button>
                  </form>
                </AnimateInView>
              </div>
            </section>

            {/* Berita & Pengumuman Section */}
            <section className={styles.section}>
              <AnimateInView direction="up" className={styles.beritaHeader}>
                <div>
                  <h2 className={styles.sectionTitle}>Berita & Pengumuman</h2>
                  <p className={styles.sectionDescShort}>Informasi terkini dari Pemerintah Desa Jebed Utara</p>
                </div>
              </AnimateInView>

              {beritaItems.length === 0 ? (
                <div style={{ padding: "20px", textAlign: "center", color: "#64748b", background: "white", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  Belum ada berita.
                </div>
              ) : (
                <div className={styles.sliderWrapper}>
                  <button onClick={() => scrollLeft(beritaScrollRef)} className={styles.sliderBtnLeft}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <div className={styles.beritaGrid} ref={beritaScrollRef}>
                    {beritaItems.map((news) => (
                      <Link href={`/berita/${news.id}`} key={news.id} className={styles.mainNewsCard} style={{ textDecoration: 'none' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={news.gambar_url || "/images/berita-utama.png"}
                          alt={news.judul}
                          className={styles.mainNewsImage}
                          style={{ objectFit: "cover", width: "100%", height: "100%" }}
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800&auto=format&fit=crop";
                          }}
                        />
                        <div className={styles.mainNewsOverlay}>
                          <span className={styles.badgeInfo}>{news.kategori?.toUpperCase()}</span>
                          <h3 className={styles.mainNewsTitle}>{news.judul}</h3>
                          <p className={styles.mainNewsDesc}>
                            {news.konten.length > 120 ? news.konten.substring(0, 120) + "..." : news.konten}
                          </p>
                          <div className={styles.newsMeta}>
                            <span className={styles.metaItem}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                              {new Date(news.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <button onClick={() => scrollRight(beritaScrollRef)} className={styles.sliderBtnRight}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
