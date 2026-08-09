"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import styles from "../admin.module.css";

interface Pengaduan {
  id: string;
  nama: string;
  jenis: string;
  pesan: string;
  created_at: string;
}

export default function AdminPengaduan() {
  const [data, setData] = useState<Pengaduan[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Pengaduan | null>(null);

  const fetchData = useCallback(async () => {
    const { data: rows } = await supabase.from("pengaduan").select("*").order("created_at", { ascending: false });
    if (rows) setData(rows);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const openView = (item: Pengaduan) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus pengaduan ini?")) {
      try {
        const { error } = await supabase.from("pengaduan").delete().eq("id", id);
        
        if (error) {
          console.error("Error deleting data:", error);
          alert("Gagal menghapus pengaduan. Silakan coba lagi.");
        } else {
          alert("Pengaduan berhasil dihapus!");
          fetchData();
          if (selectedItem?.id === id) {
            setModalOpen(false);
          }
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        alert("Terjadi kesalahan sistem saat menghapus data.");
      }
    }
  };

  return (
    <div>
      <div className={styles.tableSection}>
        <div className={styles.tableHeader}>
          <span className={styles.tableTitle}>Data Pengaduan Masyarakat</span>
        </div>

        {data.length === 0 ? (
          <div className={styles.emptyState}>Belum ada pengaduan masyarakat yang masuk.</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Nama Pelapor</th>
                <th>Jenis Laporan</th>
                <th>Pesan Singkat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                  <td style={{ fontWeight: 600 }}>{item.nama}</td>
                  <td>
                    <span className={styles.statusBadge} style={{ background: "#eff6ff", color: "#3b82f6" }}>
                      {item.jenis}
                    </span>
                  </td>
                  <td>
                    {item.pesan.length > 50 ? item.pesan.substring(0, 50) + "..." : item.pesan}
                  </td>
                  <td>
                    <div className={styles.actionBtns}>
                      <button className={styles.editBtn} onClick={() => openView(item)} title="Lihat Detail">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                      </button>
                      <button className={styles.deleteBtn} onClick={() => handleDelete(item.id)} title="Hapus">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {modalOpen && selectedItem && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>Detail Pengaduan</span>
              <button className={styles.modalClose} onClick={() => setModalOpen(false)}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nama Pelapor</label>
                <div style={{ padding: "10px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  {selectedItem.nama}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Waktu Masuk</label>
                <div style={{ padding: "10px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  {new Date(selectedItem.created_at).toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' })}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Jenis Laporan</label>
                <div style={{ padding: "10px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  {selectedItem.jenis}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Pesan Laporan</label>
                <div style={{ padding: "10px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0", minHeight: "100px", whiteSpace: "pre-wrap" }}>
                  {selectedItem.pesan}
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setModalOpen(false)}>Tutup</button>
              <button className={styles.dangerBtn} onClick={() => handleDelete(selectedItem.id)}>
                Hapus Pengaduan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
