"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import styles from "./berita-detail.module.css";

interface Berita {
  id: string;
  judul: string;
  konten: string;
  gambar_url: string;
  kategori: string;
  created_at: string;
}

export default function BeritaDetail() {
  const params = useParams();
  const id = params?.id as string;
  
  const [berita, setBerita] = useState<Berita | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBerita() {
      if (!id) return;
      try {
        const { data, error } = await supabase
          .from("berita")
          .select("*")
          .eq("id", id)
          .single();
        
        if (data) {
          setBerita(data);
        }
      } catch (error) {
        console.error("Error fetching berita:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchBerita();
  }, [id]);

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <div style={{ textAlign: "center", padding: "100px", color: "#64748b" }}>
            Memuat berita...
          </div>
        </div>
      </main>
    );
  }

  if (!berita) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <div style={{ textAlign: "center", padding: "100px" }}>
            <h2>Berita tidak ditemukan</h2>
            <Link href="/layanan" className={styles.backLink}>
              Kembali ke Layanan
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Dummy content split by paragraph to simulate long news reading experience.
  const dummyContent = [
    berita.konten,
    "Ini adalah konten paragraf tambahan dummy untuk memberikan gambaran bagaimana halaman berita ini terlihat jika memiliki teks yang panjang. Berita yang lengkap sangat penting untuk memberikan informasi yang jelas dan detail kepada masyarakat Desa Jebed Utara. Dengan adanya portal berita ini, diharapkan warga dapat lebih mudah mengakses informasi terkait program desa, kegiatan masyarakat, dan pengumuman penting lainnya.",
    "Pemerintah Desa terus berkomitmen untuk memberikan transparansi dan pelayanan yang terbaik. Kegiatan-kegiatan seperti ini menjadi bukti nyata dari partisipasi aktif seluruh elemen masyarakat dalam membangun desa. Kolaborasi antara perangkat desa dan warga adalah kunci utama dalam mewujudkan Desa Jebed Utara yang lebih maju, mandiri, dan sejahtera.",
    "Kami juga mengajak seluruh warga untuk terus berkontribusi dan memberikan masukan yang membangun. Portal ini juga dilengkapi dengan fitur pengaduan masyarakat yang dapat dimanfaatkan untuk melaporkan berbagai masalah atau memberikan saran perbaikan. Mari kita bersama-sama menjaga dan memajukan Desa Jebed Utara."
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/">Beranda</Link>
          <span>/</span>
          <Link href="/layanan">Layanan</Link>
          <span>/</span>
          <span className={styles.activeBreadcrumb}>Berita</span>
        </div>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <span className={styles.kategoriBadge}>{berita.kategori?.toUpperCase()}</span>
            <h1 className={styles.title}>{berita.judul}</h1>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                {new Date(berita.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
              </div>
              <div className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Pemerintah Desa Jebed Utara
              </div>
            </div>
          </header>

          <div className={styles.imageWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={berita.gambar_url || "/images/berita-utama.png"}
              alt={berita.judul}
              className={styles.articleImage}
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>

          <div className={styles.content}>
            {dummyContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.footer}>
            <Link href="/layanan" className={styles.backBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Kembali ke Berita Lainnya
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
