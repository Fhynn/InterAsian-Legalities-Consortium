"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSubtitleLanguage } from "./subtitle-language";

const links = [
  { en: "Home", id: "Beranda", href: "/" },
  { en: "About", id: "Tentang", href: "/about" },
  { en: "Programs & activities", id: "Program & kegiatan", href: "/programs" },
  { en: "Our researchers", id: "Peneliti kami", href: "/researchers" },
  { en: "Publications", id: "Publikasi", href: "/publications" },
  { en: "Contact", id: "Kontak", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useSubtitleLanguage();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand" aria-label={language === "id" ? "Kembali ke beranda The InterAsian Legalities Consortium" : "Back to The InterAsian Legalities Consortium home"} onClick={() => setOpen(false)}>
          <img className="brand-logo" src="/images/interasian-logo.png" alt="" width="753" height="753" />
          <span className="brand-copy"><strong>InterAsian</strong><br /><em>Legalities Consortium</em></span>
        </Link>
        <button className={open ? "menu-toggle is-open" : "menu-toggle"} type="button" aria-expanded={open} aria-controls="site-nav" aria-label={open ? (language === "id" ? "Tutup navigasi" : "Close navigation") : (language === "id" ? "Buka navigasi" : "Open navigation")} onClick={() => setOpen(!open)}>
          <span>{open ? (language === "id" ? "Tutup" : "Close") : "Menu"}</span>
          <i aria-hidden="true"><b /><b /><b /></i>
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label={language === "id" ? "Navigasi utama" : "Primary navigation"}>
          {links.map(({ en, id, href }) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>
              {language === "id" ? id : en}
            </Link>
          ))}
          <span className="nav-divider" aria-hidden="true" />
          <button
            type="button"
            className="language-toggle"
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            aria-label={language === "id" ? "Switch site language to English" : "Ganti bahasa situs ke Bahasa Indonesia"}
            title={language === "id" ? "Bahasa situs" : "Site language"}
          >
            <span className={language === "en" ? "active" : ""}>EN</span>
            <i aria-hidden="true">/</i>
            <span className={language === "id" ? "active" : ""}>ID</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
