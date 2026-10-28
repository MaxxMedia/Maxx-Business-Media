import Link from "next/link";
import StitchInteractions from "@/components/StitchInteractions";

export const metadata = { title: "DIEMEX 2027 | Event Details | MAXX Business Media", description: "8th International Exhibition for Die, Mould, Tooling, High-Speed Machining & Additive Manufacturing Technologies" };

// Layout, content, and imagery adapted from the exported Stitch screen.
export default function Page() {
  return <StitchInteractions key={"events/diemex-2027"}>
<main className={"w-full pt-20 bg-background min-h-screen"} id={"main-content"}>
<div className={"flex flex-col w-full"}>
<section className={"w-full bg-surface-container-low border-b border-surface-container py-space-sm"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg flex flex-col md:flex-row md:items-center justify-between gap-space-sm"}>
<nav className={"flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant flex-wrap"}>
<Link className={"hover:text-primary transition-colors"} href={"/"}>
{"Home"}</Link>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"chevron_right"}</span>
<Link className={"hover:text-primary transition-colors"} href={"/events"}>
{"Events & Expos"}</Link>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"chevron_right"}</span>
<span className={"text-on-surface font-semibold"}>
{"DIEMEX 2027"}</span>
</nav>
<div className={"flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none"}>
<span className={"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-inverse-surface font-label-caps text-label-caps shrink-0"}>
<span className={"w-2 h-2 rounded-full bg-primary-container animate-pulse"}>
</span>
{" 8th Flagship Biennial Edition "}</span>
<span className={"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-inverse-surface font-label-caps text-label-caps shrink-0"}>
<span className={"material-symbols-outlined text-[14px] text-primary"} aria-hidden={"true"}>
{"verified"}</span>
{" VDW, UCIMU & JMTBA Bilateral Hub "}</span>
<span className={"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps shrink-0 font-bold"}>
{" Floor: 74% Booked "}</span>
</div>
</div>
</section>
<aside className={"sticky top-20 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container shadow-sm"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"flex items-center gap- space-x-6 overflow-x-auto py-3 scrollbar-none font-label-sm text-label-sm whitespace-nowrap text-on-surface-variant"}>
<a className={"hover:text-primary transition-colors font-medium"} href={"#overview"}>
{"Overview"}</a>
<a className={"hover:text-primary transition-colors font-medium"} href={"#telemetry"}>
{"Allocation Data"}</a>
<a className={"hover:text-primary transition-colors font-medium"} href={"#sectors"}>
{"Sectors & Technology"}</a>
<a className={"hover:text-primary transition-colors font-medium"} href={"#why-exhibit"}>
{"Why Exhibit"}</a>
<a className={"hover:text-primary transition-colors font-medium"} href={"#floorplan"}>
{"Halls & Floor Plan"}</a>
<a className={"hover:text-primary transition-colors font-medium"} href={"#buyer-profile"}>
{"Buyer Profile"}</a>
<a className={"hover:text-primary transition-colors font-medium"} href={"#conclave"}>
{"Symposium"}</a>
<a className={"hover:text-primary transition-colors font-medium"} href={"#gallery"}>
{"Live Impressions"}</a>
<a className={"hover:text-primary transition-colors font-medium"} href={"#sponsorship"}>
{"Sponsorship"}</a>
<a className={"hover:text-primary transition-colors font-medium"} href={"#faq"}>
{"FAQ"}</a>
<a className={"ml-auto inline-flex items-center gap-1 text-primary-container font-semibold hover:underline"} href={"#reserve"}>
<span>
{"Stall Tariff"}</span>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"arrow_outward"}</span>
</a>
</div>
</div>
</aside>
<section className={"w-full bg-surface-container-lowest py-space-xl overflow-hidden relative"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"flex flex-wrap items-center gap-y-2 gap-x-4 mb-space-md text-on-surface-variant font-label-caps text-label-caps"}>
<span className={"tracking-wider uppercase text-primary font-bold"}>
{"Officially Endorsed By:"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"TAGMA INDIA"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"VDW GERMANY"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"UCIMU ITALY"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"JMTBA JAPAN"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"TAMI TAIWAN"}</span>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"}>
<div className={"lg:col-span-7 space-y-space-lg"}>
<div className={"space-y-space-xs"}>
<div className={"inline-flex items-center gap-2 px-3 py-1 rounded bg-inverse-surface text-inverse-on-surface font-label-caps text-label-caps tracking-widest uppercase"}>
{" South Asia's Premier Precision Engineering Gateway "}</div>
<h1 className={"font-display-hero text-display-hero-mobile lg:text-display-hero text-inverse-surface tracking-tight leading-none"}>
{" DIEMEX "}<span className={"text-primary-container"}>
{"2027"}</span>
</h1>
<p className={"font-headline-sm text-headline-sm text-on-surface-variant font-medium max-w-2xl"}>
{" 8th International Exhibition for Die, Mould, Tooling, High-Speed Machining & Additive Manufacturing Technologies "}</p>
</div>
<div className={"grid grid-cols-2 sm:grid-cols-3 gap-space-sm bg-surface-container-low p-space-md rounded-xl"}>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-on-surface-variant uppercase flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[14px] text-primary"} aria-hidden={"true"}>
{"calendar_today"}</span>
{" Dates "}</span>
<p className={"font-headline-sm text-[16px] leading-tight font-bold text-on-surface"}>
{"Feb 18 – 21, 2027"}</p>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"Thursday to Sunday"}</span>
</div>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-on-surface-variant uppercase flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[14px] text-primary"} aria-hidden={"true"}>
{"schedule"}</span>
{" Daily Timings "}</span>
<p className={"font-headline-sm text-[16px] leading-tight font-bold text-on-surface"}>
{"10:00 AM – 06:00 PM"}</p>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"B2B Trade Delegations"}</span>
</div>
<div className={"space-y-1 col-span-2 sm:col-span-1"}>
<span className={"font-label-caps text-label-caps text-on-surface-variant uppercase flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[14px] text-primary"} aria-hidden={"true"}>
{"pin_drop"}</span>
{" Location & Venue "}</span>
<p className={"font-headline-sm text-[16px] leading-tight font-bold text-on-surface"}>
{"BIEC, Bengaluru"}</p>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"Halls 1, 2, 3 & 3A"}</span>
</div>
</div>
<div className={"flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs"}>
<a className={"inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container shadow-sm transition-all transform hover:-translate-y-0.5"} href={"#reserve"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"domain_add"}</span>
<span>
{"Book Exhibition Stall"}</span>
</a>
<a className={"inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-surface-container-highest text-inverse-surface font-label-md text-label-md hover:bg-secondary-container transition-all"} href={"#trade-pass"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"badge"}</span>
<span>
{"Register Trade Visitor"}</span>
</a>
</div>
<div className={"flex flex-wrap items-center gap-x-6 gap-y-2 pt-space-xs font-label-sm text-label-sm text-on-surface-variant"}>
<button className={"inline-flex items-center gap-1 hover:text-primary transition-colors"} type={"button"} data-resource-title={"Hall 1 Heavy Tech Hub"} data-resource-description={"8th International Exhibition for Die, Mould, Tooling, High-Speed Machining & Additive Manufacturing Technologies"} data-resource-email={"space@maxxmedia.in"} aria-label={"Request Event Prospectus (PDF 4.8MB)"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"file_download"}</span>
<span>
{"Request Event Prospectus (PDF"}</span>
</button>
<a className={"inline-flex items-center gap-1 hover:text-primary transition-colors"} href={"#floorplan"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"map"}</span>
<span>
{"View Interactive Floor Architecture"}</span>
</a>
</div>
</div>
<div className={"lg:col-span-5 relative"}>
<div className={"relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-high aspect-[4/3] lg:aspect-[5/4]"}>
<img className={"w-full h-full object-cover"} src={"/images/stitch/massive-industrial-trade-show-pavilion-at-diemex-62a4cf4771.jpg"} alt={"Massive industrial trade show pavilion at DIEMEX featuring heavy 5-axis CNC machining centers cutting metal, illuminated with high bay industrial lighting, international engineering delegations wearing badges examining high precision injection mould dies, sharp architectural perspectives, clean high tech exhibition booths with vibrant signage."} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/90 via-inverse-surface/20 to-transparent flex flex-col justify-end p-space-lg text-inverse-on-surface"}>
<div className={"flex items-center justify-between"}>
<div>
<span className={"font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider"}>
{"Live Spindle Arena"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-surface-container-lowest"}>
{"Hall 1 Heavy Tech Hub"}</h3>
</div>
<div className={"w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-lg"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>
{"precision_manufacturing"}</span>
</div>
</div>
</div>
</div>
<div className={"absolute -bottom-4 -left-4 sm:left-6 bg-surface-container-lowest p-space-md rounded-xl shadow-lg border border-surface-container hidden sm:flex items-center gap-space-sm max-w-xs"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary"}>
<span className={"material-symbols-outlined"} aria-hidden={"true"}>
{"network_check"}</span>
</div>
<div>
<p className={"font-label-sm text-label-sm font-bold text-on-surface"}>
{"₹1,800+ Cr Bilateral Pipeline"}</p>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Anticipated machinery procurement"}</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"} id={"telemetry"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg"}>
<div className={"grid grid-cols-2 md:grid-cols-4 gap-gutter-sm"}>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-1"}>
<div className={"font-label-caps text-label-caps text-secondary uppercase font-bold tracking-wider"}>
{"Gross Exhibition Area"}</div>
<div className={"font-display-hero-mobile text-display-hero-mobile text-inverse-surface font-black"}>
{"25,000"}<span className={"text-primary-container text-headline-md font-bold"}>
{"+ sqm"}</span>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"4 Heavy Engineering Halls"}</p>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-1"}>
<div className={"font-label-caps text-label-caps text-secondary uppercase font-bold tracking-wider"}>
{"Leading Builders"}</div>
<div className={"font-display-hero-mobile text-display-hero-mobile text-inverse-surface font-black"}>
{"450"}<span className={"text-primary-container text-headline-md font-bold"}>
{"+"}</span>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"18+ Participating Countries"}</p>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-1"}>
<div className={"font-label-caps text-label-caps text-secondary uppercase font-bold tracking-wider"}>
{"Qualified Trade Buyers"}</div>
<div className={"font-display-hero-mobile text-display-hero-mobile text-inverse-surface font-black"}>
{"35,000"}<span className={"text-primary-container text-headline-md font-bold"}>
{"+"}</span>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Strictly Corporate Pre-Screened"}</p>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-1"}>
<div className={"font-label-caps text-label-caps text-secondary uppercase font-bold tracking-wider"}>
{"Projected Bilateral Enquiries"}</div>
<div className={"font-display-hero-mobile text-display-hero-mobile text-inverse-surface font-black"}>
{"₹1,800"}<span className={"text-primary-container text-headline-md font-bold"}>
{" Cr+"}</span>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Heavy CAPEX Procurement"}</p>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md"}>
<div className={"flex flex-col md:flex-row md:items-center justify-between gap-space-sm"}>
<div>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold"}>
{"Stall Space Telemetry"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"Floor Space Allocation Index (Halls 1, 2, 3 & 3A)"}</h3>
</div>
<div className={"font-label-md text-label-md text-on-surface-variant"}>
<span className={"text-inverse-surface font-bold"}>
{"18,500 sqm"}</span>
{" Confirmed / "}<span className={"text-primary-container font-bold"}>
{"6,500 sqm"}</span>
{" Priority Remaining "}</div>
</div>
<div className={"w-full h-4 bg-surface-container rounded-full overflow-hidden flex"}>
<div className={"bg-inverse-surface h-full w-[45%]"} title={"Hall 1 & 2 Solid Confirmed"}>
</div>
<div className={"bg-primary-container h-full w-[29%]"} title={"Hall 3 Confirmed Bookings"}>
</div>
<div className={"bg-surface-variant h-full w-[26%]"} title={"Remaining Fast-Filling"}>
</div>
</div>
<div className={"grid grid-cols-1 md:grid-cols-4 gap-space-sm font-label-sm text-label-sm pt-space-xs text-on-surface-variant"}>
<div className={"flex items-center gap-2"}>
<span className={"w-3 h-3 rounded-sm bg-inverse-surface"}>
</span>
<span>
{"German Pavilion (Hall 1) — "}<strong>
{"Sold Out"}</strong>
</span>
</div>
<div className={"flex items-center gap-2"}>
<span className={"w-3 h-3 rounded-sm bg-inverse-surface"}>
</span>
<span>
{"Italian Pavilion (Hall 2) — "}<strong>
{"92% Filled"}</strong>
</span>
</div>
<div className={"flex items-center gap-2"}>
<span className={"w-3 h-3 rounded-sm bg-primary-container"}>
</span>
<span>
{"Japan Pavilion (Hall 3) — "}<strong>
{"80% Filled"}</strong>
</span>
</div>
<div className={"flex items-center gap-2"}>
<span className={"w-3 h-3 rounded-sm bg-surface-variant"}>
</span>
<span>
{"Taiwan & S. Korea (Hall 3A) — "}<strong>
{"Final Stalls"}</strong>
</span>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-lowest py-space-xl"} id={"overview"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start"}>
<div className={"lg:col-span-7 space-y-space-md"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Strategic Sector Platform"}</span>
<h2 className={"font-headline-lg text-headline-lg text-inverse-surface font-bold leading-tight"}>
{" The Epicenter of South Asia’s Tooling, Die Making & Precision Manufacturing Ecosystem "}</h2>
<div className={"space-y-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed"}>
<p>
{" DIEMEX 2027 represents the definitive industrial meeting point for heavy fabrication, toolmaking, precision machining, and advanced die manufacturing across the Indian subcontinent. As sovereign manufacturing mandates push automotive, defense, and electronics localized content toward unprecedented benchmarks, precision tooling stands as the foundation of all industrial output. "}</p>
<p>
{" The 2027 showcase converges leading automotive OEMs including "}<strong>
{"Tata Motors, Mahindra, Toyota, Hyundai"}</strong>
{", sovereign aerospace and defense fabricators including "}<strong>
{"HAL, ISRO, and DRDO"}</strong>
{", alongside consumer appliance giants and electronics manufacturing services (EMS) providers directly with global tooling innovators. "}</p>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs"}>
<div className={"p-space-md bg-surface-container-low rounded-xl"}>
<span className={"material-symbols-outlined text-primary text-[28px] mb-2"} aria-hidden={"true"}>
{"handshake"}</span>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>
{"Direct Bilateral Deals"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Structured closed-door executive meetings and procurement sign-offs for tooling programs."}</p>
</div>
<div className={"p-space-md bg-surface-container-low rounded-xl"}>
<span className={"material-symbols-outlined text-primary text-[28px] mb-2"} aria-hidden={"true"}>
{"hub"}</span>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>
{"End-to-End Tool Room Stack"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"From specialty metallurgical alloys and CAD/CAM modeling to high-speed 5-axis spindles and metrology inspection."}</p>
</div>
</div>
</div>
<div className={"lg:col-span-5 bg-inverse-surface text-inverse-on-surface p-space-lg rounded-2xl shadow-xl space-y-space-md"}>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider font-bold"}>
{"BIEC Infrastructure Telemetry"}</span>
<h3 className={"font-headline-md text-headline-md font-bold text-surface-container-lowest"}>
{"Heavy Engineering Venue Standards"}</h3>
<p className={"font-body-sm text-body-sm text-surface-variant"}>
{"Built specifically to accommodate full-throttle live cutting and heavy die stamping demonstrations."}</p>
</div>
<div className={"space-y-space-sm divide-y divide-surface-container-high/15"}>
<div className={"pt-space-sm flex items-start gap-space-sm"}>
<span className={"material-symbols-outlined text-primary-container shrink-0"} aria-hidden={"true"}>
{"bolt"}</span>
<div>
<p className={"font-headline-sm text-[16px] font-semibold text-surface-container-lowest"}>
{"415V / 50Hz Uninterrupted Heavy Industrial Power"}</p>
<p className={"font-body-sm text-body-sm text-surface-variant"}>
{"Dual substation backup grid with clean power conditioned for CNC micro-electronics and EDM machinery."}</p>
</div>
</div>
<div className={"pt-space-sm flex items-start gap-space-sm"}>
<span className={"material-symbols-outlined text-primary-container shrink-0"} aria-hidden={"true"}>
{"weight"}</span>
<div>
<p className={"font-headline-sm text-[16px] font-semibold text-surface-container-lowest"}>
{"30 Tonnes / sqm Floor Load Rating"}</p>
<p className={"font-body-sm text-body-sm text-surface-variant"}>
{"Zero vibration transmission reinforced concrete slabs engineered for high-tonnage multi-axis machining centers."}</p>
</div>
</div>
<div className={"pt-space-sm flex items-start gap-space-sm"}>
<span className={"material-symbols-outlined text-primary-container shrink-0"} aria-hidden={"true"}>
{"construction"}</span>
<div>
<p className={"font-headline-sm text-[16px] font-semibold text-surface-container-lowest"}>
{"40-Tonne Overhead Mobile Gantry Cranes"}</p>
<p className={"font-body-sm text-body-sm text-surface-variant"}>
{"Turnkey bay-level craneage allowing zero-friction machine positioning during rapid 72-hour load-in window."}</p>
</div>
</div>
<div className={"pt-space-sm flex items-start gap-space-sm"}>
<span className={"material-symbols-outlined text-primary-container shrink-0"} aria-hidden={"true"}>
{"warehouse"}</span>
<div>
<p className={"font-headline-sm text-[16px] font-semibold text-surface-container-lowest"}>
{"Bonded On-Site Customs & Transit Warehouses"}</p>
<p className={"font-body-sm text-body-sm text-surface-variant"}>
{"On-premise green channel clearance for international ATA Carnet machine tool shipments without airport delays."}</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"} id={"sectors"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg"}>
<div className={"max-w-2xl space-y-space-xs"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Exhibit Profile & Focus Sectors"}</span>
<h2 className={"font-headline-lg text-headline-lg text-inverse-surface font-bold"}>
{"Six High-Growth Precision Disciplines"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>
{"Explore the exhaustive spectrum of tool room engineering, tooling machinery, and high-precision contract fabrication represented at DIEMEX 2027."}</p>
</div>
<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-sm"}>
<div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-sm group"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>
{"grid_view"}</span>
</div>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-secondary uppercase font-semibold"}>
{"Hall 2 Primary Display"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"Plastic Injection & Blow Moulds"}</h3>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Multi-cavity high-precision injection moulds, hot runner manifolds, blow moulding tools, rotational moulds, medical device micro-cavities, and PET preform tooling solutions. "}</p>
<div className={"pt-2 flex flex-wrap gap-1 font-label-caps text-label-caps text-secondary"}>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Hot Runner"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Multi-Cavity"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Precision Blow"}</span>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-sm group"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>
{"fireplace"}</span>
</div>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-secondary uppercase font-semibold"}>
{"Hall 3 Primary Display"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"Die Casting & Forging Dies"}</h3>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" High-pressure die casting (HPDC) tooling, gigacasting die assemblies for automotive structural components, gravity casting moulds, extrusion dies, and heavy closed-die forging setups. "}</p>
<div className={"pt-2 flex flex-wrap gap-1 font-label-caps text-label-caps text-secondary"}>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"HPDC"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Gigacasting"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Forging Dies"}</span>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-sm group"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>
{"settings_suggest"}</span>
</div>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-secondary uppercase font-semibold"}>
{"Hall 1 Primary Display"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"5-Axis CNC & High-Speed Milling"}</h3>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Continuous 5-axis vertical machining centers, ultra-high-speed spindles (40,000+ RPM), CNC wire-cut EDM, sinker spark erosion systems, and graphite electrode machining suites. "}</p>
<div className={"pt-2 flex flex-wrap gap-1 font-label-caps text-label-caps text-secondary"}>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"5-Axis VMC"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Wire EDM"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Spindle Tech"}</span>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-sm group"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>
{"layers"}</span>
</div>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-secondary uppercase font-semibold"}>
{"Hall 3 Primary Display"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"Press Tools & Stamping Dies"}</h3>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Automotive body panel stamping dies, progressive sheet metal dies, compound blanking tools, transfer press dies, fine-blanking solutions, and hydroforming tooling sets. "}</p>
<div className={"pt-2 flex flex-wrap gap-1 font-label-caps text-label-caps text-secondary"}>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Progressive Dies"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Fine Blanking"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Hydroforming"}</span>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-sm group"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>
{"science"}</span>
</div>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-secondary uppercase font-semibold"}>
{"Halls 2 & 3 Technology Corridor"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"Special Steels, Alloys & Coatings"}</h3>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Pre-hardened tool steels (H13, P20, D2), powder metallurgy steels, tungsten carbide inserts, high-wear PVD/CVD diamond coatings, vacuum heat treatment services, and nitriding lines. "}</p>
<div className={"pt-2 flex flex-wrap gap-1 font-label-caps text-label-caps text-secondary"}>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"H13 / P20"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"PVD Coatings"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Carbide"}</span>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-sm group"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>
{"view_in_ar"}</span>
</div>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-secondary uppercase font-semibold"}>
{"Hall 3A Innovation Zone"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"Metrology, CAD/CAM & Additive"}</h3>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Bridge CMMs, blue light 3D optical scanning, laser trackers, mouldflow analysis software, CAD/CAM continuous machining simulation, and metal 3D printers for conformal cooling inserts. "}</p>
<div className={"pt-2 flex flex-wrap gap-1 font-label-caps text-label-caps text-secondary"}>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Optical 3D"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"MouldFlow"}</span>
<span className={"bg-surface-container px-2 py-0.5 rounded"}>
{"Conformal 3D"}</span>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-lowest py-space-xl"} id={"why-exhibit"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"}>
<div className={"lg:col-span-6 space-y-space-md"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Unmatched Commercial Returns"}</span>
<h2 className={"font-headline-lg text-headline-lg text-inverse-surface font-bold"}>
{"Why Industry Leaders Anchor Their Annual Budget in DIEMEX"}</h2>
<div className={"space-y-space-sm"}>
<div className={"flex items-start gap-space-sm"}>
<span className={"w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0 font-bold font-label-sm text-label-sm"}>
{"01"}</span>
<div>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>
{"Access Directly to Final Purchasing Authorities"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Independent audited exit data confirms 89% of attendees hold decisive sign-off or specification power on multi-million dollar tooling & capital equipment procurements."}</p>
</div>
</div>
<div className={"flex items-start gap-space-sm"}>
<span className={"w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0 font-bold font-label-sm text-label-sm"}>
{"02"}</span>
<div>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>
{"Unrestricted Live Heavy Spindle Demonstrations"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Cut titanium, die steel, and carbon composites live at full feed rates without facility speed throttles, thanks to dedicated BIEC industrial power connections."}</p>
</div>
</div>
<div className={"flex items-start gap-space-sm"}>
<span className={"w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0 font-bold font-label-sm text-label-sm"}>
{"03"}</span>
<div>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>
{"Pre-Engineered B2B Executive Meetings via MAXX Connect"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Our concierge platform pairs your technical engineers with pre-registered OEM procurement leaders for scheduled booth table meetings before day one."}</p>
</div>
</div>
</div>
</div>
<div className={"lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div className={"bg-surface-container-low p-space-lg rounded-2xl flex flex-col justify-between space-y-space-md shadow-sm"}>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between"}>
<span className={"font-label-caps text-label-caps text-secondary uppercase font-bold"}>
{"Custom Build"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"}>
{"Min 36 sqm"}</span>
</div>
<h3 className={"font-headline-md text-headline-md font-bold text-inverse-surface"}>
{"Raw Bare Space"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Recommended for machinery manufacturers bringing live CNCs, presses, or customized multi-tier pavilion structures."}</p>
<div className={"pt-2 space-y-1"}>
<div className={"font-headline-sm text-headline-sm font-black text-primary"}>
{"₹14,500 "}<span className={"text-label-sm text-secondary font-normal"}>
{"/ sqm (Domestic)"}</span>
</div>
<div className={"font-headline-sm text-headline-sm font-bold text-inverse-surface"}>
{"$260 "}<span className={"text-label-sm text-secondary font-normal"}>
{"/ sqm (International)"}</span>
</div>
</div>
<ul className={"pt-space-xs space-y-1.5 font-label-sm text-label-sm text-on-surface-variant"}>
<li className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"check_circle"}</span>
{" Floor space demarcation"}</li>
<li className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"check_circle"}</span>
{" Free entry in show directory"}</li>
<li className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"check_circle"}</span>
{" Heavy machinery handling clearance"}</li>
</ul>
</div>
<a className={"w-full inline-flex items-center justify-center py-2.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-secondary transition-colors"} href={"#reserve"}>
{" Reserve Raw Space "}</a>
</div>
<div className={"bg-surface-container-lowest p-space-lg rounded-2xl flex flex-col justify-between space-y-space-md shadow-md border-2 border-primary-container relative"}>
<div className={"absolute -top-3 right-6 bg-primary-container text-on-primary font-label-caps text-label-caps px-3 py-1 rounded-full uppercase font-bold tracking-wider"}>
{" Turnkey Modular "}</div>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold"}>
{"Standard Booth"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"}>
{"Min 9 / 12 sqm"}</span>
</div>
<h3 className={"font-headline-md text-headline-md font-bold text-inverse-surface"}>
{"Shell Scheme Booth"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Hassle-free walk-in exhibition stall equipped with full modular hardware, power, furniture, and lighting."}</p>
<div className={"pt-2 space-y-1"}>
<div className={"font-headline-sm text-headline-sm font-black text-primary"}>
{"₹16,800 "}<span className={"text-label-sm text-secondary font-normal"}>
{"/ sqm (Domestic)"}</span>
</div>
<div className={"font-headline-sm text-headline-sm font-bold text-inverse-surface"}>
{"$295 "}<span className={"text-label-sm text-secondary font-normal"}>
{"/ sqm (International)"}</span>
</div>
</div>
<ul className={"pt-space-xs space-y-1.5 font-label-sm text-label-sm text-on-surface-variant"}>
<li className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"check_circle"}</span>
{" Octanorm structure & carpet"}</li>
<li className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"check_circle"}</span>
{" Fascia board with company name"}</li>
<li className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"check_circle"}</span>
{" Spotlights, 5A plug, table & chairs"}</li>
</ul>
</div>
<a className={"w-full inline-flex items-center justify-center py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-colors"} href={"#reserve"}>
{" Reserve Shell Stall "}</a>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"} id={"buyer-profile"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg"}>
<div className={"max-w-3xl space-y-space-xs"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Demographics & Procurement Roles"}</span>
<h2 className={"font-headline-lg text-headline-lg text-inverse-surface font-bold"}>
{"Who Attends DIEMEX 2027"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>
{"Strictly restricted to registered trade executives, procurement leaders, and engineering specialists from major industrial hubs."}</p>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-sm"}>
<div className={"bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold"}>
<span className={"material-symbols-outlined"} aria-hidden={"true"}>
{"directions_car"}</span>
</div>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>
{"Automotive & Commercial OEMs"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Plant Heads, Body-in-White (BIW) Tooling Directors, Sourcing Managers from auto clusters across Pune, Chennai, NCR, and Sanand."}</p>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold"}>
<span className={"material-symbols-outlined"} aria-hidden={"true"}>
{"flight"}</span>
</div>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>
{"Aerospace & Defense"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Chief Metallurgists, Composite Tooling Engineers, and Defense Procurement Officers specifying tight-tolerance aero components."}</p>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold"}>
<span className={"material-symbols-outlined"} aria-hidden={"true"}>
{"devices"}</span>
</div>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>
{"Electronics & White Goods"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Sourcing Leads from precision smartphone enclosures, smart appliances, connectors, and micro-injection moulding operations."}</p>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold"}>
<span className={"material-symbols-outlined"} aria-hidden={"true"}>
{"medical_services"}</span>
</div>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>
{"Medical Device Tooling"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Cleanroom tooling designers, surgical instrument mould fabricators, and micro-fluidic tooling specialists from certified medical hubs."}</p>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-lowest py-space-xl"} id={"conclave"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"bg-linear-to-br/srgb from-inverse-surface via-inverse-surface to-secondary text-inverse-on-surface rounded-2xl p-space-lg lg:p-space-xl relative overflow-hidden"}>
<div className={"relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"}>
<div className={"lg:col-span-7 space-y-space-md"}>
<div className={"inline-flex items-center gap-2 px-3 py-1 rounded bg-primary-container text-on-primary font-label-caps text-label-caps uppercase font-bold"}>
{" Co-Located Technical Conclave "}</div>
<h2 className={"font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-surface-container-lowest"}>
{" Tool & Die Tech Conclave 2027 "}</h2>
<p className={"font-body-md text-body-md text-surface-variant max-w-xl"}>
{" A 2-day high-stakes symposium in Auditorium Hall 2 convening 40+ global keynote leaders, research scholars, and enterprise CTOs addressing disruptive automation, conformal additive manufacturing, and sustainable casting. "}</p>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm font-label-sm text-label-sm text-surface-variant"}>
<div className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-primary-fixed"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"Track 1: Additive Conformal Cooling in Die Core Design"}</span>
</div>
<div className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-primary-fixed"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"Track 2: 5-Axis Micro-Milling for Hardened Superalloys"}</span>
</div>
<div className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-primary-fixed"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"Track 3: Gigacasting & Structural EV Die Engineering"}</span>
</div>
<div className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-primary-fixed"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"Track 4: Sustainable Die Casting & Energy Transition"}</span>
</div>
</div>
<div className={"pt-space-xs flex flex-wrap items-center gap-space-md"}>
<a className={"inline-flex items-center justify-center px-space-md py-3 rounded-lg bg-surface-container-lowest text-inverse-surface font-label-md text-label-md hover:bg-surface-variant transition-colors"} href={"#conclave"}>
{" View Conclave Schedule & Keynotes "}</a>
<span className={"font-label-sm text-label-sm text-surface-variant"}>
{" 350+ C-Level Seats Pre-Allocated "}</span>
</div>
</div>
<div className={"lg:col-span-5 bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl space-y-space-sm border border-surface-container-lowest/10"}>
<h3 className={"font-headline-sm text-headline-sm font-bold text-surface-container-lowest"}>
{"Keynote Panel Chairs"}</h3>
<div className={"space-y-space-xs"}>
<div className={"flex items-center gap-space-sm p-space-xs rounded-lg bg-surface-container-lowest/5"}>
<div className={"w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold font-label-md"}>
{" DR "}</div>
<div>
<h4 className={"font-label-md text-label-md font-bold text-surface-container-lowest"}>
{"Dr. Klaus Reinhardt"}</h4>
<p className={"font-label-sm text-label-sm text-surface-variant"}>
{"Director of Advanced Metallurgy, Fraunhofer IPT, Germany"}</p>
</div>
</div>
<div className={"flex items-center gap-space-sm p-space-xs rounded-lg bg-surface-container-lowest/5"}>
<div className={"w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold font-label-md"}>
{" NM "}</div>
<div>
<h4 className={"font-label-md text-label-md font-bold text-surface-container-lowest"}>
{"Naoki Matsumoto"}</h4>
<p className={"font-label-sm text-label-sm text-surface-variant"}>
{"Chief Tooling Strategist, JMTBA Fellow, Japan"}</p>
</div>
</div>
<div className={"flex items-center gap-space-sm p-space-xs rounded-lg bg-surface-container-lowest/5"}>
<div className={"w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold font-label-md"}>
{" AS "}</div>
<div>
<h4 className={"font-label-md text-label-md font-bold text-surface-container-lowest"}>
{"Ananya Sengupta"}</h4>
<p className={"font-label-sm text-label-sm text-surface-variant"}>
{"VP Tooling & Stamping, Leading Tier-1 Automotive Conglomerate"}</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"} id={"floorplan"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-md"}>
<div className={"space-y-space-xs max-w-2xl"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Architectural Navigation"}</span>
<h2 className={"font-headline-lg text-headline-lg text-inverse-surface font-bold"}>
{"BIEC Complex Layout & Hall Allocation"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>
{"Explore the master layout across four interconnected exhibition halls, live demonstration open yards, and VIP registration plazas."}</p>
</div>
<button className={"inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-inverse-surface font-label-md text-label-md hover:bg-surface-variant shadow-sm transition-colors shrink-0"} type={"button"} data-resource-title={"BIEC Complex Layout & Hall Allocation"} data-resource-description={"Explore the master layout across four interconnected exhibition halls, live demonstration open yards, and VIP registration plazas."} data-resource-email={"space@maxxmedia.in"} aria-label={"Request High-Res PDF Map"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"download"}</span>
<span>
{"Request High-Res PDF Map"}</span>
</button>
</div>
<div className={"bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm space-y-space-md"}>
<div className={"grid grid-cols-1 md:grid-cols-4 gap-space-md"}>
<div className={"p-space-md rounded-xl bg-surface-container-low border border-surface-container space-y-space-sm hover:border-primary-container transition-colors"}>
<div className={"flex items-center justify-between"}>
<span className={"font-headline-sm text-headline-sm font-bold text-inverse-surface"}>
{"HALL 1"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container text-secondary font-label-caps text-label-caps"}>
{"Sold Out"}</span>
</div>
<div className={"font-label-md text-label-md text-primary font-semibold"}>
{"German Pavilion & 5-Axis CNC Centers"}</div>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Spindle cutting zones, heavy milling machines, VDW official cluster."}</p>
<div className={"font-label-sm text-label-sm text-on-surface-variant pt-2"}>
{"Capacity: 8,000 sqm"}</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container-low border border-surface-container space-y-space-sm hover:border-primary-container transition-colors"}>
<div className={"flex items-center justify-between"}>
<span className={"font-headline-sm text-headline-sm font-bold text-inverse-surface"}>
{"HALL 2"}</span>
<span className={"px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps"}>
{"92% Booked"}</span>
</div>
<div className={"font-label-md text-label-md text-primary font-semibold"}>
{"Italian Pavilion & Plastic Injection Moulds"}</div>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Multi-cavity moulds, hot runners, UCIMU delegation, Auditorium 2."}</p>
<div className={"font-label-sm text-label-sm text-on-surface-variant pt-2"}>
{"Capacity: 6,500 sqm"}</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container-low border border-surface-container space-y-space-sm hover:border-primary-container transition-colors"}>
<div className={"flex items-center justify-between"}>
<span className={"font-headline-sm text-headline-sm font-bold text-inverse-surface"}>
{"HALL 3"}</span>
<span className={"px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps"}>
{"80% Booked"}</span>
</div>
<div className={"font-label-md text-label-md text-primary font-semibold"}>
{"Japan Pavilion & Die Casting / Press Tools"}</div>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"HPDC systems, stamping dies, forging tools, JMTBA engineering arena."}</p>
<div className={"font-label-sm text-label-sm text-on-surface-variant pt-2"}>
{"Capacity: 6,500 sqm"}</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container-low border border-surface-container space-y-space-sm hover:border-primary-container transition-colors"}>
<div className={"flex items-center justify-between"}>
<span className={"font-headline-sm text-headline-sm font-bold text-inverse-surface"}>
{"HALL 3A"}</span>
<span className={"px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-caps text-label-caps"}>
{"Final 12 Stalls"}</span>
</div>
<div className={"font-label-md text-label-md text-primary font-semibold"}>
{"Taiwan & Korea: Metrology, CAD/CAM & 3D"}</div>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Optical scanners, CMMs, additive conformal manufacturing showcase."}</p>
<div className={"font-label-sm text-label-sm text-on-surface-variant pt-2"}>
{"Capacity: 4,000 sqm"}</div>
</div>
</div>
<div className={"p-space-md bg-surface-container rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md"}>
<div className={"flex items-center gap-space-sm"}>
<span className={"material-symbols-outlined text-[32px] text-primary"} aria-hidden={"true"}>
{"local_shipping"}</span>
<div>
<p className={"font-label-md text-label-md font-bold text-on-surface"}>
{"Heavy Freight Gates 4 & 7 Reserved for Machinery Inbound"}</p>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Direct container truck access with 40-tonne mobile gantry offloading docks."}</p>
</div>
</div>
<a className={"px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold shrink-0"} href={"#reserve"}>
{" Check Stall Availability on Map "}</a>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-lowest py-space-xl"} id={"gallery"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-md"}>
<div className={"space-y-space-xs max-w-2xl"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Industrial Showcase Atmosphere"}</span>
<h2 className={"font-headline-lg text-headline-lg text-inverse-surface font-bold"}>
{"Past Edition Highlights & Live Impressions"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>
{"Glimpse the intense commercial activity, high-level ministerial inaugurations, and live spindle demonstrations from previous DIEMEX editions."}</p>
</div>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-sm"}>
<div className={"space-y-2"}>
<div className={"rounded-xl overflow-hidden shadow-sm aspect-[4/3] bg-surface-container"}>
<img className={"w-full h-full object-cover hover:scale-105 transition-transform duration-300"} src={"/images/stitch/modern-convention-entrance-at-bengaluru-internat-dec57c939f.jpg"} alt={"Modern convention entrance at Bengaluru International Exhibition Centre with massive DIEMEX branding banners, international delegates walking in business suits, vibrant sunny day, clean architectural glass facade with modern lanyard registration counters."} loading={"lazy"} decoding={"async"} />
</div>
<p className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
{"Registration Plaza & International Check-in"}</p>
</div>
<div className={"space-y-2"}>
<div className={"rounded-xl overflow-hidden shadow-sm aspect-[4/3] bg-surface-container"}>
<img className={"w-full h-full object-cover hover:scale-105 transition-transform duration-300"} src={"/images/stitch/dramatic-close-up-photo-of-heavy-cnc-machining-t-b00c46b88d.jpg"} alt={"Dramatic close up photo of heavy CNC machining tool spindle cutting steel mould core with bright sparks flying, cooling mist spraying, extreme industrial precision manufacturing, engineering excellence under sharp studio exhibition lights."} loading={"lazy"} decoding={"async"} />
</div>
<p className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
{"Live 5-Axis High-Speed Spindle Cutting"}</p>
</div>
<div className={"space-y-2"}>
<div className={"rounded-xl overflow-hidden shadow-sm aspect-[4/3] bg-surface-container"}>
<img className={"w-full h-full object-cover hover:scale-105 transition-transform duration-300"} src={"/images/stitch/ribbon-cutting-ceremony-at-diemex-exhibition-hal-fbe027606e.jpg"} alt={"Ribbon cutting ceremony at DIEMEX exhibition hall entrance with international government ministers, industry association presidents from Germany and India, formal celebration, professional photography flashes, red ceremonial ribbon."} loading={"lazy"} decoding={"async"} />
</div>
<p className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
{"Ministerial & Bilateral Grand Inauguration"}</p>
</div>
<div className={"space-y-2"}>
<div className={"rounded-xl overflow-hidden shadow-sm aspect-[4/3] bg-surface-container"}>
<img className={"w-full h-full object-cover hover:scale-105 transition-transform duration-300"} src={"/images/stitch/corporate-buyers-and-machine-tool-oem-executives-2d93e4556b.jpg"} alt={"Corporate buyers and machine tool OEM executives seated at a glass B2B meeting table inside an exhibition stall reviewing blueprints, technical drawings, shaking hands over signed industrial purchase agreement."} loading={"lazy"} decoding={"async"} />
</div>
<p className={"font-label-sm text-label-sm font-semibold text-on-surface"}>
{"B2B Deal-Making & Procurement Signings"}</p>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"} id={"sponsorship"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg"}>
<div className={"max-w-2xl space-y-space-xs"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Maximum Brand Prominence"}</span>
<h2 className={"font-headline-lg text-headline-lg text-inverse-surface font-bold"}>
{"Sponsorship & Leadership Packages"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>
{"Position your brand as the supreme market leader across all digital channels, on-site signage, and delegate merchandise."}</p>
</div>
<div className={"grid grid-cols-1 md:grid-cols-3 gap-gutter-sm"}>
<div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold"}>
{"Headline Identity"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"Platinum Title Partner"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Unrivaled co-branding across all TV, print, digital campaigns, central registration facade, and keynote symposium stage."}</p>
<div className={"pt-2 font-headline-sm text-[16px] font-bold text-inverse-surface"}>
{"1 Slot Available"}</div>
</div>
<div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold"}>
{"100% Buyer Touchpoint"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"Lanyard & Smart Badge Sponsor"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Your company logo worn continuously by 35,000+ trade visitors, speakers, and VIP OEM delegations throughout all four show days."}</p>
<div className={"pt-2 font-headline-sm text-[16px] font-bold text-inverse-surface"}>
{"Exclusive Partner"}</div>
</div>
<div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold"}>
{"Executive Hospitality"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"VIP Buyer Lounge Patron"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Dedicated branding and exclusive meeting suites within the private lounge hosting Automotive Plant Directors and Ministry delegates."}</p>
<div className={"pt-2 font-headline-sm text-[16px] font-bold text-inverse-surface"}>
{"2 Slots Available"}</div>
</div>
</div>
<div className={"flex items-center justify-center pt-space-xs"}>
<a className={"inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-secondary transition-colors"} href={"#reserve"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"verified"}</span>
<span>
{"Request Complete Sponsorship Deck"}</span>
</a>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-lowest py-space-xl"} id={"faq"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg"}>
<div className={"max-w-2xl space-y-space-xs"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Operational Queries"}</span>
<h2 className={"font-headline-lg text-headline-lg text-inverse-surface font-bold"}>
{"Frequently Asked Questions"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>
{"Essential information regarding stall move-in, power supplies, visitor policies, and customs assistance."}</p>
</div>
<div className={"space-y-space-sm max-w-4xl"}>
<details className={"group bg-surface-container-low p-space-md rounded-xl cursor-pointer"}>
<summary className={"font-headline-sm text-[16px] font-bold text-on-surface flex items-center justify-between list-none"}>
<span>
{"When can heavy machinery be brought onto the exhibition floor (Move-In Schedule)?"}</span>
<span className={"material-symbols-outlined group-open:rotate-180 transition-transform"} aria-hidden={"true"}>
{"expand_more"}</span>
</summary>
<p className={"font-body-sm text-body-sm text-on-surface-variant pt-space-sm leading-relaxed"}>
{" Move-in for heavy machinery exceeding 5 tonnes begins 72 hours prior to opening (February 15, 2027 at 08:00 AM). Stalls requiring standard shell setup may access the hall starting February 17, 2027 at 10:00 AM. Overhead gantry cranes operate around the clock during the initial 48-hour staging period. "}</p>
</details>
<details className={"group bg-surface-container-low p-space-md rounded-xl cursor-pointer"}>
<summary className={"font-headline-sm text-[16px] font-bold text-on-surface flex items-center justify-between list-none"}>
<span>
{"How do international exhibitors apply for Indian Business Visas and Customs Clearance?"}</span>
<span className={"material-symbols-outlined group-open:rotate-180 transition-transform"} aria-hidden={"true"}>
{"expand_more"}</span>
</summary>
<p className={"font-body-sm text-body-sm text-on-surface-variant pt-space-sm leading-relaxed"}>
{" Upon confirmed stall reservation and deposit payment, MAXX Business Media issues official Ministry-approved Visa Invitation Letters within 48 hours. Our official freight handling partner (Schenker / DHL Global Forwarding) assists with duty-exempt ATA Carnet transit import directly into the BIEC bonded warehouse. "}</p>
</details>
<details className={"group bg-surface-container-low p-space-md rounded-xl cursor-pointer"}>
<summary className={"font-headline-sm text-[16px] font-bold text-on-surface flex items-center justify-between list-none"}>
<span>
{"What are the deadlines for high-voltage power and compressed air requisitions?"}</span>
<span className={"material-symbols-outlined group-open:rotate-180 transition-transform"} aria-hidden={"true"}>
{"expand_more"}</span>
</summary>
<p className={"font-body-sm text-body-sm text-on-surface-variant pt-space-sm leading-relaxed"}>
{" All heavy 3-phase 415V electrical power requirements exceeding 15 kW and centralized dry compressed air (6 to 8 bar) orders must be submitted via the Exhibitor Manual portal no later than January 10, 2027 to ensure certified conduit routing through floor trenches. "}</p>
</details>
<details className={"group bg-surface-container-low p-space-md rounded-xl cursor-pointer"}>
<summary className={"font-headline-sm text-[16px] font-bold text-on-surface flex items-center justify-between list-none"}>
<span>
{"Can non-trade public or students attend the exhibition?"}</span>
<span className={"material-symbols-outlined group-open:rotate-180 transition-transform"} aria-hidden={"true"}>
{"expand_more"}</span>
</summary>
<p className={"font-body-sm text-body-sm text-on-surface-variant pt-space-sm leading-relaxed"}>
{" No. DIEMEX is strictly a B2B professional trade forum. Admission is restricted to verified industry professionals with legitimate corporate credentials, business cards, or pre-approved digital badges. Persons under 18 years of age are not permitted on the exhibition floor under industrial safety protocols. "}</p>
</details>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"} id={"reserve"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"grid grid-cols-1 lg:grid-cols-2 gap-gutter-sm"}>
<div className={"bg-inverse-surface text-inverse-on-surface p-space-lg lg:p-space-xl rounded-2xl flex flex-col justify-between space-y-space-lg shadow-xl"}>
<div className={"space-y-space-sm"}>
<span className={"font-label-caps text-label-caps text-primary-fixed uppercase font-bold tracking-wider"}>
{"Exhibitor Space Allocation"}</span>
<h3 className={"font-headline-lg text-headline-lg font-bold text-surface-container-lowest"}>
{"Reserve Your Exhibition Stall at DIEMEX 2027"}</h3>
<p className={"font-body-md text-body-md text-surface-variant"}>
{" Lock in prime aisle positioning in Halls 1, 2, 3, or 3A before allocations are closed. Direct contact with our Senior Space Sales Director. "}</p>
</div>
<div className={"space-y-space-md"}>
<div className={"flex flex-col sm:flex-row gap-space-sm"}>
<Link className={"inline-flex items-center justify-center gap-2 px-space-md py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container shadow-md transition-all"} href={"/contact#inquiry-desk"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"domain"}</span>
<span>
{"Submit Stall Booking Inquiry"}</span>
</Link>
<a className={"inline-flex items-center justify-center gap-2 px-space-md py-3.5 rounded-lg bg-surface-container-lowest/10 text-surface-container-lowest hover:bg-surface-container-lowest/20 font-label-md text-label-md transition-colors"} href={"tel:+912228457800"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"call"}</span>
<span>
{"+91 22 2845 7800"}</span>
</a>
</div>
<p className={"font-label-sm text-label-sm text-surface-variant"}>
{" Official Desk: "}<strong className={"text-surface-container-lowest"}>
{"diemex@maxxmedia.in"}</strong>
{" • Response guaranteed within 4 business hours. "}</p>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-2xl flex flex-col justify-between space-y-space-lg shadow-sm border border-surface-container"} id={"trade-pass"}>
<div className={"space-y-space-sm"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Complimentary Professional Access"}</span>
<h3 className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>
{"Pre-Register for Your Free Trade Visitor Badge"}</h3>
<p className={"font-body-md text-body-md text-on-surface-variant"}>
{" Skip on-site registration lines (₹1,500 on-spot fee waived). Complimentary registration is open to verified industrial managers until January 31, 2027. "}</p>
</div>
<div className={"space-y-space-md"}>
<form className={"space-y-space-sm"} data-email={"space@maxxmedia.in"} data-email-subject={"DIEMEX 2027 | Event Details | Inquiry"}>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-xs"}>
<input className={"w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"Full Name"} required={true} type={"text"} id={"events-diemex-2027-field-1-1"} name={"Full Name"} data-field-label={"Full Name"} aria-label={"Full Name"} />
<input className={"w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"Corporate Work Email"} required={true} type={"email"} id={"events-diemex-2027-field-1-2"} name={"Corporate Work Email"} data-field-label={"Corporate Work Email"} aria-label={"Corporate Work Email"} />
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-xs"}>
<input className={"w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"Company / Organization"} required={true} type={"text"} id={"events-diemex-2027-field-1-3"} name={"Company / Organization"} data-field-label={"Company / Organization"} aria-label={"Company / Organization"} />
<select className={"w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container"} id={"events-diemex-2027-field-1-4"} name={"Field 4"} data-field-label={"Field 4"} aria-label={"Field 4"}>
<option value={""}>
{"Select Primary Sector"}</option>
<option value={"auto"}>
{"Automotive & Auto Components"}</option>
<option value={"aero"}>
{"Aerospace & Defense"}</option>
<option value={"mould"}>
{"Die & Mould Making"}</option>
<option value={"elec"}>
{"Electronics / Consumer Goods"}</option>
<option value={"other"}>
{"Other Engineering Sector"}</option>
</select>
</div>
<button className={"w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-secondary transition-colors"} type={"submit"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"mail"}</span>
<span>
{"Prepare Email Inquiry"}</span>
</button>
<p className={"font-body-sm text-body-sm text-secondary"} data-email-desk={"true"}>
{"Your email app will open with these details. Send the email to complete your request."}</p>
<p className={"font-body-sm text-body-sm text-primary"} data-form-status={"true"} role={"status"} aria-live={"polite"}>
</p>
</form>
<p className={"font-label-sm text-label-sm text-secondary"}>
{" Includes access to all 4 halls, daily sector catalogues, and open technology tracks. "}</p>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-lowest py-space-xl"} id={"venue"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"}>
<div className={"lg:col-span-5 space-y-space-md"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Transport Connectivity"}</span>
<h2 className={"font-headline-lg text-headline-lg text-inverse-surface font-bold"}>
{"Venue & Direct Transit Hubs"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>
{" Bengaluru International Exhibition Centre (BIEC) is India's premier exhibition complex, conveniently located on Tumkur Road with direct metro connectivity. "}</p>
<div className={"space-y-space-sm font-body-sm text-body-sm"}>
<div className={"flex items-start gap-space-sm"}>
<span className={"material-symbols-outlined text-primary shrink-0"} aria-hidden={"true"}>
{"train"}</span>
<div>
<strong className={"text-on-surface"}>
{"Namma Metro Green Line:"}</strong>
<p className={"text-secondary"}>
{"Direct transit to Madavara Metro Station (located directly opposite the BIEC Gate 1 pedestrian walkway)."}</p>
</div>
</div>
<div className={"flex items-start gap-space-sm"}>
<span className={"material-symbols-outlined text-primary shrink-0"} aria-hidden={"true"}>
{"flight"}</span>
<div>
<strong className={"text-on-surface"}>
{"Kempegowda International Airport (BLR):"}</strong>
<p className={"text-secondary"}>
{"45-minute drive via the Peripheral Ring Road & NICE Highway corridor. Official airport shuttle available daily."}</p>
</div>
</div>
<div className={"flex items-start gap-space-sm"}>
<span className={"material-symbols-outlined text-primary shrink-0"} aria-hidden={"true"}>
{"hotel"}</span>
<div>
<strong className={"text-on-surface"}>
{"Official Partner Hotels:"}</strong>
<p className={"text-secondary"}>
{"Special corporate delegate rates available at Sheraton Grand, Taj Yeshwantpur, and Fairfield by Marriott."}</p>
</div>
</div>
</div>
</div>
<div className={"lg:col-span-7"}>
<div className={"w-full h-80 rounded-2xl bg-surface-container overflow-hidden shadow-sm"} data-location={"Bengaluru International Exhibition Centre, Bangalore, India"} style={{"backgroundImage":"url('/images/stitch/maxx-industrial-exhibition-9d8497bee2.png')"}}>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

  </StitchInteractions>;
}
