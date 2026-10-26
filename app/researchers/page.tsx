import { PageIntro } from "../components/page-intro";
import { ResearcherDirectory } from "./researcher-directory";

export const metadata = { title: "Our Researchers" };

export default function ResearchersPage() {
  return (
    <>
      <PageIntro index="03" eyebrowEn="Scholarly directory" eyebrowId="Direktori akademik" titleEn="Consortium Researchers" titleId="Peneliti Konsorsium" subtitleEn="An interdisciplinary scholarly network" subtitleId="Jejaring akademik lintas disiplin" descriptionEn="Our interdisciplinary network brings together leading academics across prominent global and Asian institutions." descriptionId="Jejaring lintas disiplin kami mempertemukan akademisi terkemuka dari berbagai institusi utama di Asia dan dunia." />
      <ResearcherDirectory />
    </>
  );
}
