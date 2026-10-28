import Link from "next/link";
import PageInteractions from "@/components/PageInteractions";

export const metadata = { title: "Events & Exhibitions | MAXX Business Media" };

// Layout and assets adapted from the original, user-provided Stitch screen.
export default function Page() {
return (
<PageInteractions>
<main className="w-full pt-20 bg-background min-h-screen" id="main-content">
<div className="flex flex-col w-full">
<section className="w-full bg-surface-container-low pt-8 pb-10">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-secondary mb-6 font-label-sm text-label-sm">
<Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"home"}</span>
<span>
{"Home"}</span>
</Link>
<span className="material-symbols-outlined text-[14px] text-secondary/60" aria-hidden="true">
{"chevron_right"}</span>
<span className="text-secondary/80">
{"Events & Expos"}</span>
<span className="material-symbols-outlined text-[14px] text-secondary/60" aria-hidden="true">
{"chevron_right"}</span>
<span className="text-on-surface font-semibold">
{"Calendar & Show Directory"}</span>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-end">
<div className="lg:col-span-8 space-y-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse">
</span>
{" GLOBAL INDUSTRIAL EXPOSITIONS & CONFERENCES "}</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
{" Catalyzing Bilateral Trade Across Capital Goods & Advanced Manufacturing. "}</h1>
<p className="font-body-lg text-body-lg text-secondary max-w-3xl leading-relaxed">
{" Explore MAXX Business Media's portfolio of international benchmark trade shows, technical symposia, and regional manufacturing expos connecting verified buyers with global machine builders. "}</p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
<a className="inline-flex items-center justify-between px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-all shadow-sm group" href="#flagship-convocation">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">
{"calendar_add_on"}</span>
<span>
{"Reserve Space (2026–2027)"}</span>
</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
{"arrow_forward"}</span>
</a>
<a className="inline-flex items-center justify-between px-space-md py-space-sm rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-secondary-fixed transition-colors" href="#download-center">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">
{"download"}</span>
<span>
{"Download Master Calendar PDF"}</span>
</span>
<span className="font-label-caps text-label-caps text-secondary uppercase">
{"2.4 MB"}</span>
</a>
</div>
</div>
<div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-gutter-sm bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center gap-space-sm px-space-xs">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-primary-container">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">
{"precision_manufacturing"}</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-on-surface">
{"6 Benchmark"}</div>
<div className="font-label-sm text-label-sm text-secondary">
{"Expos in 2026–2027"}</div>
</div>
</div>
<div className="flex items-center gap-space-sm px-space-xs">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-primary-container">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">
{"badge"}</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-on-surface">
{"120,000+"}</div>
<div className="font-label-sm text-label-sm text-secondary">
{"Verified Floor Trade Visitors"}</div>
</div>
</div>
<div className="flex items-center gap-space-sm px-space-xs">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-primary-container">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">
{"grid_goldenratio"}</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-on-surface">
{"65,000+ sqm"}</div>
<div className="font-label-sm text-label-sm text-secondary">
{"Cumulative Floorplate"}</div>
</div>
</div>
<div className="flex items-center gap-space-sm px-space-xs">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-primary-container">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">
{"public"}</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-on-surface">
{"18+ Nations"}</div>
<div className="font-label-sm text-label-sm text-secondary">
{"& Bilateral Guilds"}</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-lowest sticky top-20 z-40 shadow-sm py-4">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-4">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
<div className="relative flex-1 max-w-xl">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px]" aria-hidden="true">
{"search"}</span>
<input className="w-full h-11 pl-11 pr-10 rounded-lg bg-surface-container text-on-surface placeholder:text-secondary font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all" id="eventSearchInput" placeholder="Search by show name, venue, city, or technology domain..." type="text" aria-label="Search events by name, venue, city, or sector" />
<button className="hidden absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-on-surface" id="clearSearchBtn" aria-label="Clear event search" type="button">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"close"}</span>
</button>
</div>
<div className="flex items-center gap-1.5 p-1 rounded-lg bg-surface-container shrink-0 overflow-x-auto" id="statusTabGroup">
<button className="filter-status-btn px-3 py-1.5 rounded font-label-sm text-label-sm bg-inverse-surface text-inverse-on-surface transition-all" data-filter-status="all" type="button">
{" All Expos (8) "}</button>
<button className="filter-status-btn px-3 py-1.5 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all" data-filter-status="upcoming" type="button">
{" Upcoming (2026–2027) (6) "}</button>
<button className="filter-status-btn px-3 py-1.5 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-all" data-filter-status="archive" type="button">
{" Past Editions (2) "}</button>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-3 pt-2">
<div className="flex flex-wrap items-center gap-2" id="sectorFilterContainer">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider mr-1">
{"Sector:"}</span>
<button className="sector-chip px-3 py-1 rounded-full text-label-sm font-label-sm bg-inverse-surface text-inverse-on-surface" data-filter-sector="all" type="button">
{"All Sectors"}</button>
<button className="sector-chip px-3 py-1 rounded-full text-label-sm font-label-sm bg-surface-container text-secondary hover:bg-surface-container-high hover:text-on-surface" data-filter-sector="tooling" type="button">
{"Die, Mould & Tooling"}</button>
<button className="sector-chip px-3 py-1 rounded-full text-label-sm font-label-sm bg-surface-container text-secondary hover:bg-surface-container-high hover:text-on-surface" data-filter-sector="cnc" type="button">
{"Machine Tools & CNC"}</button>
<button className="sector-chip px-3 py-1 rounded-full text-label-sm font-label-sm bg-surface-container text-secondary hover:bg-surface-container-high hover:text-on-surface" data-filter-sector="automation" type="button">
{"Robotics & Automation"}</button>
<button className="sector-chip px-3 py-1 rounded-full text-label-sm font-label-sm bg-surface-container text-secondary hover:bg-surface-container-high hover:text-on-surface" data-filter-sector="fasteners" type="button">
{"Fasteners & Assembly"}</button>
<button className="sector-chip px-3 py-1 rounded-full text-label-sm font-label-sm bg-surface-container text-secondary hover:bg-surface-container-high hover:text-on-surface" data-filter-sector="symposium" type="button">
{"C-Suite & Tech Conclaves"}</button>
</div>
<div className="flex items-center gap-4 text-label-sm font-label-sm">
<span className="text-secondary font-medium" id="resultsCountText" aria-live="polite">
{"Showing 6 Upcoming Expos"}</span>
<button className="inline-flex items-center gap-1 text-primary hover:text-on-primary-fixed-variant font-semibold" id="resetAllFiltersBtn" type="button">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"restart_alt"}</span>
<span>
{"Reset Filters"}</span>
</button>
</div>
</div>
</div>
</section>
<section className="w-full py-12 bg-background">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-12">
<article className="relative rounded-2xl bg-surface-container-lowest p-6 lg:p-10 shadow-md hover:shadow-xl transition-shadow overflow-hidden group" id="flagship-convocation">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r/srgb from-primary-container via-tertiary to-primary">
</div>
<div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary-container/5 rounded-full pointer-events-none blur-3xl">
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
<div className="lg:col-span-8 space-y-5">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2.5 py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps uppercase tracking-wider">
{" FLAGSHIP BIENNIAL CONVOCATION • 8TH EDITION "}</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
{" International Exhibition "}</span>
<span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-primary font-semibold">
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping">
</span>
{" Stalls Booking Fast (74% Allocated) "}</span>
</div>
<div className="space-y-2">
<h2 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-primary transition-colors">
{" DIEMEX 2027 — International Die & Mould Exhibition "}</h2>
<div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-on-surface-variant font-label-md text-label-md">
<span className="inline-flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden="true">
{"event"}</span>
<strong className="text-on-surface">
{"February 18 – 21, 2027"}</strong>
</span>
<span className="inline-flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden="true">
{"location_on"}</span>
<span>
{"Bengaluru International Exhibition Centre (BIEC), Bengaluru, India"}</span>
</span>
</div>
</div>
<div className="flex flex-wrap gap-2 pt-1">
<span className="px-3 py-1 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface">
<strong>
{"Pavilion Layout:"}</strong>
{" Hall 1, 2 & 3A "}</span>
<span className="px-3 py-1 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface">
<strong>
{"Gross Area:"}</strong>
{" 25,000+ sqm "}</span>
<span className="px-3 py-1 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface">
<strong>
{"Exhibitors:"}</strong>
{" 450+ Global OEM Brands "}</span>
<span className="px-3 py-1 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface">
<strong>
{"Visitors:"}</strong>
{" 35,000+ Trade Delegates "}</span>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
{" South Asia's definitive capital goods trade fair dedicated exclusively to die, mould, press tools, specialized tooling, 5-axis CNC machining, and advanced subtractive machining technologies. Featuring official country pavilions from Germany (VDW), Italy (UCIMU), Japan (JMTBA), Taiwan, and South Korea. "}</p>
<div className="space-y-2 pt-2">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider block">
{"Production Floorplate Readiness:"}</span>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"offline_bolt"}</span>
{" Live Spindle Floorplates (415V/50Hz Grid) "}</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"handshake"}</span>
{" B2B Matchmaking Concierge "}</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"forklift"}</span>
{" 40-Tonne Heavy Gantry Cranes "}</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"verified_user"}</span>
{" Reverse Sourcing OEM Delegations "}</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 pt-4">
<a className="inline-flex items-center gap-2 px-space-md py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container shadow-sm transition-all transform hover:-translate-y-0.5" href="#booking-inquiry">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">
{"space_dashboard"}</span>
<span>
{"Reserve Exhibition Space / Floor Plan"}</span>
</a>
<a className="inline-flex items-center gap-2 px-space-md py-3 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-secondary transition-colors" href="#download-center">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">
{"picture_as_pdf"}</span>
<span>
{"Download Prospectus & Deck"}</span>
</a>
<a className="inline-flex items-center gap-1 text-primary hover:text-on-primary-fixed-variant font-label-md text-label-md pl-2 transition-colors" href="#venues-network">
<span>
{"View Show Floor Directory & Timetable"}</span>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"east"}</span>
</a>
</div>
</div>
<div className="lg:col-span-4 space-y-4">
<div className="relative rounded-xl overflow-hidden shadow-sm aspect-[4/3] bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/stitch/a-sprawling-high-precision-industrial-trade-pavi-1ff4cecd7c.jpg" alt="A sprawling" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/80 via-transparent to-transparent flex items-end p-4">
<div className="text-inverse-on-surface font-label-sm text-label-sm">
<span className="font-bold">
{"BIEC Halls 1–3"}</span>
{" • Bengaluru, Karnataka "}</div>
</div>
</div>
<div className="p-4 rounded-xl bg-surface-container-low space-y-3">
<div className="flex justify-between items-center text-label-sm font-label-sm">
<span className="text-secondary font-medium">
{"Exhibition Space Allocation"}</span>
<span className="text-primary font-bold">
{"18,500 / 25,000 sqm"}</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"74%"}}>
</div>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-secondary pt-1">
<span>
{"Country Pavilions: "}<strong>
{"5 Confirmed"}</strong>
</span>
<span className="text-primary-container font-semibold">
{"Priority Stall Booking Open"}</span>
</div>
</div>
</div>
</div>
</article>
<div className="space-y-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label-caps text-label-caps text-primary uppercase tracking-wider block">
{"EXPO DIRECTORY & SYMPOSIA"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
{" Upcoming Benchmark Industrial Trade Shows (2026–2027) "}</h2>
</div>
<div className="flex items-center gap-2 text-label-sm font-label-sm text-secondary">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-container">
</span>
<span>
{"Booth allocation live for all featured dates"}</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter" id="eventsCardGrid">
<article className="event-item rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-sector="cnc" data-status="upcoming">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded bg-surface-container font-label-caps text-label-caps text-secondary uppercase">
{" 5th Regional Edition "}</span>
<span className="px-2.5 py-0.5 rounded-full bg-primary-fixed font-label-sm text-label-sm text-on-primary-fixed font-semibold">
{" SEP 2026 "}</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
{"Machine Tools & Precision Machining"}</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mt-1">
{" MTE EXPO 2026 — Machine Tools & Precision Engineering "}</h3>
</div>
<div className="space-y-1.5 text-body-sm font-body-sm text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0" aria-hidden="true">
{"calendar_month"}</span>
<span className="text-on-surface font-medium">
{"September 10 – 13, 2026"}</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5" aria-hidden="true">
{"pin_drop"}</span>
<span>
{"Auto Cluster Exhibition Center, Pune, Maharashtra"}</span>
</div>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-label-sm font-label-sm text-on-surface">
<span>
{"12,000 sqm"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"220+ Exhibitors"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"18,000+ Visitors"}</span>
</div>
<p className="font-body-sm text-body-sm text-secondary line-clamp-2">
{" Automotive tooling, CNC turning, multi-axis milling, specialized cutting tools, metrology, and heavy sheet metal fabrication serving the Chakan industrial corridor. "}</p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between gap-2">
<a className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-tertiary-container transition-colors" href="#booking-inquiry">
{" Book Stall "}</a>
<a className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-secondary-fixed transition-colors" href="#booking-inquiry">
{" Pre-Register "}</a>
<button className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors" title="View Show Dossier" type="button">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"info"}</span>
</button>
</div>
</article>
<article className="event-item rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-sector="automation" data-status="upcoming">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded bg-surface-container font-label-caps text-label-caps text-secondary uppercase">
{" 3rd Biennial Edition "}</span>
<span className="px-2.5 py-0.5 rounded-full bg-primary-fixed font-label-sm text-label-sm text-on-primary-fixed font-semibold">
{" NOV 2026 "}</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
{"Industrial Automation & Robotics"}</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mt-1">
{" ROBOTURBO INDIA 2026 — Smart Automation Summit "}</h3>
</div>
<div className="space-y-1.5 text-body-sm font-body-sm text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0" aria-hidden="true">
{"calendar_month"}</span>
<span className="text-on-surface font-medium">
{"November 05 – 07, 2026"}</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5" aria-hidden="true">
{"pin_drop"}</span>
<span>
{"Chennai Trade Centre (CTC), Chennai, Tamil Nadu"}</span>
</div>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-label-sm font-label-sm text-on-surface">
<span>
{"8,500 sqm"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"160+ Automation Brands"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"14,000+ Engineers"}</span>
</div>
<p className="font-body-sm text-body-sm text-secondary line-clamp-2">
{" Collaborative robots (cobots), machine vision inspection systems, PLC/SCADA enterprise integration, and Industry 4.0 shop floor IoT deployments. "}</p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between gap-2">
<a className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-tertiary-container transition-colors" href="#booking-inquiry">
{" Book Stall "}</a>
<a className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-secondary-fixed transition-colors" href="#booking-inquiry">
{" Pre-Register "}</a>
<button className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors" title="View Show Dossier" type="button">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"info"}</span>
</button>
</div>
</article>
<article className="event-item rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-sector="fasteners" data-status="upcoming">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded bg-surface-container font-label-caps text-label-caps text-secondary uppercase">
{" 4th National Edition "}</span>
<span className="px-2.5 py-0.5 rounded-full bg-primary-fixed font-label-sm text-label-sm text-on-primary-fixed font-semibold">
{" DEC 2026 "}</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
{"Fasteners & Precision Assembly"}</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mt-1">
{" FASTTECH EXPO 2026 — Industrial Fasteners & Fixings "}</h3>
</div>
<div className="space-y-1.5 text-body-sm font-body-sm text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0" aria-hidden="true">
{"calendar_month"}</span>
<span className="text-on-surface font-medium">
{"December 03 – 05, 2026"}</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5" aria-hidden="true">
{"pin_drop"}</span>
<span>
{"India Expo Centre & Mart (IEML), Greater Noida, Delhi-NCR"}</span>
</div>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-label-sm font-label-sm text-on-surface">
<span>
{"10,000 sqm"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"190+ Exhibitors"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"16,500+ Buyers"}</span>
</div>
<p className="font-body-sm text-body-sm text-secondary line-clamp-2">
{" Aerospace & automotive fasteners, high-tensile riveting equipment, cold forming machinery, specialized adhesives, and automated assembly solutions. "}</p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between gap-2">
<a className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-tertiary-container transition-colors" href="#booking-inquiry">
{" Book Stall "}</a>
<a className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-secondary-fixed transition-colors" href="#booking-inquiry">
{" Pre-Register "}</a>
<button className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors" title="View Show Dossier" type="button">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"info"}</span>
</button>
</div>
</article>
<article className="event-item rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-sector="symposium" data-status="upcoming">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded bg-surface-container font-label-caps text-label-caps text-secondary uppercase">
{" Annual C-Suite Conclave "}</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed font-label-sm text-label-sm text-on-secondary-fixed font-semibold">
{" JUL 2026 "}</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
{"Executive Knowledge & Sourcing"}</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mt-1">
{" TOOL & DIE TECH CONCLAVE 2026 — Executive Summit "}</h3>
</div>
<div className="space-y-1.5 text-body-sm font-body-sm text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0" aria-hidden="true">
{"calendar_month"}</span>
<span className="text-on-surface font-medium">
{"July 24, 2026 (Single-Day Keynote)"}</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5" aria-hidden="true">
{"pin_drop"}</span>
<span>
{"The Leela Palace, Bengaluru, Karnataka"}</span>
</div>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-label-sm font-label-sm text-on-surface">
<span>
{"350+ C-Level Delegates"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"40+ Technical Keynotes"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"Chatham House Rule"}</span>
</div>
<p className="font-body-sm text-body-sm text-secondary line-clamp-2">
{" Additive manufacturing integration in die tooling, lightweight automotive structural alloys, and bilateral supply chain sovereign security. "}</p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between gap-2">
<a className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm hover:bg-secondary transition-colors" href="#booking-inquiry">
{" Delegate Pass "}</a>
<a className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-secondary-fixed transition-colors" href="#download-center">
{" Agenda Deck "}</a>
<button className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors" title="View Speakers" type="button">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"mic"}</span>
</button>
</div>
</article>
<article className="event-item rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-sector="cnc" data-status="upcoming">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded bg-surface-container font-label-caps text-label-caps text-secondary uppercase">
{" 2nd Regional Edition "}</span>
<span className="px-2.5 py-0.5 rounded-full bg-primary-fixed font-label-sm text-label-sm text-on-primary-fixed font-semibold">
{" APR 2027 "}</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
{"Sub-Tier Machining & Sheet Metal"}</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mt-1">
{" INDUS-MACHINE ASIA 2027 — Regional Capital Goods "}</h3>
</div>
<div className="space-y-1.5 text-body-sm font-body-sm text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0" aria-hidden="true">
{"calendar_month"}</span>
<span className="text-on-surface font-medium">
{"April 08 – 11, 2027"}</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5" aria-hidden="true">
{"pin_drop"}</span>
<span>
{"BIEC, Bengaluru, Karnataka"}</span>
</div>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-label-sm font-label-sm text-on-surface">
<span>
{"15,000 sqm"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"280+ Machine Builders"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"22,000+ Buyers"}</span>
</div>
<p className="font-body-sm text-body-sm text-secondary line-clamp-2">
{" Heavy sheet metal working machinery, fiber laser cutting centers, high-capacity welding robotics, and specialized sub-contracting corridors. "}</p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between gap-2">
<a className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-tertiary-container transition-colors" href="#booking-inquiry">
{" Book Stall "}</a>
<a className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-secondary-fixed transition-colors" href="#booking-inquiry">
{" Pre-Register "}</a>
<button className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors" title="View Show Dossier" type="button">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"info"}</span>
</button>
</div>
</article>
<article className="event-item rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between opacity-85 group" data-sector="tooling" data-status="archive">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded bg-surface-container font-label-caps text-label-caps text-secondary uppercase">
{" Archived Edition • Post Show Report "}</span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest font-label-sm text-label-sm text-secondary font-semibold">
{" CONCLUDED "}</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase font-bold tracking-wider">
{"Benchmark Exhibition"}</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mt-1">
{" DIEMEX 2024 — International Die & Mould Conclave "}</h3>
</div>
<div className="space-y-1.5 text-body-sm font-body-sm text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary shrink-0" aria-hidden="true">
{"history"}</span>
<span className="text-on-surface font-medium">
{"February 15 – 18, 2024"}</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5" aria-hidden="true">
{"pin_drop"}</span>
<span>
{"BIEC Bengaluru, Karnataka"}</span>
</div>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-label-sm font-label-sm text-on-surface">
<span>
{"21,500 sqm"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"380 Exhibitors"}</span>
<span className="text-secondary">
{"•"}</span>
<span>
{"31,200 Buyers"}</span>
</div>
<p className="font-body-sm text-body-sm text-secondary line-clamp-2">
{" Full retrospective audit report, business transacted value metrics (₹1,420 Cr), and buyer satisfaction indices available for enterprise download. "}</p>
</div>
<div className="pt-6 mt-4 flex items-center justify-between gap-2">
<a className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" href="#download-center">
{" Download Audit (PDF) "}</a>
<button className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-surface-container-low text-secondary font-label-sm text-label-sm hover:text-on-surface transition-colors" type="button">
{" Photo Gallery (340+) "}</button>
</div>
</article>
</div>
<p className="hidden p-space-lg rounded-xl bg-surface-container-lowest text-secondary" data-events-empty="true" role="status">
{"No events match these filters. Try another search or reset the filters."}</p>
</div>
<section className="pt-8" id="venues-network">
<div className="space-y-2 mb-8">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-wider block">
{"INFRASTRUCTURE PORTFOLIO"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
{" World-Class Exhibition Facilities Engineered for Heavy Capital Goods "}</h2>
<p className="font-body-md text-body-md text-secondary max-w-3xl">
{" MAXX expos require severe industrial infrastructure. Every venue partner is selected for crane load capacities, high-voltage drop density, and heavy logistics connectivity. "}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div className="rounded-xl bg-surface-container-lowest p-5 shadow-sm space-y-4">
<div className="h-32 rounded-lg bg-surface-container overflow-hidden relative">
<img className="w-full h-full object-cover" src="/images/stitch/modern-architectural-exterior-of-the-bengaluru-i-3e926b5729.jpg" alt="Modern architectural exterior of the Bengaluru International Exhibition Centre (BIEC) with wide vehicle access gates" loading="lazy" decoding="async" />
<span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-inverse-surface/90 text-inverse-on-surface font-label-caps text-label-caps uppercase">
{"Bengaluru"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">
{"BIEC Bengaluru"}</h3>
<p className="font-label-sm text-label-sm text-secondary">
{"Karnataka • Primary Flagship Ground"}</p>
</div>
<ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"weight"}</span>
<span>
{"Floor loading: "}<strong>
{"30 tonnes/sqm"}</strong>
</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"bolt"}</span>
<span>
{"Dedicated 66kV Substation"}</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"local_shipping"}</span>
<span>
{"Direct NH4 Heavy Multi-axle Access"}</span>
</li>
</ul>
</div>
<div className="rounded-xl bg-surface-container-lowest p-5 shadow-sm space-y-4">
<div className="h-32 rounded-lg bg-surface-container overflow-hidden relative">
<img className="w-full h-full object-cover" src="/images/stitch/the-modern-industrial-facade-of-the-auto-cluster-b426a00ae5.jpg" alt="The modern industrial facade of the Auto Cluster Exhibition Center in Pune" loading="lazy" decoding="async" />
<span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-inverse-surface/90 text-inverse-on-surface font-label-caps text-label-caps uppercase">
{"Pune"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">
{"Auto Cluster"}</h3>
<p className="font-label-sm text-label-sm text-secondary">
{"Chakan-Pimpri Belt, Maharashtra"}</p>
</div>
<ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"location_city"}</span>
<span>
{"Proximity to 3,000+ Auto Tier 1 Plants"}</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"warehouse"}</span>
<span>
{"Integrated Container Loading Docks"}</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"compress"}</span>
<span>
{"Centralized Pneumatic Air Manifolds"}</span>
</li>
</ul>
</div>
<div className="rounded-xl bg-surface-container-lowest p-5 shadow-sm space-y-4">
<div className="h-32 rounded-lg bg-surface-container overflow-hidden relative">
<img className="w-full h-full object-cover" src="/images/stitch/the-chennai-trade-centre-with-wide-concrete-aven-1793f49cba.jpg" alt="The Chennai Trade Centre with wide concrete avenues" loading="lazy" decoding="async" />
<span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-inverse-surface/90 text-inverse-on-surface font-label-caps text-label-caps uppercase">
{"Chennai"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">
{"Chennai Trade Centre"}</h3>
<p className="font-label-sm text-label-sm text-secondary">
{"Nandambakkam, Tamil Nadu"}</p>
</div>
<ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"hub"}</span>
<span>
{"Sriperumbudur Manufacturing Corridor"}</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"flight"}</span>
<span>
{"10 mins from Chennai Intl Airport"}</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"engineering"}</span>
<span>
{"Full Column-Free Exhibition Halls"}</span>
</li>
</ul>
</div>
<div className="rounded-xl bg-surface-container-lowest p-5 shadow-sm space-y-4">
<div className="h-32 rounded-lg bg-surface-container overflow-hidden relative">
<img className="w-full h-full object-cover" src="/images/stitch/india-expo-centre-and-mart-in-greater-noida-feat-c73b664810.jpg" alt="India Expo Centre and Mart in Greater Noida featuring immense architectural steel halls and sprawling logistics aprons for global capital go" loading="lazy" decoding="async" />
<span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-inverse-surface/90 text-inverse-on-surface font-label-caps text-label-caps uppercase">
{"Delhi-NCR"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">
{"IEML Greater Noida"}</h3>
<p className="font-label-sm text-label-sm text-secondary">
{"National Capital Region, India"}</p>
</div>
<ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"domain"}</span>
<span>
{"14 Climate-Controlled Expo Halls"}</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"cloud_upload"}</span>
<span>
{"Bonded Cargo Warehouse Onsite"}</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"train"}</span>
<span>
{"Direct High-Speed Metro Interchange"}</span>
</li>
</ul>
</div>
</div>
</section>
<section className="rounded-2xl bg-surface-container p-8 lg:p-12 space-y-8">
<div className="text-center max-w-3xl mx-auto space-y-2">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-wider block">
{"THE MAXX VALUE ACCELERATOR"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
{" Why Capital Goods Leaders Invest in MAXX Trade Floors "}</h2>
<p className="font-body-md text-body-md text-secondary">
{" Unlike generic multi-industry conventions, MAXX events are rigorously engineered for direct industrial procurement, heavy live demonstrations, and enterprise machinery sales. "}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-3">
<div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">
{"groups_3"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">
{"Pre-Vetted Enterprise Buyers"}</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
{" Every badge is vetted. Direct procurement leaders, plant managers, and R&D directors from Tata Motors, Mahindra, Bharat Forge, L&T, Godrej, HAL, and ISRO walk our aisles with active capex budgets. "}</p>
<div className="pt-2">
<span className="font-label-caps text-label-caps text-primary font-bold">
{"89% PURCHASE AUTHORITY RATE"}</span>
</div>
</div>
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-3">
<div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">
{"precision_manufacturing"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">
{"Turnkey Floorplate Engineering"}</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
{" Heavy electrical drops (415V/50Hz), high-pressure compressed air, dynamic gantry cranes, and on-site bonded customs clearance to commission live CNC spindle operations without friction. "}</p>
<div className="pt-2">
<span className="font-label-caps text-label-caps text-primary font-bold">
{"ZERO LIVE DEMO COMPROMISE"}</span>
</div>
</div>
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-3">
<div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">
{"campaign"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">
{"365-Day Media Amplification"}</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
{" Exhibitors benefit from year-round amplification through our flagship industrial titles: "}<em>
{"Industrial Machinery & Tooling Review"}</em>
{" and "}<em>
{"Die & Mould World"}</em>
{", reaching 85,000+ digital subscribers. "}</p>
<div className="pt-2">
<span className="font-label-caps text-label-caps text-primary font-bold">
{"CIRCULATION OF 85,000+ SUBSCRIBERS"}</span>
</div>
</div>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start" id="download-center">
<div className="lg:col-span-5 space-y-6">
<div className="space-y-2">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-wider block">
{"OFFICIAL DOCUMENTATION"}</span>
<h2 className="font-headline-md text-headline-md text-on-surface">
{" Resource Download Shelf "}</h2>
<p className="font-body-sm text-body-sm text-secondary">
{" Acquire verified documentation, floor layout schematics, and official sponsorship prospectuses for your management board. "}</p>
</div>
<div className="space-y-3">
<a className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container shadow-sm transition-colors group" href="/contact#inquiry-desk">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[24px] text-primary-container" aria-hidden="true">
{"calendar_today"}</span>
<div>
<div className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
{"2026–2027 Master Events Calendar"}</div>
<div className="font-label-sm text-label-sm text-secondary">
{"PDF • Comprehensive 2-Year Schedule (2.4 MB)"}</div>
</div>
</div>
<span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-on-surface" aria-hidden="true">
{"download"}</span>
</a>
<a className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container shadow-sm transition-colors group" href="/contact#inquiry-desk">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[24px] text-primary-container" aria-hidden="true">
{"description"}</span>
<div>
<div className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
{"Exhibitor Space Application Guide"}</div>
<div className="font-label-sm text-label-sm text-secondary">
{"PDF • Technical Rules, Rates & Utilities (1.8 MB)"}</div>
</div>
</div>
<span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-on-surface" aria-hidden="true">
{"download"}</span>
</a>
<a className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container shadow-sm transition-colors group" href="/contact#inquiry-desk">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[24px] text-primary-container" aria-hidden="true">
{"flag"}</span>
<div>
<div className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
{"Sponsorship & Country Pavilion Kit"}</div>
<div className="font-label-sm text-label-sm text-secondary">
{"PDF • Association & Bilateral Delegations (3.1 MB)"}</div>
</div>
</div>
<span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-on-surface" aria-hidden="true">
{"download"}</span>
</a>
<a className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container shadow-sm transition-colors group" href="/contact#inquiry-desk">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[24px] text-primary-container" aria-hidden="true">
{"how_to_reg"}</span>
<div>
<div className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
{"Visitor Pre-Registration Accreditation"}</div>
<div className="font-label-sm text-label-sm text-secondary">
{"PDF • Verification Criteria & Group Passes (1.1 MB)"}</div>
</div>
</div>
<span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-on-surface" aria-hidden="true">
{"download"}</span>
</a>
</div>
</div>
<div className="lg:col-span-7 space-y-6">
<div className="space-y-2">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-wider block">
{"FREQUENTLY ASKED QUESTIONS"}</span>
<h2 className="font-headline-md text-headline-md text-on-surface">
{" Operational & Sourcing Inquiries "}</h2>
<p className="font-body-sm text-body-sm text-secondary">
{" Key operational clarifications for global machine tool companies, associations, and delegate delegations. "}</p>
</div>
<div className="space-y-3" id="faqAccordion">
<details className="faq-item rounded-xl bg-surface-container-lowest p-5 shadow-sm space-y-2 cursor-pointer transition-all" name="event-questions">
<summary className="flex items-center justify-between list-none focus-visible:outline-primary-container">
<h3 className="font-label-md text-label-md text-on-surface font-bold">
{" How are visitor credentials pre-screened to ensure serious commercial buyers? "}</h3>
<span className="material-symbols-outlined text-secondary transform transition-transform faq-icon" aria-hidden="true">
{"expand_more"}</span>
</summary>
<p className="faq-content  font-body-sm text-body-sm text-secondary pt-2">
{" All visitor badge applicants submit commercial credentials including GST registration, official enterprise domain email, and current designation. General public access is strictly restricted. Only industrial professionals holding procurement, design, tooling, engineering, or plant operations roles are cleared for badges. "}</p>
</details>
<details className="faq-item rounded-xl bg-surface-container-lowest p-5 shadow-sm space-y-2 cursor-pointer transition-all" name="event-questions">
<summary className="flex items-center justify-between list-none focus-visible:outline-primary-container">
<h3 className="font-label-md text-label-md text-on-surface font-bold">
{" What infrastructural provisions exist for live heavy machinery demonstrations? "}</h3>
<span className="material-symbols-outlined text-secondary transform transition-transform faq-icon" aria-hidden="true">
{"expand_more"}</span>
</summary>
<p className="faq-content  font-body-sm text-body-sm text-secondary pt-2">
{" Our venues are fully engineered for live heavy machining. We provide standard three-phase industrial power (415V/50Hz) up to customized load requirements, continuous dry compressed air supply (6–8 bar), floor trench drainage, and authorized heavy overhead crane rigging teams capable of lifts up to 40 tonnes. "}</p>
</details>
<details className="faq-item rounded-xl bg-surface-container-lowest p-5 shadow-sm space-y-2 cursor-pointer transition-all" name="event-questions">
<summary className="flex items-center justify-between list-none focus-visible:outline-primary-container">
<h3 className="font-label-md text-label-md text-on-surface font-bold">
{" How can international trade bodies organize dedicated country pavilions? "}</h3>
<span className="material-symbols-outlined text-secondary transform transition-transform faq-icon" aria-hidden="true">
{"expand_more"}</span>
</summary>
<p className="faq-content  font-body-sm text-body-sm text-secondary pt-2">
{" MAXX maintains bilateral coordinators for bodies such as VDW (Germany), UCIMU (Italy), JMTBA (Japan), and TAMI (Taiwan). We offer bundled pavilion packages including contiguous prime floor space, customized architectural fascia, bilateral translator services, and bespoke VIP buyer roundtables. "}</p>
</details>
<details className="faq-item rounded-xl bg-surface-container-lowest p-5 shadow-sm space-y-2 cursor-pointer transition-all" name="event-questions">
<summary className="flex items-center justify-between list-none focus-visible:outline-primary-container">
<h3 className="font-label-md text-label-md text-on-surface font-bold">
{" Can exhibitors secure multi-event package rates across DIEMEX and regional expos? "}</h3>
<span className="material-symbols-outlined text-secondary transform transition-transform faq-icon" aria-hidden="true">
{"expand_more"}</span>
</summary>
<p className="faq-content  font-body-sm text-body-sm text-secondary pt-2">
{" Yes. Through the MAXX Corporate Partner Program, enterprise manufacturers committing to two or more expos (e.g., DIEMEX Bengaluru + MTE Pune + ROBOTURBO Chennai) receive tiered floor space rebates, complimentary priority editorial in our publications, and dedicated VIP matchmaking concierge desks. "}</p>
</details>
</div>
</div>
</section>
<section className="rounded-2xl bg-inverse-surface text-inverse-on-surface p-8 lg:p-12 relative overflow-hidden shadow-xl" id="booking-inquiry">
<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none">
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
<div className="lg:col-span-8 space-y-4">
<span className="px-3 py-1 rounded bg-surface-container-high/15 font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider">
{" ENTERPRISE SPACE BOOKING & TRADE SOURCING "}</span>
<h2 className="font-headline-lg text-headline-lg text-surface-container-lowest tracking-tight">
{" Ready to Showcase Your Advanced Machinery to 150,000+ Industrial Decision-Makers? "}</h2>
<p className="font-body-md text-body-md text-surface-variant max-w-2xl leading-relaxed">
{" Connect with our Senior Exhibition Directorate to receive floor plan drafts, stall dimensions, load capacity specs, and country pavilion allotments. "}</p>
<div className="flex flex-wrap items-center gap-6 pt-2 font-label-md text-label-md text-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]" aria-hidden="true">
{"mail"}</span>
<span>
{"events@maxxmedia.in"}</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]" aria-hidden="true">
{"call"}</span>
<span>
{"+91 22 2845 7800 (Ext. 401)"}</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]" aria-hidden="true">
{"schedule"}</span>
<span>
{"Response within 4 business hours"}</span>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-3 justify-center">
<button className="w-full inline-flex items-center justify-center gap-2 px-space-md py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container shadow-md transition-all transform hover:-translate-y-0.5" type="button">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">
{"edit_calendar"}</span>
<span>
{"Inquire for Exhibition Space"}</span>
</button>
<button className="w-full inline-flex items-center justify-center gap-2 px-space-md py-3.5 rounded-lg bg-surface-container-high/20 text-inverse-on-surface font-label-md text-label-md hover:bg-surface-container-high/30 transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">
{"handshake"}</span>
<span>
{"Speak With Head of Delegations"}</span>
</button>
</div>
</div>
</section>
</div>
</section>
</div>
</main>

</PageInteractions>
);
}
