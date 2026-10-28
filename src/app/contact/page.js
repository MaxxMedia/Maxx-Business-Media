import Link from "next/link";
import StitchInteractions from "@/components/StitchInteractions";

export const metadata = { title: "Contact Us & Regional Offices | MAXX Business Media", description: "Whether you are reserving high-load exhibition floorplates, commissioning technical whitepaper teardowns, coordinating international sovereign delegations, or s" };

// Layout, content, and imagery adapted from the exported Stitch screen.
export default function Page() {
  return <StitchInteractions key={"contact"}>
<main className={"w-full pt-20 bg-background min-h-screen"} id={"main-content"}>
<div className={"flex flex-col w-full"}>
<section className={"w-full bg-surface-container-high/60 backdrop-blur-md border-b border-surface-container-highest"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg py-space-xs flex flex-wrap items-center justify-between gap-space-sm text-label-sm font-label-sm text-on-surface-variant"}>
<div className={"flex items-center gap-2"}>
<Link className={"hover:text-primary transition-colors"} href={"/"}>
{"Home"}</Link>
<span className={"material-symbols-outlined text-[14px] text-outline"} aria-hidden={"true"}>
{"chevron_right"}</span>
<Link className={"hover:text-primary transition-colors"} href={"/contact"}>
{"Contact"}</Link>
<span className={"material-symbols-outlined text-[14px] text-outline"} aria-hidden={"true"}>
{"chevron_right"}</span>
<span className={"text-on-surface font-semibold"}>
{"Corporate HQ & Regional Directory"}</span>
</div>
<div className={"flex items-center gap-space-md flex-wrap"}>
<div className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-sm font-semibold"}>
<span className={"w-2 h-2 rounded-full bg-emerald-600 animate-pulse"}>
</span>
<span>
{"SLA < 2-Hour (Active Expo Periods)"}</span>
</div>
<div className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant shadow-sm"}>
<span className={"material-symbols-outlined text-[14px] text-primary-container"} aria-hidden={"true"}>
{"headset_mic"}</span>
<span>
{"Central Desk: "}<strong className={"text-on-surface font-semibold"}>
{"+91 22 2845 7800"}</strong>
</span>
</div>
<div className={"hidden sm:inline-flex items-center gap-1.5 text-on-surface-variant"}>
<span className={"material-symbols-outlined text-[14px] text-primary"} aria-hidden={"true"}>
{"verified"}</span>
<span>
{"Guaranteed < 24h Executive Response"}</span>
</div>
</div>
</div>
</section>
<section className={"w-full relative overflow-hidden bg-linear-to-b/srgb from-surface-container-lowest via-surface to-surface-container-low pt-space-xl pb-space-xl"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"max-w-4xl space-y-space-md"}>
<div className={"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps uppercase tracking-wider"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"hub"}</span>
<span>
{"Direct Industrial Engagement & Regional Hubs"}</span>
</div>
<h1 className={"font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight"}>
{" Connect Directly with South Asia's Premier Industrial Media & Mega-Expo Powerhouse. "}</h1>
<p className={"font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed"}>
{" Whether you are reserving high-load exhibition floorplates, commissioning technical whitepaper teardowns, coordinating international sovereign delegations, or scheduling an executive boardroom briefing, our specialized regional desks ensure zero intermediary lag and committed SLA response times. "}</p>
<div className={"pt-space-xs flex flex-wrap items-center gap-space-md"}>
<a className={"inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-all shadow-md transform hover:-translate-y-0.5"} href={"#inquiry-desk"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"assignment_turned_in"}</span>
<span>
{"Route Enterprise Inquiry"}</span>
</a>
<a className={"inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-on-surface transition-all shadow-sm"} href={"#regional-offices"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"apartment"}</span>
<span>
{"View 4 Regional Hubs"}</span>
</a>
<div className={"flex items-center gap-2 pl-2 text-label-sm font-label-sm text-secondary"}>
<span className={"material-symbols-outlined text-[18px] text-emerald-600"} aria-hidden={"true"}>
{"lock"}</span>
<span>
{"Confidential Corporate NDA Protocols Active"}</span>
</div>
</div>
</div>
<div className={"grid grid-cols-2 md:grid-cols-4 gap-gutter mt-space-xl pt-space-lg border-t border-surface-container-high"}>
<div className={"p-space-md rounded-xl bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm flex flex-col justify-between"}>
<div className={"flex items-center justify-between text-secondary"}>
<span className={"font-label-caps text-label-caps uppercase tracking-wider text-outline"}>
{"Network"}</span>
<span className={"material-symbols-outlined text-[20px] text-primary"} aria-hidden={"true"}>
{"domain"}</span>
</div>
<div className={"mt-space-sm"}>
<div className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>
{"4 Hubs"}</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>
{"Mumbai HQ, Bengaluru, Pune & Delhi-NCR Bureau"}</p>
</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm flex flex-col justify-between"}>
<div className={"flex items-center justify-between text-secondary"}>
<span className={"font-label-caps text-label-caps uppercase tracking-wider text-outline"}>
{"Personnel"}</span>
<span className={"material-symbols-outlined text-[20px] text-primary"} aria-hidden={"true"}>
{"groups"}</span>
</div>
<div className={"mt-space-sm"}>
<div className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>
{"100% In-House"}</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>
{"Direct operations & dedicated technical desk engineers"}</p>
</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm flex flex-col justify-between"}>
<div className={"flex items-center justify-between text-secondary"}>
<span className={"font-label-caps text-label-caps uppercase tracking-wider text-outline"}>
{"Turnaround"}</span>
<span className={"material-symbols-outlined text-[20px] text-primary-container"} aria-hidden={"true"}>
{"timer"}</span>
</div>
<div className={"mt-space-sm"}>
<div className={"font-headline-lg text-headline-lg font-bold text-primary-container"}>
{"< 24h SLA"}</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>
{"Direct callback by designated divisional director"}</p>
</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm flex flex-col justify-between"}>
<div className={"flex items-center justify-between text-secondary"}>
<span className={"font-label-caps text-label-caps uppercase tracking-wider text-outline"}>
{"Alliances"}</span>
<span className={"material-symbols-outlined text-[20px] text-primary"} aria-hidden={"true"}>
{"public"}</span>
</div>
<div className={"mt-space-sm"}>
<div className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>
{"18+ Bilateral"}</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>
{"VDW, UCIMU, JMTBA, TAGMA, IMTMA and AMT liaison"}</p>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"} id={"regional-offices"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm"}>
<div>
<div className={"font-label-caps text-label-caps text-primary uppercase tracking-wider font-bold"}>
{"Physical Presence & Field Bases"}</div>
<h2 className={"font-headline-lg text-headline-lg text-on-surface mt-1"}>
{"Strategic Industrial Regional Offices"}</h2>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant max-w-md"}>
{" Permanent administrative command centers co-located adjacent to India's major manufacturing belts, precision clusters, and primary expo grounds. "}</p>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-2 gap-gutter-lg"}>
<div className={"rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group"}>
<div className={"absolute top-0 left-0 right-0 h-1 bg-primary group-hover:bg-primary-container transition-colors"}>
</div>
<div>
<div className={"flex items-start justify-between gap-space-sm"}>
<div>
<span className={"font-label-caps text-label-caps text-primary font-bold uppercase tracking-wider"}>
{"Office 01 • Corporate HQ"}</span>
<h3 className={"font-headline-md text-headline-md text-on-surface mt-1"}>
{"Mumbai — Nariman Point & Andheri East"}</h3>
</div>
<span className={"px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold shrink-0"}>
{"HQ Apex"}</span>
</div>
<div className={"mt-space-sm p-space-sm rounded-lg bg-surface-container-low text-body-sm font-body-sm text-on-surface-variant"}>
<strong className={"text-on-surface font-semibold"}>
{"Strategic Focus:"}</strong>
{" Executive Management, Sovereign Bilateral Partnerships, Legal, Financial & Corporate Governance, Global Investor Relations. "}</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-space-md text-body-sm font-body-sm"}>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"location_on"}</span>
<span>
{"Corporate Address"}</span>
</div>
<p className={"text-on-surface"}>
{"1204–1208, Maker Chambers V, Nariman Point, Mumbai, Maharashtra 400021, India"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"call"}</span>
<span>
{"Direct Telephony"}</span>
</div>
<p className={"text-on-surface font-medium"}>
{"+91 22 2845 7800 / +91 22 2845 7801"}</p>
<p className={"text-body-sm text-secondary"}>
{"Fax: +91 22 2845 7809"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"badge"}</span>
<span>
{"Key Executives"}</span>
</div>
<p className={"text-on-surface"}>
<strong>
{"Rajesh Sharma"}</strong>
{" (Managing Director Office)"}</p>
<p className={"text-on-surface"}>
<strong>
{"Alok Verma"}</strong>
{" (Director of Operations)"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"schedule"}</span>
<span>
{"Operating Protocol"}</span>
</div>
<p className={"text-on-surface"}>
{"Mon – Sat: 09:00 – 18:30 IST"}</p>
<p className={"text-body-sm text-secondary"}>
{"Email: corporate@maxxmedia.in"}</p>
</div>
</div>
</div>
<div className={"mt-space-lg pt-space-md border-t border-surface-container flex flex-wrap items-center justify-between gap-space-sm"}>
<div className={"flex items-center gap-2"}>
<a className={"inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-label-sm transition-colors"} href={"tel:+912228457800"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"call"}</span>
<span>
{"Call HQ"}</span>
</a>
<a className={"inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-label-sm transition-colors"} href={"mailto:corporate@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"mail"}</span>
<span>
{"Direct Mail"}</span>
</a>
</div>
<a className={"inline-flex items-center gap-1 text-label-sm font-label-sm text-primary-container hover:text-tertiary-container font-semibold transition-colors"} href={"https://www.google.com/maps/search/?api=1&query=Maker%20Chambers%20V%2C%20Nariman%20Point%2C%20Mumbai.%20"} target={"_blank"} rel={"noopener noreferrer"}>
<span>
{"View Map & Transit Guidance"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"arrow_outward"}</span>
</a>
</div>
</div>
<div className={"rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group"}>
<div className={"absolute top-0 left-0 right-0 h-1 bg-primary-container"}>
</div>
<div>
<div className={"flex items-start justify-between gap-space-sm"}>
<div>
<span className={"font-label-caps text-label-caps text-primary-container font-bold uppercase tracking-wider"}>
{"Office 02 • Flagship Expo Hub"}</span>
<h3 className={"font-headline-md text-headline-md text-on-surface mt-1"}>
{"Bengaluru — M.G. Road & BIEC Field Office"}</h3>
</div>
<span className={"px-2.5 py-1 rounded bg-amber-50 text-amber-900 font-label-sm text-label-sm font-semibold shrink-0"}>
{"DIEMEX Ops"}</span>
</div>
<div className={"mt-space-sm p-space-sm rounded-lg bg-surface-container-low text-body-sm font-body-sm text-on-surface-variant"}>
<strong className={"text-on-surface font-semibold"}>
{"Strategic Focus:"}</strong>
{" DIEMEX Flagship Operations, Heavy Rigging Logistics, South India Precision Machining Accounts & Peenya/Hosur Cluster. "}</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-space-md text-body-sm font-body-sm"}>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"location_on"}</span>
<span>
{"Hub Address"}</span>
</div>
<p className={"text-on-surface"}>
{"Ground & 2nd Floor, Prestige Meridian II, M.G. Road, Bengaluru 560001 (Field Desk: BIEC Admin, Tumkur Rd)"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"call"}</span>
<span>
{"Direct Telephony"}</span>
</div>
<p className={"text-on-surface font-medium"}>
{"+91 80 4122 3400 / +91 80 4122 3415"}</p>
<p className={"text-body-sm text-secondary"}>
{"BIEC Desk: +91 80 4122 3488"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"badge"}</span>
<span>
{"Key Executives"}</span>
</div>
<p className={"text-on-surface"}>
<strong>
{"S. Rangarajan"}</strong>
{" (Regional VP - South)"}</p>
<p className={"text-on-surface"}>
<strong>
{"Kavitha Rao"}</strong>
{" (Heavy Rigging Coordinator)"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"schedule"}</span>
<span>
{"Operating Protocol"}</span>
</div>
<p className={"text-on-surface"}>
{"Mon – Sat: 09:00 – 18:30 IST"}</p>
<p className={"text-body-sm text-emerald-700 font-medium"}>
{"24/7 during setup show cycles"}</p>
</div>
</div>
</div>
<div className={"mt-space-lg pt-space-md border-t border-surface-container flex flex-wrap items-center justify-between gap-space-sm"}>
<div className={"flex items-center gap-2"}>
<a className={"inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-label-sm transition-colors"} href={"tel:+918041223400"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"call"}</span>
<span>
{"Call Bengaluru Hub"}</span>
</a>
<a className={"inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-label-sm transition-colors"} href={"mailto:diemex.ops@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"mail"}</span>
<span>
{"DIEMEX Desk"}</span>
</a>
</div>
<a className={"inline-flex items-center gap-1 text-label-sm font-label-sm text-primary-container hover:text-tertiary-container font-semibold transition-colors"} href={"https://www.google.com/maps/search/?api=1&query=Prestige%20Meridian%20II%2C%20M.G.%20Road%20%26%20BIEC%20Logistics%20Gate%204%20Navigation"} target={"_blank"} rel={"noopener noreferrer"}>
<span>
{"BIEC Site Gate & Office Route"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"arrow_outward"}</span>
</a>
</div>
</div>
<div className={"rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group"}>
<div className={"absolute top-0 left-0 right-0 h-1 bg-outline"}>
</div>
<div>
<div className={"flex items-start justify-between gap-space-sm"}>
<div>
<span className={"font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider"}>
{"Office 03 • Tooling & Auto Corridor"}</span>
<h3 className={"font-headline-md text-headline-md text-on-surface mt-1"}>
{"Pune — SB Road & Chakan Industrial Belt"}</h3>
</div>
<span className={"px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold shrink-0"}>
{"DMW Editorial"}</span>
</div>
<div className={"mt-space-sm p-space-sm rounded-lg bg-surface-container-low text-body-sm font-body-sm text-on-surface-variant"}>
<strong className={"text-on-surface font-semibold"}>
{"Strategic Focus:"}</strong>
{" MTE Expo Western Hub, Die & Mould World (DMW) Editorial Bureau, Chakan-Bhosari Machining OEM Liaison. "}</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-space-md text-body-sm font-body-sm"}>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-secondary"} aria-hidden={"true"}>
{"location_on"}</span>
<span>
{"Bureau Address"}</span>
</div>
<p className={"text-on-surface"}>
{"402, ICC Tech Park, Senapati Bapat Road, Pune 411016 (Field Desk: Auto Cluster Centre, Chinchwad)"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-secondary"} aria-hidden={"true"}>
{"call"}</span>
<span>
{"Direct Telephony"}</span>
</div>
<p className={"text-on-surface font-medium"}>
{"+91 20 6688 9200"}</p>
<p className={"text-body-sm text-secondary"}>
{"Tooling Hotline: +91 20 6688 9211"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-secondary"} aria-hidden={"true"}>
{"badge"}</span>
<span>
{"Key Executives"}</span>
</div>
<p className={"text-on-surface"}>
<strong>
{"Neha Kulkarni"}</strong>
{" (Senior Technical Editor, DMW)"}</p>
<p className={"text-on-surface"}>
<strong>
{"Milind Joshi"}</strong>
{" (Western Regional Sales Manager)"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-secondary"} aria-hidden={"true"}>
{"schedule"}</span>
<span>
{"Operating Protocol"}</span>
</div>
<p className={"text-on-surface"}>
{"Mon – Fri: 09:30 – 18:00 IST"}</p>
<p className={"text-body-sm text-secondary"}>
{"Email: pune@maxxmedia.in"}</p>
</div>
</div>
</div>
<div className={"mt-space-lg pt-space-md border-t border-surface-container flex flex-wrap items-center justify-between gap-space-sm"}>
<div className={"flex items-center gap-2"}>
<a className={"inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-label-sm transition-colors"} href={"tel:+912066889200"}>
<span className={"material-symbols-outlined text-[16px] text-secondary"} aria-hidden={"true"}>
{"call"}</span>
<span>
{"Call Pune Bureau"}</span>
</a>
<a className={"inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-label-sm transition-colors"} href={"mailto:dmw.editorial@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px] text-secondary"} aria-hidden={"true"}>
{"edit_note"}</span>
<span>
{"Editorial Submission"}</span>
</a>
</div>
<a className={"inline-flex items-center gap-1 text-label-sm font-label-sm text-primary hover:text-tertiary-container font-semibold transition-colors"} href={"https://www.google.com/maps/search/?api=1&query=ICC%20Tech%20Park%2C%20Tower%20B%2C%20Senapati%20Bapat%20Road%2C%20Pune"} target={"_blank"} rel={"noopener noreferrer"}>
<span>
{"View Map"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"arrow_outward"}</span>
</a>
</div>
</div>
<div className={"rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group"}>
<div className={"absolute top-0 left-0 right-0 h-1 bg-tertiary"}>
</div>
<div>
<div className={"flex items-start justify-between gap-space-sm"}>
<div>
<span className={"font-label-caps text-label-caps text-tertiary font-bold uppercase tracking-wider"}>
{"Office 04 • Capital & Defense Liaison"}</span>
<h3 className={"font-headline-md text-headline-md text-on-surface mt-1"}>
{"Delhi-NCR — Aerocity & IEML Greater Noida"}</h3>
</div>
<span className={"px-2.5 py-1 rounded bg-blue-50 text-blue-900 font-label-sm text-label-sm font-semibold shrink-0"}>
{"Govt Liaison"}</span>
</div>
<div className={"mt-space-sm p-space-sm rounded-lg bg-surface-container-low text-body-sm font-body-sm text-on-surface-variant"}>
<strong className={"text-on-surface font-semibold"}>
{"Strategic Focus:"}</strong>
{" FASTTECH Expo Operations, Government of India & Ministry Coordination, Sovereign Trade Delegations, Northern Auto Hub (Gurugram/Faridabad/Manesar). "}</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm mt-space-md text-body-sm font-body-sm"}>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-tertiary"} aria-hidden={"true"}>
{"location_on"}</span>
<span>
{"Capital Liaison Address"}</span>
</div>
<p className={"text-on-surface"}>
{"Level 6, Worldmark 2, Asset 8, Aerocity, New Delhi 110037 (Liaison Office: India Expo Centre, Greater Noida)"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-tertiary"} aria-hidden={"true"}>
{"call"}</span>
<span>
{"Direct Telephony"}</span>
</div>
<p className={"text-on-surface font-medium"}>
{"+91 11 4982 7100"}</p>
<p className={"text-body-sm text-secondary"}>
{"Embassy Desk: +91 11 4982 7140"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-tertiary"} aria-hidden={"true"}>
{"badge"}</span>
<span>
{"Key Executives"}</span>
</div>
<p className={"text-on-surface"}>
<strong>
{"Vikramjit Singh"}</strong>
{" (Head of Government Relations)"}</p>
<p className={"text-on-surface"}>
<strong>
{"Pooja Mathur"}</strong>
{" (Diplomatic Protocol Desk)"}</p>
</div>
<div className={"space-y-1"}>
<div className={"font-label-sm text-label-sm text-outline flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-tertiary"} aria-hidden={"true"}>
{"schedule"}</span>
<span>
{"Operating Protocol"}</span>
</div>
<p className={"text-on-surface"}>
{"Mon – Fri: 09:00 – 18:00 IST"}</p>
<p className={"text-body-sm text-secondary"}>
{"Email: delhincr@maxxmedia.in"}</p>
</div>
</div>
</div>
<div className={"mt-space-lg pt-space-md border-t border-surface-container flex flex-wrap items-center justify-between gap-space-sm"}>
<div className={"flex items-center gap-2"}>
<a className={"inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-label-sm transition-colors"} href={"tel:+911149827100"}>
<span className={"material-symbols-outlined text-[16px] text-tertiary"} aria-hidden={"true"}>
{"call"}</span>
<span>
{"Call Delhi Bureau"}</span>
</a>
<a className={"inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-label-sm transition-colors"} href={"mailto:fasttech@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px] text-tertiary"} aria-hidden={"true"}>
{"mail"}</span>
<span>
{"FASTTECH Desk"}</span>
</a>
</div>
<a className={"inline-flex items-center gap-1 text-label-sm font-label-sm text-tertiary-container hover:text-primary font-semibold transition-colors"} href={"https://www.google.com/maps/search/?api=1&query=Worldmark%202%2C%20Aerocity%2C%20New%20Delhi%20(Direct%20Metro%20Airport%20Express%20connection)"} target={"_blank"} rel={"noopener noreferrer"}>
<span>
{"View Map"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"arrow_outward"}</span>
</a>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full py-space-xl bg-surface"} id={"inquiry-desk"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"mb-space-lg"}>
<span className={"font-label-caps text-label-caps text-primary uppercase tracking-wider font-bold"}>
{"Guaranteed Response Architecture"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface mt-1"}>
{"Enterprise Inquiry & Specialized Speed Dials"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1"}>
{" Route your technical specifications or space requirements directly to the responsible division head, bypassing generic contact forms. "}</p>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start"}>
<div className={"lg:col-span-5 space-y-space-md"}>
<div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm"}>
<h3 className={"font-headline-sm text-headline-sm text-on-surface mb-2"}>
{"Direct Divisional Desks"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Immediate escalation channels for corporate directors, procurement leads, and international association presidents. "}</p>
</div>
<div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"}>
<div className={"flex items-start justify-between"}>
<div className={"flex items-center gap-3"}>
<div className={"w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container"}>
<span className={"material-symbols-outlined text-[22px]"} aria-hidden={"true"}>
{"grid_view"}</span>
</div>
<div>
<h4 className={"font-label-md text-label-md text-on-surface font-semibold"}>
{"Exhibition Stall Space Booking"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Chief Commercial Officer Desk"}</p>
</div>
</div>
<span className={"text-emerald-700 font-label-caps text-label-caps bg-emerald-50 px-2 py-0.5 rounded font-bold"}>
{"Active"}</span>
</div>
<div className={"mt-space-sm pt-space-xs border-t border-surface-container flex items-center justify-between text-body-sm font-body-sm"}>
<a className={"text-on-surface hover:text-primary font-medium flex items-center gap-1"} href={"tel:+912228457810"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"call"}</span>
<span>
{"+91 22 2845 7810"}</span>
</a>
<a className={"text-primary hover:underline font-medium"} href={"mailto:space@maxxmedia.in"}>
{"space@maxxmedia.in"}</a>
</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"}>
<div className={"flex items-start justify-between"}>
<div className={"flex items-center gap-3"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface"}>
<span className={"material-symbols-outlined text-[22px]"} aria-hidden={"true"}>
{"menu_book"}</span>
</div>
<div>
<h4 className={"font-label-md text-label-md text-on-surface font-semibold"}>
{"Technical Media & Publications"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"IMTR & DMW Advertising & Editorial"}</p>
</div>
</div>
<span className={"text-primary font-label-caps text-label-caps bg-primary/10 px-2 py-0.5 rounded font-bold"}>
{"Monthly"}</span>
</div>
<div className={"mt-space-sm pt-space-xs border-t border-surface-container flex items-center justify-between text-body-sm font-body-sm"}>
<a className={"text-on-surface hover:text-primary font-medium flex items-center gap-1"} href={"tel:+912228457825"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"call"}</span>
<span>
{"+91 22 2845 7825"}</span>
</a>
<a className={"text-primary hover:underline font-medium"} href={"mailto:editorial@maxxmedia.in"}>
{"editorial@maxxmedia.in"}</a>
</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"}>
<div className={"flex items-start justify-between"}>
<div className={"flex items-center gap-3"}>
<div className={"w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-800"}>
<span className={"material-symbols-outlined text-[22px]"} aria-hidden={"true"}>
{"flag"}</span>
</div>
<div>
<h4 className={"font-label-md text-label-md text-on-surface font-semibold"}>
{"Sovereign & Trade Delegations"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Consulates, VDMA, UCIMU, JMTBA, VIP Passes"}</p>
</div>
</div>
<span className={"text-blue-800 font-label-caps text-label-caps bg-blue-50 px-2 py-0.5 rounded font-bold"}>
{"Diplomatic"}</span>
</div>
<div className={"mt-space-sm pt-space-xs border-t border-surface-container flex items-center justify-between text-body-sm font-body-sm"}>
<span className={"text-on-surface font-medium flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px] text-blue-800"} aria-hidden={"true"}>
{"security"}</span>
<span>
{"Liaison Desk 4"}</span>
</span>
<a className={"text-primary hover:underline font-medium"} href={"mailto:delegations@maxxmedia.in"}>
{"delegations@maxxmedia.in"}</a>
</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"}>
<div className={"flex items-start justify-between"}>
<div className={"flex items-center gap-3"}>
<div className={"w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-800"}>
<span className={"material-symbols-outlined text-[22px]"} aria-hidden={"true"}>
{"mic"}</span>
</div>
<div>
<h4 className={"font-label-md text-label-md text-on-surface font-semibold"}>
{"Press Accreditation & Media PR"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Accredited Journalists & Industrial Correspondents"}</p>
</div>
</div>
<span className={"text-purple-800 font-label-caps text-label-caps bg-purple-50 px-2 py-0.5 rounded font-bold"}>
{"< 2h SLA"}</span>
</div>
<div className={"mt-space-sm pt-space-xs border-t border-surface-container flex items-center justify-between text-body-sm font-body-sm"}>
<span className={"text-body-sm text-secondary"}>
{"Broadcast & Wire Desks"}</span>
<a className={"text-primary hover:underline font-medium"} href={"mailto:press@maxxmedia.in"}>
{"press@maxxmedia.in"}</a>
</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"}>
<div className={"flex items-start justify-between"}>
<div className={"flex items-center gap-3"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface"}>
<span className={"material-symbols-outlined text-[22px]"} aria-hidden={"true"}>
{"precision_manufacturing"}</span>
</div>
<div>
<h4 className={"font-label-md text-label-md text-on-surface font-semibold"}>
{"Logistics & Heavy Rigging Permits"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"40T Crane, Compressed Air, Electrical Mains"}</p>
</div>
</div>
<span className={"text-on-surface-variant font-label-caps text-label-caps bg-surface-container px-2 py-0.5 rounded font-bold"}>
{"Freight Ops"}</span>
</div>
<div className={"mt-space-sm pt-space-xs border-t border-surface-container flex items-center justify-between text-body-sm font-body-sm"}>
<span className={"text-body-sm text-secondary"}>
{"Marshalling Yard Dispatch"}</span>
<a className={"text-primary hover:underline font-medium"} href={"mailto:vendor.ops@maxxmedia.in"}>
{"vendor.ops@maxxmedia.in"}</a>
</div>
</div>
</div>
<div className={"lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-2xl shadow-md border border-surface-container"}>
<div className={"flex items-center justify-between pb-space-sm border-b border-surface-container"}>
<div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{"Enterprise Routing Form"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Fields marked with an asterisk are required for automated desk dispatch."}</p>
</div>
<div className={"hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-label-sm font-semibold"}>
<span className={"w-2 h-2 rounded-full bg-emerald-500"}>
</span>
<span>
{"Encrypted Corporate Channel"}</span>
</div>
</div>
<div className={"mt-space-md"}>
<label className={"font-label-sm text-label-sm font-semibold text-on-surface block mb-2"}>
{"Select Primary Inquiry Sector"}</label>
<div className={"grid grid-cols-2 sm:grid-cols-4 gap-2"} id={"inquiryTabs"}>
<button className={"tab-btn py-2 px-3 rounded-lg text-label-sm font-label-sm font-semibold text-center bg-inverse-surface text-inverse-on-surface transition-all"} type={"button"} data-email={"space@maxxmedia.in"} aria-pressed={"true"}>
{"Exhibition Stall"}</button>
<button className={"tab-btn py-2 px-3 rounded-lg text-label-sm font-label-sm font-semibold text-center bg-surface-container hover:bg-surface-container-high text-on-surface transition-all"} type={"button"} data-email={"editorial@maxxmedia.in"} aria-pressed={"false"}>
{"Magazine & Media"}</button>
<button className={"tab-btn py-2 px-3 rounded-lg text-label-sm font-label-sm font-semibold text-center bg-surface-container hover:bg-surface-container-high text-on-surface transition-all"} type={"button"} data-email={"delegations@maxxmedia.in"} aria-pressed={"false"}>
{"Delegation Pass"}</button>
<button className={"tab-btn py-2 px-3 rounded-lg text-label-sm font-label-sm font-semibold text-center bg-surface-container hover:bg-surface-container-high text-on-surface transition-all"} type={"button"} data-email={"corporate@maxxmedia.in"} aria-pressed={"false"}>
{"General Corp"}</button>
</div>
</div>
<form className={"mt-space-md space-y-space-md"} data-email={"space@maxxmedia.in"} data-email-subject={"Contact Us & Regional Offices | Inquiry"}>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div>
<label className={"font-label-sm text-label-sm font-semibold text-on-surface block mb-1"} htmlFor={"contact-field-1-1"}>
{"Full Name *"}</label>
<input className={"w-full h-12 px-4 rounded-lg bg-surface-bright border border-surface-container-highest text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"} placeholder={"e.g., Rajesh Mehta"} required={true} type={"text"} id={"contact-field-1-1"} name={"Full Name"} data-field-label={"Full Name *"} />
</div>
<div>
<label className={"font-label-sm text-label-sm font-semibold text-on-surface block mb-1"} htmlFor={"contact-field-1-2"}>
{"Corporate Designation *"}</label>
<input className={"w-full h-12 px-4 rounded-lg bg-surface-bright border border-surface-container-highest text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"} placeholder={"e.g., VP Manufacturing / Plant Head"} required={true} type={"text"} id={"contact-field-1-2"} name={"Corporate Designation"} data-field-label={"Corporate Designation *"} />
</div>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div>
<label className={"font-label-sm text-label-sm font-semibold text-on-surface block mb-1"} htmlFor={"contact-field-1-3"}>
{"Corporate Work Email *"}</label>
<input className={"w-full h-12 px-4 rounded-lg bg-surface-bright border border-surface-container-highest text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"} placeholder={"rajesh@enterprise.com"} required={true} type={"email"} id={"contact-field-1-3"} name={"Corporate Work Email"} data-field-label={"Corporate Work Email *"} />
</div>
<div>
<label className={"font-label-sm text-label-sm font-semibold text-on-surface block mb-1"} htmlFor={"contact-field-1-4"}>
{"Direct Mobile / WhatsApp *"}</label>
<div className={"flex"}>
<span className={"inline-flex items-center px-3 rounded-l-lg bg-surface-container text-body-md font-body-md text-on-surface-variant font-medium border border-r-0 border-surface-container-highest"}>
{"+91"}</span>
<input className={"w-full h-12 px-4 rounded-r-lg bg-surface-bright border border-surface-container-highest text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"} placeholder={"98200 12345"} required={true} type={"tel"} id={"contact-field-1-4"} name={"Direct Mobile / WhatsApp"} data-field-label={"Direct Mobile / WhatsApp *"} />
</div>
</div>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div>
<label className={"font-label-sm text-label-sm font-semibold text-on-surface block mb-1"} htmlFor={"contact-field-1-5"}>
{"Enterprise / Entity Name *"}</label>
<input className={"w-full h-12 px-4 rounded-lg bg-surface-bright border border-surface-container-highest text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"} placeholder={"e.g., Bharat Precision Tooling Ltd."} required={true} type={"text"} id={"contact-field-1-5"} name={"Enterprise / Entity Name"} data-field-label={"Enterprise / Entity Name *"} />
</div>
<div>
<label className={"font-label-sm text-label-sm font-semibold text-on-surface block mb-1"} htmlFor={"contact-field-1-6"}>
{"Industry Sector *"}</label>
<select className={"w-full h-12 px-4 rounded-lg bg-surface-bright border border-surface-container-highest text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"} id={"contact-field-1-6"} name={"Industry Sector"} data-field-label={"Industry Sector *"}>
<option>
{"Machine Tools & CNC Machining"}</option>
<option>
{"Die, Mold & Tooling Technology"}</option>
<option>
{"Industrial Robotics & Factory Automation"}</option>
<option>
{"Automotive OEM & Tier-1 Supply"}</option>
<option>
{"Aerospace & Defense Engineering"}</option>
<option>
{"Precision Fasteners & Hardware"}</option>
<option>
{"Heavy Sheet Metal & Welding"}</option>
<option>
{"Government / Diplomatic Mission"}</option>
<option>
{"Other Manufacturing Industry"}</option>
</select>
</div>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div>
<label className={"font-label-sm text-label-sm font-semibold text-on-surface block mb-1"} htmlFor={"contact-field-1-7"}>
{"Primary Event or Media Target *"}</label>
<select className={"w-full h-12 px-4 rounded-lg bg-surface-bright border border-surface-container-highest text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"} id={"contact-field-1-7"} name={"Primary Event or Media Target"} data-field-label={"Primary Event or Media Target *"}>
<option>
{"DIEMEX 2027 — Flagship Expo Bengaluru"}</option>
<option>
{"MTE Expo Western India — Pune"}</option>
<option>
{"FASTTECH Expo India — Greater Noida"}</option>
<option>
{"ROBOTURBO Industrial Robotics Showcase"}</option>
<option>
{"IMTR Magazine Advertising Insertion"}</option>
<option>
{"DMW (Die & Mould World) Technical Feature"}</option>
<option>
{"MAXX Connect Global Digital Directory"}</option>
<option>
{"Bilateral Sovereign Country Pavilion"}</option>
</select>
</div>
<div>
<label className={"font-label-sm text-label-sm font-semibold text-on-surface block mb-1"} htmlFor={"contact-field-1-8"}>
{"Projected Space / Campaign Scale"}</label>
<select className={"w-full h-12 px-4 rounded-lg bg-surface-bright border border-surface-container-highest text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"} id={"contact-field-1-8"} name={"Projected Space / Campaign Scale"} data-field-label={"Projected Space / Campaign Scale"}>
<option>
{"Shell Scheme Standard: 12 – 18 SQM"}</option>
<option>
{"Premium Two-Side Open: 18 – 36 SQM"}</option>
<option>
{"Peninsula Three-Side Open: 36 – 72 SQM"}</option>
<option>
{"Bare Island Heavy Rigging: > 72 SQM"}</option>
<option>
{"Annual Print & Digital Retainer (₹1L – ₹3L)"}</option>
<option>
{"Global Country Pavilion Sponsorship"}</option>
</select>
</div>
</div>
<div>
<label className={"font-label-sm text-label-sm font-semibold text-on-surface block mb-1"} htmlFor={"contact-field-1-9"}>
{"Specific Requirements & Machine Parameters"}</label>
<textarea className={"w-full p-4 rounded-lg bg-surface-bright border border-surface-container-highest text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"} placeholder={"Specify machine floor weights, power load requirements (kW), targeted buyer demographics, or campaign timeline..."} rows={"3"} id={"contact-field-1-9"} name={"Specific Requirements & Machine Parameters"} data-field-label={"Specific Requirements & Machine Parameters"}>
</textarea>
</div>
<div className={"flex items-start gap-3 p-3 rounded-lg bg-surface-container-low"}>
<input className={"mt-1 w-4 h-4 rounded text-primary-container focus:ring-primary-container"} id={"priorityCallback"} type={"checkbox"} name={"Request Priority Routing: Flag this request for expedited executive callback under 4 business hours from the assigned Di"} data-field-label={"Request Priority Routing: Flag this request for expedited executive callback under 4 business hours from the assigned Divisional Operations Director."} defaultValue={"Yes"} />
<label className={"text-body-sm font-body-sm text-on-surface cursor-pointer select-none"} htmlFor={"priorityCallback"}>
<strong className={"font-semibold text-primary-container"}>
{"Request Priority Routing:"}</strong>
{" Flag this request for expedited executive callback under 4 business hours from the assigned Divisional Operations Director. "}</label>
</div>
<div className={"pt-space-xs space-y-space-sm"}>
<button className={"w-full h-12 rounded-lg bg-primary-container hover:bg-tertiary-container text-on-primary font-label-md text-label-md font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2"} type={"submit"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"mail"}</span>
<span>
{"Prepare Email Inquiry"}</span>
</button>
<div className={"flex items-center justify-center gap-2 text-label-sm font-label-sm text-secondary text-center"}>
<span className={"material-symbols-outlined text-[16px] text-emerald-600"} aria-hidden={"true"}>
{"verified_user"}</span>
<span>
{"All technical drawings, CAD layouts, and commercial inquiries are protected under mutual corporate NDA."}</span>
</div>
</div>
<p className={"font-body-sm text-body-sm text-secondary"} data-email-desk={"true"}>
{"Your email app will open with these details. Send the email to complete your request."}</p>
<p className={"font-body-sm text-body-sm text-primary"} data-form-status={"true"} role={"status"} aria-live={"polite"}>
</p>
</form>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-high/40 py-space-xl"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"rounded-2xl bg-surface-container-lowest p-space-lg lg:p-space-xl shadow-md border border-surface-container relative overflow-hidden"}>
<div className={"absolute right-0 top-0 bottom-0 w-1/3 bg-linear-to-l/srgb from-primary/5 to-transparent pointer-events-none"}>
</div>
<div className={"max-w-3xl"}>
<div className={"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 font-label-caps text-label-caps uppercase tracking-wider mb-space-sm font-bold"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"public"}</span>
<span>
{"Diplomatic Protocol & Overseas Missions"}</span>
</div>
<h2 className={"font-headline-lg text-headline-lg text-on-surface"}>
{"International Delegation & Bilateral Trade Concierge"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed"}>
{" MAXX Business Media manages dedicated country pavilion desks in formal coordination with international machine tool and manufacturing associations across Europe, the Americas, and the Asia-Pacific region. "}</p>
</div>
<div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm mt-space-lg"}>
<div className={"p-space-sm rounded-lg bg-surface-container-low text-center"}>
<span className={"font-label-caps text-label-caps text-secondary font-bold"}>
{"GERMANY"}</span>
<p className={"font-headline-sm text-headline-sm text-on-surface font-semibold mt-1"}>
{"VDW / VDMA"}</p>
<span className={"text-body-sm font-body-sm text-on-surface-variant"}>
{"Frankfurt Desk"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low text-center"}>
<span className={"font-label-caps text-label-caps text-secondary font-bold"}>
{"ITALY"}</span>
<p className={"font-headline-sm text-headline-sm text-on-surface font-semibold mt-1"}>
{"UCIMU"}</p>
<span className={"text-body-sm font-body-sm text-on-surface-variant"}>
{"Milan Liaison"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low text-center"}>
<span className={"font-label-caps text-label-caps text-secondary font-bold"}>
{"JAPAN"}</span>
<p className={"font-headline-sm text-headline-sm text-on-surface font-semibold mt-1"}>
{"JMTBA"}</p>
<span className={"text-body-sm font-body-sm text-on-surface-variant"}>
{"Tokyo Desk"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low text-center"}>
<span className={"font-label-caps text-label-caps text-secondary font-bold"}>
{"TAIWAN"}</span>
<p className={"font-headline-sm text-headline-sm text-on-surface font-semibold mt-1"}>
{"TMBA"}</p>
<span className={"text-body-sm font-body-sm text-on-surface-variant"}>
{"Taichung Desk"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low text-center"}>
<span className={"font-label-caps text-label-caps text-secondary font-bold"}>
{"SOUTH KOREA"}</span>
<p className={"font-headline-sm text-headline-sm text-on-surface font-semibold mt-1"}>
{"KOMMA"}</p>
<span className={"text-body-sm font-body-sm text-on-surface-variant"}>
{"Seoul Liaison"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low text-center"}>
<span className={"font-label-caps text-label-caps text-secondary font-bold"}>
{"NORTH AMERICA"}</span>
<p className={"font-headline-sm text-headline-sm text-on-surface font-semibold mt-1"}>
{"AMT"}</p>
<span className={"text-body-sm font-body-sm text-on-surface-variant"}>
{"McLean Desk"}</span>
</div>
</div>
<div className={"mt-space-lg grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-md border-t border-surface-container"}>
<div className={"flex items-start gap-3"}>
<span className={"material-symbols-outlined text-[20px] text-primary mt-1"} aria-hidden={"true"}>
{"description"}</span>
<div>
<h4 className={"font-label-md text-label-md text-on-surface font-semibold"}>
{"Official Business Visa Letters"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Government-recognized official invitations expediting consular commercial e-visas."}</p>
</div>
</div>
<div className={"flex items-start gap-3"}>
<span className={"material-symbols-outlined text-[20px] text-primary mt-1"} aria-hidden={"true"}>
{"local_shipping"}</span>
<div>
<h4 className={"font-label-md text-label-md text-on-surface font-semibold"}>
{"ATA Carnet Port Fast-Track"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Zero-duty temporary exhibition machinery importation at JNPT and Chennai ports."}</p>
</div>
</div>
<div className={"flex items-start gap-3"}>
<span className={"material-symbols-outlined text-[20px] text-primary mt-1"} aria-hidden={"true"}>
{"translate"}</span>
<div>
<h4 className={"font-label-md text-label-md text-on-surface font-semibold"}>
{"Multilingual Technical Translators"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Native German, Japanese, Mandarin, and Italian interpreters on-site at booth kiosks."}</p>
</div>
</div>
</div>
<div className={"mt-space-lg flex flex-wrap items-center justify-between gap-space-md p-space-md rounded-xl bg-surface-container-high/60"}>
<div className={"flex items-center gap-3"}>
<span className={"material-symbols-outlined text-[24px] text-primary-container"} aria-hidden={"true"}>
{"support_agent"}</span>
<div>
<div className={"font-label-md text-label-md text-on-surface font-bold"}>
{"Diplomatic & Consular Trade Hotline"}</div>
<div className={"font-body-sm text-body-sm text-secondary"}>
{"Dedicated priority channel for embassy commercial attachés"}</div>
</div>
</div>
<div className={"flex items-center gap-space-md"}>
<a className={"text-primary hover:underline font-semibold font-label-md text-label-md"} href={"mailto:bilateral@maxxmedia.in"}>
{"bilateral@maxxmedia.in"}</a>
<a className={"px-4 py-2 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-on-surface transition-colors"} href={"tel:+912228457888"}>
{"+91 22 2845 7888"}</a>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full py-space-xl bg-surface"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"max-w-3xl mx-auto text-center mb-space-lg"}>
<span className={"font-label-caps text-label-caps text-primary uppercase tracking-wider font-bold"}>
{"Protocol Clarity"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface mt-1"}>
{"Frequently Asked Inquiry & Visitation Protocols"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant mt-2"}>
{" Standard operational directives governing technical exhibit bookings, on-site office briefings, and heavy cargo timelines. "}</p>
</div>
<div className={"max-w-3xl mx-auto space-y-space-sm"} id={"faq-container"}>
<details className={"faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm border border-surface-container"} name={"page-faq"}>
<summary className={"w-full text-left flex items-center justify-between gap-space-sm faq-toggle"}>
<span className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"How do I book bare space vs. shell scheme stands for DIEMEX or MTE Expo?"}</span>
<span className={"material-symbols-outlined text-[20px] text-primary transition-transform"} aria-hidden={"true"}>
{"expand_more"}</span>
</summary>
<div className={"faq-answer  mt-space-sm pt-space-sm border-t border-surface-container font-body-md text-body-md text-on-surface-variant leading-relaxed"}>
{" Bare space (minimum 36 SQM) provides raw concrete flooring designed for exhibitors deploying heavy CNC machines, robots, or custom double-decker pavilions. Shell schemes (minimum 9 or 12 SQM) include standardized octanorm walls, fascia signage, carpet, spotlights, and 1kW electrical distribution. Contact our commercial team via "}<strong className={"text-on-surface"}>
{"space@maxxmedia.in"}</strong>
{" to receive the latest 2027 technical CAD floorplate drawings. "}</div>
</details>
<details className={"faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm border border-surface-container"} name={"page-faq"}>
<summary className={"w-full text-left flex items-center justify-between gap-space-sm faq-toggle"}>
<span className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"What is the procedure for ATA Carnet duty-free temporary machine imports?"}</span>
<span className={"material-symbols-outlined text-[20px] text-primary transition-transform"} aria-hidden={"true"}>
{"expand_more"}</span>
</summary>
<div className={"faq-answer  mt-space-sm pt-space-sm border-t border-surface-container font-body-md text-body-md text-on-surface-variant leading-relaxed"}>
{" MAXX Business Media works in direct partnership with FICCI (the national guaranteeing association in India for ATA Carnet). Exhibitors must submit their equipment serial schedule 60 days before vessel departure. Our authorized on-site freight forwarding partners manage direct bond-free clearance from Mumbai / Chennai ports straight to venue marshalling bays at BIEC and IEML. "}</div>
</details>
<details className={"faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm border border-surface-container"} name={"page-faq"}>
<summary className={"w-full text-left flex items-center justify-between gap-space-sm faq-toggle"}>
<span className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"Can our corporate team schedule an in-person meeting at your Nariman Point or Bengaluru offices?"}</span>
<span className={"material-symbols-outlined text-[20px] text-primary transition-transform"} aria-hidden={"true"}>
{"expand_more"}</span>
</summary>
<div className={"faq-answer  mt-space-sm pt-space-sm border-t border-surface-container font-body-md text-body-md text-on-surface-variant leading-relaxed"}>
{" Yes. All four regional command centers maintain fully staffed boardroom facilities. To ensure appropriate divisional directors (e.g., Managing Director or Expo Logistics Chief) are available, please request a slot at least 48 hours in advance via the routing form or direct email to "}<strong className={"text-on-surface"}>
{"corporate@maxxmedia.in"}</strong>
{". "}</div>
</details>
<details className={"faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm border border-surface-container"} name={"page-faq"}>
<summary className={"w-full text-left flex items-center justify-between gap-space-sm faq-toggle"}>
<span className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"What are the submission deadlines for advertising insertions in IMTR and DMW?"}</span>
<span className={"material-symbols-outlined text-[20px] text-primary transition-transform"} aria-hidden={"true"}>
{"expand_more"}</span>
</summary>
<div className={"faq-answer  mt-space-sm pt-space-sm border-t border-surface-container font-body-md text-body-md text-on-surface-variant leading-relaxed"}>
{" Ad space bookings close on the 10th of every preceding month. High-resolution print-ready creative files (300 DPI CMYK PDF with 3mm bleed) must be delivered to our Pune Editorial Bureau by the 18th. For technical case studies and editorial teardowns, synopses must be approved 45 days prior to print run. "}</div>
</details>
<details className={"faq-item rounded-xl bg-surface-container-lowest p-space-md shadow-sm border border-surface-container"} name={"page-faq"}>
<summary className={"w-full text-left flex items-center justify-between gap-space-sm faq-toggle"}>
<span className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"How are urgent press accreditations handled during live exhibition show days?"}</span>
<span className={"material-symbols-outlined text-[20px] text-primary transition-transform"} aria-hidden={"true"}>
{"expand_more"}</span>
</summary>
<div className={"faq-answer  mt-space-sm pt-space-sm border-t border-surface-container font-body-md text-body-md text-on-surface-variant leading-relaxed"}>
{" Accredited media correspondents, video broadcast teams, and trade publication journalists receive instant VIP badge generation at the Press Atrium on-site. During active show days, digital badge requests sent to "}<strong className={"text-on-surface"}>
{"press@maxxmedia.in"}</strong>
{" maintain a guaranteed under-2-hour processing turnaround. "}</div>
</details>
</div>
</div>
</section>
<section className={"w-full bg-inverse-surface py-space-lg text-inverse-on-surface"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"p-space-lg rounded-2xl bg-on-surface border border-surface-container-high/20 flex flex-col lg:flex-row items-center justify-between gap-space-lg"}>
<div className={"flex items-start gap-4"}>
<div className={"w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0"}>
<span className={"material-symbols-outlined text-[28px]"} aria-hidden={"true"}>
{"crisis_alert"}</span>
</div>
<div>
<div className={"inline-flex items-center gap-2 px-2 py-0.5 rounded bg-error text-on-error font-label-caps text-label-caps uppercase font-bold tracking-wider mb-1"}>
{" Active Show Escalation • 24/7 Operations "}</div>
<h3 className={"font-headline-md text-headline-md text-surface-container-lowest"}>
{"On-Site Expo Emergency & Rigging Escalation Desks"}</h3>
<p className={"font-body-sm text-body-sm text-surface-variant mt-1 max-w-2xl"}>
{" Reserved strictly for registered exhibitors and venue contractors experiencing active emergencies, heavy rigging stoppage, electrical trip-outs, or medical requirements during show tenancy windows. "}</p>
</div>
</div>
<div className={"flex flex-wrap items-center gap-space-md shrink-0"}>
<div className={"text-left sm:text-right"}>
<div className={"text-label-caps font-label-caps uppercase text-primary-fixed"}>
{"Hall Marshall Direct Hotline"}</div>
<a className={"font-headline-sm text-headline-sm font-bold text-surface-container-lowest hover:text-primary-container transition-colors"} href={"tel:+918041223499"}>
{"+91 80 4122 3499"}</a>
<div className={"text-body-sm text-surface-variant"}>
{"BIEC & IEML Control Rooms"}</div>
</div>
<a className={"px-space-md py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-all flex items-center gap-2"} href={"tel:+918041223499"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"phone_in_talk"}</span>
<span>
{"Emergency Dispatch"}</span>
</a>
</div>
</div>
</div>
</section>
</div>
</main>

  </StitchInteractions>;
}
