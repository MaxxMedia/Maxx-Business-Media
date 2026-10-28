import Link from "next/link";
import PageInteractions from "@/components/PageInteractions";

export const metadata = { title: "Leadership & Team | MAXX Business Media" };

// Layout and assets adapted from the original, user-provided Stitch screen.
export default function Page() {
return (
<PageInteractions>
<main className="w-full pt-20 bg-background min-h-screen" id="main-content">
<div className="flex flex-col w-full">
<section className="w-full bg-surface-container-low/60 py-space-xl">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<nav aria-label="Breadcrumbs" className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm mb-space-md">
<Link className="hover:text-primary transition-colors" data-path="home" href="/">
{"Home"}</Link>
<span className="material-symbols-outlined text-[14px]" aria-hidden="true">
{"chevron_right"}</span>
<Link className="hover:text-primary transition-colors" data-path="about-us" href="/about-us">
{"About Us"}</Link>
<span className="material-symbols-outlined text-[14px]" aria-hidden="true">
{"chevron_right"}</span>
<span className="text-on-surface font-semibold">
{"Leadership & Team"}</span>
</nav>
<div className="max-w-4xl space-y-space-xs">
<div className="inline-flex items-center gap-space-xs px-3 py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse">
</span>
{" Executive Governance & Talent "}</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
{" Steered by Industry Veterans. Driven by Technical Precision. "}</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl pt-space-xs leading-relaxed">
{" The executive directors, operations architects, and editorial authorities orchestrating India's benchmark industrial trade expos, sovereign country pavilions, and peer-reviewed B2B media intelligence. "}</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-space-xl pt-space-lg bg-surface-container-lowest rounded-xl shadow-sm p-space-lg">
<div className="space-y-1">
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-primary font-bold">
{"65+"}</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
{"Years"}</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface font-semibold">
{"Floor Leadership"}</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
{"Cumulative heavy machinery showplate direction"}</p>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-primary font-bold">
{"100%"}</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
{"Rigor"}</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface font-semibold">
{"In-House Operations"}</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
{"No subcontracted floor rigging or power engineering"}</p>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-primary font-bold">
{"14"}</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
{"Zones"}</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface font-semibold">
{"State Corridors"}</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
{"Active manufacturing hub intelligence networks"}</p>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-primary font-bold">
{"5,000+"}</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
{"Entities"}</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface font-semibold">
{"Verified Dialogues"}</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
{"Institutional guild, ministry, and guild partnerships"}</p>
</div>
</div>
</div>
</section>
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
<div className="lg:col-span-5 relative bg-inverse-surface min-h-[440px] flex items-end">
<img className="w-full h-full object-cover object-top absolute inset-0 mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all duration-300" src="/images/stitch/distinguished-south-asian-senior-male-executive-1b393d84db.jpg" alt="Distinguished South Asian senior male executive in his early fifties wearing a bespoke tailored charcoal corporate blazer and steel-grey sil" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface via-inverse-surface/30 to-transparent">
</div>
<div className="relative z-10 p-space-lg space-y-1 text-inverse-on-surface">
<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider">
{" Executive Office "}</div>
<h3 className="font-headline-md text-headline-md text-surface-container-lowest font-bold">
{"Rajesh V. Sharma"}</h3>
<p className="font-label-md text-label-md text-primary-fixed">
{"Founder & Managing Director"}</p>
</div>
</div>
<div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-md bg-surface-container-lowest">
<div className="space-y-space-md">
<div className="flex items-center justify-between border-b border-surface-container pb-space-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
{"Board Leadership Profile"}</span>
<span className="font-label-sm text-label-sm text-primary font-medium">
{"Tenure: 24+ Years In Trade Media"}</span>
</div>
<blockquote className="font-body-lg text-body-lg text-on-surface italic relative pl-space-md border-l-4 border-primary-container leading-relaxed">
{" “In heavy industry, trust cannot be simulated. It is earned through micron-level operational precision, rigorous buyer qualification, and decades of floorplate discipline.” "}</blockquote>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
{" A pioneering force in Indian industrial capital goods media, Rajesh Sharma founded MAXX Business Media with the conviction that trade shows must deliver verifiable factory orders, not ephemeral marketing footfall. Over twenty-four years, he has spearheaded the conceptualization of benchmark expos across Mumbai, Pune, Chennai, and Delhi-NCR. As the principal architect of DIEMEX (International Die, Mould & Tooling Expo), he expanded the platform from a regional symposium into a certified 25,000+ sqm industrial trade standard recognized across Europe, Japan, and Southeast Asia. "}</p>
<div className="pt-space-xs space-y-2">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block">
{"Specialized Executive Mandate"}</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
{" Capital Goods Floor Planning "}</span>
<span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
{" Bilateral Trade Delegations "}</span>
<span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
{" High-Throughput Buyer Qualification "}</span>
<span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
{" Heavy Crane & Live Spindle Grids "}</span>
</div>
</div>
</div>
<div className="pt-space-md border-t border-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-inverse-surface text-inverse-on-surface hover:bg-on-secondary-fixed transition-colors font-label-sm text-label-sm" href="mailto:info@maxxmedia.in?subject=Corporate%20enquiry">
<span className="material-symbols-outlined text-[16px] text-primary-fixed" aria-hidden="true">
{"mail"}</span>
<span>
{"Executive Office Desk"}</span>
</a>
<a className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant transition-colors text-on-surface font-label-sm text-label-sm" href="/contact#inquiry-desk">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"open_in_new"}</span>
<span>
{"LinkedIn Dossier"}</span>
</a>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant">
{"DIN: 01488290 — Corporate Registry Approved"}</span>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-space-xl bg-surface-container-low/40">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="space-y-space-xs max-w-2xl">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-wider font-semibold">
{"Tier-1 Operational Bench"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
{"Executive Leadership & Divisional Directors"}</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
{" Each functional head commands over a decade of domain expertise, orchestrating civil logistics, metallurgical publishing, institutional procurement delegations, and digital matchmaking platforms. "}</p>
</div>
<div className="shrink-0 flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary-container">
</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">
{"6 Divisional Commands Active"}</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
<div className="space-y-space-md">
<div className="flex items-start justify-between">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-highest shrink-0 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="/images/stitch/professional-corporate-headshot-portrait-of-an-i-40365dc923.jpg" alt="Professional corporate headshot portrait of an Indian male civil engineer in his late forties wearing an executive charcoal suit and hardhat" loading="lazy" decoding="async" />
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
{"18+ Yrs Exp"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
{"Sunil K. Bhatt"}</h3>
<p className="font-label-sm text-label-sm text-primary font-semibold mt-0.5">
{"Director, Mega-Venue Infrastructure & Turnkey Floor Logistics"}</p>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
{" Oversees heavy crane gantry rigging, live high-voltage 415V substation drops, hydraulic tie-ins, and multi-modal customs clearance for 40-tonne 5-axis CNC machining centers. "}</p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between text-on-surface-variant">
<span className="font-label-caps text-label-caps uppercase">
{"Venue Logistics & Heavy Lift"}</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 group-hover:text-primary transition-all" aria-hidden="true">
{"engineering"}</span>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
<div className="space-y-space-md">
<div className="flex items-start justify-between">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-highest shrink-0 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="/images/stitch/editorial-portrait-of-an-indian-female-senior-me-3903e03e16.jpg" alt="Editorial portrait of an Indian female senior metallurgist and publication chief editor in her mid-forties with spectacles" loading="lazy" decoding="async" />
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
{"15+ Yrs Exp"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
{"Dr. Anita S. Deshmukh"}</h3>
<p className="font-label-sm text-label-sm text-primary font-semibold mt-0.5">
{"Chief Editor & Head of Industrial Publications"}</p>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
{" Ex-metallurgist steering MAXX's authoritative trade periodicals ‘Industrial Machinery & Tooling Review’ and ‘Die & Mould World’, championing technical whitepapers and shop-floor case studies. "}</p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between text-on-surface-variant">
<span className="font-label-caps text-label-caps uppercase">
{"Technical Media & Research"}</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 group-hover:text-primary transition-all" aria-hidden="true">
{"menu_book"}</span>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
<div className="space-y-space-md">
<div className="flex items-start justify-between">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-highest shrink-0 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="/images/stitch/executive-corporate-portrait-of-a-european-male-5ad8443f93.jpg" alt="Executive corporate portrait of a European male director in his late forties wearing an Italian navy pinstripe suit" loading="lazy" decoding="async" />
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
{"20+ Yrs Exp"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
{"Marcus Vance"}</h3>
<p className="font-label-sm text-label-sm text-primary font-semibold mt-0.5">
{"Senior Director, Global Country Pavilions & Trade Alliances"}</p>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
{" Bilateral trade strategist managing official sovereign pavilions from Germany (VDW/VDMA networks), Italy (UCIMU), Japan (JMTBA), Taiwan, and South Korea across all MAXX industrial platforms. "}</p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between text-on-surface-variant">
<span className="font-label-caps text-label-caps uppercase">
{"Bilateral Pavilions & Treaties"}</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 group-hover:text-primary transition-all" aria-hidden="true">
{"public"}</span>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
<div className="space-y-space-md">
<div className="flex items-start justify-between">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-highest shrink-0 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="/images/stitch/corporate-headshot-of-an-assertive-indian-male-b-0bf6a7128b.jpg" alt="Corporate headshot of an assertive Indian male business executive in his early forties wearing a sharp tailored dark grey blazer and light b" loading="lazy" decoding="async" />
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
{"16+ Yrs Exp"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
{"Vikramaditya Rathore"}</h3>
<p className="font-label-sm text-label-sm text-primary font-semibold mt-0.5">
{"Vice President, Exhibitor Acquisition & Key Accounts"}</p>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
{" Spearheads anchor enterprise patron relationships across Tier-1 automotive tooling consortia, aerospace component forgings, additive manufacturing, and robotics automation conglomerates. "}</p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between text-on-surface-variant">
<span className="font-label-caps text-label-caps uppercase">
{"Exhibitor Space Yield & Patronage"}</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 group-hover:text-primary transition-all" aria-hidden="true">
{"handshake"}</span>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
<div className="space-y-space-md">
<div className="flex items-start justify-between">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-highest shrink-0 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="/images/stitch/polished-executive-portrait-of-an-indian-female-fcf6d2e98a.jpg" alt="Polished executive portrait of an Indian female marketing and audience acquisition director in her late thirties" loading="lazy" decoding="async" />
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
{"14+ Yrs Exp"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
{"Meera Swaminathan"}</h3>
<p className="font-label-sm text-label-sm text-primary font-semibold mt-0.5">
{"Head of Verified Attendee Acquisition & Buyer Delegations"}</p>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
{" Coordinates high-intent delegations comprising 150,000+ plant heads, procurement chiefs, defense R&D officials, and MSME cluster directors, enforcing strict buyer pre-qualification filters. "}</p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between text-on-surface-variant">
<span className="font-label-caps text-label-caps uppercase">
{"Qualified Buyer Funnels"}</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 group-hover:text-primary transition-all" aria-hidden="true">
{"badge"}</span>
</div>
</div>
<div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
<div className="space-y-space-md">
<div className="flex items-start justify-between">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-highest shrink-0 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="/images/stitch/professional-portrait-of-a-male-technology-and-d-a5c32a8e82.jpg" alt="Professional portrait of a male technology and data director in his early forties wearing a modern structured dark jacket" loading="lazy" decoding="async" />
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
{"13+ Yrs Exp"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
{"Sanjay K. Chordia"}</h3>
<p className="font-label-sm text-label-sm text-primary font-semibold mt-0.5">
{"Director, Digital Architecture & B2B Matchmaking Systems"}</p>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
{" Architect of MAXX Connect: an algorithmic 365-day matchmaking engine pairing OEM machine requirements with accredited suppliers, plus frictionless NFC badging and live show floor data telemetry. "}</p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between text-on-surface-variant">
<span className="font-label-caps text-label-caps uppercase">
{"Telemetry & Matchmaking Engine"}</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 group-hover:text-primary transition-all" aria-hidden="true">
{"database"}</span>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg">
<div className="border-b border-surface-container pb-space-md flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div className="space-y-1">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-wider font-semibold">
{"Independent Oversight"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
{"Industry Advisory Board & Technical Council"}</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
{" Eminent industry statesmen and guild counselors ensuring MAXX exhibition floorplates directly address macro manufacturing requirements. "}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">
{"precision_manufacturing"}</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface font-bold">
{"K. R. Narayanan"}</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant block">
{"Former President, TAGMA India"}</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
{" Advises on precision tooling standards, die-casting capacity benchmarks, and vocational tooling apprenticeship frameworks for DIEMEX. "}</p>
<div className="pt-space-xs font-label-caps text-label-caps text-primary uppercase">
{" Mandate: Tooling Guild Alignment "}</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">
{"smart_toy"}</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface font-bold">
{"Prof. Arindam Bose"}</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant block">
{"Senior Fellow, Machine Tool Guild"}</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
{" Curates academic and R&D symposiums in multi-axis additive fabrication, cyber-physical automation, and Industry 4.0 shop floor deployments. "}</p>
<div className="pt-space-xs font-label-caps text-label-caps text-primary uppercase">
{" Mandate: Research & Symposium Tracks "}</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">
{"directions_car"}</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface font-bold">
{"Harishankar Iyer"}</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant block">
{"Procurement Advisor, Tier-1 Auto"}</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
{" Spearheads automotive OEM buyer councils, organizing private reverse-pitching forums between Tier-1 automakers and machinery makers. "}</p>
<div className="pt-space-xs font-label-caps text-label-caps text-primary uppercase">
{" Mandate: OEM Sourcing Councils "}</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">
{"handshake"}</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface font-bold">
{"Elisabeth Schneider"}</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant block">
{"Indo-European Trade Counselor"}</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
{" Facilitates cross-border technology transfers, sovereign machinery export credits, and bilateral European chamber delegations to India. "}</p>
<div className="pt-space-xs font-label-caps text-label-caps text-primary uppercase">
{" Mandate: Sovereign Bilateral Commerce "}</div>
</div>
</div>
</div>
</section>
<section className="w-full py-space-xl bg-surface-container-low/60">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl">
<div className="max-w-2xl space-y-space-xs">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-wider font-semibold">
{"Institutional Code"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
{"Our Operational Philosophy"}</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
{" In an industry often distracted by superficial footprint metrics, MAXX leadership operates under three non-negotiable doctrines. "}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
{" 01 "}</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"Micron-Level Execution"}</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
{" We design exhibition halls for working heavy machinery, not passive posterboards. Zero downtime on live spindle floorplates; heavy electrical capacity with N+1 transformer redundancies, pneumatic supplies, and certified slab weight ratings. "}</p>
</div>
<div className="pt-space-md border-t border-surface-container font-label-caps text-label-caps text-primary">
{" Standard: ISO 9001 Floorplate Governance "}</div>
</div>
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
{" 02 "}</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"Uncompromised Attendee Integrity"}</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
{" We explicitly reject inflated vanity visitor counts. Our registration desks verify corporate credentials, rejecting non-industry footfall. Every badge holder walking down a DIEMEX aisle represents real CAPEX purchasing power or plant authority. "}</p>
</div>
<div className="pt-space-md border-t border-surface-container font-label-caps text-label-caps text-primary">
{" Standard: 100% Pre-Vetted Visitor Audits "}</div>
</div>
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
{" 03 "}</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"365-Day Industry Stewardship"}</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
{" A 4-day biennial expo is only the culmination of continuous dialogue. Through technical print journals, digital engineering portals, closed-door CEO roundtables, and plant visits, our team nurtures B2B relationships across every month of the year. "}</p>
</div>
<div className="pt-space-md border-t border-surface-container font-label-caps text-label-caps text-primary">
{" Standard: Multi-Channel B2B Media Continuum "}</div>
</div>
</div>
</div>
</section>
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
<div className="lg:col-span-5 space-y-space-md">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-wider font-semibold">
{"On-Ground Groundforces"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
{"The Show Floor Operations Corps"}</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
{" Behind every seamless mega-expo stands an in-house corps of CAD spatial architects, civil floor marshals, bonded customs specialists, and on-site media teams deployed 72 hours prior to hall power-up. "}</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-high/60 space-y-1">
<span className="font-headline-md text-headline-md text-on-surface font-bold block">
{"120+"}</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">
{"On-Floor Personnel"}</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
{"Active logistics specialists per exhibition edition"}</p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-high/60 space-y-1">
<span className="font-headline-md text-headline-md text-on-surface font-bold block">
{"48-Hr"}</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">
{"Zero-Incident Load-In"}</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
{"Safe placement for machinery over 40 tonnes"}</p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-high/60 space-y-1">
<span className="font-headline-md text-headline-md text-primary font-bold block">
{"98.4%"}</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">
{"Exhibitor Retention"}</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
{"Consecutive re-booking rate among key patrons"}</p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-high/60 space-y-1">
<span className="font-headline-md text-headline-md text-on-surface font-bold block">
{"Zero"}</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">
{"Power Interruption"}</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
{"Triple-redundancy live machining electrical feeds"}</p>
</div>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 gap-space-sm">
<div className="rounded-xl overflow-hidden shadow-sm h-64 bg-surface-container-highest">
<img className="w-full h-full object-cover" src="/images/stitch/wide-industrial-view-inside-a-high-tech-modern-e-9d78159b95.jpg" alt="Wide industrial view inside a high-tech modern exhibition hall in India during setup" loading="lazy" decoding="async" />
</div>
<div className="rounded-xl overflow-hidden shadow-sm h-64 bg-surface-container-highest">
<img className="w-full h-full object-cover" src="/images/stitch/close-up-view-of-operations-coordination-enginee-b0af86b9db.jpg" alt="Close up view of operations coordination engineers reviewing high precision CAD blueprinted architectural layout maps of a 25000 square mete" loading="lazy" decoding="async" />
</div>
<div className="rounded-xl overflow-hidden shadow-sm h-48 bg-surface-container-highest col-span-2">
<img className="w-full h-full object-cover" src="/images/stitch/panoramic-perspective-of-the-busy-registration-l-1089f9bfc2.jpg" alt="Panoramic perspective of the busy registration lobby at an industrial technology trade show" loading="lazy" decoding="async" />
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-space-lg bg-surface-container-high/40">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-lg">
<div className="space-y-space-xs max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-caps text-label-caps uppercase">
<span className="w-2 h-2 rounded-full bg-primary">
</span>
{" Now Recruiting Senior Personnel "}</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">
{" Join Our Executive Operations & Media Guild "}</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
{" We are actively expanding our divisional bench in Mumbai, Bengaluru, and Pune. Seeking Senior Project Directors, Technical Content Editors, and International Key Account Executives passionate about heavy manufacturing. "}</p>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<Link className="inline-flex items-center justify-center px-space-md py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container hover:text-on-tertiary transition-all shadow-sm" data-path="careers" href="/careers">
<span>
{"Explore Career Opportunities"}</span>
<span className="material-symbols-outlined text-[18px] ml-1.5" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
<Link className="inline-flex items-center justify-center px-space-md py-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors" data-path="contact" href="/contact">
<span>
{"Contact Executive Desk"}</span>
</Link>
</div>
</div>
</div>
</section>
<section className="w-full py-space-xl bg-inverse-surface text-inverse-on-surface">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="flex flex-col lg:flex-row items-center justify-between gap-space-xl py-space-md">
<div className="space-y-space-xs max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high/15 text-primary-fixed font-label-caps text-label-caps uppercase tracking-wider">
{" Direct Governance Engagement "}</div>
<h2 className="font-headline-xl text-headline-xl text-surface-container-lowest font-bold tracking-tight">
{" Collaborate with Leaders Who Understand Your Industrial Floor. "}</h2>
<p className="font-body-lg text-body-lg text-surface-variant leading-relaxed">
{" Whether booking an anchor corporate pavilion for DIEMEX 2027 or partnering for a dedicated national trade mission, our executive directors are available for direct strategic consultation. "}</p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm shrink-0 w-full sm:w-auto">
<Link className="inline-flex items-center justify-center px-space-xl py-4 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container hover:text-on-tertiary transition-all shadow-md transform hover:-translate-y-0.5 text-center" data-path="contact" href="/contact">
<span>
{"Schedule an Executive Meeting"}</span>
<span className="material-symbols-outlined text-[18px] ml-2" aria-hidden="true">
{"calendar_today"}</span>
</Link>
<Link className="inline-flex items-center justify-center px-space-lg py-4 rounded-lg bg-surface-container-high/15 hover:bg-surface-container-high/25 text-surface-container-lowest font-label-md text-label-md transition-colors text-center" data-path="diemex-expo" href="/events/diemex-2027">
<span>
{"Explore DIEMEX 2027 Deck"}</span>
<span className="material-symbols-outlined text-[18px] ml-2" aria-hidden="true">
{"download"}</span>
</Link>
</div>
</div>
</div>
</section>
</div>
</main>

</PageInteractions>
);
}
