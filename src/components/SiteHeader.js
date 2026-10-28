"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Home", "/"], ["About Us", "/about-us"], ["Events", "/events"],
  ["Our Brands", "/our-brands"], ["Services", "/services"], ["Publications", "/publications"],
  ["Media", "/media"], ["Careers", "/careers"], ["Contact", "/contact"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  const active = (href) => href === pathname || (href === "/about-us" && pathname === "/leadership") || (href === "/events" && pathname.startsWith("/events/"));
  const linkClass = (href) => "h-full inline-flex items-center font-label-md text-label-md transition-colors border-b-2 " + (active(href) ? "text-primary-container font-semibold border-primary-container" : "text-on-surface-variant border-transparent hover:text-primary");
  return (
    <header id="main-navigation" className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1360px] mx-auto px-margin-sm sm:px-margin lg:px-margin-lg flex items-center justify-between gap-space-xs sm:gap-space-md">
        <Link href="/" aria-label="MAXX Business Media home" className="flex items-center gap-space-sm shrink-0" onClick={() => setOpen(false)}>
          <img src="/images/stitch/maxx-business-media-corporate-logo-b0884dcdef.png" alt="MAXX Business Media" className="h-8 w-auto max-w-24 object-contain" width="64" height="32" />
          <span className="hidden sm:flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight">MAXX</span><span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Business Media Pvt. Ltd.</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-space-md h-full">
          {links.map(([label, href]) => label === "About Us" ? (
            <div key={href} className="relative group h-full flex items-center">
              <Link href={href} className={linkClass(href)} aria-current={active(href) ? "page" : undefined}>{label}</Link>
              <div className="absolute hidden group-hover:block group-focus-within:block top-full left-0 w-52 bg-white rounded-b-lg shadow-lg p-2">
                <Link href="/about-us" className="block p-3 rounded hover:bg-surface-container-low text-label-md">Our Story</Link>
                <Link href="/leadership" className="block p-3 rounded hover:bg-surface-container-low text-label-md">Leadership &amp; Team</Link>
              </div>
            </div>
          ) : <Link key={href} href={href} className={linkClass(href)} aria-current={active(href) ? "page" : undefined}>{label}</Link>)}
        </nav>
        <div className="flex items-center gap-space-sm shrink-0">
          <Link href="/events" onClick={() => setOpen(false)} className="inline-flex items-center justify-center px-space-md py-space-xs h-10 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-all duration-150 hover:-translate-y-0.5 shadow-sm">Explore Events</Link>
          <span aria-hidden="true" className="hidden xl:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></span>
          <button type="button" className="xl:hidden inline-flex size-10 items-center justify-center rounded-lg text-on-surface hover:bg-surface-container" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><span aria-hidden="true" className="material-symbols-outlined">{open ? "close" : "menu"}</span></button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="xl:hidden bg-white border-t border-surface-container px-margin py-space-md max-h-[calc(100dvh-5rem)] overflow-y-auto shadow-lg">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={"block rounded-lg px-3 py-3 font-label-md " + (active(href) ? "bg-primary-fixed text-on-primary-fixed" : "text-on-surface hover:bg-surface-container-low")}>{label}</Link>)}
        <Link href="/leadership" onClick={() => setOpen(false)} className="block px-3 py-3 font-label-md text-on-surface">Leadership &amp; Team</Link>
      </nav>}
    </header>
  );
}
