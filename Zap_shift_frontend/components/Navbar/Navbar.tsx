"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import bandLogo from '../../public/assets/brand.png'
import Image from "next/image";


const navLinks = [
  { label: "Services", href: "/" },
  { label: "Coverage", href: "/doctors" },
  { label: "About Us", href: "/services" },
  { label: "Pricing", href: "/appointment" },
  { label: "Be a Rider", href: "#contact", isHash: true },
];

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  //   const { user } = useSelector(state => state.authSlice)
  const pathname = usePathname();
  const baseLinkClass =
    "group relative inline-flex items-center text-xs font-semibold uppercase tracking-[0.22em] transition";

  const hideOnRoutes = ["/login", "/registration", "/register"];
  const shouldHide = hideOnRoutes.some((route) =>
    pathname?.startsWith(route)
  );
  if (shouldHide) return null;
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="pointer-events-none absolute inset-x-6 top-2 h-16 rounded-full to-transparent md:inset-x-10"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl pt-2">
        <div className="relative overflow-visible rounded-2xl border border-white/10 bg-white text-black  ">
          <div
            className="pointer-events-none absolute -left-16 -top-10 h-28 w-28 rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-12 top-6 rounded-full bg-emerald-400/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex items-center gap-4 px-4 h-20">
            <Link
              href="/"
              className="flex items-center rounded-xl  "
            >
              <Image
                src={bandLogo}
                className="h-32 w-auto"
                alt="band logo"
                priority
              />
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
              {navLinks.map((link) => {
                const isActive = !link.isHash && pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${baseLinkClass} ${
                      isActive
                        ? "text-black"
                        : "text-black/70 hover:text-black"
                    }`}
                  >
                    <span className="pr-1">{link.label}</span>
                    <span
                      className={`pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full origin-left bg-lime-400 transition duration-200 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="ml-auto flex items-center gap-3">
              <div className="hidden items-center gap-2 md:flex">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-lg border border-black/20 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-black/5"
                >
                  Sign in
                </Link>
                <Link
                  href="/registration"
                  className="inline-flex items-center justify-center rounded-lg bg-black px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm shadow-black/10 transition hover:bg-black/90"
                >
                  Create account
                </Link>
              </div>
        
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 p-2 text-black transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/70 md:hidden"
                aria-expanded={mobileOpen}
                onClick={() => {
                  setMobileOpen((open) => !open);
                  setProfileOpen(false);
                }}
              >
                {mobileOpen ? (
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>

          {mobileOpen && (
            <div className="relative border-t border-white/10 px-4 pb-4 pt-3 md:hidden">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = !link.isHash && pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`group relative inline-flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition ${
                        isActive
                          ? "bg-white/15 text-black shadow-inner shadow-white/10"
                          : "bg-white/5 text-black/80 hover:bg-white/10 hover:text-black"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`h-1 rounded-full transition ${
                          isActive
                            ? "w-10 bg-lime-400"
                            : "w-6 bg-white/30 group-hover:w-10"
                        }`}
                      />
                    </Link>
                  );
                })}

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-3 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-black/5"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center rounded-xl bg-black px-3 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-sm shadow-black/10 transition hover:bg-black/90"
                  >
                    Create account
                  </Link>
                </div>

                <Link
                  href="/appointment"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-3 py-2 text-sm font-semibold text-[#05302A] shadow-lg shadow-lime-500/30 transition hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500/60"
                >
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                  Book a visit
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
