import Link from "next/link";
import StitchInteractions from "@/components/StitchInteractions";

export const metadata = { title: "Media Center & Press Releases | MAXX Business Media", description: "Official corporate news, bilateral exhibition dispatches, high-resolution media kits, and video broadcasts covering MAXX Business Media's industrial expos and e" };

// Layout, content, and imagery adapted from the exported Stitch screen.
export default function Page() {
  return <StitchInteractions key={"media"}>
<main className={"w-full pt-20 bg-background min-h-screen"} id={"main-content"}>
<div className={"flex flex-col w-full"}>
<section className={"w-full bg-surface-container-lowest border-b-0 shadow-sm relative overflow-hidden"}>
<div className={"absolute inset-0 pointer-events-none opacity-40"}>
<div className={"w-full h-full bg-[radial-gradient(#181c21_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"}>
</div>
</div>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg py-space-xl relative z-10"}>
<nav aria-label={"Breadcrumb"} className={"flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm mb-space-md"}>
<Link className={"hover:text-primary transition-colors"} data-path={"home"} href={"/"}>
{"Home"}</Link>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"chevron_right"}</span>
<Link className={"hover:text-primary transition-colors"} data-path={"media"} href={"/media"}>
{"Media"}</Link>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"chevron_right"}</span>
<span className={"text-on-surface font-semibold"}>
{"Media Center & Press Room"}</span>
</nav>
<div className={"flex flex-wrap items-center justify-between gap-space-sm mb-space-md"}>
<div className={"inline-flex items-center gap-2 px-space-sm py-1 rounded bg-surface-container text-on-surface font-label-caps text-label-caps uppercase tracking-wider"}>
<span className={"w-2 h-2 rounded-full bg-primary-container animate-pulse"}>
</span>
{" OFFICIAL PRESS ROOM & CORPORATE COMMUNICATIONS "}</div>
<div className={"inline-flex items-center gap-2 px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm"}>
<span className={"material-symbols-outlined text-[16px] text-primary-container"} aria-hidden={"true"}>
{"timer"}</span>
<span>
{"Press Desk: "}<strong className={"text-on-surface font-semibold"}>
{"press@maxxmedia.in"}</strong>
{" | 2-Hour Response SLA during Live Expos"}</span>
</div>
</div>
<div className={"max-w-4xl space-y-space-md"}>
<h1 className={"font-headline-xl text-headline-xl text-on-surface tracking-tight"}>
{" Authoritative Press Announcements, Multimedia Assets & Industrial Broadcasts "}</h1>
<p className={"font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed"}>
{" Official corporate news, bilateral exhibition dispatches, high-resolution media kits, and video broadcasts covering MAXX Business Media's industrial expos and engineering publications across South Asia. "}</p>
</div>
<div className={"flex flex-wrap items-center gap-space-md pt-space-lg"}>
<button className={"inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-all duration-150 transform hover:-translate-y-0.5 shadow-sm"} type="button" data-resource-title={"Corporate Media Kit (ZIP)"} data-resource-email="press@maxxmedia.in">
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"download"}</span>
<span>
{"Request Corporate Media Kit (ZIP)"}</span>
</button>
<a className={"inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-inverse-surface text-surface-container-lowest font-label-md text-label-md hover:bg-on-surface transition-all duration-150 transform hover:-translate-y-0.5 shadow-sm"} href={"#accreditation-desk"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"badge"}</span>
<span>
{"Accreditation for Press & Journalists"}</span>
</a>
<a className={"inline-flex items-center gap-2 px-space-md py-3 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors"} href={"#photo-vault"}>
<span className={"material-symbols-outlined text-[20px] text-primary"} aria-hidden={"true"}>
{"photo_library"}</span>
<span>
{"High-Res Photo Vault"}</span>
</a>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-high py-space-lg"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter"}>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-md"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>
{"newspaper"}</span>
</div>
<div className={"min-w-0"}>
<div className={"font-headline-md text-headline-md text-on-surface font-bold"}>
{"140+"}</div>
<div className={"font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mt-0.5"}>
{"Published Dispatches"}</div>
<p className={"font-body-sm text-body-sm text-secondary truncate mt-1"}>
{"2018–2026 Archive Track"}</p>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-md"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>
{"handshake"}</span>
</div>
<div className={"min-w-0"}>
<div className={"font-headline-md text-headline-md text-on-surface font-bold"}>
{"38+"}</div>
<div className={"font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mt-0.5"}>
{"Media Alliances"}</div>
<p className={"font-body-sm text-body-sm text-secondary truncate mt-1"}>
{"VDW, VDMA, TAGMA, MMS"}</p>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-md"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>
{"camera"}</span>
</div>
<div className={"min-w-0"}>
<div className={"font-headline-md text-headline-md text-on-surface font-bold"}>
{"1,200+"}</div>
<div className={"font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mt-0.5"}>
{"Broadcast Visuals"}</div>
<p className={"font-body-sm text-body-sm text-secondary truncate mt-1"}>
{"300 DPI Raw & Master Cuts"}</p>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-md"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>
{"visibility"}</span>
</div>
<div className={"min-w-0"}>
<div className={"font-headline-md text-headline-md text-on-surface font-bold"}>
{"180k+"}</div>
<div className={"font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mt-0.5"}>
{"Media Reach"}</div>
<p className={"font-body-sm text-body-sm text-secondary truncate mt-1"}>
{"Per Flagship Exhibition"}</p>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-background pt-space-xl pb-space-lg"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md"}>
<div className={"flex flex-col lg:flex-row items-stretch lg:items-center gap-space-md"}>
<div className={"relative flex-1"}>
<span className={"material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px]"} aria-hidden={"true"}>
{"search"}</span>
<input className={"w-full pl-11 pr-4 h-12 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-secondary transition-all"} id={"press-search-input"} placeholder={"Search press releases, speeches, statements, or brand assets..."} type={"text"} aria-label={"Search press releases, speeches, statements, or brand assets..."} />
</div>
<div className={"flex flex-wrap items-center gap-space-sm shrink-0"}>
<div className={"relative"}>
<select className={"h-12 pl-3.5 pr-8 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container cursor-pointer"} id={"press-year-filter"} aria-label="Filter press releases by year">
<option value={"all"}>
{"All Release Years"}</option>
<option value={"2026"}>
{"Year 2026"}</option>
<option value={"2025"}>
{"Year 2025"}</option>
<option value={"2024"}>
{"Year 2024"}</option>
<option value={"archive"}>
{"Historical Archive"}</option>
</select>
<span className={"material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[18px]"} aria-hidden={"true"}>
{"expand_more"}</span>
</div>
<button className={"h-12 px-space-md rounded-lg bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-1.5"} type={"button"} data-press-sort={"true"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"sort"}</span>
<span data-sort-label={"true"}>
{"Latest First"}</span>
</button>
</div>
</div>
<div className={"flex items-center gap-2 overflow-x-auto pb-1"} id={"press-filter-chips"}>
<button className={"px-space-md py-1.5 rounded-full bg-inverse-surface text-surface-container-lowest font-label-sm text-label-sm shrink-0 transition-colors"} type={"button"} data-press-filter={"all"} aria-pressed={"true"}>
{"All Coverage"}</button>
<button className={"px-space-md py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0 transition-colors"} type={"button"} data-press-filter={"official"} aria-pressed={"false"}>
{"Official Press Releases"}</button>
<button className={"px-space-md py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0 transition-colors"} type={"button"} data-press-filter={"dispatch"} aria-pressed={"false"}>
{"Exhibition Dispatches"}</button>
<button className={"px-space-md py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0 transition-colors"} type={"button"} data-press-filter={"video"} aria-pressed={"false"}>
{"Broadcast & Video Vault"}</button>
<button className={"px-space-md py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0 transition-colors"} type={"button"} data-press-filter={"executive"} aria-pressed={"false"}>
{"Executive Speeches"}</button>
<button className={"px-space-md py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0 transition-colors"} type={"button"} data-press-filter={"assets"} aria-pressed={"false"}>
{"Brand Assets & Logos"}</button>
</div>
<p className={"font-body-sm text-body-sm text-secondary mt-space-sm"} data-press-status={"true"} role={"status"}>
</p>
</div>
</div>
</section>
<section className={"w-full bg-background pb-space-xl"} data-press-item={"true"} data-year={"2026"} data-order={"0"} data-press-category={"official dispatch"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"bg-surface-container-lowest rounded-xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative group"}>
<div className={"absolute top-0 left-0 right-0 h-1 bg-primary-container"}>
</div>
<div className={"lg:col-span-5 relative min-h-[340px] lg:min-h-full overflow-hidden bg-surface-container-high"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} src={"/images/stitch/expansive-panoramic-view-of-high-precision-multi-82023f4e26.jpg"} alt={"Expansive panoramic view of high-precision multi-axis CNC machine tool pavilions at DIEMEX industrial trade show, featuring large digital displays, clean industrial lighting, German and Italian flag flags, and professional engineers gathered around heavy machinery."} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/90 via-inverse-surface/30 to-transparent flex flex-col justify-end p-space-lg text-surface-container-lowest"}>
<span className={"inline-block px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-caps text-label-caps uppercase tracking-wider mb-2 w-max"}>
{"Exclusive Release Dispatch"}</span>
<p className={"font-label-sm text-label-sm text-surface-variant"}>
{"BIEC Bengaluru • International Exhibition Centre Hall 1-4"}</p>
</div>
</div>
<div className={"lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-md"}>
<div className={"space-y-space-sm"}>
<div className={"flex flex-wrap items-center gap-space-sm text-secondary font-label-caps text-label-caps uppercase tracking-wider"}>
<span className={"text-primary-container font-bold"}>
{"LATEST PRESS RELEASE"}</span>
<span>
{"•"}</span>
<span>
{"FEB 24, 2026"}</span>
<span>
{"•"}</span>
<span>
{"MUMBAI & BENGALURU"}</span>
</div>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold leading-snug"}>
{" MAXX Business Media Unveils DIEMEX 2027 with Historic 5-Nation Sovereign Pavilion Consortium & Expanded ₹2,000 Cr Bilateral Trade Gateway "}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant leading-relaxed"}>
{" In a formal joint statement alongside overseas machine tool associations from Germany, Italy, Japan, Taiwan, and South Korea, MAXX Business Media announces the 8th biennial edition of South Asia's flagship tooling convocation at BIEC Bengaluru, allocating 25,000 sqm of heavy-duty floorplate to live 5-axis CNC demonstrations and sovereign procurement pavilions. "}</p>
</div>
<div className={"pt-space-sm bg-surface-container-low p-space-md rounded-lg flex flex-wrap items-center justify-between gap-space-sm"}>
<div className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary"} aria-hidden={"true"}>
{"record_voice_over"}</span>
<div className={"text-on-surface font-label-sm text-label-sm"}>
{" Spokesperson: "}<strong className={"font-semibold"}>
{"Rajesh Sharma, Managing Director"}</strong>
</div>
</div>
<div className={"flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm"}>
<span className={"inline-flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"schedule"}</span>
{" 4 min read"}</span>
<span className={"inline-flex items-center gap-1 font-mono text-secondary"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"verified"}</span>
{" PR-2026-084"}</span>
</div>
</div>
<div className={"flex flex-wrap items-center gap-space-sm pt-space-xs"}>
<button className={"px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-all inline-flex items-center gap-2"} type={"button"} data-resource-title={"MAXX Business Media Unveils DIEMEX 2027 with Historic 5-Nation Sovereign Pavilion Consortium & Expanded ₹2,000 Cr Bilateral Trade Gateway"} data-resource-description={"In a formal joint statement alongside overseas machine tool associations from Germany, Italy, Japan, Taiwan, and South Korea, MAXX Business Media announces the 8th biennial edition of South Asia's flagship tooling convocation at BIEC Bengaluru, allocating 25,000 sqm of heavy-duty floorplate to live 5-axis CNC demonstrations and sovereign procurement pavilions."} data-resource-email={"press@maxxmedia.in"}>
<span>
{"Read Full Release"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</button>
<button className={"px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-2"} type={"button"} data-resource-title={"MAXX Business Media Unveils DIEMEX 2027 with Historic 5-Nation Sovereign Pavilion Consortium & Expanded ₹2,000 Cr Bilateral Trade Gateway"} data-resource-description={"In a formal joint statement alongside overseas machine tool associations from Germany, Italy, Japan, Taiwan, and South Korea, MAXX Business Media announces the 8th biennial edition of South Asia's flagship tooling convocation at BIEC Bengaluru, allocating 25,000 sqm of heavy-duty floorplate to live 5-axis CNC demonstrations and sovereign procurement pavilions."} data-resource-email={"press@maxxmedia.in"} aria-label={"Request MAXX Business Media Unveils DIEMEX 2027 with Historic 5-Nation Sovereign Pavilion Consortium & Expanded ₹2,000 Cr Bilateral Trade Gateway"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"picture_as_pdf"}</span>
<span>
{"Request PDF"}</span>
</button>
<button className={"px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-2"} type={"button"} data-resource-title={"MAXX Business Media Unveils DIEMEX 2027 with Historic 5-Nation Sovereign Pavilion Consortium & Expanded ₹2,000 Cr Bilateral Trade Gateway"} data-resource-description={"In a formal joint statement alongside overseas machine tool associations from Germany, Italy, Japan, Taiwan, and South Korea, MAXX Business Media announces the 8th biennial edition of South Asia's flagship tooling convocation at BIEC Bengaluru, allocating 25,000 sqm of heavy-duty floorplate to live 5-axis CNC demonstrations and sovereign procurement pavilions."} data-resource-email={"press@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"folder_zip"}</span>
<span>
{"Photo Package (8 Images)"}</span>
</button>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg"}>
<div>
<span className={"font-label-caps text-label-caps text-primary-container uppercase tracking-wider font-bold"}>
{"DISPATCH ARCHIVE"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold mt-1"}>
{"Recent Press Releases & Editorial Statements"}</h2>
</div>
<div className={"text-on-surface-variant font-label-sm text-label-sm"}>
{" Showing 6 releases from Q3 2025 – Q1 2026 • Verified Audited Sources "}</div>
</div>
<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"} data-press-grid={"true"}>
<article className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"} data-press-item={"true"} data-year={"2026"} data-order={"1"} data-press-category={"official dispatch"}>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between text-secondary font-label-caps text-label-caps"}>
<span className={"px-2 py-0.5 rounded bg-surface-container font-semibold text-primary"}>
{"REGIONAL EXPOS"}</span>
<span>
{"JAN 18, 2026"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug"}>
{" MTE Expo Western India 2026 Records 94% Stall Allocation Within 60 Days of Sourcing Call "}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-3"}>
{" Surging demand across automotive Tier 1 tooling fabricators in Pune and Chakan prompts the advisory council to release an auxiliary Hall 3 annex ahead of the March exhibition opening. "}</p>
</div>
<div className={"pt-space-md mt-space-md bg-surface-container-lowest flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"Pune Auto Cluster • 3 min read"}</span>
<div className={"flex items-center gap-2"}>
<button className={"w-8 h-8 rounded bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"} title={"Download PDF"} type={"button"} data-resource-title={"MTE Expo Western India 2026 Records 94% Stall Allocation Within 60 Days of Sourcing Call"} data-resource-description={"Surging demand across automotive Tier 1 tooling fabricators in Pune and Chakan prompts the advisory council to release an auxiliary Hall 3 annex ahead of the March exhibition opening."} data-resource-email={"press@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"picture_as_pdf"}</span>
</button>
<button className={"font-label-sm text-label-sm text-primary font-semibold hover:underline inline-flex items-center gap-1"} type={"button"} data-resource-title={"MTE Expo Western India 2026 Records 94% Stall Allocation Within 60 Days of Sourcing Call"} data-resource-description={"Surging demand across automotive Tier 1 tooling fabricators in Pune and Chakan prompts the advisory council to release an auxiliary Hall 3 annex ahead of the March exhibition opening."} data-resource-email={"press@maxxmedia.in"}>
<span>
{"Read"}</span>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</button>
</div>
</div>
</article>
<article className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"} data-press-item={"true"} data-year={"2025"} data-order={"2"} data-press-category={"official"}>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between text-secondary font-label-caps text-label-caps"}>
<span className={"px-2 py-0.5 rounded bg-surface-container font-semibold text-primary"}>
{"PUBLISHING DIVISION"}</span>
<span>
{"DEC 12, 2025"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug"}>
{" Industrial Machinery & Tooling Review (IMTR) Achieves Milestone 73,000 Verified Reader Circulation "}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-3"}>
{" Independent audit certification confirms IMTR as South Asia's most widely read controlled-circulation industrial journal among manufacturing heads, plant directors, and machine tool procurement officers. "}</p>
</div>
<div className={"pt-space-md mt-space-md flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"Audit Bureau of Circulations • 4 min read"}</span>
<div className={"flex items-center gap-2"}>
<button className={"w-8 h-8 rounded bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"} title={"Download PDF"} type={"button"} data-resource-title={"Industrial Machinery & Tooling Review (IMTR) Achieves Milestone 73,000 Verified Reader Circulation"} data-resource-description={"Independent audit certification confirms IMTR as South Asia's most widely read controlled-circulation industrial journal among manufacturing heads, plant directors, and machine tool procurement officers."} data-resource-email={"press@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"picture_as_pdf"}</span>
</button>
<button className={"font-label-sm text-label-sm text-primary font-semibold hover:underline inline-flex items-center gap-1"} type={"button"} data-resource-title={"Industrial Machinery & Tooling Review (IMTR) Achieves Milestone 73,000 Verified Reader Circulation"} data-resource-description={"Independent audit certification confirms IMTR as South Asia's most widely read controlled-circulation industrial journal among manufacturing heads, plant directors, and machine tool procurement officers."} data-resource-email={"press@maxxmedia.in"}>
<span>
{"Read"}</span>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</button>
</div>
</div>
</article>
<article className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"} data-press-item={"true"} data-year={"2025"} data-order={"3"} data-press-category={"official"}>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between text-secondary font-label-caps text-label-caps"}>
<span className={"px-2 py-0.5 rounded bg-surface-container font-semibold text-primary"}>
{"DIGITAL INNOVATION"}</span>
<span>
{"NOV 04, 2025"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug"}>
{" MAXX Connect Digital Portal Integrates Real-Time NFC Telemetry, Processing ₹340 Cr in Monthly Machine RFQs "}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-3"}>
{" The proprietary trade enablement platform links physical exhibition badge scans directly to digital bill-of-materials inquiries, accelerating quote turnaround times between exhibitors and OEMs. "}</p>
</div>
<div className={"pt-space-md mt-space-md flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"Digital Platform Desk • 3 min read"}</span>
<div className={"flex items-center gap-2"}>
<button className={"w-8 h-8 rounded bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"} title={"Download PDF"} type={"button"} data-resource-title={"MAXX Connect Digital Portal Integrates Real-Time NFC Telemetry, Processing ₹340 Cr in Monthly Machine RFQs"} data-resource-description={"The proprietary trade enablement platform links physical exhibition badge scans directly to digital bill-of-materials inquiries, accelerating quote turnaround times between exhibitors and OEMs."} data-resource-email={"press@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"picture_as_pdf"}</span>
</button>
<button className={"font-label-sm text-label-sm text-primary font-semibold hover:underline inline-flex items-center gap-1"} type={"button"} data-resource-title={"MAXX Connect Digital Portal Integrates Real-Time NFC Telemetry, Processing ₹340 Cr in Monthly Machine RFQs"} data-resource-description={"The proprietary trade enablement platform links physical exhibition badge scans directly to digital bill-of-materials inquiries, accelerating quote turnaround times between exhibitors and OEMs."} data-resource-email={"press@maxxmedia.in"}>
<span>
{"Read"}</span>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</button>
</div>
</div>
</article>
<article className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"} data-press-item={"true"} data-year={"2025"} data-order={"4"} data-press-category={"official"}>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between text-secondary font-label-caps text-label-caps"}>
<span className={"px-2 py-0.5 rounded bg-surface-container font-semibold text-primary"}>
{"INTERNATIONAL MEDIA"}</span>
<span>
{"SEP 28, 2025"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug"}>
{" Die & Mould World Journal Signs Bilateral Content Syndication Pact with European Tooling Guilds "}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-3"}>
{" The cross-border editorial treaty enables shared publication of advanced additive toolmaking case studies, metallurgical heat treatment standards, and German micro-machining breakthroughs. "}</p>
</div>
<div className={"pt-space-md mt-space-md flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"Global Syndication • 3 min read"}</span>
<div className={"flex items-center gap-2"}>
<button className={"w-8 h-8 rounded bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"} title={"Download PDF"} type={"button"} data-resource-title={"Die & Mould World Journal Signs Bilateral Content Syndication Pact with European Tooling Guilds"} data-resource-description={"The cross-border editorial treaty enables shared publication of advanced additive toolmaking case studies, metallurgical heat treatment standards, and German micro-machining breakthroughs."} data-resource-email={"press@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"picture_as_pdf"}</span>
</button>
<button className={"font-label-sm text-label-sm text-primary font-semibold hover:underline inline-flex items-center gap-1"} type={"button"} data-resource-title={"Die & Mould World Journal Signs Bilateral Content Syndication Pact with European Tooling Guilds"} data-resource-description={"The cross-border editorial treaty enables shared publication of advanced additive toolmaking case studies, metallurgical heat treatment standards, and German micro-machining breakthroughs."} data-resource-email={"press@maxxmedia.in"}>
<span>
{"Read"}</span>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</button>
</div>
</div>
</article>
<article className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"} data-press-item={"true"} data-year={"2025"} data-order={"5"} data-press-category={"official dispatch"}>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between text-secondary font-label-caps text-label-caps"}>
<span className={"px-2 py-0.5 rounded bg-surface-container font-semibold text-primary"}>
{"NEW MARKET TRACK"}</span>
<span>
{"AUG 15, 2025"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug"}>
{" FASTTECH Expo 2026 Announces Expansion into Aerospace & Defense Fasteners Pavilion at IEML "}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-3"}>
{" Responding to heightened sovereign aerospace offsets and aviation corridor investments, FASTTECH introduces a specialized certified cleanroom pavilion for titanium and Inconel fastening components. "}</p>
</div>
<div className={"pt-space-md mt-space-md flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"IEML Greater Noida • 2 min read"}</span>
<div className={"flex items-center gap-2"}>
<button className={"w-8 h-8 rounded bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"} title={"Download PDF"} type={"button"} data-resource-title={"FASTTECH Expo 2026 Announces Expansion into Aerospace & Defense Fasteners Pavilion at IEML"} data-resource-description={"Responding to heightened sovereign aerospace offsets and aviation corridor investments, FASTTECH introduces a specialized certified cleanroom pavilion for titanium and Inconel fastening components."} data-resource-email={"press@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"picture_as_pdf"}</span>
</button>
<button className={"font-label-sm text-label-sm text-primary font-semibold hover:underline inline-flex items-center gap-1"} type={"button"} data-resource-title={"FASTTECH Expo 2026 Announces Expansion into Aerospace & Defense Fasteners Pavilion at IEML"} data-resource-description={"Responding to heightened sovereign aerospace offsets and aviation corridor investments, FASTTECH introduces a specialized certified cleanroom pavilion for titanium and Inconel fastening components."} data-resource-email={"press@maxxmedia.in"}>
<span>
{"Read"}</span>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</button>
</div>
</div>
</article>
<article className={"bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"} data-press-item={"true"} data-year={"2025"} data-order={"6"} data-press-category={"official dispatch executive"}>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between text-secondary font-label-caps text-label-caps"}>
<span className={"px-2 py-0.5 rounded bg-surface-container font-semibold text-primary"}>
{"CONCLAVES"}</span>
<span>
{"JUL 02, 2025"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug"}>
{" Keynote Symposium at Tool & Die Tech Conclave to Feature Fraunhofer IPT and German Metallurgists "}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-3"}>
{" Global researchers will address laser beam powder bed fusion for conformal cooling channels, featuring live mathematical simulation papers for high-volume plastics injection tooling. "}</p>
</div>
<div className={"pt-space-md mt-space-md flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"Scientific Symposium • 3 min read"}</span>
<div className={"flex items-center gap-2"}>
<button className={"w-8 h-8 rounded bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"} title={"Download PDF"} type={"button"} data-resource-title={"Keynote Symposium at Tool & Die Tech Conclave to Feature Fraunhofer IPT and German Metallurgists"} data-resource-description={"Global researchers will address laser beam powder bed fusion for conformal cooling channels, featuring live mathematical simulation papers for high-volume plastics injection tooling."} data-resource-email={"press@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"picture_as_pdf"}</span>
</button>
<button className={"font-label-sm text-label-sm text-primary font-semibold hover:underline inline-flex items-center gap-1"} type={"button"} data-resource-title={"Keynote Symposium at Tool & Die Tech Conclave to Feature Fraunhofer IPT and German Metallurgists"} data-resource-description={"Global researchers will address laser beam powder bed fusion for conformal cooling channels, featuring live mathematical simulation papers for high-volume plastics injection tooling."} data-resource-email={"press@maxxmedia.in"}>
<span>
{"Read"}</span>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</button>
</div>
</div>
</article>
</div>
<div className={"text-center pt-space-lg"}>
<button className={"inline-flex items-center gap-2 px-space-lg py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors"} type={"button"} data-archive-releases={"true"}>
<span>
{"View 2018–2024 Archive Records"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"history"}</span>
</button>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-lowest py-space-xl"} id={"photo-vault"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg"}>
<div>
<span className={"font-label-caps text-label-caps text-primary-container uppercase tracking-wider font-bold"}>
{"DIGITAL ASSET MANAGEMENT"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold mt-1"}>
{"Official Photo Vault & Industrial Visual Assets"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant mt-1"}>
{" Curated high-resolution editorial photography for print and digital publications. Free to use for accredited journalists with attribution. "}</p>
</div>
<div className={"shrink-0"}>
<button className={"px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm inline-flex items-center gap-1.5 hover:bg-surface-container-high transition-colors"} type={"button"} data-photo-batch={"true"} disabled={true}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>
{"download"}</span>
<span data-batch-label={"true"}>
{"Batch Download Selected (0)"}</span>
</button>
</div>
</div>
<div className={"flex items-center gap-2 overflow-x-auto pb-space-sm mb-space-lg"} id={"gallery-filter-chips"}>
<button className={"px-space-md py-1 rounded bg-inverse-surface text-surface-container-lowest font-label-sm text-label-sm shrink-0"} type={"button"} data-photo-filter={"all"} aria-pressed={"true"}>
{"All Photos"}</button>
<button className={"px-space-md py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0"} type={"button"} data-photo-filter={"diemex"} aria-pressed={"false"}>
{"DIEMEX Live Cutting"}</button>
<button className={"px-space-md py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0"} type={"button"} data-photo-filter={"delegations"} aria-pressed={"false"}>
{"Bilateral Ministerial Delegations"}</button>
<button className={"px-space-md py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0"} type={"button"} data-photo-filter={"regional"} aria-pressed={"false"}>
{"MTE & Regional Expos"}</button>
<button className={"px-space-md py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0"} type={"button"} data-photo-filter={"conclave"} aria-pressed={"false"}>
{"VIP Ribbon Cutting & Conclaves"}</button>
</div>
<p className={"font-body-sm text-body-sm text-secondary py-space-sm"} data-photo-status={"true"} role={"status"}>
</p>
<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"}>
<div className={"group relative rounded-xl overflow-hidden bg-surface-container shadow-sm aspect-[4/3] relative"} data-gallery-item={"true"} data-photo-category={"diemex"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/heavy-5-axis-gantry-cnc-milling-machine-cutting-480af4198b.jpg"} alt={"Heavy 5-axis gantry CNC milling machine cutting an aerospace titanium billet under high-pressure coolant spray at DIEMEX expo with bright industrial spotlights casting blue-tinted reflections on polished steel."} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/90 via-inverse-surface/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-space-md flex flex-col justify-between text-surface-container-lowest"}>
<div className={"flex items-center justify-between"}>
<span className={"px-2 py-0.5 rounded bg-surface-container-high/20 backdrop-blur-sm font-label-caps text-label-caps uppercase"}>
{"CNC Spindle Precision"}</span>
<span className={"font-label-caps text-label-caps opacity-80"}>
{"4800 x 3200 • RAW TIFF"}</span>
</div>
<div>
<p className={"font-label-md text-label-md font-semibold text-white"}>
{"5-Axis Titanium Machining Showcase"}</p>
<div className={"flex items-center justify-between mt-2 pt-2 border-t-0"}>
<span className={"font-body-sm text-body-sm text-surface-variant"}>
{"DIEMEX 2025 • Bengaluru"}</span>
<a className={"px-2 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-tertiary-container transition-colors inline-flex items-center gap-1"} type={"button"} href={"/images/stitch/heavy-5-axis-gantry-cnc-milling-machine-cutting-480af4198b.jpg"} download={true}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"download"}</span>
<span>
{"Download Photo"}</span>
</a>
</div>
</div>
</div>
<label className={"absolute top-2 right-2 z-20 inline-flex items-center gap-2 rounded-lg bg-white/95 p-2 text-label-sm cursor-pointer"}>
<input type={"checkbox"} className={"size-4 accent-primary-container"} data-photo-select={"/images/stitch/heavy-5-axis-gantry-cnc-milling-machine-cutting-480af4198b.jpg"} aria-label={"Select photo: Heavy 5-axis gantry CNC milling machine cutting an aerospace titanium billet under high-pressure coolant spray at DIEMEX expo with bright industrial spotlights casting blue-tinted reflections on polished steel."} />
<span>
{"Select"}</span>
</label>
</div>
<div className={"group relative rounded-xl overflow-hidden bg-surface-container shadow-sm aspect-[4/3] relative"} data-gallery-item={"true"} data-photo-category={"delegations"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/official-industrial-exhibition-inauguration-cere-aaaf085ea4.jpg"} alt={"Official industrial exhibition inauguration ceremony with bilateral international delegates and VIP dignitaries cutting the ceremonial orange and gold ribbon at the grand entrance arch of BIEC Bangalore."} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/90 via-inverse-surface/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-space-md flex flex-col justify-between text-surface-container-lowest"}>
<div className={"flex items-center justify-between"}>
<span className={"px-2 py-0.5 rounded bg-surface-container-high/20 backdrop-blur-sm font-label-caps text-label-caps uppercase"}>
{"Inauguration"}</span>
<span className={"font-label-caps text-label-caps opacity-80"}>
{"5200 x 3467 • JPEG Master"}</span>
</div>
<div>
<p className={"font-label-md text-label-md font-semibold text-white"}>
{"5-Nation Ministerial Ribbon Cutting"}</p>
<div className={"flex items-center justify-between mt-2 pt-2"}>
<span className={"font-body-sm text-body-sm text-surface-variant"}>
{"Main Atrium • BIEC 2025"}</span>
<a className={"px-2 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-tertiary-container transition-colors inline-flex items-center gap-1"} type={"button"} href={"/images/stitch/official-industrial-exhibition-inauguration-cere-aaaf085ea4.jpg"} download={true}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"download"}</span>
<span>
{"Download Photo"}</span>
</a>
</div>
</div>
</div>
<label className={"absolute top-2 right-2 z-20 inline-flex items-center gap-2 rounded-lg bg-white/95 p-2 text-label-sm cursor-pointer"}>
<input type={"checkbox"} className={"size-4 accent-primary-container"} data-photo-select={"/images/stitch/official-industrial-exhibition-inauguration-cere-aaaf085ea4.jpg"} aria-label={"Select photo: Official industrial exhibition inauguration ceremony with bilateral international delegates and VIP dignitaries cutting the ceremonial orange and gold ribbon at the grand entrance arch of BIEC Bangalore."} />
<span>
{"Select"}</span>
</label>
</div>
<div className={"group relative rounded-xl overflow-hidden bg-surface-container shadow-sm aspect-[4/3] relative"} data-gallery-item={"true"} data-photo-category={"diemex"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/high-density-trade-fair-floor-inside-biec-hall-2-a2b19b802f.jpg"} alt={"High-density trade fair floor inside BIEC Hall 2 crowded with manufacturing plant directors in suits examining massive high-pressure die casting moulds and automated robotic grippers."} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/90 via-inverse-surface/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-space-md flex flex-col justify-between text-surface-container-lowest"}>
<div className={"flex items-center justify-between"}>
<span className={"px-2 py-0.5 rounded bg-surface-container-high/20 backdrop-blur-sm font-label-caps text-label-caps uppercase"}>
{"Show Floor"}</span>
<span className={"font-label-caps text-label-caps opacity-80"}>
{"4500 x 3000 • TIFF / JPG"}</span>
</div>
<div>
<p className={"font-label-md text-label-md font-semibold text-white"}>
{"BIEC Hall 2 Buyer Crowds & Tooling Stands"}</p>
<div className={"flex items-center justify-between mt-2 pt-2"}>
<span className={"font-body-sm text-body-sm text-surface-variant"}>
{"General Attendance Day 2"}</span>
<a className={"px-2 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-tertiary-container transition-colors inline-flex items-center gap-1"} type={"button"} href={"/images/stitch/high-density-trade-fair-floor-inside-biec-hall-2-a2b19b802f.jpg"} download={true}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"download"}</span>
<span>
{"Download Photo"}</span>
</a>
</div>
</div>
</div>
<label className={"absolute top-2 right-2 z-20 inline-flex items-center gap-2 rounded-lg bg-white/95 p-2 text-label-sm cursor-pointer"}>
<input type={"checkbox"} className={"size-4 accent-primary-container"} data-photo-select={"/images/stitch/high-density-trade-fair-floor-inside-biec-hall-2-a2b19b802f.jpg"} aria-label={"Select photo: High-density trade fair floor inside BIEC Hall 2 crowded with manufacturing plant directors in suits examining massive high-pressure die casting moulds and automated robotic grippers."} />
<span>
{"Select"}</span>
</label>
</div>
<div className={"group relative rounded-xl overflow-hidden bg-surface-container shadow-sm aspect-[4/3] relative"} data-gallery-item={"true"} data-photo-category={"conclave"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/tool-and-die-tech-conclave-main-plenary-hall-aud-ee7a5dffed.jpg"} alt={"Tool and Die Tech Conclave main plenary hall auditorium with keynote engineering panel of four international materials scientists speaking at wooden podium under architectural spotlights."} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/90 via-inverse-surface/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-space-md flex flex-col justify-between text-surface-container-lowest"}>
<div className={"flex items-center justify-between"}>
<span className={"px-2 py-0.5 rounded bg-surface-container-high/20 backdrop-blur-sm font-label-caps text-label-caps uppercase"}>
{"Conclave Keynote"}</span>
<span className={"font-label-caps text-label-caps opacity-80"}>
{"5000 x 3333 • JPEG Master"}</span>
</div>
<div>
<p className={"font-label-md text-label-md font-semibold text-white"}>
{"Fraunhofer IPT Additive Tooling Session"}</p>
<div className={"flex items-center justify-between mt-2 pt-2"}>
<span className={"font-body-sm text-body-sm text-surface-variant"}>
{"Conclave Plenary Hall"}</span>
<a className={"px-2 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-tertiary-container transition-colors inline-flex items-center gap-1"} type={"button"} href={"/images/stitch/tool-and-die-tech-conclave-main-plenary-hall-aud-ee7a5dffed.jpg"} download={true}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"download"}</span>
<span>
{"Download Photo"}</span>
</a>
</div>
</div>
</div>
<label className={"absolute top-2 right-2 z-20 inline-flex items-center gap-2 rounded-lg bg-white/95 p-2 text-label-sm cursor-pointer"}>
<input type={"checkbox"} className={"size-4 accent-primary-container"} data-photo-select={"/images/stitch/tool-and-die-tech-conclave-main-plenary-hall-aud-ee7a5dffed.jpg"} aria-label={"Select photo: Tool and Die Tech Conclave main plenary hall auditorium with keynote engineering panel of four international materials scientists speaking at wooden podium under architectural spotlights."} />
<span>
{"Select"}</span>
</label>
</div>
<div className={"group relative rounded-xl overflow-hidden bg-surface-container shadow-sm aspect-[4/3] relative"} data-gallery-item={"true"} data-photo-category={"delegations"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/formal-handshake-between-maxx-managing-director-20ff98b4a7.jpg"} alt={"Formal handshake between MAXX Managing Director and German machine tool trade commissioner standing in front of high-tech media backdrop with corporate logos and international flags."} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/90 via-inverse-surface/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-space-md flex flex-col justify-between text-surface-container-lowest"}>
<div className={"flex items-center justify-between"}>
<span className={"px-2 py-0.5 rounded bg-surface-container-high/20 backdrop-blur-sm font-label-caps text-label-caps uppercase"}>
{"Bilateral Treaty"}</span>
<span className={"font-label-caps text-label-caps opacity-80"}>
{"4200 x 2800 • TIFF / RAW"}</span>
</div>
<div>
<p className={"font-label-md text-label-md font-semibold text-white"}>
{"German-Indian Machine Tool Consortium Accord"}</p>
<div className={"flex items-center justify-between mt-2 pt-2"}>
<span className={"font-body-sm text-body-sm text-surface-variant"}>
{"VIP Media Pavilion"}</span>
<a className={"px-2 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-tertiary-container transition-colors inline-flex items-center gap-1"} type={"button"} href={"/images/stitch/formal-handshake-between-maxx-managing-director-20ff98b4a7.jpg"} download={true}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"download"}</span>
<span>
{"Download Photo"}</span>
</a>
</div>
</div>
</div>
<label className={"absolute top-2 right-2 z-20 inline-flex items-center gap-2 rounded-lg bg-white/95 p-2 text-label-sm cursor-pointer"}>
<input type={"checkbox"} className={"size-4 accent-primary-container"} data-photo-select={"/images/stitch/formal-handshake-between-maxx-managing-director-20ff98b4a7.jpg"} aria-label={"Select photo: Formal handshake between MAXX Managing Director and German machine tool trade commissioner standing in front of high-tech media backdrop with corporate logos and international flags."} />
<span>
{"Select"}</span>
</label>
</div>
<div className={"group relative rounded-xl overflow-hidden bg-surface-container shadow-sm aspect-[4/3] relative"} data-gallery-item={"true"} data-photo-category={"regional"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/extreme-macro-close-up-of-a-mirror-finish-automo-07d91d8303.jpg"} alt={"Extreme macro close-up of a mirror-finish automotive stamping die inspection conducted with a precision ruby-tipped coordinate measuring machine (CMM) probe under clean inspection laboratory lighting."} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/90 via-inverse-surface/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-space-md flex flex-col justify-between text-surface-container-lowest"}>
<div className={"flex items-center justify-between"}>
<span className={"px-2 py-0.5 rounded bg-surface-container-high/20 backdrop-blur-sm font-label-caps text-label-caps uppercase"}>
{"Quality Inspection"}</span>
<span className={"font-label-caps text-label-caps opacity-80"}>
{"6000 x 4000 • 300 DPI TIFF"}</span>
</div>
<div>
<p className={"font-label-md text-label-md font-semibold text-white"}>
{"Sub-Micron Die Metrology with Ruby Probe"}</p>
<div className={"flex items-center justify-between mt-2 pt-2"}>
<span className={"font-body-sm text-body-sm text-surface-variant"}>
{"Quality Pavilion • Pune"}</span>
<a className={"px-2 py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-tertiary-container transition-colors inline-flex items-center gap-1"} type={"button"} href={"/images/stitch/extreme-macro-close-up-of-a-mirror-finish-automo-07d91d8303.jpg"} download={true}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"download"}</span>
<span>
{"Download Photo"}</span>
</a>
</div>
</div>
</div>
<label className={"absolute top-2 right-2 z-20 inline-flex items-center gap-2 rounded-lg bg-white/95 p-2 text-label-sm cursor-pointer"}>
<input type={"checkbox"} className={"size-4 accent-primary-container"} data-photo-select={"/images/stitch/extreme-macro-close-up-of-a-mirror-finish-automo-07d91d8303.jpg"} aria-label={"Select photo: Extreme macro close-up of a mirror-finish automotive stamping die inspection conducted with a precision ruby-tipped coordinate measuring machine (CMM) probe under clean inspection laboratory lighting."} />
<span>
{"Select"}</span>
</label>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-high py-space-xl"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg"}>
<div>
<span className={"font-label-caps text-label-caps text-primary-container uppercase tracking-wider font-bold"}>
{"BROADCAST & VIDEO VAULT"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold mt-1"}>
{"Industrial Video Broadcasts & Executive Dialogues"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant mt-1"}>
{" 4K broadcast-quality show summaries, technical machinery teardowns, and C-level executive interviews. "}</p>
</div>
<button className={"inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-inverse-surface hover:text-surface-container-lowest transition-colors shadow-sm shrink-0"} rel={"noopener noreferrer"} target={"_blank"} type={"button"} data-resource-title={"MAXX broadcast and video footage"} data-resource-description={"4K broadcast-quality show summaries, technical machinery teardowns, and C-level executive interviews."} data-resource-email={"press@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[20px] text-error"} aria-hidden={"true"}>
{"smart_display"}</span>
<span>
{"Visit Official YouTube Channel (140+ Videos)"}</span>
</button>
</div>
<div className={"grid grid-cols-1 md:grid-cols-3 gap-gutter"}>
<div className={"bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group"}>
<div className={"relative aspect-video bg-surface-container cursor-pointer overflow-hidden"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/dynamic-shot-from-high-above-biec-trade-floor-du-cd68a035a0.jpg"} alt={"Dynamic shot from high above BIEC trade floor during DIEMEX show with fast motion blur of visitors, vibrant orange exhibitor booths, and automated robotic arms in operation."} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-inverse-surface/40 group-hover:bg-inverse-surface/20 transition-colors flex items-center justify-center"}>
<div className={"w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"}>
<span className={"material-symbols-outlined text-[32px] ml-0.5"} aria-hidden={"true"}>
{"play_arrow"}</span>
</div>
</div>
<div className={"absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-inverse-surface/90 text-surface-container-lowest font-label-caps text-label-caps"}>
{" 04:32 • 4K UHD "}</div>
</div>
<div className={"p-space-md space-y-space-xs"}>
<div className={"flex items-center justify-between text-secondary font-label-sm text-label-sm"}>
<span className={"text-primary font-semibold"}>
{"Exhibition Highlight"}</span>
<span>
{"48k views"}</span>
</div>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold leading-snug"}>
{" DIEMEX Benchmark Recap: 4 Days of Live Spindles, ₹1,800 Cr Deals & 35,000 Visitors "}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
{" Relive the flagship four-day manufacturing summit featuring sovereign halls, live high-torque cutting trials, and contract signings. "}</p>
</div>
</div>
<div className={"bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group"}>
<div className={"relative aspect-video bg-surface-container cursor-pointer overflow-hidden"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/technical-macro-camera-shot-inside-an-automated-d7eb62cd0e.jpg"} alt={"Technical macro camera shot inside an automated CNC enclosure cutting hardened HRC 62 tool steel under bright white LED lighting with glowing telemetry gauges on an adjacent screen."} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-inverse-surface/40 group-hover:bg-inverse-surface/20 transition-colors flex items-center justify-center"}>
<div className={"w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"}>
<span className={"material-symbols-outlined text-[32px] ml-0.5"} aria-hidden={"true"}>
{"play_arrow"}</span>
</div>
</div>
<div className={"absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-inverse-surface/90 text-surface-container-lowest font-label-caps text-label-caps"}>
{" 12:15 • Technical Doc "}</div>
</div>
<div className={"p-space-md space-y-space-xs"}>
<div className={"flex items-center justify-between text-secondary font-label-sm text-label-sm"}>
<span className={"text-primary font-semibold"}>
{"IMTR Teardown"}</span>
<span>
{"24k views"}</span>
</div>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold leading-snug"}>
{" Shop-Floor Masterclass: High-Speed Milling Parameters for Hardened Tool Steels "}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
{" Engineering breakdown of spindle harmonic vibration reduction and trochoidal milling paths for aerospace press dies. "}</p>
</div>
</div>
<div className={"bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group"}>
<div className={"relative aspect-video bg-surface-container cursor-pointer overflow-hidden"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/executive-television-style-interview-set-with-th-e22137cb05.jpg"} alt={"Executive television-style interview set with three corporate manufacturing leaders in dark suits with lapel microphones discussing industrial strategy behind modern glass coffee table."} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-inverse-surface/40 group-hover:bg-inverse-surface/20 transition-colors flex items-center justify-center"}>
<div className={"w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"}>
<span className={"material-symbols-outlined text-[32px] ml-0.5"} aria-hidden={"true"}>
{"play_arrow"}</span>
</div>
</div>
<div className={"absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-inverse-surface/90 text-surface-container-lowest font-label-caps text-label-caps"}>
{" 18:40 • Executive Panel "}</div>
</div>
<div className={"p-space-md space-y-space-xs"}>
<div className={"flex items-center justify-between text-secondary font-label-sm text-label-sm"}>
<span className={"text-primary font-semibold"}>
{"Executive Panel"}</span>
<span>
{"19k views"}</span>
</div>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold leading-snug"}>
{" Global Bilateral Roundtable: German & Japanese Machine Tool Leaders on India's Growth "}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
{" Trade delegation chiefs debate local assembly mandates, tariff rationalization, and next-gen electric vehicle tooling pipelines. "}</p>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-lowest py-space-xl"} id={"brand-assets"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"mb-space-lg"}>
<span className={"font-label-caps text-label-caps text-primary-container uppercase tracking-wider font-bold"}>
{"OFFICIAL MEDIA PACKS"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold mt-1"}>
{"Brand Assets & Corporate Press Kit Drawer"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant mt-1"}>
{" Download certified vector marks, executive bios, and editorial reproduction manuals. "}</p>
</div>
<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter"}>
<div className={"bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between space-y-space-md"}>
<div className={"space-y-space-xs"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"token"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"Corporate & Brand Logos"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Vector logos (SVG, EPS, transparent PNG) in dark, light, and monochrome for MAXX, DIEMEX, MTE Expo, and Roboturbo. "}</p>
</div>
<div className={"pt-space-xs"}>
<button className={"w-full py-2.5 px-space-md rounded-lg bg-surface-container-lowest hover:bg-primary-container hover:text-on-primary text-on-surface font-label-sm text-label-sm font-semibold transition-colors flex items-center justify-between shadow-sm"} type={"button"} data-resource-title={"Corporate & Brand Logos"} data-resource-description={"Vector logos (SVG, EPS, transparent PNG) in dark, light, and monochrome for MAXX, DIEMEX, MTE Expo, and Roboturbo."} data-resource-email={"press@maxxmedia.in"} aria-label={"Request Pack (ZIP) 14.8 MB"}>
<span>
{"Request Pack (ZIP)"}</span>
<span className={"font-mono text-secondary"}>
</span>
</button>
</div>
</div>
<div className={"bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between space-y-space-md"}>
<div className={"space-y-space-xs"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"badge"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"Leadership Bios & Portraits"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" High-resolution 300 DPI portraits and official corporate biographies for MD Rajesh Sharma and divisional directors. "}</p>
</div>
<div className={"pt-space-xs"}>
<button className={"w-full py-2.5 px-space-md rounded-lg bg-surface-container-lowest hover:bg-primary-container hover:text-on-primary text-on-surface font-label-sm text-label-sm font-semibold transition-colors flex items-center justify-between shadow-sm"} type={"button"} data-resource-title={"Leadership Bios & Portraits"} data-resource-description={"High-resolution 300 DPI portraits and official corporate biographies for MD Rajesh Sharma and divisional directors."} data-resource-email={"press@maxxmedia.in"} aria-label={"Request Bios (ZIP) 22.4 MB"}>
<span>
{"Request Bios (ZIP)"}</span>
<span className={"font-mono text-secondary"}>
</span>
</button>
</div>
</div>
<div className={"bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between space-y-space-md"}>
<div className={"space-y-space-xs"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"description"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"Corporate Fact Sheet 2026"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Executive two-page briefing detailing exhibition footprints, annual participant volumes, circulation data, and financial milestones. "}</p>
</div>
<div className={"pt-space-xs"}>
<button className={"w-full py-2.5 px-space-md rounded-lg bg-surface-container-lowest hover:bg-primary-container hover:text-on-primary text-on-surface font-label-sm text-label-sm font-semibold transition-colors flex items-center justify-between shadow-sm"} type={"button"} data-resource-title={"Corporate Fact Sheet 2026"} data-resource-description={"Executive two-page briefing detailing exhibition footprints, annual participant volumes, circulation data, and financial milestones."} data-resource-email={"press@maxxmedia.in"} aria-label={"Request Factsheet (PDF) 3.8 MB"}>
<span>
{"Request Factsheet (PDF)"}</span>
<span className={"font-mono text-secondary"}>
</span>
</button>
</div>
</div>
<div className={"bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between space-y-space-md"}>
<div className={"space-y-space-xs"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"style"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"Media Guidelines & Style"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Rules of attribution, trademark clearance protocols, typography guidelines, and color hex references for publication editors. "}</p>
</div>
<div className={"pt-space-xs"}>
<button className={"w-full py-2.5 px-space-md rounded-lg bg-surface-container-lowest hover:bg-primary-container hover:text-on-primary text-on-surface font-label-sm text-label-sm font-semibold transition-colors flex items-center justify-between shadow-sm"} type={"button"} data-resource-title={"Media Guidelines & Style"} data-resource-description={"Rules of attribution, trademark clearance protocols, typography guidelines, and color hex references for publication editors."} data-resource-email={"press@maxxmedia.in"}>
<span>
{"Brand Manual (PDF)"}</span>
<span className={"font-mono text-secondary"}>
{"5.1 MB"}</span>
</button>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-background py-space-xl"} id={"accreditation-desk"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg bg-surface-container-lowest rounded-xl shadow-md p-space-lg lg:p-space-xl relative overflow-hidden"}>
<div className={"absolute -right-24 -bottom-24 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"}>
</div>
<div className={"lg:col-span-5 space-y-space-md"}>
<span className={"font-label-caps text-label-caps text-primary-container uppercase tracking-wider font-bold"}>
{"PRESS PASS & INTERVIEW DESK"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold"}>
{" Media Accreditation & Executive Access "}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant leading-relaxed"}>
{" Accreditation grants complimentary official press badges, fast-track entry to live cutting pavilions, reserved seating at VIP keynote ceremonies, and high-speed Wi-Fi workdesks in the Media Pavilion. "}</p>
<div className={"space-y-space-sm pt-space-xs"}>
<div className={"flex items-start gap-3"}>
<span className={"material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"} aria-hidden={"true"}>
{"verified_user"}</span>
<div className={"font-body-sm text-body-sm text-on-surface"}>
<strong>
{"Credentialed Badging:"}</strong>
{" Dedicated VIP check-in desk for accredited reporters and photojournalists. "}</div>
</div>
<div className={"flex items-start gap-3"}>
<span className={"material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"} aria-hidden={"true"}>
{"mic_external_on"}</span>
<div className={"font-body-sm text-body-sm text-on-surface"}>
<strong>
{"1-on-1 Interviews:"}</strong>
{" Pre-scheduled briefings with foreign trade commissioners, plant leaders, and MAXX leadership. "}</div>
</div>
<div className={"flex items-start gap-3"}>
<span className={"material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"} aria-hidden={"true"}>
{"wifi"}</span>
<div className={"font-body-sm text-body-sm text-on-surface"}>
<strong>
{"Equipped Press Lounge:"}</strong>
{" Dedicated work stations, Ethernet drops, quiet audio recording pods, and refreshments. "}</div>
</div>
</div>
<div className={"p-space-md rounded-lg bg-surface-container-low space-y-1"}>
<div className={"font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1.5"}>
<span className={"material-symbols-outlined text-primary-container text-[16px]"} aria-hidden={"true"}>
{"schedule"}</span>
<span>
{"Committed Media SLA Response"}</span>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Our Communications Secretariat responds within "}<strong>
{"2 hours"}</strong>
{" during active live expo periods and within "}<strong>
{"1 business day"}</strong>
{" for general corporate inquiries. "}</p>
</div>
</div>
<div className={"lg:col-span-7 bg-surface-container-low p-space-lg rounded-xl"}>
<form className={"space-y-space-md"} data-email={"press@maxxmedia.in"} data-email-subject={"Media Center & Press Releases | Inquiry"}>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold"} htmlFor={"press-name"}>
{"Full Name *"}</label>
<input className={"w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-secondary"} id={"press-name"} placeholder={"e.g. Elena Rostova"} required={true} type={"text"} name={"Full Name"} data-field-label={"Full Name *"} />
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold"} htmlFor={"press-outlet"}>
{"Publication / Outlet *"}</label>
<input className={"w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-secondary"} id={"press-outlet"} placeholder={"e.g. Modern Machine Shop / Reuters"} required={true} type={"text"} name={"Publication / Outlet"} data-field-label={"Publication / Outlet *"} />
</div>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold"} htmlFor={"press-email"}>
{"Official Press Email *"}</label>
<input className={"w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-secondary"} id={"press-email"} placeholder={"name@publication.com"} required={true} type={"email"} name={"Official Press Email"} data-field-label={"Official Press Email *"} />
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold"} htmlFor={"press-phone"}>
{"Phone / WhatsApp *"}</label>
<input className={"w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-secondary"} id={"press-phone"} placeholder={"+91 98200 XXXXX"} required={true} type={"tel"} name={"Phone / WhatsApp"} data-field-label={"Phone / WhatsApp *"} />
</div>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold"} htmlFor={"press-focus"}>
{"Coverage Focus *"}</label>
<select className={"w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container cursor-pointer"} id={"press-focus"} name={"Coverage Focus"} data-field-label={"Coverage Focus *"}>
<option value={"exhibition"}>
{"Exhibition Live Coverage (DIEMEX / MTE)"}</option>
<option value={"interview"}>
{"Executive Interview (Rajesh Sharma, MD)"}</option>
<option value={"publishing"}>
{"Trade Publishing & IMTR Syndicate"}</option>
<option value={"bilateral"}>
{"Bilateral Sovereign Delegation Briefing"}</option>
<option value={"general"}>
{"Corporate Press Clearance"}</option>
</select>
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold"} htmlFor={"press-deadline"}>
{"Filing Deadline / Target Date"}</label>
<input className={"w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-secondary"} id={"press-deadline"} placeholder={"e.g. Immediate / Next Monday"} type={"text"} name={"Filing Deadline / Target Date"} data-field-label={"Filing Deadline / Target Date"} />
</div>
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold"} htmlFor={"press-query"}>
{"Inquiry Details or Interview Questionnaire *"}</label>
<textarea className={"w-full p-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-secondary"} id={"press-query"} placeholder={"Specify your publication topic, requested spokesperson, questions, or specific live badge credentials needed..."} required={true} rows={"3"} name={"Inquiry Details or Interview Questionnaire"} data-field-label={"Inquiry Details or Interview Questionnaire *"}>
</textarea>
</div>
<div className={"flex items-center gap-2"}>
<input className={"w-4 h-4 rounded text-primary-container focus:ring-primary-container border-outline"} id={"press-terms"} required={true} type={"checkbox"} name={"I verify that I represent an accredited news agency or industrial trade journal."} data-field-label={"I verify that I represent an accredited news agency or industrial trade journal."} defaultValue={"Yes"} />
<label className={"font-label-sm text-label-sm text-on-surface-variant"} htmlFor={"press-terms"}>
{" I verify that I represent an accredited news agency or industrial trade journal. "}</label>
</div>
<button className={"w-full h-12 rounded-lg bg-primary-container hover:bg-tertiary-container text-on-primary font-label-md text-label-md transition-colors flex items-center justify-center gap-2 shadow-sm"} type={"submit"}>
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
</div>
</div>
</div>
</section>
</div>
</main>

  </StitchInteractions>;
}
