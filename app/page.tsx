"use client";

import Link from "next/link";
import { Arrow } from "./components/icons";
import { useSubtitleLanguage } from "./components/subtitle-language";
import { programs } from "./data";

export default function Home() {
  const { language } = useSubtitleLanguage();
  const t = (en: string, id: string) => language === "id" ? id : en;

  return (
    <div className="editorial-home">
      <section className="ed-hero">
        <div className="ed-headline">
          <p className="hero-kicker">{t("Global Governance & Local Realities", "Tata Kelola Global & Realitas Lokal")}</p>
          <h1>{t("The InterAsian", "Konsorsium Legalitas")}<br />{t("Legalities Consortium", "Antar-Asia")}</h1>
          <p className="indo-subtitle hero-subtitle">{t("An interdisciplinary research consortium", "Konsorsium riset lintas disiplin")}</p>
        </div>
        <div className="ed-intro">
          <p>{t("Investigating contemporary realities and historical foundations underpinning Asian legal systems and cultures.", "Mengkaji realitas kontemporer dan landasan historis yang menopang sistem serta budaya hukum Asia.")}</p>
          <Link href="/about" className="red-link">{t("Explore our research", "Jelajahi riset kami")} <Arrow /></Link>
        </div>
        <figure className="ed-hero-image"><img src="/images/drive/landing-discussion.jpg" alt={t("Consortium researchers in discussion around a seminar table", "Para peneliti konsorsium berdiskusi di meja seminar")} /><figcaption>{t("Interdisciplinary collaboration across law, humanities, and social sciences.", "Kolaborasi lintas disiplin dalam bidang hukum, humaniora, dan ilmu sosial.")}</figcaption></figure>
        <aside className="ed-focus"><span>{t("Scholarly community", "Komunitas akademik")}</span><h2>{t("Global governance. Local realities.", "Tata kelola global. Realitas lokal.")}</h2><p className="indo-subtitle">{t("Research grounded in place and connected across borders.", "Riset yang berakar secara lokal dan terhubung lintas batas.")}</p><p>{t("Our research is grounded in local legal and governance realities while remaining aware of, and able to interpret, global governance systems.", "Riset kami berakar pada realitas hukum dan tata kelola lokal, sekaligus peka terhadap dan mampu menafsirkan sistem tata kelola global.")}</p><Link href="/about" className="red-link">{t("About the consortium", "Tentang konsorsium")} <Arrow /></Link></aside>
      </section>

      <section className="ed-about">
        <div className="section-label"><b>01 /</b><span>{t("About us", "Tentang kami")}</span></div>
        <div className="ed-about-copy">
          <h2>{t("About the Consortium", "Tentang Konsorsium")}</h2>
          <p className="indo-subtitle">{t("A scholarly community, not an institutional hub", "Komunitas akademik, bukan sekadar pusat institusional")}</p>
          <p className="lead-quote">{t("“Above all, we are a scholarly community rather than an institutional hub; your intellectual engagement is central to who we are and how we act.”", "“Yang terutama, kami adalah komunitas akademik, bukan sekadar pusat institusional; keterlibatan intelektual Anda merupakan inti dari jati diri dan cara kami berkarya.”")}</p>
          <p>{t("Launched in April 2024, the InterAsian Legalities Consortium investigates contemporary realities and historical foundations underpinning Asian legal systems and cultures. It approaches Asia as a set of interconnected processes: as borders are being crossed more easily than ever before, abetted by technological advancements in digital infrastructure. Yet local legal regimes and actors continue to maintain pivotal socio-political and territorial identities.", "Diluncurkan pada April 2024, InterAsian Legalities Consortium mengkaji realitas kontemporer dan landasan historis yang menopang sistem serta budaya hukum Asia. Konsorsium ini memandang Asia sebagai rangkaian proses yang saling terhubung: batas-batas kini semakin mudah dilintasi berkat kemajuan infrastruktur digital. Namun, rezim dan aktor hukum lokal tetap mempertahankan identitas sosial-politik dan teritorial yang penting.")}</p>
          <Link href="/about" className="red-link">{t("Read about us", "Baca tentang kami")} <Arrow /></Link>
        </div>
      </section>

      <section className="ed-programs">
        <div className="ed-section-title"><div><span className="mini-label">{t("Academic gatherings", "Pertemuan akademik")}</span><h2>{t("Programs & events", "Program & acara")}</h2><p className="indo-subtitle">{t("Workshops, seminars and academic exchange", "Lokakarya, seminar, dan pertukaran akademik")}</p></div><Link href="/programs" className="red-link">{t("Explore all programs", "Jelajahi semua program")} <Arrow /></Link></div>
        <div className="ed-program-grid">
          <figure><img src="/images/drive/program-surabaya-1.jpg" alt={t("InterAsian Legalities Consortium workshop participants in Surabaya", "Peserta lokakarya InterAsian Legalities Consortium di Surabaya")} /><figcaption><strong>{t("Surabaya Workshop 2026", "Lokakarya Surabaya 2026")}</strong><span>{t("Workshops, symposiums, and an ongoing seminar series fostering collaborative inquiry across Asia and Australia.", "Lokakarya, simposium, dan seri seminar berkelanjutan yang mendorong kajian kolaboratif di Asia dan Australia.")}</span></figcaption></figure>
          <div className="ed-program-list">{programs.map((program) => <Link href="/programs" key={program.title}><span><b>{t(program.type, program.typeId)}</b><strong>{t(program.title, program.titleId)}</strong><small>{t(program.date, program.dateId)} · {t(program.place, program.placeId)}</small></span><Arrow /></Link>)}</div>
        </div>
      </section>

      <section className="ed-researchers">
        <div className="ed-researcher-intro"><div className="section-label"><b>02 /</b><span>{t("Our researchers", "Peneliti kami")}</span></div><h2>{t("Consortium Researchers", "Peneliti Konsorsium")}</h2><p className="indo-subtitle">{t("An interdisciplinary scholarly network", "Jejaring akademik lintas disiplin")}</p><p>{t("Our interdisciplinary network brings together leading academics across prominent global and Asian institutions.", "Jejaring lintas disiplin kami mempertemukan akademisi terkemuka dari berbagai institusi utama di Asia dan dunia.")}</p><Link href="/researchers" className="red-link">{t("Meet our researchers", "Temui para peneliti kami")} <Arrow /></Link></div>
        <figure><img src="/images/researcher-law.png" alt={t("Legal scholar in a university office", "Akademisi hukum di kantor universitas")} /><figcaption>{t("Law & society", "Hukum & masyarakat")}</figcaption></figure>
        <figure><img src="/images/researcher-history.png" alt={t("Historian speaking in a library", "Sejarawan berbicara di perpustakaan")} /><figcaption>{t("History & humanities", "Sejarah & humaniora")}</figcaption></figure>
        <figure><img src="/images/researcher-governance.png" alt={t("Governance researcher in a university office", "Peneliti tata kelola di kantor universitas")} /><figcaption>{t("Cities & governance", "Kota & tata kelola")}</figcaption></figure>
      </section>

      <section className="ed-publications">
        <div className="ed-section-title"><div><span className="mini-label">{t("Academic output", "Karya akademik")}</span><h2>{t("Publications", "Publikasi")}</h2><p className="indo-subtitle">{t("Research publications and works in progress", "Publikasi riset dan karya yang sedang dikembangkan")}</p></div><Link href="/publications" className="red-link">{t("View publications", "Lihat publikasi")} <Arrow /></Link></div>
        <div className="ed-pub-grid">
          <div className="journal-cover"><span>InterAsian<br />Legalities Consortium</span></div>
          <div className="publication-home-copy"><span>{t("Journal articles · Books & monographs", "Artikel jurnal · Buku & monograf")}</span><h3>{t("Publications Coming Soon", "Publikasi Segera Hadir")}</h3><p className="indo-subtitle">{t("Research outputs are currently in development", "Karya riset sedang dalam pengembangan")}</p><p>{t("Check back for upcoming research monographs, peer-reviewed journal papers, and collaborative thematic publications currently under development.", "Nantikan monograf riset, artikel jurnal yang ditinjau sejawat, dan publikasi tematik kolaboratif yang sedang dikembangkan.")}</p><Link href="/publications" className="red-link">{t("Learn more", "Pelajari lebih lanjut")} <Arrow /></Link></div>
        </div>
      </section>
    </div>
  );
}
