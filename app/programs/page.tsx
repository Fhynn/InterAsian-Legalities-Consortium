"use client";

import { PageIntro } from "../components/page-intro";
import { useSubtitleLanguage } from "../components/subtitle-language";
import { programs } from "../data";

export default function ProgramsPage() {
  const { language } = useSubtitleLanguage();
  const t = (en: string, id: string) => language === "id" ? id : en;

  return (
    <>
      <PageIntro index="02" eyebrowEn="Academic gatherings" eyebrowId="Pertemuan akademik" titleEn="Programs & Events" titleId="Program & Acara" subtitleEn="Workshops, seminars and academic exchange" subtitleId="Lokakarya, seminar, dan pertukaran akademik" descriptionEn="Workshops, symposiums, and ongoing seminar series fostering collaborative inquiry across Asia and Australia." descriptionId="Lokakarya, simposium, dan seri seminar berkelanjutan yang mendorong kajian kolaboratif di Asia dan Australia." />
      <section className="programs-list wrap">
        {programs.map((program, index) => (
          <article key={program.title} className="program-item">
            <div className="program-number">0{index + 1}</div>
            <div className="program-meta"><span>{t(program.type, program.typeId)}</span><time>{t(program.date, program.dateId)}</time><span>{t(program.place, program.placeId)}</span></div>
            <div className="program-body">
              <h2>{t(program.title, program.titleId)}</h2>
              {program.presenter && <p className="speaker-line">{t("Presented by", "Dipresentasikan oleh")}: <strong>{program.presenter}</strong> &nbsp;|&nbsp; {t("Chaired by", "Dipimpin oleh")}: <strong>{program.chair}</strong></p>}
              <p>{t(program.description, program.descriptionId)}</p>
              <small>{t(program.outcome, program.outcomeId)}</small>
            </div>
            <span className="program-status">{t(program.status, program.statusId)}</span>
          </article>
        ))}
      </section>
    </>
  );
}
