-- ============================================
-- Supabase SQL Schema: Desa Jebed Utara Admin
-- Jalankan di Supabase SQL Editor
-- ============================================

-- 1. Admin Settings (password hash)
CREATE TABLE IF NOT EXISTS admin_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  password_hash TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default password: 'admin123' 
INSERT INTO admin_settings (password_hash) VALUES (
  '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9'
);

-- 2. Berita & Pengumuman
CREATE TABLE IF NOT EXISTS berita (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  judul TEXT NOT NULL,
  konten TEXT,
  gambar_url TEXT,
  kategori TEXT DEFAULT 'Umum',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Agenda Desa
CREATE TABLE IF NOT EXISTS agenda (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  judul TEXT NOT NULL,
  tanggal DATE NOT NULL,
  waktu TEXT,
  kategori TEXT DEFAULT 'Umum',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Galeri Desa
CREATE TABLE IF NOT EXISTS galeri (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  judul TEXT NOT NULL,
  gambar_url TEXT NOT NULL,
  kategori TEXT DEFAULT 'Kegiatan',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Produk Hukum Desa
CREATE TABLE IF NOT EXISTS produk_hukum (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nama_dokumen TEXT NOT NULL,
  jenis TEXT DEFAULT 'Peraturan Desa',
  tahun INTEGER NOT NULL,
  file_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Layanan Publik
CREATE TABLE IF NOT EXISTS layanan (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  judul TEXT NOT NULL,
  deskripsi TEXT,
  kategori TEXT DEFAULT 'Administrasi',
  status TEXT DEFAULT 'Aktif',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) - allow all for now via anon key
ALTER TABLE admin_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE berita ENABLE ROW LEVEL SECURITY;
ALTER TABLE agenda ENABLE ROW LEVEL SECURITY;
ALTER TABLE galeri ENABLE ROW LEVEL SECURITY;
ALTER TABLE produk_hukum ENABLE ROW LEVEL SECURITY;
ALTER TABLE layanan ENABLE ROW LEVEL SECURITY;

-- Policies: allow all operations via anon key
CREATE POLICY "Allow all on admin_settings" ON admin_settings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on berita" ON berita FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on agenda" ON agenda FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on galeri" ON galeri FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on produk_hukum" ON produk_hukum FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on layanan" ON layanan FOR ALL USING (true) WITH CHECK (true);

-- 7. Pengaduan Masyarakat
CREATE TABLE IF NOT EXISTS pengaduan (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nama TEXT NOT NULL,
  jenis TEXT NOT NULL,
  pesan TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE pengaduan ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all on pengaduan" ON pengaduan FOR ALL USING (true) WITH CHECK (true);

-- 8. Storage Configuration untuk Upload Gambar
-- Buat bucket 'upload' jika belum ada (membutuhkan permission superuser, bisa dijalankan manual atau via dashboard)
INSERT INTO storage.buckets (id, name, public) VALUES ('upload', 'upload', true) ON CONFLICT (id) DO NOTHING;

-- Berikan akses publik untuk membaca file gambar
CREATE POLICY "Allow public read access" ON storage.objects FOR SELECT TO public USING (bucket_id = 'upload');

-- Berikan akses publik (atau user terotentikasi) untuk mengupload file gambar
CREATE POLICY "Allow public uploads" ON storage.objects FOR INSERT TO public WITH CHECK (bucket_id = 'upload');

-- Berikan akses untuk mengupdate atau menghapus file jika diperlukan
CREATE POLICY "Allow public update" ON storage.objects FOR UPDATE TO public USING (bucket_id = 'upload');
CREATE POLICY "Allow public delete" ON storage.objects FOR DELETE TO public USING (bucket_id = 'upload');
