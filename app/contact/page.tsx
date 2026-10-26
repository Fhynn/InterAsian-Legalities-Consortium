import { ContactForm } from "./contact-form";
import { PageIntro } from "../components/page-intro";
import { Localized } from "../components/subtitle-language";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageIntro index="05" eyebrowEn="Get in touch" eyebrowId="Mari terhubung" titleEn="Contact Us" titleId="Hubungi Kami" subtitleEn="Start a conversation with the consortium" subtitleId="Mulai percakapan dengan konsorsium" descriptionEn="An interdisciplinary research partnership investigating legalities, governance systems, and historical legal traditions across Asia. Part of the broader InterAsia Partnership." descriptionId="Kemitraan riset lintas disiplin yang mengkaji legalitas, sistem tata kelola, dan tradisi hukum historis di Asia. Bagian dari jaringan InterAsia Partnership." />
      <section className="contact-layout wrap">
        <div className="contact-details">
          <Localized as="p" className="eyebrow" en="Direct contact" id="Kontak langsung" />
          <a href="mailto:interasianlegalities@gmail.com">interasianlegalities<br />@gmail.com</a>
          <div><Localized en="Network" id="Jejaring" /><Localized as="p" en={<>Part of the InterAsia Partnership<br />Launched April 2024</>} id={<>Bagian dari InterAsia Partnership<br />Diluncurkan April 2024</>} /></div>
          <div><Localized en="Social" id="Media sosial" /><p><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a><br /><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p></div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
