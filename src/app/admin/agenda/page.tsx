"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import styles from "../admin.module.css";

interface Agenda {
  id: string;
  judul: string;
  tanggal: string;
  waktu: string;
  kategori: string;
  created_at: string;
}

const emptyForm = { judul: "", tanggal: "", waktu: "", kategori: "Umum" };

export default function AdminAgenda() {
  const [data, setData] = useState<Agenda[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchData = useCallback(async () => {
    const { data: rows } = await supabase.from("agenda").select("*").order("tanggal", { ascending: false });
    if (rows) setData(rows);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const openNew = () => { setEditId(null); setForm(emptyForm); setModalOpen(true); };
  const openEdit = (item: Agenda) => {
    setEditId(item.id);
    setForm({ judul: item.judul, tanggal: item.tanggal, waktu: item.waktu || "", kategori: item.kategori });
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    if (editId) {
      await supabase.from("agenda").update(form).eq("id", editId);
    } else {
      await supabase.from("agenda").insert(form);
    }
    setSaving(false);
    setModalOpen(false);
    fetchData();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus agenda ini?")) {
      await supabase.from("agenda").delete().eq("id", id);
      fetchData();
    }
  };

  return (
    <div>
      <div className={styles.tableSection}>
        <div className={styles.tableHeader}>
          <span className={styles.tableTitle}>Daftar Agenda Desa</span>
          <button className={styles.addBtn} onClick={openNew}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Tambah Agenda
          </button>
        </div>

        {data.length === 0 ? (
          <div className={styles.emptyState}>Belum ada agenda. Klik &ldquo;Tambah Agenda&rdquo; untuk mulai.</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Judul Kegiatan</th>
                <th>Tanggal</th>
                <th>Waktu</th>
                <th>Kategori</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: 600 }}>{item.judul}</td>
                  <td>{new Date(item.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</td>
                  <td>{item.waktu || "-"}</td>
                  <td>
                    <span className={styles.statusBadge} style={{ background: "#fffbeb", color: "#b45309" }}>{item.kategori}</span>
                  </td>
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
              <span className={styles.modalTitle}>{editId ? "Edit Agenda" : "Tambah Agenda Baru"}</span>
              <button className={styles.modalClose} onClick={() => setModalOpen(false)}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Judul Kegiatan</label>
                <input className={styles.formInput} value={form.judul} onChange={(e) => setForm({ ...form, judul: e.target.value })} placeholder="Nama kegiatan..." />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tanggal</label>
                <input className={styles.formInput} type="date" value={form.tanggal} onChange={(e) => setForm({ ...form, tanggal: e.target.value })} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Waktu</label>
                <input className={styles.formInput} value={form.waktu} onChange={(e) => setForm({ ...form, waktu: e.target.value })} placeholder="08:00 - 12:00 WIB" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Kategori</label>
                <select className={styles.formSelect} value={form.kategori} onChange={(e) => setForm({ ...form, kategori: e.target.value })}>
                  <option>Umum</option>
                  <option>Kesehatan</option>
                  <option>Pembangunan</option>
                  <option>Pemerintahan</option>
                  <option>Keagamaan</option>
                </select>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setModalOpen(false)}>Batal</button>
              <button className={styles.saveBtn} onClick={handleSave} disabled={saving || !form.judul || !form.tanggal}>{saving ? "Menyimpan..." : "Simpan"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
