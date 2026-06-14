import Link from "next/link";
import { ArrowIcon, CalendarIcon, PhoneIcon } from "./icons";
import { site } from "@/lib/site";

export function CallButton({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={site.phoneHref}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold transition ${
        dark ? "bg-brand-charcoal text-white hover:bg-black" : "bg-brand-orange text-white hover:bg-orange-600"
      }`}
    >
      <PhoneIcon className="h-4 w-4" />
      Call now
    </a>
  );
}

export function BookingButton({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#book-online"
      data-servicem8-placeholder="true"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold transition ${
        dark
          ? "border border-white/20 bg-white text-brand-charcoal hover:bg-orange-50"
          : "border border-neutral-200 bg-white text-brand-charcoal shadow-lift hover:border-orange-200 hover:bg-orange-50"
      }`}
    >
      <CalendarIcon className="h-4 w-4" />
      Book online
    </a>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-orange-700">
      {children}
      <ArrowIcon className="h-4 w-4" />
    </Link>
  );
}
