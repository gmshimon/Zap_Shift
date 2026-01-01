import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden  ">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/90 shadow-xl shadow-slate-900/5">
          <div className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:px-12">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                Not found
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-semibold text-slate-900 sm:text-7xl">
                  404
                </span>
                <span className="text-base font-semibold uppercase tracking-[0.18em] text-lime-700">
                  Off route
                </span>
              </div>
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                This page took a different route
              </h1>
              <p className="text-sm text-slate-600 sm:text-base">
                The link you followed is not available. Check the address or
                jump back to a safe spot. Our team is on standby if you need a
                hand.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/"
                  className="bg-[#b6d35e] text-black px-6 py-2 rounded-2xl font-semibold flex items-center shadow-md shadow-lime-500/30 transition hover:-translate-y-[1px]"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
