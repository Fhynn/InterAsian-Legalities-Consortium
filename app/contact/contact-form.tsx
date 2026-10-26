"use client";

import { FormEvent, useState } from "react";
import { Arrow } from "../components/icons";
import { useSubtitleLanguage } from "../components/subtitle-language";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { language } = useSubtitleLanguage();
  const t = (en: string, id: string) => language === "id" ? id : en;
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || t("Consortium enquiry", "Pertanyaan untuk konsorsium")));
    const body = encodeURIComponent(`${t("Name", "Nama")}: ${data.get("name")}\nEmail: ${data.get("email")}\n${t("Organisation", "Organisasi")}: ${data.get("organisation")}\n\n${data.get("message")}`);
    setSent(true);
    window.location.href = `mailto:interasianlegalities@gmail.com?subject=${subject}&body=${body}`;
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row"><label>{t("Name", "Nama")}<input name="name" required autoComplete="name" /></label><label>{t("Organisation", "Organisasi")}<input name="organisation" autoComplete="organization" /></label></div>
      <label>Email<input name="email" required type="email" autoComplete="email" /></label>
      <label>{t("Subject", "Subjek")}<input name="subject" required /></label>
      <label>{t("Message", "Pesan")}<textarea name="message" required rows={6} /></label>
      <button type="submit">{t("Prepare email", "Siapkan email")} <Arrow /></button>
      <p className="form-note" aria-live="polite">{sent ? t("Your email application should now open with the message prepared.", "Aplikasi email Anda akan terbuka dengan pesan yang telah disiapkan.") : t("Submitting opens your email application; no personal data is stored on this website.", "Mengirim formulir akan membuka aplikasi email Anda; tidak ada data pribadi yang disimpan di situs ini.")}</p>
    </form>
  );
}
