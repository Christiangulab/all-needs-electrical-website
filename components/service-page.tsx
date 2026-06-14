import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { BoltIcon, ShieldIcon } from "@/components/icons";
import { BookingButton, CallButton, TextLink } from "@/components/ui";
import { serviceAreas, servicePages, services, site, suburbs, type ServicePath } from "@/lib/site";

type Props = {
  path: ServicePath;
};

export function makeServiceMetadata(path: ServicePath): Metadata {
  const page = servicePages[path];

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${page.title} | ${site.name}`,
      description: page.description,
      url: `${site.url}${path}`,
      images: ["/images/all-needs-electrician-hero.png"],
    },
  };
}

export function ServicePage({ path }: Props) {
  const page = servicePages[path];
  const related = services.filter((service) => service.href !== path);

  return (
    <main>
      <section className="noise text-white">
        <div className="container-pad grid gap-10 py-14 sm:py-18 lg:grid-cols-[1fr_.86fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-md border border-orange-300/25 bg-orange-400/10 px-3 py-2 text-xs font-black uppercase tracking-widest text-orange-200">
              {site.location}
            </p>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <BookingButton dark />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {page.proof.map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-black shadow-glow">
            <Image src="/images/all-needs-electrician-hero.png" alt={`${page.h1} by All Needs Electrical Solutions`} fill className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-brand-orange">What we handle</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">A premium electrical service built for decisive enquiries.</h2>
            <p className="mt-5 text-base leading-8 text-neutral-600">
              Whether the job is in Hurstville, Kogarah, Rockdale, Miranda, Cronulla, Concord, Five Dock, Leichhardt, Bondi, Rose Bay or Double Bay, the focus is the same: clear advice, compliant work and a tidy result.
            </p>
          </div>
          <div className="grid gap-4">
            {page.bullets.map((item) => (
              <div key={item} className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-orange text-white">
                  <BoltIcon className="h-4 w-4" />
                </span>
                <p className="text-sm font-bold leading-7 text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-16 sm:py-20">
        <div className="container-pad grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-brand-orange">Why All Needs</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">The kind of operator property owners can trust.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["Licensed electrical workmanship", "Clear pricing and communication", "Residential, strata and commercial capability"].map((item) => (
              <div key={item} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-lift">
                <ShieldIcon className="h-6 w-6 text-brand-orange" />
                <p className="mt-4 text-sm font-black leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal py-16 text-white sm:py-20">
        <div className="container-pad">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-orange-300">Local SEO coverage</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Servicing Sydney’s high-value residential and commercial corridors.</h2>
            <p className="mt-5 text-sm leading-8 text-white/70">
              Key service areas include {serviceAreas.join(", ")}. Common job locations include {suburbs.join(", ")} and nearby suburbs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad">
          <p className="text-sm font-black uppercase tracking-widest text-brand-orange">More services</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">Related electrical services.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {related.slice(0, 4).map((service) => (
              <article key={service.href} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-lift">
                <h3 className="text-base font-black">{service.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-neutral-600">{service.description}</p>
                <TextLink href={service.href}>View service</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
