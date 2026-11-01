"use client";

import { useState } from "react";
import { researchers } from "../data";
import { useSubtitleLanguage } from "../components/subtitle-language";

const filters = ["All", "Australia", "Indonesia", "International"] as const;

export function ResearcherDirectory() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const { language } = useSubtitleLanguage();
  const t = (en: string, id: string) => language === "id" ? id : en;
  const visible = filter === "All" ? researchers : researchers.filter((person) => person.region === filter);

  return (
    <section className="researchers-section wrap">
      <div className="filter-bar" aria-label={t("Filter researchers by region", "Saring peneliti berdasarkan wilayah")}>
        <span>{t("Filter by region", "Saring berdasarkan wilayah")}</span>
        <div>{filters.map((item) => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)} className={filter === item ? "active" : ""}>{item === "All" ? t("All", "Semua") : item === "International" ? t("International", "Internasional") : item}</button>)}</div>
      </div>
      <div className="researcher-grid" aria-live="polite">
        {visible.map((person, index) => (
          <article key={person.name} className="researcher-card">
            {person.image ? <img className="researcher-photo" src={person.image} alt={t(`${person.name} portrait`, `Potret ${person.name}`)} /> : <div className="researcher-monogram" aria-hidden="true">{person.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</div>}
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{person.name}</h2>
            <p>{person.institution}</p>
            <small>{t(person.field, person.fieldId)}</small>
          </article>
        ))}
      </div>
      <aside className="coordinator-note"><span>{t("International coordination", "Koordinasi internasional")}</span><h2>Mastin Annisa Nur Fauziah</h2><p><strong>{t("International Research Coordinator.", "Koordinator Riset Internasional.")}</strong> {t("Overseeing consortium operational logistics, inter-institutional partner liaisons, and international collaborative activities.", "Mengawasi logistik operasional konsorsium, hubungan antarmitra institusi, dan kegiatan kolaboratif internasional.")}</p></aside>
    </section>
  );
}
