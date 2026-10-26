import { PageIntro } from "../components/page-intro";
import { Localized, Subtitle } from "../components/subtitle-language";

export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <>
      <PageIntro index="04" eyebrowEn="Academic output" eyebrowId="Karya akademik" titleEn="Publications" titleId="Publikasi" subtitleEn="Academic output and research in progress" subtitleId="Karya akademik dan riset yang sedang dikembangkan" descriptionEn="Monographs, edited volumes, and peer-reviewed journal articles produced by consortium researchers." descriptionId="Monograf, buku suntingan, dan artikel jurnal yang ditinjau sejawat karya para peneliti konsorsium." />
      <section className="publication-stage wrap">
        <div className="publication-visual" aria-hidden="true"><span>INTERASIAN<br />LEGALITIES</span><i>01</i><Localized as="b" en={<>RESEARCH<br />IN PROGRESS</>} id={<>RISET SEDANG<br />DIKEMBANGKAN</>} /></div>
        <div className="publication-copy">
          <Localized as="p" className="eyebrow" en="Journal articles · Books & monographs" id="Artikel jurnal · Buku & monograf" />
          <Localized as="h2" en="Publications Coming Soon" id="Publikasi Segera Hadir" />
          <Subtitle en="Research outputs are currently in development" id="Karya riset sedang dalam pengembangan" />
          <Localized as="p" en="Check back for upcoming research monographs, peer-reviewed journal papers, and collaborative thematic publications currently under development." id="Nantikan monograf riset, artikel jurnal yang ditinjau sejawat, dan publikasi tematik kolaboratif yang sedang dikembangkan." />
        </div>
      </section>
    </>
  );
}
