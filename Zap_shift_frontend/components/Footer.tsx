"use client";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "../public/assets/logo.png";

const navItems = [
  { label: "Services", href: "#" },
  { label: "Coverage", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

const socials = [
  { label: "LinkedIn", href: "#", icon: Linkedin, color: "#0A66C2" },
  { label: "X", href: "#", icon: Twitter, color: "#000000" },
  { label: "Facebook", href: "#", icon: Facebook, color: "#1877F2" },
  { label: "YouTube", href: "#", icon: Youtube, color: "#FF0000" },
];

const Footer = () => {
  return (
    <footer className="mt-16 px-4 pb-6">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#070707] px-6 py-10 text-center text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={logo}
            alt="ZapShift logo"
            className="h-10 w-auto sm:h-11"
            priority
          />
          <p className="max-w-2xl text-xs leading-relaxed text-slate-200 sm:text-sm">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        <div className="my-8 h-px w-full border-b border-dashed border-teal-800/50" />

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-slate-200 sm:text-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-[#b6d35e]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="my-8 h-px w-full border-b border-dashed border-teal-800/50" />

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {socials.map(({ label, href, icon: Icon, color }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:h-11 sm:w-11"
              style={{ color }}
            >
              <Icon className="h-5 w-5" strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
