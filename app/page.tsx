import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { BoltIcon, ShieldIcon } from "@/components/icons";
import { BookingButton, CallButton, TextLink } from "@/components/ui";
import { serviceAreas, services, site, suburbs } from "@/lib/site";

const reviews = [
  "Fast response, clean work and explained everything clearly.",
  "Excellent finish on our EV charger install. Very professional.",
  "Reliable contractor for our strata maintenance and urgent faults.",
];

const faqs = [
  ["Do you handle emergency electrical work?", "Yes. Call for urgent faults, tripping circuits, power issues and make-safe electrical work across Sydney."],
  ["Can you install EV chargers in apartments?", "Yes. All Needs Electrical Solutions can assist with home, apartment and strata EV charging requirements, including load checks and compliant installation."],
  ["Which Sydney areas do you service?", `We service ${serviceAreas.join(", ")} and nearby suburbs including ${suburbs.join(", ")}.`],
  ["Is there an online booking option?", "Yes. The site includes a ServiceM8 booking placeholder ready to connect to your live booking flow."],
];

export default function Home() {
  return (
    <main>
      <section className="noise overflow-hidden text-white">
        <div className="container-pad grid min-h-[calc(100svh-64px)] gap-10 py-12 sm:py-16 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-md border border-orange-300/25 bg-orange-400/10 px-3 py-2 text-xs font-black uppercase tracking-widest text-orange-200">
              Sydney NSW Electrical Contractor
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Premium electricians built for urgent calls and clean installs.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
              {site.name} helps Sydney homes, strata teams and businesses with emergency electrical repairs, EV chargers, CCTV, switchboard upgrades and property maintenance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <BookingButton dark />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs font-bold text-white/70">
              {["Licensed team", "Strata ready", "Sydney wide"].map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-black shadow-glow lg:min-h-[560px]">
            <Image src="/images/all-needs-electrician-hero.png" alt="All Needs Electrical Solutions electrician inspecting a switchboard" fill priority className="object-cover" sizes="(min-width: 1024px) 52vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/15 bg-black/55 p-4 backdrop-blur">
              <p className="text-sm font-black">Call-focused electrical support</p>
              <p className="mt-1 text-xs leading-6 text-white/70">Emergency faults, planned upgrades and strata maintenance across Sydney.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white py-6">
        <div className="container-pad grid gap-4 text-center sm:grid-cols-4">
          {[
            ["24/7", "urgent fault pathway"],
            ["5", "core service divisions"],
            ["4", "priority Sydney regions"],
            ["$5M+", "premium operator positioning"],
          ].map(([stat, label]) => (
            <div key={label} className="rounded-md bg-neutral-50 px-4 py-5">
              <p className="text-2xl font-black text-brand-charcoal">{stat}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-neutral-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-widest text-brand-orange">Why choose us</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">Designed around speed, trust and workmanship.</h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {[
              ["Call-ready operations", "Clear triage for emergency faults, booked works and quote requests."],
              ["Premium finish", "Neat cable runs, labelled switchboards and respectful site protection."],
              ["Commercial-grade trust", "Communication that suits homeowners, asset managers, strata and agencies."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-lift">
                <BoltIcon className="h-7 w-7 text-brand-orange" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-16 sm:py-20">
        <div className="container-pad">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-brand-orange">Services</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">Electrical services that convert problems into booked jobs.</h2>
            </div>
            <CallButton dark />
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.href} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-lift">
                <ShieldIcon className="h-7 w-7 text-brand-orange" />
                <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-neutral-600">{service.description}</p>
                <TextLink href={service.href}>View service</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal py-16 text-white sm:py-20">
        <div className="container-pad grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-orange-300">Reviews</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Confidence before the first call.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="text-lg text-brand-amber">★★★★★</p>
              <p className="mt-4 text-sm leading-7 text-white/72">&ldquo;{review}&rdquo;</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-brand-orange">Areas we service</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">Local electricians across Sydney’s key corridors.</h2>
          </div>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div key={area} className="rounded-md border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm font-black">{area}</div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-8 text-neutral-600">
              Common suburbs include {suburbs.join(", ")} and surrounding Sydney communities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-16 sm:py-20">
        <div className="container-pad">
          <p className="text-sm font-black uppercase tracking-widest text-brand-orange">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">Questions before you call.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-lift">
                <summary className="cursor-pointer text-base font-black">{question}</summary>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
