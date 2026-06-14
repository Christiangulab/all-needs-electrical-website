import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { BookingButton, CallButton } from "@/components/ui";
import { serviceAreas, site, suburbs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact All Needs Electrical Solutions for premium electrical work across Sydney NSW.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="noise text-white">
        <div className="container-pad py-14 sm:py-20">
          <p className="mb-4 inline-flex rounded-md border border-orange-300/25 bg-orange-400/10 px-3 py-2 text-xs font-black uppercase tracking-widest text-orange-200">
            Contact {site.name}
          </p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Book a premium Sydney electrician.</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
            Call for urgent work, or send the details for EV chargers, CCTV, switchboard upgrades, strata maintenance and planned electrical projects.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <BookingButton dark />
          </div>
        </div>
      </section>
      <ContactForm />
      <section className="bg-neutral-100 py-16">
        <div className="container-pad">
          <h2 className="text-3xl font-black tracking-tight">Sydney service coverage</h2>
          <p className="mt-5 text-sm leading-8 text-neutral-600">
            Servicing {serviceAreas.join(", ")} including {suburbs.join(", ")} and surrounding Sydney suburbs.
          </p>
        </div>
      </section>
    </main>
  );
}
