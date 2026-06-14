import Link from "next/link";
import { navItems, serviceAreas, site, suburbs } from "@/lib/site";
import { BoltIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-brand-ink pb-24 pt-14 text-white sm:pb-10">
      <div className="container-pad grid gap-10 md:grid-cols-[1.3fr_.8fr_.9fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-orange">
              <BoltIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-black">{site.name}</p>
              <p className="text-sm text-white/60">Licensed electrical contractor in Sydney NSW</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65">
            Premium residential, strata and commercial electrical work across Sydney, with a focus on urgent response, clean workmanship and clear communication.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-white/50">Pages</h2>
          <div className="grid gap-2 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-white/50">Service Areas</h2>
          <p className="text-sm leading-7 text-white/70">{[...serviceAreas, ...suburbs].join(", ")}.</p>
        </div>
      </div>
      <div className="container-pad mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
        <p>© {new Date().getFullYear()} {site.name}. {site.domain}</p>
      </div>
    </footer>
  );
}
