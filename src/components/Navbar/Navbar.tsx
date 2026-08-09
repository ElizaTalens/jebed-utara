"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Profil Desa", href: "/profil" },
  { 
    label: "Wilayah Dusun", 
    href: "/wilayah", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Dusun Jebed", href: "/wilayah/jebed" },
      { label: "Dusun Batan", href: "/wilayah/batan" },
      { label: "Dusun Watgalih Selatan", href: "/wilayah/watgalih-selatan" },
      { label: "Dusun Watgalih Utara", href: "/wilayah/watgalih-utara" },
      { label: "Dusun Sumurgesing", href: "/wilayah/sumurgesing" },
      { label: "Dusun Kebanyon", href: "/wilayah/kebanyon" },
    ]
  },
  { label: "Layanan Desa", href: "/layanan" },
  { label: "Potensi Desa", href: "/potensi" },
  { label: "Informasi", href: "/informasi" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close all menus when pathname changes
  useEffect(() => {
    setDesktopDropdownOpen(false);
    setMobileDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Click outside listener for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      id="navbar"
    >
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pemalang-logo.svg"
            alt="Logo Desa Jebed Utara"
            width={44}
            height={55}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Desa Jebed Utara</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className={styles.navLinks}>
          {navItems.map((item) => {
            // Determine display label: show current dusun name if on a dusun page
            const activeDusun = item.hasDropdown && item.dropdownItems
              ? item.dropdownItems.find((d) => pathname === d.href || pathname.startsWith(d.href + '/'))
              : null;
            const displayLabel = activeDusun ? activeDusun.label : item.label;

            return item.hasDropdown ? (
              <div 
                key={item.label} 
                className={styles.navItemWithDropdown}
                ref={dropdownRef}
              >
                <div 
                  className={`${styles.navLink} ${pathname.startsWith(item.href) && item.href !== '/' ? styles.active : ""}`}
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                >
                  {displayLabel}
                  <svg className={`${styles.dropdownArrow} ${desktopDropdownOpen ? styles.rotated : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 4.5L6 7.5L9 4.5" />
                  </svg>
                </div>
                {/* Desktop Dropdown Menu */}
                {desktopDropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    {item.dropdownItems?.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        href={dropItem.href}
                        className={styles.dropdownLink}
                        onClick={() => setDesktopDropdownOpen(false)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href ? styles.active : ""}`}
                onClick={() => setDesktopDropdownOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* CTA Button */}
        <Link href="/login" className={styles.ctaButton}>
          Masuk
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="hamburger-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}
        id="mobile-menu"
      >
        {navItems.map((item) => {
          const activeDusunMobile = item.hasDropdown && item.dropdownItems
            ? item.dropdownItems.find((d) => pathname === d.href || pathname.startsWith(d.href + '/'))
            : null;
          const mobileDisplayLabel = activeDusunMobile ? activeDusunMobile.label : item.label;

          return item.hasDropdown ? (
            <div key={item.label} className={styles.mobileNavItemWithDropdown}>
              <div 
                className={`${styles.mobileNavLink} ${pathname.startsWith(item.href) && item.href !== '/' ? styles.active : ""}`}
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                {mobileDisplayLabel}
                <svg className={`${styles.dropdownArrow} ${mobileDropdownOpen ? styles.rotated : ""}`} width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 4.5L6 7.5L9 4.5" />
                </svg>
              </div>
              {/* Mobile Dropdown Sub-menu */}
              {mobileDropdownOpen && (
                <div className={styles.mobileSubMenu}>
                  {item.dropdownItems?.map((dropItem) => (
                    <Link
                      key={dropItem.label}
                      href={dropItem.href}
                      className={styles.mobileSubLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {dropItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          )
        })}
        <Link
          href="/login"
          className={styles.mobileCta}
          onClick={() => setMobileOpen(false)}
        >
          Masuk
        </Link>
      </div>
    </nav>
  );
}
