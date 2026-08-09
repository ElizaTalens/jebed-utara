"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import styles from "./admin.module.css";

interface Stats {
  layanan: number;
  berita: number;
  agenda: number;
  galeri: number;
  produkHukum: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    layanan: 0,
    berita: 0,
    agenda: 0,
    galeri: 0,
    produkHukum: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      const [layanan, berita, agenda, galeri, produkHukum] = await Promise.all([
        supabase.from("pengaduan").select("id", { count: "exact", head: true }),
        supabase.from("berita").select("id", { count: "exact", head: true }),
        supabase.from("agenda").select("id", { count: "exact", head: true }),
        supabase.from("galeri").select("id", { count: "exact", head: true }),
        supabase.from("produk_hukum").select("id", { count: "exact", head: true }),
      ]);
      setStats({
        layanan: layanan.count ?? 0,
        berita: berita.count ?? 0,
        agenda: agenda.count ?? 0,
        galeri: galeri.count ?? 0,
        produkHukum: produkHukum.count ?? 0,
      });
    }
    fetchStats();
  }, []);

  const statCards = [
    {
      label: "Layanan",
      value: stats.layanan,
      color: "#3b82f6",
      bg: "#eff6ff",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      label: "Berita",
      value: stats.berita,
      color: "#8b5cf6",
      bg: "#f5f3ff",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" />
        </svg>
      )
    },
    {
      label: "Agenda",
      value: stats.agenda,
      color: "#f97316",
      bg: "#fff7ed",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    },
    {
      label: "Galeri",
      value: stats.galeri,
      color: "#10b981",
      bg: "#ecfdf5",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
        </svg>
      )
    },
    {
      label: "Produk Hukum",
      value: stats.produkHukum,
      color: "#ef4444",
      bg: "#fef2f2",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m14 13-3.4 3.4c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2L9.8 8.8" /><path d="m8 6 6-6 10 10-6 6" /><path d="m2 22 5.5-5.5" />
        </svg>
      )
    },
  ];

  const quickLinks = [
    { label: "Layanan", href: "/admin/pengaduan", dotColor: "#3b82f6" },
    { label: "Berita & Pengumuman", href: "/admin/berita", dotColor: "#8b5cf6" },
    { label: "Agenda Desa", href: "/admin/agenda", dotColor: "#f97316" },
    { label: "Galeri Desa", href: "/admin/galeri", dotColor: "#10b981" },
    { label: "Produk Hukum", href: "/admin/produk-hukum", dotColor: "#ef4444" },
  ];

  return (
    <div className={styles.dashboardWrapper}>
      {/* Top Stats Cards */}
      <div className={styles.topCardsGrid}>
        {statCards.map((s) => (
          <div key={s.label} className={styles.topCard}>
            <div className={styles.topCardIconWrapper} style={{ backgroundColor: s.bg, color: s.color }}>
              {s.icon}
            </div>
            <div className={styles.topCardContent}>
              <div className={styles.topCardValue}>{s.value}</div>
              <div className={styles.topCardLabel}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links Menu */}
      <div className={styles.menuCepatSection}>
        <div className={styles.menuCepatHeader}>
          <h3>Menu Cepat</h3>
        </div>
        <div className={styles.menuCepatContent}>
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.menuCepatPill}>
              <span className={styles.menuCepatDot} style={{ backgroundColor: link.dotColor }} />
              <span className={styles.menuCepatLabel}>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}

