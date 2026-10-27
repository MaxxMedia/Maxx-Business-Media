import Link from "next/link";

export default function SiteFooter() {
return (
<footer className="w-full bg-inverse-surface text-inverse-on-surface pt-space-xl pb-space-lg" id="contact">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter-lg pb-space-xl">
<div className="lg:col-span-2 space-y-space-md pr-space-md">
<div className="flex items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-surface-container-lowest font-bold tracking-tight">
{"MAXX BUSINESS MEDIA"}</span>
</div>
<p className="font-body-sm text-body-sm text-surface-variant max-w-md">
{"MAXX Business Media Pvt. Ltd. is a premier B2B industrial exhibition organizer and industrial publishing powerhouse connecting enterprise market makers across manufacturing, tooling, automation, and industrial technology sectors globally."}</p>
<div className="flex items-center gap-space-sm pt-space-xs">
<a className="w-9 h-9 rounded-lg bg-surface-container-high/10 hover:bg-primary-container hover:text-on-primary flex items-center justify-center text-inverse-on-surface transition-colors" href="https://www.linkedin.com/company/maxx-business-media/mycompany/" aria-label="MAXX Business Media on LinkedIn">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"share"}</span>
</a>
<Link className="w-9 h-9 rounded-lg bg-surface-container-high/10 hover:bg-primary-container hover:text-on-primary flex items-center justify-center text-inverse-on-surface transition-colors" href="/" aria-label="MAXX Business Media homepage">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"public"}</span>
</Link>
<a className="w-9 h-9 rounded-lg bg-surface-container-high/10 hover:bg-primary-container hover:text-on-primary flex items-center justify-center text-inverse-on-surface transition-colors" href="mailto:info@maxxmedia.in" aria-label="Email MAXX Business Media">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"mail"}</span>
</a>
</div>
</div>
<div className="space-y-space-sm">
<h4 className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider">
{"Quick Navigation"}</h4>
<ul className="space-y-space-xs font-body-sm text-body-sm">
<li className="cursor-pointer text-surface-variant hover:text-surface-container-lowest transition-colors">
<Link data-path="about-us" href="/about-us">
{"About Company"}</Link>
</li>
<li className="cursor-pointer text-surface-variant hover:text-surface-container-lowest transition-colors">
<Link data-path="events" href="/events">
{"Calendar & Expos"}</Link>
</li>
<li className="cursor-pointer text-surface-variant hover:text-surface-container-lowest transition-colors">
<Link data-path="services" href="/#services">
{"Exhibition Services"}</Link>
</li>
<li className="cursor-pointer text-surface-variant hover:text-surface-container-lowest transition-colors">
<Link data-path="media" href="/#media">
{"Press & Coverage"}</Link>
</li>
<li className="cursor-pointer text-surface-variant hover:text-surface-container-lowest transition-colors">
<Link data-path="careers" href="/leadership#careers">
{"Careers & Culture"}</Link>
</li>
</ul>
</div>
<div className="space-y-space-sm">
<h4 className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider">
{"Brands & Media"}</h4>
<ul className="space-y-space-xs font-body-sm text-body-sm">
<li className="cursor-pointer text-surface-variant hover:text-surface-container-lowest transition-colors">
<Link data-path="diemex-expo" href="/events#flagship-convocation">
{"DIEMEX International Expo"}</Link>
</li>
<li className="cursor-pointer text-surface-variant hover:text-surface-container-lowest transition-colors">
<Link data-path="our-brands" href="/#brands">
{"Tooling & Mold Tech Showcase"}</Link>
</li>
<li className="cursor-pointer text-surface-variant hover:text-surface-container-lowest transition-colors">
<Link data-path="publications" href="/#publications">
{"Industrial Trade Journals"}</Link>
</li>
<li className="cursor-pointer text-surface-variant hover:text-surface-container-lowest transition-colors">
<Link data-path="publications" href="/#publications">
{"Manufacturing Digests"}</Link>
</li>
<li className="cursor-pointer text-surface-variant hover:text-surface-container-lowest transition-colors">
<Link data-path="our-brands" href="/#brands">
{"Industry Directories"}</Link>
</li>
</ul>
</div>
<div className="space-y-space-sm">
<h4 className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider">
{"Corporate Desk"}</h4>
<div className="space-y-space-xs font-body-sm text-body-sm text-surface-variant">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5" aria-hidden="true">
{"location_on"}</span>
<span>
{"Corporate Headquarters, Maharashtra, India"}</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0" aria-hidden="true">
{"call"}</span>
<span>
{"+91 22 2845 7800"}</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0" aria-hidden="true">
{"mail"}</span>
<span>
{"info@maxxmedia.in"}</span>
</div>
<div className="pt-space-xs">
<Link className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary-fixed hover:text-surface-container-lowest transition-colors" data-path="contact" href="/#contact">
<span>
{"Official Inquiry Desk"}</span>
<span className="material-symbols-outlined text-[14px]" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
</div>
</div>
</div>
</div>
<div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-secondary-fixed-dim">
<p>
{"© 2026 MAXX Business Media Pvt. Ltd. All rights reserved."}</p>
<div className="flex items-center gap-space-md">
<a className="hover:text-surface-container-lowest transition-colors" data-path="privacy-policy" href="#">
{"Privacy Policy"}</a>
<a className="hover:text-surface-container-lowest transition-colors" data-path="terms-of-service" href="#">
{"Terms of Service"}</a>
<Link className="hover:text-surface-container-lowest transition-colors" data-path="exhibitor-guidelines" href="/events#download-center">
{"Exhibitor Guidelines"}</Link>
<Link className="hover:text-surface-container-lowest transition-colors" data-path="sitemap" href="/#main-navigation">
{"Sitemap"}</Link>
</div>
</div>
</div>
</footer>

);
}
