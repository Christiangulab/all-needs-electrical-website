import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileStickyCall } from "@/components/mobile-sticky-call";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Sydney Electrician`,
    template: `%s | ${site.name}`,
  },
  description: "Premium Sydney electrical contractor for emergency electrical work, EV chargers, CCTV, switchboard upgrades, property managers and strata.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Sydney Electrician`,
    description: "Premium Sydney electrical contractor for homes, strata and businesses.",
    images: ["/images/all-needs-electrician-hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
        <Header />
        {children}
        <Footer />
        <MobileStickyCall />
      </body>
    </html>
  );
}
