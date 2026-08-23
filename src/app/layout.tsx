import type { Metadata, Viewport } from "next";
import { fraunces, plexSans, plexMono } from "@/lib/fonts";
import { baseMetadata, personJsonLd } from "@/lib/seo";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/SkipLink";
import { cn } from "@/lib/cn";
import "./globals.css";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E9E6DE" },
    { media: "(prefers-color-scheme: dark)", color: "#141312" },
  ],
};

// Sets theme class before paint — avoids a flash of the wrong theme.
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(fraunces.variable, plexSans.variable, plexMono.variable)}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
      </head>
      <body>
        <SkipLink />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
