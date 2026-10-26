import { Localized, Subtitle } from "./subtitle-language";

export function PageIntro({ index, eyebrowEn, eyebrowId, titleEn, titleId, subtitleEn, subtitleId, descriptionEn, descriptionId }: { index: string; eyebrowEn: string; eyebrowId: string; titleEn: string; titleId: string; subtitleEn: string; subtitleId: string; descriptionEn: string; descriptionId: string }) {
  return (
    <section className="page-intro">
      <div className="section-index">{index}</div>
      <div>
        <Localized as="p" className="eyebrow" en={eyebrowEn} id={eyebrowId} />
        <Localized as="h1" en={titleEn} id={titleId} />
        <Subtitle en={subtitleEn} id={subtitleId} className="page-subtitle" />
      </div>
      <div className="intro-copy"><Localized as="p" en={descriptionEn} id={descriptionId} /></div>
    </section>
  );
}
