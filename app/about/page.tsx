"use client";

import { PageIntro } from "../components/page-intro";
import { useSubtitleLanguage } from "../components/subtitle-language";
import { directors, partners, themes } from "../data";

export default function AboutPage() {
  const { language } = useSubtitleLanguage();
  const t = (en: string, id: string) => language === "id" ? id : en;

  return (
    <>
      <PageIntro index="01" eyebrowEn="Scholarly community" eyebrowId="Komunitas akademik" titleEn="About the Consortium" titleId="Tentang Konsorsium" subtitleEn="A scholarly community, not an institutional hub" subtitleId="Komunitas akademik, bukan sekadar pusat institusional" descriptionEn="Launched in April 2024, the InterAsian Legalities Consortium investigates contemporary realities and historical foundations underpinning Asian legal systems and cultures." descriptionId="Diluncurkan pada April 2024, InterAsian Legalities Consortium mengkaji realitas kontemporer dan landasan historis yang menopang sistem serta budaya hukum Asia." />

      <section className="editorial-quote wrap">
        <blockquote>{t("“Above all, we are a scholarly community rather than an institutional hub; your intellectual engagement is central to who we are and how we act.”", "“Yang terutama, kami adalah komunitas akademik, bukan sekadar pusat institusional; keterlibatan intelektual Anda merupakan inti dari jati diri dan cara kami berkarya.”")}</blockquote>
        <div>
          <p>{t("It approaches Asia as a set of interconnected processes: as borders are being crossed more easily than ever before, abetted by technological advancements in digital infrastructure. Yet local legal regimes and actors continue to maintain pivotal socio-political and territorial identities.", "Kami memandang Asia sebagai rangkaian proses yang saling terhubung. Batas-batas kini semakin mudah dilintasi berkat kemajuan infrastruktur digital, tetapi rezim dan aktor hukum lokal tetap mempertahankan identitas sosial-politik dan teritorial yang penting.")}</p>
          <p>{t("This research partnership aims to undertake research, and develop educational initiatives, that are simultaneously cognisant of deeply local, and grounded, legal and governance realities while being aware and able to interpret global governance systems.", "Kemitraan ini bertujuan menjalankan riset dan mengembangkan inisiatif pendidikan yang berpijak pada realitas hukum serta tata kelola lokal, sekaligus peka terhadap dan mampu menafsirkan sistem tata kelola global.")}</p>
        </div>
      </section>

      <section className="directors-section wrap">
        <div className="directors-intro"><p className="eyebrow">{t("Founding directors", "Direktur pendiri")}</p><h2>{t("Leadership grounded in Asian legal scholarship.", "Kepemimpinan yang berakar pada kajian hukum Asia.")}</h2><p className="indo-subtitle">{t("Founding leadership in Asian legal scholarship.", "Para pendiri dengan kepakaran hukum Asia.")}</p></div>
        <div className="director-list">
          {directors.map((director) => (
            <article key={director.name}><span>{director.initials}</span><div><h3>{director.name}</h3><b>{director.institution}</b><p>{t(director.description, director.descriptionId)}</p></div></article>
          ))}
        </div>
      </section>

      <section className="synergy-section wrap">
        <span>{t("Interdisciplinary synergy", "Sinergi lintas disiplin")}</span>
        <p>{t("Our network unites scholars from law, architecture, social sciences, humanities, and medicine. Through interdisciplinary collaborations, we foster research excellence and spearhead cooperative international grant applications.", "Jejaring kami menyatukan akademisi dari bidang hukum, arsitektur, ilmu sosial, humaniora, dan kedokteran. Melalui kolaborasi lintas disiplin, kami mendorong keunggulan riset dan memelopori pengajuan hibah internasional bersama.")}</p>
      </section>

      <section id="themes" className="theme-detail wrap">
        <div className="section-heading-row compact"><div><p className="eyebrow">{t("Core academic pillars", "Pilar akademik utama")}</p><h2>{t("Research Themes", "Tema Riset")}</h2><p className="indo-subtitle">{t("Four core academic pillars", "Empat pilar akademik utama")}</p><p>{t("Our collaborative inquiry is structured into four pivotal thematic teams led by prominent researchers across regional corridors.", "Kajian kolaboratif kami disusun dalam empat tim tematik utama yang dipimpin oleh para peneliti terkemuka di berbagai kawasan.")}</p></div></div>
        {themes.map((theme) => (
          <article key={theme.number}>
            <div><span>{theme.number}</span><h3>{t(theme.title, theme.titleId)}</h3><small>{t("Led by", "Dipimpin oleh")} {theme.lead}</small></div>
            <div className="theme-summary"><p>{t(theme.summary, theme.summaryId)}</p>{(language === "id" ? theme.corridorsId : theme.corridors)?.map((corridor) => <small key={corridor}>{corridor}</small>)}</div>
            <div><b className="list-label">{t(theme.areaLabel, theme.areaLabelId)}</b><ul>{(language === "id" ? theme.areasId : theme.areas).map((area) => <li key={area}>{area}</li>)}</ul></div>
          </article>
        ))}
      </section>

      <section id="partners" className="partners-section wrap">
        <div><p className="eyebrow">{t("Institutional network", "Jejaring institusi")}</p><h2>{t("Consortium Partners", "Mitra Konsorsium")}</h2><p className="indo-subtitle">{t("A global and regional institutional network", "Jejaring institusi global dan regional")}</p><p>{t("Collaborating with premier law faculties, research institutes, and universities globally.", "Berkolaborasi dengan fakultas hukum, lembaga riset, dan universitas terkemuka di berbagai negara.")}</p></div>
        <div className="partner-columns">
          <div><h3>{t("Global academic partners · As of 2026", "Mitra akademik global · Per 2026")}</h3>{(language === "id" ? partners.globalId : partners.global).map((partner) => <p key={partner}>{partner}</p>)}</div>
          <div><h3>{t("Indonesian university partners · Regional core", "Mitra universitas Indonesia · Inti regional")}</h3>{(language === "id" ? partners.indonesiaId : partners.indonesia).map((partner) => <p key={partner}>{partner}</p>)}</div>
        </div>
      </section>
    </>
  );
}
