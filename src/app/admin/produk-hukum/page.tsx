"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import styles from "../admin.module.css";

interface ProdukHukum {
  id: string;
  nama_dokumen: string;
  jenis: string;
  tahun: number;
  file_url: string;
  created_at: string;
}

const emptyForm = { nama_dokumen: "", jenis: "Peraturan Desa", tahun: new Date().getFullYear(), file_url: "" };

export default function AdminProdukHukum() {
  const [data, setData] = useState<ProdukHukum[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchData = useCallback(async () => {
    const { data: rows } = await supabase.from("produk_hukum").select("*").order("tahun", { ascending: false });
    if (rows) setData(rows);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const openNew = () => { setEditId(null); setForm(emptyForm); setFile(null); setModalOpen(true); };
  const openEdit = (item: ProdukHukum) => {
    setEditId(item.id);
    setForm({ nama_dokumen: item.nama_dokumen, jenis: item.jenis, tahun: item.tahun, file_url: item.file_url || "" });
    setFile(null);
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    let finalFileUrl = form.file_url;

    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `dokumen/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('dokumen')
        .upload(filePath, file);

      if (uploadError) {
        alert("Gagal mengupload file: " + uploadError.message);
        setSaving(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from('dokumen')
        .getPublicUrl(filePath);
        
      finalFileUrl = publicUrlData.publicUrl;
    }

    const dataToSave = { ...form, file_url: finalFileUrl };

    let dbError = null;
    if (editId) {
      const { error } = await supabase.from("produk_hukum").update(dataToSave).eq("id", editId);
      dbError = error;
    } else {
      const { error } = await supabase.from("produk_hukum").insert(dataToSave);
      dbError = error;
    }
    
    if (dbError) {
      alert("Gagal menyimpan ke database: " + dbError.message);
      setSaving(false);
      return;
    }

    alert("Dokumen berhasil disimpan!");
    setSaving(false);
    setModalOpen(false);
    fetchData();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus dokumen ini?")) {
      await supabase.from("produk_hukum").delete().eq("id", id);
      fetchData();
    }
  };

  return (
    <div>
      <div className={styles.tableSection}>
        <div className={styles.tableHeader}>
          <span className={styles.tableTitle}>Produk Hukum Desa</span>
          <button className={styles.addBtn} onClick={openNew}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Tambah Dokumen
          </button>
        </div>

        {data.length === 0 ? (
          <div className={styles.emptyState}>Belum ada dokumen. Klik &ldquo;Tambah Dokumen&rdquo; untuk mulai.</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nama Dokumen</th>
                <th>Jenis</th>
                <th>Tahun</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: 600 }}>{item.nama_dokumen}</td>
                  <td>
                    <span className={styles.statusBadge} style={{ background: "#fef2f2", color: "#dc2626" }}>{item.jenis}</span>
                  </td>
                  <td>{item.tahun}</td>
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
              <span className={styles.modalTitle}>{editId ? "Edit Dokumen" : "Tambah Dokumen Baru"}</span>
              <button className={styles.modalClose} onClick={() => setModalOpen(false)}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nama Dokumen</label>
                <input className={styles.formInput} value={form.nama_dokumen} onChange={(e) => setForm({ ...form, nama_dokumen: e.target.value })} placeholder="Nama dokumen..." />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Jenis</label>
                <select className={styles.formSelect} value={form.jenis} onChange={(e) => setForm({ ...form, jenis: e.target.value })}>
                  <option>Peraturan Desa</option>
                  <option>Keputusan Kepala Desa</option>
                  <option>Peraturan BPD</option>
                  <option>Surat Keputusan</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tahun</label>
                <input className={styles.formInput} type="number" value={form.tahun} onChange={(e) => setForm({ ...form, tahun: Number(e.target.value) })} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Upload File (opsional)</label>
                <input 
                  type="file" 
                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                  className={styles.formInput} 
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setFile(e.target.files[0]);
                    }
                  }} 
                />
                {form.file_url && !file && (
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>
                    File saat ini: <a href={form.file_url} target="_blank" rel="noreferrer">Download / Lihat</a>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setModalOpen(false)}>Batal</button>
              <button className={styles.saveBtn} onClick={handleSave} disabled={saving || !form.nama_dokumen}>{saving ? "Menyimpan..." : "Simpan"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
