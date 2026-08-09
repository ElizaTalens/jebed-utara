"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { verifyPassword, setSession } from "@/lib/auth";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const valid = await verifyPassword(password);
      if (valid) {
        setSession();
        router.push("/admin");
      } else {
        setError("Password salah. Silakan coba lagi.");
      }
    } catch (err: any) {
      setError(`Terjadi kesalahan: ${err.message || "Koneksi gagal"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.bgPattern} />
      <div className={styles.loginCard}>
        {/* Logo Area */}
        <div className={styles.logoArea}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pemalang-logo.svg"
            alt="Logo Desa Jebed Utara"
            className={styles.logo}
          />
          <h1 className={styles.title}>Desa Jebed Utara</h1>
          <p className={styles.subtitle}>Panel Administrasi</p>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label} htmlFor="password">
            Masukkan Password Admin
          </label>
          <div className={styles.inputWrapper}>
            <svg
              className={styles.inputIcon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              autoFocus
            />
          </div>

          {error && (
            <div className={styles.error}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {error}
            </div>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading || !password}
          >
            {loading ? (
              <span className={styles.spinner} />
            ) : (
              "Masuk"
            )}
          </button>
        </form>

        <p className={styles.footer}>
          &copy; 2024 Pemerintah Desa Jebed Utara
        </p>
      </div>
    </main>
  );
}
