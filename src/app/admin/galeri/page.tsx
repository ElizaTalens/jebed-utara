"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import styles from "../admin.module.css";

interface Galeri {
  id: string;
  judul: string;
  gambar_url: string;
  kategori: string;
  created_at: string;
}

const emptyForm = { judul: "", gambar_url: "", kategori: "Kegiatan" };

export default function AdminGaleri() {
  const [data, setData] = useState<Galeri[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchData = useCallback(async () => {
    const { data: rows } = await supabase.from("galeri").select("*").order("created_at", { ascending: false });
    if (rows) setData(rows);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const openNew = () => { setEditId(null); setForm(emptyForm); setFile(null); setModalOpen(true); };
  const openEdit = (item: Galeri) => {
    setEditId(item.id);
    setForm({ judul: item.judul, gambar_url: item.gambar_url, kategori: item.kategori });
    setFile(null);
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    let finalGambarUrl = form.gambar_url;

    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `galeri/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('galeri')
        .upload(filePath, file);

      if (uploadError) {
        alert("Gagal mengupload gambar: " + uploadError.message);
        setSaving(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from('galeri')
        .getPublicUrl(filePath);
        
      finalGambarUrl = publicUrlData.publicUrl;
    }

    const dataToSave = { ...form, gambar_url: finalGambarUrl };

    let dbError = null;
    if (editId) {
      const { error } = await supabase.from("galeri").update(dataToSave).eq("id", editId);
      dbError = error;
    } else {
      const { error } = await supabase.from("galeri").insert(dataToSave);
      dbError = error;
    }
    
    if (dbError) {
      alert("Gagal menyimpan ke database: " + dbError.message);
      setSaving(false);
      return;
    }

    alert("Galeri berhasil disimpan!");
    setSaving(false);
    setModalOpen(false);
    fetchData();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus foto ini?")) {
      await supabase.from("galeri").delete().eq("id", id);
      fetchData();
    }
  };

  return (
    <div>
      <div className={styles.tableSection}>
        <div className={styles.tableHeader}>
          <span className={styles.tableTitle}>Galeri Desa</span>
          <button className={styles.addBtn} onClick={openNew}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Tambah Foto
          </button>
        </div>

        {data.length === 0 ? (
          <div className={styles.emptyState}>Belum ada foto. Klik &ldquo;Tambah Foto&rdquo; untuk mulai.</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Judul</th>
                <th>Kategori</th>
                <th>Tanggal Upload</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: 600 }}>{item.judul}</td>
                  <td>
                    <span className={styles.statusBadge} style={{ background: "#ecfdf5", color: "#059669" }}>{item.kategori}</span>
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

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>{editId ? "Edit Foto" : "Tambah Foto Baru"}</span>
              <button className={styles.modalClose} onClick={() => setModalOpen(false)}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Judul Foto</label>
                <input className={styles.formInput} value={form.judul} onChange={(e) => setForm({ ...form, judul: e.target.value })} placeholder="Judul foto..." />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Gambar</label>
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
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Kategori</label>
                <select className={styles.formSelect} value={form.kategori} onChange={(e) => setForm({ ...form, kategori: e.target.value })}>
                  <option>Kegiatan</option>
                  <option>Infrastruktur</option>
                  <option>Budaya</option>
                  <option>Lainnya</option>
                </select>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setModalOpen(false)}>Batal</button>
              <button className={styles.saveBtn} onClick={handleSave} disabled={saving || !form.judul || (!form.gambar_url && !file)}>{saving ? "Menyimpan..." : "Simpan"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
