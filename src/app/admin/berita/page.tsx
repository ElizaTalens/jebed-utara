"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import styles from "../admin.module.css";

interface Berita {
  id: string;
  judul: string;
  konten: string;
  kategori: string;
  gambar_url: string;
  created_at: string;
}

const emptyForm = { judul: "", konten: "", kategori: "Umum", gambar_url: "" };

export default function AdminBerita() {
  const [data, setData] = useState<Berita[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchData = useCallback(async () => {
    const { data: rows } = await supabase
      .from("berita")
      .select("*")
      .order("created_at", { ascending: false });
    if (rows) setData(rows);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const openNew = () => { setEditId(null); setForm(emptyForm); setFile(null); setModalOpen(true); };
  const openEdit = (item: Berita) => {
    setEditId(item.id);
    setForm({ judul: item.judul, konten: item.konten || "", kategori: item.kategori, gambar_url: item.gambar_url || "" });
    setFile(null);
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    let finalGambarUrl = form.gambar_url;

    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `berita/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('upload')
        .upload(filePath, file);

      if (uploadError) {
        alert("Gagal mengupload gambar: " + uploadError.message);
        setSaving(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from('upload')
        .getPublicUrl(filePath);
        
      finalGambarUrl = publicUrlData.publicUrl;
    }

    const dataToSave = { ...form, gambar_url: finalGambarUrl };

    let dbError = null;
    if (editId) {
      const { error } = await supabase.from("berita").update(dataToSave).eq("id", editId);
      dbError = error;
    } else {
      const { error } = await supabase.from("berita").insert([dataToSave]);
      dbError = error;
    }
    
    if (dbError) {
      alert("Gagal menyimpan ke database: " + dbError.message);
      setSaving(false);
      return;
    }

    alert("Berita berhasil disimpan!");
    setSaving(false);
    setModalOpen(false);
    fetchData();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus berita ini?")) {
      await supabase.from("berita").delete().eq("id", id);
      fetchData();
    }
  };

  return (
    <div>
      <div className={styles.tableSection}>
        <div className={styles.tableHeader}>
          <span className={styles.tableTitle}>Daftar Berita & Pengumuman</span>
          <button className={styles.addBtn} onClick={openNew}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Tambah Berita
          </button>
        </div>

        {data.length === 0 ? (
          <div className={styles.emptyState}>Belum ada berita. Klik &ldquo;Tambah Berita&rdquo; untuk mulai.</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Judul</th>
                <th>Kategori</th>
                <th>Tanggal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: 600 }}>{item.judul}</td>
                  <td>
                    <span className={styles.statusBadge} style={{ background: "#f5f3ff", color: "#7c3aed" }}>{item.kategori}</span>
                  </td>
                  <td>{new Date(item.created_at).toLocaleDateString("id-ID")}</td>
                  <td>
                    <div className={styles.actionBtns}>
                      <button className={styles.editBtn} onClick={() => openEdit(item)} title="Edit">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
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

      {/* Modal */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>{editId ? "Edit Berita" : "Tambah Berita Baru"}</span>
              <button className={styles.modalClose} onClick={() => setModalOpen(false)}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Judul</label>
                <input className={styles.formInput} value={form.judul} onChange={(e) => setForm({ ...form, judul: e.target.value })} placeholder="Judul berita..." />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Konten</label>
                <textarea className={styles.formTextarea} value={form.konten} onChange={(e) => setForm({ ...form, konten: e.target.value })} placeholder="Isi berita..." />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Kategori</label>
                <select className={styles.formSelect} value={form.kategori} onChange={(e) => setForm({ ...form, kategori: e.target.value })}>
                  <option>Umum</option>
                  <option>Pengumuman</option>
                  <option>Kegiatan</option>
                  <option>Pembangunan</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Gambar (opsional)</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  className={styles.formInput} 
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setFile(e.target.files[0]);
                    }
                  }} 
                />
                {form.gambar_url && !file && (
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>
                    Gambar saat ini: <a href={form.gambar_url} target="_blank" rel="noreferrer">Lihat</a>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setModalOpen(false)}>Batal</button>
              <button className={styles.saveBtn} onClick={handleSave} disabled={saving || !form.judul}>{saving ? "Menyimpan..." : "Simpan"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
