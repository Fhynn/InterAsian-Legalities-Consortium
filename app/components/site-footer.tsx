import Link from "next/link";
import { Arrow } from "./icons";
import { Localized } from "./subtitle-language";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <Localized as="h2" en={<>Get in<br />touch.</>} id={<>Mari<br />terhubung.</>} />
        <Localized as="p" en="An interdisciplinary research partnership investigating legalities, governance systems, and historical legal traditions across Asia. Part of the broader InterAsia Partnership." id="Kemitraan riset lintas disiplin yang mengkaji legalitas, sistem tata kelola, dan tradisi hukum historis di Asia. Bagian dari jaringan InterAsia Partnership." />
        <Link href="/contact" className="button-link"><Localized en="Contact us" id="Hubungi kami" /> <Arrow /></Link>
      </div>
      <div className="footer-grid">
        <div className="footer-brand"><img src="/images/interasian-logo.png" alt="The InterAsian Legalities Consortium" width="753" height="753" /></div>
        <div className="footer-links">
          <Link href="/about"><Localized en="About Us" id="Tentang Kami" /></Link><Link href="/about#themes"><Localized en="Research Themes" id="Tema Riset" /></Link><Link href="/programs"><Localized en="Programs & Events" id="Program & Acara" /></Link>
          <Link href="/researchers"><Localized en="Researchers" id="Peneliti" /></Link><Link href="/publications"><Localized en="Publications" id="Publikasi" /></Link>
          <Link href="/about#partners"><Localized en="Partners" id="Mitra" /></Link><Link href="/contact"><Localized en="Contact Us" id="Hubungi Kami" /></Link>
        </div>
        <div className="footer-contact">
          <a href="mailto:interasianlegalities@gmail.com">interasianlegalities@gmail.com</a><span>LinkedIn</span><span>Instagram</span>
        </div>
        <div className="footer-social"><span>in</span><span>×</span><span>▶</span></div>
      </div>
      <div className="footer-base"><Localized en="© 2026 The InterAsian Legalities Consortium. All rights reserved." id="© 2026 The InterAsian Legalities Consortium. Hak cipta dilindungi." /><Localized en="Designed for Academic & Research Excellence." id="Dirancang untuk keunggulan akademik dan riset." /></div>
    </footer>
  );
}
