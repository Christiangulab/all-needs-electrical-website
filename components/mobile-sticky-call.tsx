import { PhoneIcon } from "./icons";
import { site } from "@/lib/site";

export function MobileStickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-orange-300 bg-white p-3 shadow-[0_-12px_30px_rgba(0,0,0,.16)] sm:hidden">
      <a href={site.phoneHref} className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-orange px-5 text-sm font-black text-white">
        <PhoneIcon className="h-4 w-4" />
        Call All Needs Electrical Solutions
      </a>
    </div>
  );
}
