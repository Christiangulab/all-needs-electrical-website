import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { BoltIcon, PhoneIcon } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-ink/95 text-white backdrop-blur">
      <div className="container-pad flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-orange text-white">
            <BoltIcon className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-wide">All Needs</span>
            <span className="block text-xs font-semibold text-white/70">Electrical Solutions</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-xs font-semibold text-white/75 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={site.phoneHref} className="inline-flex min-h-10 items-center gap-2 rounded-md bg-brand-orange px-4 text-sm font-bold hover:bg-orange-600">
          <PhoneIcon className="h-4 w-4" />
          <span className="hidden sm:inline">{site.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
