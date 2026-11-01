import type { Metadata } from "next";
import "@fontsource-variable/inter-tight";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { SubtitleLanguageProvider } from "./components/subtitle-language";
import { Localized } from "./components/subtitle-language";

export const metadata: Metadata = {
  title: { default: "The InterAsian Legalities Consortium", template: "%s — InterAsian Legalities" },
  description: "An interdisciplinary research consortium investigating Asian legal systems, cultures and connected forms of governance.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SubtitleLanguageProvider>
          <a className="skip-link" href="#main"><Localized en="Skip to content" id="Lewati ke konten" /></a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </SubtitleLanguageProvider>
      </body>
    </html>
  );
}
