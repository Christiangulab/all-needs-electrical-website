import { BookingButton, CallButton } from "./ui";

export function ContactForm() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="container-pad grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-brand-orange">Get a fast quote</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">Tell us what needs power, protection or repair.</h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            For urgent jobs, call now. For planned work, send the details and the team can confirm availability, scope and next steps.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <span id="book-online">
            <BookingButton />
            </span>
          </div>
          <p className="mt-3 text-xs font-semibold text-neutral-500">ServiceM8 booking button placeholder ready for embed integration.</p>
        </div>
        <form className="grid gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5 shadow-lift sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-neutral-800">
              Name
              <input className="min-h-12 rounded-md border border-neutral-200 bg-white px-4 outline-none ring-brand-orange/30 focus:ring-4" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-neutral-800">
              Phone
              <input className="min-h-12 rounded-md border border-neutral-200 bg-white px-4 outline-none ring-brand-orange/30 focus:ring-4" placeholder="Best contact number" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-bold text-neutral-800">
            Suburb
            <input className="min-h-12 rounded-md border border-neutral-200 bg-white px-4 outline-none ring-brand-orange/30 focus:ring-4" placeholder="e.g. Hurstville, Miranda, Bondi" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-neutral-800">
            What do you need?
            <textarea className="min-h-32 rounded-md border border-neutral-200 bg-white px-4 py-3 outline-none ring-brand-orange/30 focus:ring-4" placeholder="Emergency fault, EV charger, CCTV, switchboard upgrade..." />
          </label>
          <button className="min-h-12 rounded-md bg-brand-charcoal px-5 text-sm font-black text-white transition hover:bg-black" type="button">
            Request callback
          </button>
        </form>
      </div>
    </section>
  );
}
