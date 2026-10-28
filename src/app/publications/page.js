import Link from "next/link";
import StitchInteractions from "@/components/StitchInteractions";

export const metadata = { title: "Publications & Technical Media | MAXX Business Media", description: "For over 18 years, MAXX Business Media’s peer-reviewed journals — Industrial Machinery & Tooling Review (IMTR) and Die & Mould World (DMW) — have delivered micr" };

// Layout, content, and imagery adapted from the exported Stitch screen.
export default function Page() {
  return <StitchInteractions key={"publications"}>
<main className={"w-full pt-20 bg-background min-h-screen"} id={"main-content"}>
<div className={"flex flex-col w-full"}>
<section className={"w-full bg-surface-container-low py-space-sm"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg flex flex-wrap items-center justify-between gap-space-xs"}>
<nav className={"flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"}>
<Link className={"hover:text-primary transition-colors flex items-center gap-1"} data-path={"home"} href={"/"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"home"}</span>
<span>
{"Home"}</span>
</Link>
<span>
{"/"}</span>
<Link className={"hover:text-primary transition-colors"} data-path={"publications"} href={"/publications"}>
{"Publications"}</Link>
<span>
{"/"}</span>
<span className={"text-on-surface font-semibold"}>
{"Technical Journals & Industrial Media"}</span>
</nav>
<div className={"flex items-center gap-space-xs font-label-caps text-label-caps text-primary px-space-xs py-1 rounded bg-primary-fixed/40"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"verified"}</span>
<span>
{"ABC-CERTIFIED TECHNICAL JOURNALISM & METALLURGICAL REPORTING"}</span>
</div>
</div>
</section>
<section className={"w-full bg-surface py-space-xl relative overflow-hidden"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"}>
<div className={"lg:col-span-8 space-y-space-md"}>
<div className={"inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps uppercase tracking-wider"}>
<span className={"w-2 h-2 rounded-full bg-primary-container"}>
</span>
{" Peer-Reviewed B2B Industrial Print & Digital Network "}</div>
<h1 className={"font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight"}>
{" Authoritative Engineering Voices Driving Shop-Floor Decisions Across South Asia. "}</h1>
<p className={"font-body-lg text-body-lg text-on-surface-variant max-w-3xl"}>
{" For over 18 years, MAXX Business Media’s peer-reviewed journals — "}<strong className={"text-on-surface font-semibold"}>
{"Industrial Machinery & Tooling Review (IMTR)"}</strong>
{" and "}<strong className={"text-on-surface font-semibold"}>
{"Die & Mould World (DMW)"}</strong>
{" — have delivered micron-precision technical journalism, benchmark buyer guides, and shop-floor case studies directly into the hands of 73,000+ verified plant directors, chief metallurgists, and machine tool procurement leads. "}</p>
<div className={"flex flex-wrap items-center gap-space-md pt-space-xs"}>
<button className={"inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-all transform hover:-translate-y-0.5 shadow-md"} type="button" data-resource-title={"2026 Media Kit & Rate Card (PDF"} data-resource-email="editorial@maxxmedia.in">
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"download"}</span>
<span>
{"Request 2026 Media Kit & Rate Card (PDF"}</span>
</button>
<a className={"inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-on-surface transition-all"} href={"#circulation-audit"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>
{"local_post_office"}</span>
<span>
{"Request Print Subscription / Controlled Mailing Audit"}</span>
</a>
</div>
</div>
<div className={"lg:col-span-4 bg-surface-container rounded-xl p-space-lg shadow-sm space-y-space-md"}>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider"}>
{"Audited Credentials"}</span>
<span className={"inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"verified_user"}</span>
{" 2025-2026 Registry "}</span>
</div>
<div className={"grid grid-cols-2 gap-space-md"}>
<div className={"p-space-md rounded-lg bg-surface-container-lowest"}>
<span className={"font-headline-lg text-headline-lg text-on-surface block font-bold"}>
{"73,000+"}</span>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"ABC-Audited Print & Digital Readers"}</span>
</div>
<div className={"p-space-md rounded-lg bg-surface-container-lowest"}>
<span className={"font-headline-lg text-headline-lg text-primary-container block font-bold"}>
{"100%"}</span>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Pre-Screened Plant Leadership"}</span>
</div>
<div className={"p-space-md rounded-lg bg-surface-container-lowest"}>
<span className={"font-headline-lg text-headline-lg text-on-surface block font-bold"}>
{"18+ Yrs"}</span>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Pedigree (Est. 2008 & 2012)"}</span>
</div>
<div className={"p-space-md rounded-lg bg-surface-container-lowest"}>
<span className={"font-headline-lg text-headline-lg text-primary-container block font-bold"}>
{"84.6%"}</span>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Direct CAPEX Buying Authority"}</span>
</div>
</div>
<div className={"p-space-sm rounded-lg bg-primary-fixed/20 flex items-center gap-space-sm"}>
<span className={"material-symbols-outlined text-primary text-[22px]"} aria-hidden={"true"}>
{"policy"}</span>
<p className={"font-body-sm text-body-sm text-on-surface leading-tight"}>
{" Zero hobbyist circulation. Zero consumer clutter. Verified recipient list audited annually by independent certifying bodies. "}</p>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-md"}>
<div>
<span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block pb-1"}>
{"Industry Benchmarks"}</span>
<h2 className={"font-headline-xl text-headline-xl text-on-surface font-bold"}>
{"Dual Technical Flagships"}</h2>
</div>
<p className={"font-body-md text-body-md text-on-surface-variant max-w-xl"}>
{" Engineered for technical depth. Each journal delivers actionable metallurgy, cutting-tool data, and cycle-time optimizations to machine shops and toolrooms across South Asia. "}</p>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-2 gap-gutter-lg"}>
<article className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between space-y-space-lg relative overflow-hidden"}>
<div className={"space-y-space-md"}>
<div className={"flex items-start justify-between gap-space-sm"}>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-primary px-space-xs py-0.5 rounded bg-primary-fixed/30 inline-block font-semibold"}>
{" FOUNDED 2008 • MONTHLY TECHNICAL JOURNAL • ABC AUDITED "}</span>
<h3 className={"font-headline-lg text-headline-lg text-on-surface font-bold"}>
{" Industrial Machinery & Tooling Review (IMTR) "}</h3>
</div>
<div className={"w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0"}>
<span className={"material-symbols-outlined text-[28px]"} aria-hidden={"true"}>
{"precision_manufacturing"}</span>
</div>
</div>
<p className={"font-body-md text-body-md text-on-surface-variant"}>
{" Comprehensive technical coverage spanning multi-axis CNC milling, high-torque turning, ultra-high-power fiber laser cutting, industrial automation robotics, cutting-tool geometries, advanced coolants, and additive metal manufacturing. "}</p>
<div className={"grid grid-cols-1 md:grid-cols-2 gap-space-md"}>
<div className={"p-space-sm rounded-lg bg-surface-container-low space-y-1"}>
<span className={"font-label-caps text-label-caps text-on-surface-variant"}>
{"Circulation & Reach"}</span>
<p className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{"45,000+ Readers"}</p>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"28,500 Direct Postal Copies + 16,500 Verified Digital Exec Readers"}</p>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low space-y-1"}>
<span className={"font-label-caps text-label-caps text-on-surface-variant"}>
{"Primary Target Segment"}</span>
<p className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{"Shop Floor & Machining"}</p>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Plant Heads, VP Manufacturing, CNC Programmers, Chief Metallurgists"}</p>
</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container space-y-space-sm"}>
<div className={"flex items-center gap-space-xs text-primary font-label-caps text-label-caps uppercase tracking-wider"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"menu_book"}</span>
<span>
{"Current Spotlight Issue: Vol. 19 • Issue 04"}</span>
</div>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" High-Speed 5-Axis Milling, Conformal Cooling Innovations & Giga-Casting Machine Tooling "}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Featuring independent spindle deflection benchmarks, cutting-fluid emulsion comparisons, and high-feed insert wear profiles across aerospace Ti-6Al-4V alloys. "}</p>
<div className={"flex flex-wrap gap-space-xs pt-1"}>
<span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm"}>
{"Spindle Benchmarks"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm"}>
{"Coolant Chemistry"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm"}>
{"Shop-Floor Teardowns"}</span>
</div>
</div>
</div>
<div className={"pt-space-md flex flex-wrap items-center gap-space-sm"}>
<a className={"px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-colors inline-flex items-center gap-1 shadow-sm"} href={"#digital-vault"}>
<span>
{"Read Latest Interactive Issue"}</span>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</a>
<a className={"px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"} href={"#editorial-calendar"}>
{" View IMTR Editorial Calendar "}</a>
<a className={"px-space-sm py-space-xs text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors inline-flex items-center gap-1"} href={"#media-kit-download"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"file_download"}</span>
<span>
{"Spec Sheet"}</span>
</a>
</div>
</article>
<article className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between space-y-space-lg relative overflow-hidden"}>
<div className={"space-y-space-md"}>
<div className={"flex items-start justify-between gap-space-sm"}>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-tertiary px-space-xs py-0.5 rounded bg-tertiary-fixed/40 inline-block font-semibold"}>
{" FOUNDED 2012 • BI-MONTHLY SPECIALIZED JOURNAL • TAGMA ALLIED "}</span>
<h3 className={"font-headline-lg text-headline-lg text-on-surface font-bold"}>
{" Die & Mould World (DMW) "}</h3>
</div>
<div className={"w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0"}>
<span className={"material-symbols-outlined text-[28px]"} aria-hidden={"true"}>
{"hardware"}</span>
</div>
</div>
<p className={"font-body-md text-body-md text-on-surface-variant"}>
{" The premier journal dedicated exclusively to high-precision injection moulds, die casting dies, press tools, progressive stamping setups, hot runner systems, micro-spark wire EDM, and specialty tool steel heat treatment. "}</p>
<div className={"grid grid-cols-1 md:grid-cols-2 gap-space-md"}>
<div className={"p-space-sm rounded-lg bg-surface-container-low space-y-1"}>
<span className={"font-label-caps text-label-caps text-on-surface-variant"}>
{"Circulation & Reach"}</span>
<p className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{"28,000+ Readers"}</p>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Concentrated in Tier-1 Toolrooms across Pune, Chakan, Sriperumbudur, Sanand, NCR & Rajkot"}</p>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low space-y-1"}>
<span className={"font-label-caps text-label-caps text-on-surface-variant"}>
{"Primary Target Segment"}</span>
<p className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{"Toolrooms & Foundries"}</p>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Tooling Directors, Mould Designers, Die Casters, Press Tool Fabricators"}</p>
</div>
</div>
<div className={"p-space-md rounded-xl bg-surface-container space-y-space-sm"}>
<div className={"flex items-center gap-space-xs text-tertiary font-label-caps text-label-caps uppercase tracking-wider"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"menu_book"}</span>
<span>
{"Current Spotlight Issue: Vol. 15 • Special Edition"}</span>
</div>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" High-Pressure Die Casting (HPDC) Steels, PVD/CVD Nanocoatings & Conformal 3D Printing "}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Featuring Moldflow thermal simulation case studies, hot runner manifold balance evaluations, and wire EDM Ra-value surface finish tolerance thresholds. "}</p>
<div className={"flex flex-wrap gap-space-xs pt-1"}>
<span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm"}>
{"Moldflow Analytics"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm"}>
{"PVD/CVD Coatings"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm"}>
{"Wire EDM Ra Finishes"}</span>
</div>
</div>
</div>
<div className={"pt-space-md flex flex-wrap items-center gap-space-sm"}>
<a className={"px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-colors inline-flex items-center gap-1 shadow-sm"} href={"#digital-vault"}>
<span>
{"Read Latest Interactive Issue"}</span>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</a>
<a className={"px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"} href={"#editorial-calendar"}>
{" View DMW Editorial Calendar "}</a>
<a className={"px-space-sm py-space-xs text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors inline-flex items-center gap-1"} href={"#media-kit-download"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"file_download"}</span>
<span>
{"Spec Sheet"}</span>
</a>
</div>
</article>
</div>
</div>
</section>
<section className={"w-full bg-surface py-space-xl"} id={"digital-vault"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-sm"}>
<div>
<span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block pb-1"}>
{"Archive Repository"}</span>
<h2 className={"font-headline-xl text-headline-xl text-on-surface font-bold"}>
{"Interactive Digital Issue Vault"}</h2>
</div>
<p className={"font-body-md text-body-md text-on-surface-variant max-w-lg"}>
{" Browse digital editions, technical dossiers, and official trade show dailies distributed live across major Indian manufacturing expos. "}</p>
</div>
<div className={"flex flex-wrap items-center gap-space-xs pb-space-xs"} id={"vault-filter-container"}>
<button className={"px-space-md py-2 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm font-semibold transition-colors"} data-filter={"all"} aria-pressed={"true"} type={"button"}>
{"All Issues"}</button>
<button className={"px-space-md py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm font-semibold transition-colors"} data-filter={"imtr"} aria-pressed={"false"} type={"button"}>
{"IMTR Issues (Monthly)"}</button>
<button className={"px-space-md py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm font-semibold transition-colors"} data-filter={"dmw"} aria-pressed={"false"} type={"button"}>
{"DMW Issues (Bi-Monthly)"}</button>
<button className={"px-space-md py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm font-semibold transition-colors"} data-filter={"whitepaper"} aria-pressed={"false"} type={"button"}>
{"Technical Whitepapers"}</button>
<button className={"px-space-md py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm font-semibold transition-colors"} data-filter={"dailies"} aria-pressed={"false"} type={"button"}>
{"Show Dailies (DIEMEX / MTE)"}</button>
</div>
<p className={"font-body-sm text-body-sm text-secondary py-space-sm"} data-vault-status={"true"} role={"status"}>
</p>
<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg pt-space-xs"}>
<div className={"bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"} data-category={"imtr"}>
<div>
<div className={"relative h-64 w-full bg-surface-container overflow-hidden group"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/high-gloss-cover-photo-of-imtr-april-2026-indust-bdfb6af67f.jpg"} alt={"High-gloss cover photo of IMTR April 2026 industrial trade magazine highlighting a 5-axis CNC titanium milling tool cutting glowing chips in an aerospace machine shop with vibrant safety orange accents and high contrast metallic reflections."} loading={"lazy"} decoding={"async"} />
<div className={"absolute top-space-sm left-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-primary-container text-on-primary font-label-caps text-label-caps uppercase"}>
{"IMTR • APR 2026"}</span>
</div>
<div className={"absolute bottom-space-sm right-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-caps text-label-caps"}>
{"148 Pages"}</span>
</div>
</div>
<div className={"p-space-lg space-y-space-xs"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Machining Dynamics & Superalloys"}</span>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" Aerospace Titanium Milling & Cryogenic Machining Paradigms "}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
{" Evaluating high-pressure supercritical CO2 coolant flows vs. traditional flooded synthetic oil in Ti-6Al-4V airframe bulkheads. "}</p>
</div>
</div>
<div className={"p-space-lg pt-0 flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Published: Apr 02, 2026"}</span>
<button className={"inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:text-tertiary transition-colors"} type={"button"} data-resource-title={"Interactive Digital Issue Vault"} data-resource-description={"Browse digital editions, technical dossiers, and official trade show dailies distributed live across major Indian manufacturing expos."} data-resource-email={"editorial@maxxmedia.in"}>
<span>
{"Read Edition"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"open_in_new"}</span>
</button>
</div>
</div>
<div className={"bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"} data-category={"dmw"}>
<div>
<div className={"relative h-64 w-full bg-surface-container overflow-hidden group"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/editorial-magazine-cover-for-die-and-mould-world-c07a62cd5f.jpg"} alt={"Editorial magazine cover for Die and Mould World March April 2026 issue showing an intricate multi-cavity injection mold steel core plate illuminated by precision studio lights with warm copper and orange reflection details."} loading={"lazy"} decoding={"async"} />
<div className={"absolute top-space-sm left-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-caps text-label-caps uppercase"}>
{"DMW • MAR-APR 2026"}</span>
</div>
<div className={"absolute bottom-space-sm right-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-caps text-label-caps"}>
{"124 Pages"}</span>
</div>
</div>
<div className={"p-space-lg space-y-space-xs"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Hot Runners & Tooling Steels"}</span>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" Hot Runner System Thermals & HPDC Steel Advancements "}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
{" Comparative analysis of modified 1.2343 ESR steels against thermal fatigue in ultra-large EV structural casting dies. "}</p>
</div>
</div>
<div className={"p-space-lg pt-0 flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Published: Mar 15, 2026"}</span>
<button className={"inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:text-tertiary transition-colors"} type={"button"} data-resource-title={"Interactive Digital Issue Vault"} data-resource-description={"Browse digital editions, technical dossiers, and official trade show dailies distributed live across major Indian manufacturing expos."} data-resource-email={"editorial@maxxmedia.in"}>
<span>
{"Read Edition"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"open_in_new"}</span>
</button>
</div>
</div>
<div className={"bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"} data-category={"imtr"}>
<div>
<div className={"relative h-64 w-full bg-surface-container overflow-hidden group"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/cover-layout-of-imtr-march-2026-industrial-magaz-eb871aaac2.jpg"} alt={"Cover layout of IMTR March 2026 industrial magazine showing a 30kW fiber laser cutting thick structural steel plates with showers of clean sparks, high precision robotic gantry, and sleek dark slate background."} loading={"lazy"} decoding={"async"} />
<div className={"absolute top-space-sm left-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-primary-container text-on-primary font-label-caps text-label-caps uppercase"}>
{"IMTR • MAR 2026"}</span>
</div>
<div className={"absolute bottom-space-sm right-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-caps text-label-caps"}>
{"160 Pages"}</span>
</div>
</div>
<div className={"p-space-lg space-y-space-xs"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Fabrication & Sheet Metal"}</span>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" CNC Fiber Laser Cutting 30kW Benchmarks & Assist Gases "}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
{" High-pressure Nitrogen vs. Oxygen assist gas cost-per-meter breakdowns when processing 30mm thick carbon steel. "}</p>
</div>
</div>
<div className={"p-space-lg pt-0 flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Published: Mar 01, 2026"}</span>
<button className={"inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:text-tertiary transition-colors"} type={"button"} data-resource-title={"Interactive Digital Issue Vault"} data-resource-description={"Browse digital editions, technical dossiers, and official trade show dailies distributed live across major Indian manufacturing expos."} data-resource-email={"editorial@maxxmedia.in"}>
<span>
{"Read Edition"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"open_in_new"}</span>
</button>
</div>
</div>
<div className={"bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"} data-category={"dmw"}>
<div>
<div className={"relative h-64 w-full bg-surface-container overflow-hidden group"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/cover-of-die-and-mould-world-jan-feb-2026-showca-fb2b9af66c.jpg"} alt={"Cover of Die and Mould World Jan Feb 2026 showcasing the official DIEMEX 2027 Expo preview badge, progressive stamping dies, multi-ton hydraulic press machinery and industrial CAD wireframes."} loading={"lazy"} decoding={"async"} />
<div className={"absolute top-space-sm left-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-caps text-label-caps uppercase"}>
{"DMW • JAN-FEB 2026"}</span>
</div>
<div className={"absolute bottom-space-sm right-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-caps text-label-caps"}>
{"140 Pages"}</span>
</div>
</div>
<div className={"p-space-lg space-y-space-xs"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Toolroom Innovation & Expo Spotlight"}</span>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" DIEMEX 2027 Preview & Heavy Die Tooling Innovations "}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
{" Next-generation multi-stage stamping dies for high-strength steel (AHSS) automotive body panels and crash structures. "}</p>
</div>
</div>
<div className={"p-space-lg pt-0 flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Published: Jan 18, 2026"}</span>
<button className={"inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:text-tertiary transition-colors"} type={"button"} data-resource-title={"Interactive Digital Issue Vault"} data-resource-description={"Browse digital editions, technical dossiers, and official trade show dailies distributed live across major Indian manufacturing expos."} data-resource-email={"editorial@maxxmedia.in"}>
<span>
{"Read Edition"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"open_in_new"}</span>
</button>
</div>
</div>
<div className={"bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"} data-category={"whitepaper"}>
<div>
<div className={"relative h-64 w-full bg-surface-container overflow-hidden group"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/cover-of-a-specialized-metallurgical-monograph-w-c2cd4bbf30.jpg"} alt={"Cover of a specialized metallurgical monograph whitepaper showing micrographic crystal structures of PVD nanocoatings on a carbide cutting tool edge with neon orange data overlays."} loading={"lazy"} decoding={"async"} />
<div className={"absolute top-space-sm left-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-inverse-surface text-inverse-on-surface font-label-caps text-label-caps uppercase"}>
{"METALLURGY WHITEPAPER"}</span>
</div>
<div className={"absolute bottom-space-sm right-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps"}>
{"Technical PDF"}</span>
</div>
</div>
<div className={"p-space-lg space-y-space-xs"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Surface Engineering & Tribology"}</span>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" Metallurgical Guide to PVD/CVD Tool Coatings & Micro-Hardness "}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
{" A 48-page peer-reviewed dossier analyzing TiAlN, AlCrN, and diamond-like carbon (DLC) friction coefficients under dry cutting regimes. "}</p>
</div>
</div>
<div className={"p-space-lg pt-0 flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Published: Feb 20, 2026"}</span>
<button className={"inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:text-tertiary transition-colors"} type={"button"} data-resource-title={"Interactive Digital Issue Vault"} data-resource-description={"Browse digital editions, technical dossiers, and official trade show dailies distributed live across major Indian manufacturing expos."} data-resource-email={"editorial@maxxmedia.in"} aria-label={"Request PDF"}>
<span>
{"Request PDF"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"download"}</span>
</button>
</div>
</div>
<div className={"bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"} data-category={"imtr"}>
<div>
<div className={"relative h-64 w-full bg-surface-container overflow-hidden group"}>
<img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"} src={"/images/stitch/cover-of-imtr-february-2026-showing-an-articulat-f84c220082.jpg"} alt={"Cover of IMTR February 2026 showing an articulated collaborative industrial robot arm tending a CNC lathe machine with digital telemetry HUD and robotic safety sensors."} loading={"lazy"} decoding={"async"} />
<div className={"absolute top-space-sm left-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-primary-container text-on-primary font-label-caps text-label-caps uppercase"}>
{"IMTR • FEB 2026"}</span>
</div>
<div className={"absolute bottom-space-sm right-space-sm"}>
<span className={"px-space-xs py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-caps text-label-caps"}>
{"152 Pages"}</span>
</div>
</div>
<div className={"p-space-lg space-y-space-xs"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Automation & Robotic Handling"}</span>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" Smart Robotics & Cobots in Machine Tending Automation "}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
{" ROI calculations and shift utilization metrics for collaborative robots operating in high-mix, low-volume automotive subcontractor plants. "}</p>
</div>
</div>
<div className={"p-space-lg pt-0 flex items-center justify-between"}>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Published: Feb 04, 2026"}</span>
<button className={"inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:text-tertiary transition-colors"} type={"button"} data-resource-title={"Interactive Digital Issue Vault"} data-resource-description={"Browse digital editions, technical dossiers, and official trade show dailies distributed live across major Indian manufacturing expos."} data-resource-email={"editorial@maxxmedia.in"}>
<span>
{"Read Edition"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"open_in_new"}</span>
</button>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"} id={"editorial-calendar"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-sm"}>
<div>
<span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block pb-1"}>
{"Forward Planning"}</span>
<h2 className={"font-headline-xl text-headline-xl text-on-surface font-bold"}>
{"2026 Editorial Calendar & Bonus Expos"}</h2>
</div>
<p className={"font-body-md text-body-md text-on-surface-variant max-w-lg"}>
{" Plan campaigns around thematic issues and secure bonus on-site distribution at leading manufacturing exhibitions across India and Southeast Asia. "}</p>
</div>
<div className={"bg-surface-container-lowest rounded-xl shadow-sm overflow-x-auto"}>
<table className={"w-full text-left"}>
<thead className={"bg-surface-container font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider"}>
<tr>
<th className={"py-space-md px-space-lg"}>
{"Month & Pub"}</th>
<th className={"py-space-md px-space-lg"}>
{"Core Editorial Theme"}</th>
<th className={"py-space-md px-space-lg"}>
{"Special Machinery Focus"}</th>
<th className={"py-space-md px-space-lg"}>
{"Bonus Expo Distribution"}</th>
<th className={"py-space-md px-space-lg"}>
{"Ad Deadline"}</th>
</tr>
</thead>
<tbody className={"divide-y-0 font-body-sm text-body-sm text-on-surface"}>
<tr className={"hover:bg-surface-container-low/60 transition-colors"}>
<td className={"py-space-md px-space-lg"}>
<span className={"font-label-md text-label-md font-bold text-on-surface block"}>
{"May 2026"}</span>
<span className={"text-primary font-semibold"}>
{"IMTR (Monthly)"}</span>
</td>
<td className={"py-space-md px-space-lg font-medium"}>
{" High-Speed Aerospace Machining & Inconel Milling "}</td>
<td className={"py-space-md px-space-lg text-on-surface-variant"}>
{" 5-Axis Simultaneous Machining, Cryogenic Spindles "}</td>
<td className={"py-space-md px-space-lg"}>
<span className={"px-space-xs py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps"}>
{"MTE EXPO PUNE"}</span>
</td>
<td className={"py-space-md px-space-lg text-on-surface-variant font-mono"}>
{"Apr 22, 2026"}</td>
</tr>
<tr className={"bg-surface-container/30 hover:bg-surface-container-low transition-colors"}>
<td className={"py-space-md px-space-lg"}>
<span className={"font-label-md text-label-md font-bold text-on-surface block"}>
{"May-Jun 2026"}</span>
<span className={"text-tertiary font-semibold"}>
{"DMW (Bi-Monthly)"}</span>
</td>
<td className={"py-space-md px-space-lg font-medium"}>
{" Giga-Casting Dies, Conformal Cores & Large Moulds "}</td>
<td className={"py-space-md px-space-lg text-on-surface-variant"}>
{" Die Casting Machines 4000T+, Laser Cladding "}</td>
<td className={"py-space-md px-space-lg"}>
<span className={"px-space-xs py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps"}>
{"ALUCAST BANGALORE"}</span>
</td>
<td className={"py-space-md px-space-lg text-on-surface-variant font-mono"}>
{"May 10, 2026"}</td>
</tr>
<tr className={"hover:bg-surface-container-low/60 transition-colors"}>
<td className={"py-space-md px-space-lg"}>
<span className={"font-label-md text-label-md font-bold text-on-surface block"}>
{"Jun 2026"}</span>
<span className={"text-primary font-semibold"}>
{"IMTR (Monthly)"}</span>
</td>
<td className={"py-space-md px-space-lg font-medium"}>
{" Fiber Laser Power Wars (40kW+) & Tube Profiling "}</td>
<td className={"py-space-md px-space-lg text-on-surface-variant"}>
{" Direct Drive Lasers, Automated Loading Towers "}</td>
<td className={"py-space-md px-space-lg"}>
<span className={"px-space-xs py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps"}>
{"BLECH INDIA MUMBAI"}</span>
</td>
<td className={"py-space-md px-space-lg text-on-surface-variant font-mono"}>
{"May 25, 2026"}</td>
</tr>
<tr className={"bg-surface-container/30 hover:bg-surface-container-low transition-colors"}>
<td className={"py-space-md px-space-lg"}>
<span className={"font-label-md text-label-md font-bold text-on-surface block"}>
{"Jul-Aug 2026"}</span>
<span className={"text-tertiary font-semibold"}>
{"DMW (Bi-Monthly)"}</span>
</td>
<td className={"py-space-md px-space-lg font-medium"}>
{" High-Precision Medical Moulding & Micro-EDM "}</td>
<td className={"py-space-md px-space-lg text-on-surface-variant"}>
{" All-Electric Injection Moulding, Cleanroom Tooling "}</td>
<td className={"py-space-md px-space-lg"}>
<span className={"px-space-xs py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps"}>
{"PLASTASIA DELHI"}</span>
</td>
<td className={"py-space-md px-space-lg text-on-surface-variant font-mono"}>
{"Jul 12, 2026"}</td>
</tr>
<tr className={"hover:bg-surface-container-low/60 transition-colors"}>
<td className={"py-space-md px-space-lg"}>
<span className={"font-label-md text-label-md font-bold text-on-surface block"}>
{"Sep 2026"}</span>
<span className={"text-primary font-semibold"}>
{"IMTR (Monthly)"}</span>
</td>
<td className={"py-space-md px-space-lg font-medium"}>
{" DIEMEX 2027 Official Show Directory Preview Edition "}</td>
<td className={"py-space-md px-space-lg text-on-surface-variant"}>
{" Full Industry Machine Tool Buyers Guide 2026-27 "}</td>
<td className={"py-space-md px-space-lg"}>
<span className={"px-space-xs py-1 rounded bg-tertiary-container text-on-tertiary font-label-caps text-label-caps font-bold"}>
{"DIEMEX FLAGSHIP"}</span>
</td>
<td className={"py-space-md px-space-lg text-on-surface-variant font-mono"}>
{"Aug 18, 2026"}</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<section className={"w-full bg-surface py-space-xl"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"}>
<div className={"lg:col-span-6 space-y-space-md"}>
<span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block"}>
{"Custom Industrial Content"}</span>
<h2 className={"font-headline-xl text-headline-xl text-on-surface font-bold leading-tight"}>
{" Peer-Reviewed Technical Whitepapers & Metallurgical Benchmarking "}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>
{" Do not settle for generic advertorials. MAXX Business Media pairs your OEM engineering teams with vetted metallurgists, CNC process engineers, and senior trade editors to author high-credibility technical papers that plant directors actually trust. "}</p>
<div className={"space-y-space-sm pt-space-xs"}>
<div className={"flex items-start gap-space-sm"}>
<div className={"w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0 mt-0.5"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"biotech"}</span>
</div>
<div>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"Metallurgical Teardowns & Spindle Verification"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Rigorous trial run documentations comparing surface roughness, flank wear, and cycle times against competitive setups."}</p>
</div>
</div>
<div className={"flex items-start gap-space-sm"}>
<div className={"w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0 mt-0.5"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"videocam"}</span>
</div>
<div>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"Shop-Floor Video Walkthroughs & CXO Dialogues"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Broadcast-quality video case studies filmed directly on your customer's manufacturing floor, hosted on our YouTube and LinkedIn networks."}</p>
</div>
</div>
<div className={"flex items-start gap-space-sm"}>
<div className={"w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0 mt-0.5"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"contact_mail"}</span>
</div>
<div>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-semibold"}>
{"Verified CAPEX Lead Generation"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Gate your technical whitepapers through MAXX’s digital vault, capturing pre-qualified procurement inquiries from verified corporate emails."}</p>
</div>
</div>
</div>
<div className={"pt-space-xs"}>
<a className={"inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all"} href={"#inquiry-form"}>
<span>
{"Commission a Custom Whitepaper / Teardown"}</span>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</a>
</div>
</div>
<div className={"lg:col-span-6 bg-surface-container-low rounded-xl p-space-lg space-y-space-md"}>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider"}>
{"Whitepaper Performance Analytics"}</span>
<span className={"font-label-sm text-label-sm text-primary font-semibold"}>
{"Real Case Study Metrics"}</span>
</div>
<div className={"p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-md"}>
<div className={"flex items-center justify-between"}>
<div>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"OEM Sponsor: Swiss High-Speed Spindle Manufacturer"}</span>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{"Titanium Machining Cycle Optimization"}</h4>
</div>
<span className={"px-space-xs py-1 rounded bg-primary-fixed/40 text-primary font-label-caps text-label-caps font-semibold"}>
{"CASE BENCHMARK"}</span>
</div>
<div className={"p-space-md bg-surface-container-low rounded-lg space-y-space-xs"}>
<div className={"flex justify-between items-center text-on-surface font-label-sm text-label-sm"}>
<span>
{"Verified Technical Downloads"}</span>
<span className={"font-bold text-primary"}>
{"1,480+ Plant Heads"}</span>
</div>
<div className={"w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden"}>
<div className={"bg-primary-container h-full rounded-full w-4/5"}>
</div>
</div>
<div className={"flex justify-between items-center text-on-surface font-label-sm text-label-sm pt-2"}>
<span>
{"Direct RFPs Generated for Tooling"}</span>
<span className={"font-bold text-primary"}>
{"38 High-Value Inquiries"}</span>
</div>
<div className={"w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden"}>
<div className={"bg-tertiary-container h-full rounded-full w-3/5"}>
</div>
</div>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant italic"}>
{" \"The technical rigor of MAXX’s write-up generated qualified discussions with Tier-1 aerospace suppliers that our internal marketing had struggled to reach for two years.\" "}</p>
</div>
<div className={"grid grid-cols-2 gap-space-sm pt-space-xs"}>
<div className={"p-space-md rounded-lg bg-surface-container-lowest"}>
<span className={"font-headline-md text-headline-md text-on-surface font-bold block"}>
{"14 Days"}</span>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"Editorial Turnaround"}</span>
</div>
<div className={"p-space-md rounded-lg bg-surface-container-lowest"}>
<span className={"font-headline-md text-headline-md text-primary font-bold block"}>
{"45,000"}</span>
<span className={"font-label-sm text-label-sm text-on-surface-variant"}>
{"WhatsApp Broadcast Reach"}</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"} id={"circulation-audit"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-sm"}>
<div>
<span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block pb-1"}>
{"Audited Authority"}</span>
<h2 className={"font-headline-xl text-headline-xl text-on-surface font-bold"}>
{"Circulation Audit & Reader Demographics"}</h2>
</div>
<p className={"font-body-md text-body-md text-on-surface-variant max-w-lg"}>
{" Zero wastage. Verified controlled mailing list guarantees that every single rupee of your media budget reaches qualified shop-floor decision-makers. "}</p>
</div>
<div className={"grid grid-cols-1 md:grid-cols-3 gap-gutter-lg"}>
<div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md"}>
<div className={"flex items-center gap-space-xs text-primary"}>
<span className={"material-symbols-outlined text-[22px]"} aria-hidden={"true"}>
{"factory"}</span>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{"Industry Sector Split"}</h3>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Cross-segment breakdown of verified manufacturing organizations receiving our journals: "}</p>
<div className={"space-y-space-sm"}>
<div>
<div className={"flex justify-between font-label-sm text-label-sm pb-1"}>
<span className={"text-on-surface font-medium"}>
{"Automotive & Auto-Components"}</span>
<span className={"font-bold text-on-surface"}>
{"38%"}</span>
</div>
<div className={"w-full bg-surface-container h-2 rounded-full overflow-hidden"}>
<div className={"bg-primary-container h-full rounded-full w-[38%]"}>
</div>
</div>
</div>
<div>
<div className={"flex justify-between font-label-sm text-label-sm pb-1"}>
<span className={"text-on-surface font-medium"}>
{"Machine Tools & Toolrooms"}</span>
<span className={"font-bold text-on-surface"}>
{"26%"}</span>
</div>
<div className={"w-full bg-surface-container h-2 rounded-full overflow-hidden"}>
<div className={"bg-tertiary-container h-full rounded-full w-[26%]"}>
</div>
</div>
</div>
<div>
<div className={"flex justify-between font-label-sm text-label-sm pb-1"}>
<span className={"text-on-surface font-medium"}>
{"Aerospace & Heavy Engineering"}</span>
<span className={"font-bold text-on-surface"}>
{"18%"}</span>
</div>
<div className={"w-full bg-surface-container h-2 rounded-full overflow-hidden"}>
<div className={"bg-primary h-full rounded-full w-[18%]"}>
</div>
</div>
</div>
<div>
<div className={"flex justify-between font-label-sm text-label-sm pb-1"}>
<span className={"text-on-surface font-medium"}>
{"Defense & Power Generation"}</span>
<span className={"font-bold text-on-surface"}>
{"12%"}</span>
</div>
<div className={"w-full bg-surface-container h-2 rounded-full overflow-hidden"}>
<div className={"bg-secondary h-full rounded-full w-[12%]"}>
</div>
</div>
</div>
<div>
<div className={"flex justify-between font-label-sm text-label-sm pb-1"}>
<span className={"text-on-surface font-medium"}>
{"Medical Devices & Electronics"}</span>
<span className={"font-bold text-on-surface"}>
{"6%"}</span>
</div>
<div className={"w-full bg-surface-container h-2 rounded-full overflow-hidden"}>
<div className={"bg-outline h-full rounded-full w-[6%]"}>
</div>
</div>
</div>
</div>
</div>
<div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md"}>
<div className={"flex items-center gap-space-xs text-primary"}>
<span className={"material-symbols-outlined text-[22px]"} aria-hidden={"true"}>
{"badge"}</span>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{"Reader Job Hierarchy"}</h3>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Distribution across corporate decision and production hierarchies: "}</p>
<div className={"space-y-space-md pt-space-xs"}>
<div className={"p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between"}>
<div>
<span className={"font-label-md text-label-md text-on-surface font-semibold block"}>
{"Plant Directors & GMs"}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Head of Operations, Works Managers"}</span>
</div>
<span className={"font-headline-sm text-headline-sm font-bold text-primary-container"}>
{"42%"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between"}>
<div>
<span className={"font-label-md text-label-md text-on-surface font-semibold block"}>
{"VP & Chief Engineers"}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Metallurgy & Tooling Leads"}</span>
</div>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"31%"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between"}>
<div>
<span className={"font-label-md text-label-md text-on-surface font-semibold block"}>
{"Procurement Heads"}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Machine Tool & Raw Material Capex"}</span>
</div>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"19%"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between"}>
<div>
<span className={"font-label-md text-label-md text-on-surface font-semibold block"}>
{"R&D Fellows & Academics"}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Material Science Labs"}</span>
</div>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface-variant"}>
{"8%"}</span>
</div>
</div>
</div>
<div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md"}>
<div className={"flex items-center gap-space-xs text-primary"}>
<span className={"material-symbols-outlined text-[22px]"} aria-hidden={"true"}>
{"map"}</span>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{"Geographic Reach"}</h3>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Physical distribution mapped tightly to India's key manufacturing clusters: "}</p>
<div className={"space-y-space-sm"}>
<div className={"p-space-sm rounded-lg bg-surface-container-low"}>
<div className={"flex justify-between items-center"}>
<span className={"font-label-md text-label-md font-semibold text-on-surface"}>
{"Western Auto Belt (44%)"}</span>
<span className={"font-label-sm text-label-sm text-primary font-bold"}>
{"32,120 Copies"}</span>
</div>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Pune, Pimpri-Chinchwad, Chakan, Sanand, Rajkot, Aurangabad"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low"}>
<div className={"flex justify-between items-center"}>
<span className={"font-label-md text-label-md font-semibold text-on-surface"}>
{"Southern Precision Hub (29%)"}</span>
<span className={"font-label-sm text-label-sm text-primary font-bold"}>
{"21,170 Copies"}</span>
</div>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Chennai, Sriperumbudur, Bengaluru, Coimbatore, Peenya, Hosur"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low"}>
<div className={"flex justify-between items-center"}>
<span className={"font-label-md text-label-md font-semibold text-on-surface"}>
{"Northern NCR Cluster (19%)"}</span>
<span className={"font-label-sm text-label-sm text-primary font-bold"}>
{"13,870 Copies"}</span>
</div>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Gurugram, Manesar, Faridabad, Noida, Ludhiana, Rudrapur"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low"}>
<div className={"flex justify-between items-center"}>
<span className={"font-label-md text-label-md font-semibold text-on-surface"}>
{"Eastern Heavy Metals (8%)"}</span>
<span className={"font-label-sm text-label-sm text-primary font-bold"}>
{"5,840 Copies"}</span>
</div>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>
{"Jamshedpur, Durgapur, Rourkela, Kolkata, Angul"}</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface py-space-xl"} id={"media-kit-download"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-sm"}>
<div>
<span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block pb-1"}>
{"Media Buying"}</span>
<h2 className={"font-headline-xl text-headline-xl text-on-surface font-bold"}>
{"Advertising Formats & Specifications"}</h2>
</div>
<p className={"font-body-md text-body-md text-on-surface-variant max-w-lg"}>
{" Choose from impactful print display formats or dynamic multi-channel digital campaigns tailored for industrial suppliers and OEMs. "}</p>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg"}>
<div className={"lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm overflow-x-auto p-space-md"}>
<table className={"w-full text-left"}>
<thead className={"bg-surface-container-low font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider"}>
<tr>
<th className={"py-space-sm px-space-md"}>
{"Format / Position"}</th>
<th className={"py-space-sm px-space-md"}>
{"Trim Size (W x H)"}</th>
<th className={"py-space-sm px-space-md"}>
{"Bleed Size"}</th>
<th className={"py-space-sm px-space-md"}>
{"Single Insertion"}</th>
<th className={"py-space-sm px-space-md"}>
{"Annual Series (6x / 12x)"}</th>
</tr>
</thead>
<tbody className={"divide-y-0 font-body-sm text-body-sm text-on-surface"}>
<tr className={"hover:bg-surface-container-low/50"}>
<td className={"py-space-md px-space-md font-semibold text-on-surface"}>
{" Full Page Colour (FPC) "}</td>
<td className={"py-space-md px-space-md font-mono text-on-surface-variant"}>
{"210 x 280 mm"}</td>
<td className={"py-space-md px-space-md font-mono text-on-surface-variant"}>
{"216 x 286 mm"}</td>
<td className={"py-space-md px-space-md font-bold text-on-surface"}>
{"₹ 65,000"}</td>
<td className={"py-space-md px-space-md text-primary font-bold"}>
{"₹ 50,000 / issue"}</td>
</tr>
<tr className={"bg-surface-container/20 hover:bg-surface-container-low/50"}>
<td className={"py-space-md px-space-md font-semibold text-on-surface"}>
{" Double Page Spread (DPS) "}</td>
<td className={"py-space-md px-space-md font-mono text-on-surface-variant"}>
{"420 x 280 mm"}</td>
<td className={"py-space-md px-space-md font-mono text-on-surface-variant"}>
{"426 x 286 mm"}</td>
<td className={"py-space-md px-space-md font-bold text-on-surface"}>
{"₹ 1,15,000"}</td>
<td className={"py-space-md px-space-md text-primary font-bold"}>
{"₹ 90,000 / issue"}</td>
</tr>
<tr className={"hover:bg-surface-container-low/50"}>
<td className={"py-space-md px-space-md font-semibold text-on-surface"}>
{" Back Cover (OBC - Prime) "}</td>
<td className={"py-space-md px-space-md font-mono text-on-surface-variant"}>
{"210 x 280 mm"}</td>
<td className={"py-space-md px-space-md font-mono text-on-surface-variant"}>
{"216 x 286 mm"}</td>
<td className={"py-space-md px-space-md font-bold text-on-surface"}>
{"₹ 1,40,000"}</td>
<td className={"py-space-md px-space-md text-primary font-bold"}>
{"₹ 1,15,000 / issue"}</td>
</tr>
<tr className={"bg-surface-container/20 hover:bg-surface-container-low/50"}>
<td className={"py-space-md px-space-md font-semibold text-on-surface"}>
{" Inside Front Cover (IFC) "}</td>
<td className={"py-space-md px-space-md font-mono text-on-surface-variant"}>
{"210 x 280 mm"}</td>
<td className={"py-space-md px-space-md font-mono text-on-surface-variant"}>
{"216 x 286 mm"}</td>
<td className={"py-space-md px-space-md font-bold text-on-surface"}>
{"₹ 95,000"}</td>
<td className={"py-space-md px-space-md text-primary font-bold"}>
{"₹ 78,000 / issue"}</td>
</tr>
<tr className={"hover:bg-surface-container-low/50"}>
<td className={"py-space-md px-space-md font-semibold text-on-surface"}>
{" Gatefold Cover (3-Page Fold) "}</td>
<td className={"py-space-md px-space-md font-mono text-on-surface-variant"}>
{"Custom spec"}</td>
<td className={"py-space-md px-space-md font-mono text-on-surface-variant"}>
{"+3 mm all sides"}</td>
<td className={"py-space-md px-space-md font-bold text-on-surface"}>
{"₹ 2,20,000"}</td>
<td className={"py-space-md px-space-md text-primary font-bold"}>
{"Special Package"}</td>
</tr>
</tbody>
</table>
</div>
<div className={"lg:col-span-4 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md"}>
<span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block"}>
{"Digital & Push Multipliers"}</span>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{"Amplification Add-ons"}</h3>
<div className={"space-y-space-sm font-body-sm text-body-sm"}>
<div className={"p-space-sm rounded-lg bg-surface-container-low flex justify-between items-start"}>
<div>
<span className={"font-label-md text-label-md text-on-surface font-semibold block"}>
{"WhatsApp Direct Broadcast"}</span>
<span className={"text-on-surface-variant"}>
{"Targeted to 45,000+ Verified Machine Shop Owners"}</span>
</div>
<span className={"font-bold text-primary shrink-0"}>
{"₹ 35,000"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low flex justify-between items-start"}>
<div>
<span className={"font-label-md text-label-md text-on-surface font-semibold block"}>
{"Interactive Video in Digital Issue"}</span>
<span className={"text-on-surface-variant"}>
{"Full-screen autoplay video embed with click-to-WhatsApp link"}</span>
</div>
<span className={"font-bold text-primary shrink-0"}>
{"₹ 25,000"}</span>
</div>
<div className={"p-space-sm rounded-lg bg-surface-container-low flex justify-between items-start"}>
<div>
<span className={"font-label-md text-label-md text-on-surface font-semibold block"}>
{"Executive EDM Blast"}</span>
<span className={"text-on-surface-variant"}>
{"Dedicated email to 62,000 corporate procurement executives"}</span>
</div>
<span className={"font-bold text-primary shrink-0"}>
{"₹ 40,000"}</span>
</div>
</div>
<div className={"p-space-sm rounded-lg bg-primary-fixed/20 space-y-1"}>
<span className={"font-label-sm text-label-sm font-bold text-on-surface block"}>
{"Artwork Specifications:"}</span>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" High-resolution PDF (PDF/X-1a), CMYK, minimum 300 DPI at actual size. All fonts converted to curves/outlines. 3mm bleed on all edges. "}</p>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full bg-surface-container-low py-space-xl"} id={"inquiry-form"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"grid grid-cols-1 lg:grid-cols-2 gap-gutter-lg"}>
<div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-md space-y-space-md"}>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block font-semibold"}>
{"Media Partnership"}</span>
<h3 className={"font-headline-md text-headline-md text-on-surface font-bold"}>
{"Inquire for Advertising & Editorial"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Connect with our corporate media team to book print positions, digital campaigns, or sponsor technical whitepapers. "}</p>
</div>
<form className={"space-y-space-sm"} data-email={"editorial@maxxmedia.in"} data-email-subject={"Publications & Technical Media | Inquiry"}>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm"}>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-1-1"}>
{"Company Name *"}</label>
<input className={"w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"e.g. Makino / Yamazaki Mazak / DMG MORI"} required={true} type={"text"} id={"publications-field-1-1"} name={"Company Name"} data-field-label={"Company Name *"} />
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-1-2"}>
{"Representative Name *"}</label>
<input className={"w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"Full Name"} required={true} type={"text"} id={"publications-field-1-2"} name={"Representative Name"} data-field-label={"Representative Name *"} />
</div>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm"}>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-1-3"}>
{"Corporate Email *"}</label>
<input className={"w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"official@company.com"} required={true} type={"email"} id={"publications-field-1-3"} name={"Corporate Email"} data-field-label={"Corporate Email *"} />
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-1-4"}>
{"Phone / Mobile *"}</label>
<input className={"w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"+91 98000 00000"} required={true} type={"tel"} id={"publications-field-1-4"} name={"Phone / Mobile"} data-field-label={"Phone / Mobile *"} />
</div>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm"}>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-1-5"}>
{"Target Journal *"}</label>
<select className={"w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} id={"publications-field-1-5"} name={"Target Journal"} data-field-label={"Target Journal *"}>
<option value={"both"}>
{"Both IMTR & DMW (Combined)"}</option>
<option value={"imtr"}>
{"IMTR (Industrial Machinery & Tooling)"}</option>
<option value={"dmw"}>
{"DMW (Die & Mould World)"}</option>
<option value={"whitepaper"}>
{"Custom Sponsored Whitepaper"}</option>
<option value={"show-dailies"}>
{"DIEMEX / MTE Show Dailies"}</option>
</select>
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-1-6"}>
{"Estimated Budget"}</label>
<select className={"w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} id={"publications-field-1-6"} name={"Estimated Budget"} data-field-label={"Estimated Budget"}>
<option value={"50k-1L"}>
{"₹ 50,000 - ₹ 1,00,000"}</option>
<option value={"1L-2.5L"}>
{"₹ 1,00,000 - ₹ 2,50,000"}</option>
<option value={"2.5L-5L"}>
{"₹ 2,50,000 - ₹ 5,00,000"}</option>
<option value={"5L+"}>
{"₹ 5,00,000+ (Annual Strategic Retainer)"}</option>
</select>
</div>
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-1-7"}>
{"Campaign Objectives & Requirements"}</label>
<textarea className={"w-full p-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"Specify upcoming machine launches, exhibition presence, or specific month/issues you want to target..."} rows={"3"} id={"publications-field-1-7"} name={"Campaign Objectives & Requirements"} data-field-label={"Campaign Objectives & Requirements"}>
</textarea>
</div>
<button className={"w-full h-12 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-all flex items-center justify-center gap-2 shadow-sm"} type={"submit"}>
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
<div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-md space-y-space-md"}>
<div className={"space-y-1"}>
<span className={"font-label-caps text-label-caps text-secondary uppercase tracking-widest block font-semibold"}>
{"Controlled Circulation Program"}</span>
<h3 className={"font-headline-md text-headline-md text-on-surface font-bold"}>
{"Apply for Print Subscription"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>
{" Qualified plant directors, toolroom owners, and machine shop heads receive complimentary audited print copies via registered post. "}</p>
</div>
<form className={"space-y-space-sm"} data-email={"editorial@maxxmedia.in"} data-email-subject={"Publications & Technical Media | Print subscription request"} id={"subscription-form"}>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm"}>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-2-1"}>
{"Subscriber Full Name *"}</label>
<input className={"w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"Plant Lead Name"} required={true} type={"text"} id={"publications-field-2-1"} name={"Subscriber Full Name"} data-field-label={"Subscriber Full Name *"} />
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-2-2"}>
{"Designation / Role *"}</label>
<input className={"w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"e.g. VP Manufacturing / Toolroom Head"} required={true} type={"text"} id={"publications-field-2-2"} name={"Designation / Role"} data-field-label={"Designation / Role *"} />
</div>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm"}>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-2-3"}>
{"Manufacturing Facility Name *"}</label>
<input className={"w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"Company Works / Plant Unit"} required={true} type={"text"} id={"publications-field-2-3"} name={"Manufacturing Facility Name"} data-field-label={"Manufacturing Facility Name *"} />
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-2-4"}>
{"Official Work Email *"}</label>
<input className={"w-full h-12 px-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"corporate@domain.com"} required={true} type={"email"} id={"publications-field-2-4"} name={"Official Work Email"} data-field-label={"Official Work Email *"} />
</div>
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"} htmlFor={"publications-field-2-5"}>
{"Complete Plant Dispatch Address (Postal PIN Required) *"}</label>
<textarea className={"w-full p-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container"} placeholder={"Plot No., Industrial Area / GIDC / MIDC, City, State, PIN Code"} required={true} rows={"2"} id={"publications-field-2-5"} name={"Complete Plant Dispatch Address (Postal PIN Required)"} data-field-label={"Complete Plant Dispatch Address (Postal PIN Required) *"}>
</textarea>
</div>
<div className={"space-y-1"}>
<label className={"font-label-sm text-label-sm text-on-surface font-semibold block"}>
{"Requested Edition(s) *"}</label>
<div className={"grid grid-cols-2 gap-space-xs pt-1"}>
<label className={"flex items-center gap-2 p-space-xs rounded bg-surface-container-low cursor-pointer font-body-sm text-body-sm text-on-surface"} htmlFor={"publications-field-2-7"}>
<input defaultChecked={true} className={"accent-primary-container rounded"} type={"checkbox"} id={"publications-field-2-6"} name={"IMTR Monthly Edition"} data-field-label={"IMTR Monthly Edition"} defaultValue={"Yes"} aria-label={"Search"} />
<span>
{"IMTR Monthly Edition"}</span>
</label>
<label className={"flex items-center gap-2 p-space-xs rounded bg-surface-container-low cursor-pointer font-body-sm text-body-sm text-on-surface"}>
<input defaultChecked={true} className={"accent-primary-container rounded"} type={"checkbox"} id={"publications-field-2-7"} name={"IMTR Monthly Edition"} data-field-label={"IMTR Monthly Edition"} defaultValue={"Yes"} />
<span>
{"DMW Bi-Monthly Edition"}</span>
</label>
</div>
</div>
<div className={"p-space-xs rounded bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm"}>
<span className={"material-symbols-outlined text-[16px] inline align-middle text-primary"} aria-hidden={"true"}>
{"info"}</span>
<span>
{"Controlled circulation is complimentary for qualified manufacturing directors. Verification via official phone/email call is conducted prior to first dispatch."}</span>
</div>
<button className={"w-full h-12 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-on-surface transition-all flex items-center justify-center gap-2"} type={"submit"}>
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
