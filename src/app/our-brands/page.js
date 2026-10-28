import Link from "next/link";
import StitchInteractions from "@/components/StitchInteractions";

export const metadata = { title: "Our Brands & Portfolio | MAXX Business Media", description: "MAXX Business Media operates an integrated dual-engine commercial model: capital-intensive, physical mega-exhibition platforms engineered for turnkey manufactur" };

// Layout, content, and imagery adapted from the exported Stitch screen.
export default function Page() {
  return <StitchInteractions key={"our-brands"}>
<main className={"w-full pt-20 bg-background min-h-screen"} id={"main-content"}>
<div className={"flex flex-col w-full"}>
<section className={"relative bg-surface-container-lowest overflow-hidden"}>
<div className={"absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#181c21_1px,transparent_1px)] [background-size:24px_24px]"}>
</div>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg pt-space-lg pb-space-xl relative z-10"}>
<nav aria-label={"Breadcrumb"} className={"flex items-center gap-space-xs font-label-sm text-label-sm text-secondary pb-space-md"}>
<Link className={"hover:text-primary transition-colors"} href={"/"}>
{"Home"}</Link>
<span className={"material-symbols-outlined text-[14px] text-outline-variant"} aria-hidden={"true"}>
{"chevron_right"}</span>
<span className={"text-on-surface font-semibold"}>
{"Our Brands"}</span>
<span className={"material-symbols-outlined text-[14px] text-outline-variant"} aria-hidden={"true"}>
{"chevron_right"}</span>
<span className={"text-primary-container font-semibold"}>
{"Exhibition & Media Portfolio"}</span>
</nav>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-end"}>
<div className={"lg:col-span-8 space-y-space-sm"}>
<div className={"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps uppercase tracking-wider"}>
<span className={"w-2 h-2 rounded-full bg-primary-container animate-pulse"}>
</span>
{" Proprietary IP & Media Architecture "}</div>
<h1 className={"font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight"}>
{" Two Decades of Building Industry-Defining Brands & Authoritative Technical Voices. "}</h1>
<p className={"font-body-lg text-body-lg text-secondary max-w-3xl pt-space-xs"}>
{" MAXX Business Media operates an integrated dual-engine commercial model: capital-intensive, physical mega-exhibition platforms engineered for turnkey manufacturing equipment sales, synergized with 365-day technical journalism and digital directories reaching 150,000+ verified plant directors, metallurgists, and tooling engineers across global manufacturing corridors. "}</p>
</div>
<div className={"lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-end lg:items-end"}>
<a className={"w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-tertiary transition-all duration-150 transform hover:-translate-y-0.5"} href={"#exhibitions-pillar"}>
<span>
{"Explore Exhibition Brands"}</span>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"south"}</span>
</a>
<button className={"w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-on-surface transition-all duration-150"} type="button" data-resource-title={"IP Portfolio Deck (PDF)"} data-resource-email="corporate@maxxmedia.in">
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"file_download"}</span>
<span>
{"Request IP Portfolio Deck (PDF)"}</span>
</button>
</div>
</div>
<div className={"mt-space-xl pt-space-lg bg-surface-container-low rounded-xl p-space-md lg:p-space-lg shadow-sm"}>
<div className={"grid grid-cols-2 md:grid-cols-4 gap-gutter text-left"}>
<div className={"space-y-1"}>
<span className={"font-headline-lg text-headline-lg text-primary-container font-extrabold tracking-tight"}>
{"6"}</span>
<div className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider"}>
{"Benchmark Trade Expos & Conclaves"}</div>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Capital goods & tooling platforms"}</p>
</div>
<div className={"space-y-1"}>
<span className={"font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight"}>
{"2"}</span>
<div className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider"}>
{"Peer-Reviewed Print Journals"}</div>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"150,000+ verified monthly readers"}</p>
</div>
<div className={"space-y-1"}>
<span className={"font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight"}>
{"1"}</span>
<div className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider"}>
{"Verified Sourcing Portal (MAXX Connect)"}</div>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"3,500+ pre-audited manufacturers"}</p>
</div>
<div className={"space-y-1"}>
<span className={"font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight"}>
{"18+"}</span>
<div className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider"}>
{"Bilateral Global Associations"}</div>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Endorsed across VDMA, UCIMU, JMTBA"}</p>
</div>
</div>
</div>
</div>
</section>
<section className={"sticky top-20 z-40 bg-surface-container-lowest shadow-sm py-space-sm"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg flex flex-col md:flex-row items-center justify-between gap-space-sm"}>
<div className={"flex items-center gap-1 sm:gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0"} id={"brand-filter-group"}>
<button className={"brand-tab-btn px-space-md py-2 rounded-lg font-label-md text-label-md bg-inverse-surface text-inverse-on-surface transition-all whitespace-nowrap shadow-sm"} data-filter={"all"} aria-pressed={"true"} type={"button"}>
{" All Proprietary Brands (9) "}</button>
<button className={"brand-tab-btn px-space-md py-2 rounded-lg font-label-md text-label-md bg-surface-container hover:bg-surface-container-high text-secondary transition-all whitespace-nowrap"} data-filter={"expos"} aria-pressed={"false"} type={"button"}>
{" Industrial Expos (5) "}</button>
<button className={"brand-tab-btn px-space-md py-2 rounded-lg font-label-md text-label-md bg-surface-container hover:bg-surface-container-high text-secondary transition-all whitespace-nowrap"} data-filter={"conclaves"} aria-pressed={"false"} type={"button"}>
{" Executive Conclaves (1) "}</button>
<button className={"brand-tab-btn px-space-md py-2 rounded-lg font-label-md text-label-md bg-surface-container hover:bg-surface-container-high text-secondary transition-all whitespace-nowrap"} data-filter={"publications"} aria-pressed={"false"} type={"button"}>
{" Trade Journals (2) "}</button>
<button className={"brand-tab-btn px-space-md py-2 rounded-lg font-label-md text-label-md bg-surface-container hover:bg-surface-container-high text-secondary transition-all whitespace-nowrap"} data-filter={"digital"} aria-pressed={"false"} type={"button"}>
{" Digital Portals (1) "}</button>
</div>
<p className={"sr-only"} data-brand-status={"true"} role={"status"}>
</p>
<div className={"hidden xl:flex items-center gap-space-xs text-secondary font-label-sm text-label-sm"}>
<span className={"font-label-caps text-label-caps uppercase text-secondary"}>
{"Target Sectors:"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface"}>
{"Die & Mould"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface"}>
{"Machine Tools"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface"}>
{"Robotics"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container text-on-surface"}>
{"Fasteners"}</span>
</div>
</div>
</section>
<section className={"py-space-xl max-w-[1360px] mx-auto px-margin lg:px-margin-lg w-full"} id={"exhibitions-pillar"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg"}>
<div className={"space-y-2"}>
<div className={"inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold"}>
<span className={"w-1.5 h-4 bg-primary-container rounded-sm"}>
</span>
{" Operational Pillar 01 "}</div>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
{" Benchmark Industrial Trade Exhibitions & Mega-Conclaves "}</h2>
<p className={"font-body-md text-body-md text-secondary max-w-2xl"}>
{" Engineered for heavy multi-axis machinery, injection tooling lines, and turnkey automated manufacturing systems. Each show is independently audited and backed by bilateral trade consortiums. "}</p>
</div>
<div className={"flex items-center gap-2 text-secondary font-label-sm text-label-sm"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container"} aria-hidden={"true"}>
{"verified"}</span>
<span>
{"Audited Visitor Access Only • Zero Fluff Attendance"}</span>
</div>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg"} id={"brands-container"}>
<div className={"brand-item lg:col-span-12 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200"} data-category={"expos"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg"}>
<div className={"lg:col-span-5 relative rounded-lg overflow-hidden min-h-[300px] flex flex-col justify-between p-space-md bg-inverse-surface text-inverse-on-surface"}>
<div className={"absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"} style={{"backgroundImage":"url('/images/stitch/high-precision-5-axis-cnc-machining-center-milli-a5e506254f.jpg')"}}>
</div>
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface via-inverse-surface/60 to-transparent"}>
</div>
<div className={"relative z-10 flex items-center justify-between"}>
<span className={"px-3 py-1 rounded bg-primary-container text-on-primary font-label-caps text-label-caps tracking-wider uppercase font-bold shadow-sm"}>
{"Flagship Global Property"}</span>
<span className={"font-label-sm text-label-sm text-surface-variant"}>
{"Biennial Cycle"}</span>
</div>
<div className={"relative z-10 space-y-1"}>
<div className={"font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider"}>
{"Hall 1-3 • BIEC, Bengaluru"}</div>
<h3 className={"font-headline-lg text-headline-lg font-bold text-surface-container-lowest tracking-tight"}>
{"DIEMEX 2026"}</h3>
<p className={"font-body-sm text-body-sm text-surface-variant"}>
{"International Die & Mould Exhibition"}</p>
</div>
</div>
<div className={"lg:col-span-7 flex flex-col justify-between space-y-space-md"}>
<div>
<div className={"flex flex-wrap items-center gap-space-xs mb-space-sm font-label-sm text-label-sm"}>
<span className={"px-2.5 py-1 rounded bg-surface-container text-on-surface font-semibold"}>
{"Est. 2010"}</span>
<span className={"px-2.5 py-1 rounded bg-surface-container text-on-surface font-semibold"}>
{"25,000+ SQM Net Footprint"}</span>
<span className={"px-2.5 py-1 rounded bg-surface-container-high text-primary font-semibold"}>
{"18+ Bilateral Country Pavilions"}</span>
</div>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" South Asia's Definitive Benchmark for Tooling, Die, Mould & 5-Axis Precision Machining "}</h4>
<p className={"font-body-md text-body-md text-secondary mt-space-xs"}>
{" DIEMEX serves as South Asia's pre-eminent capital procurement arena for automotive, aerospace, white goods, and medical component toolmakers. Incorporating dedicated live cutting demonstration zones, robotic wire EDM setups, and HPDC giga-casting die exhibits. "}</p>
<div className={"grid grid-cols-3 gap-space-sm my-space-md p-space-sm rounded-lg bg-surface-container-low"}>
<div>
<div className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"450+"}</div>
<div className={"font-label-sm text-label-sm text-secondary"}>
{"Global Exhibitors"}</div>
</div>
<div>
<div className={"font-headline-sm text-headline-sm font-bold text-primary-container"}>
{"35,000+"}</div>
<div className={"font-label-sm text-label-sm text-secondary"}>
{"Verified Enterprise Buyers"}</div>
</div>
<div>
<div className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"₹1,850 Cr"}</div>
<div className={"font-label-sm text-label-sm text-secondary"}>
{"Spot Machinery Business"}</div>
</div>
</div>
<div className={"flex items-center gap-space-xs text-secondary font-label-sm text-label-sm mb-space-xs"}>
<span className={"font-label-caps text-label-caps uppercase text-secondary"}>
{"Sovereign Pavilions:"}</span>
<span className={"font-semibold text-on-surface"}>
{"VDW Germany • UCIMU Italy • JMTBA Japan • TAMI Taiwan"}</span>
</div>
</div>
<div className={"flex flex-wrap items-center gap-space-sm pt-space-xs"}>
<Link className={"px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary transition-colors shadow-sm inline-flex items-center gap-2"} href={"/events/diemex-2027"}>
<span>
{"View Full Show Profile"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</Link>
<Link className={"px-space-md py-2.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-on-surface transition-colors inline-flex items-center gap-2"} href={"/events/diemex-2027"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"launch"}</span>
<span>
{"Visit Official Site"}</span>
</Link>
<button className={"px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors inline-flex items-center gap-2"} type={"button"} data-resource-title={"DIEMEX 2026"} data-resource-description={"International Die & Mould Exhibition"} data-resource-email={"corporate@maxxmedia.in"} aria-label={"Request Prospectus"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"description"}</span>
<span>
{"Request Prospectus"}</span>
</button>
</div>
</div>
</div>
</div>
<div className={"brand-item lg:col-span-6 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"} data-category={"expos"}>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between"}>
<span className={"px-2.5 py-1 rounded-full bg-surface-container font-label-caps text-label-caps font-bold text-secondary uppercase tracking-wider"}>
{"MTE EXPO"}</span>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"Auto Cluster, Pune"}</span>
</div>
<div className={"relative h-44 rounded-lg overflow-hidden bg-surface-container"}>
<div className={"absolute inset-0 bg-cover bg-center"} style={{"backgroundImage":"url('/images/stitch/high-precision-fiber-laser-cutting-machine-with-26ea5864de.jpg')"}}>
</div>
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/80 via-transparent to-transparent"}>
</div>
<div className={"absolute bottom-3 left-3 right-3 text-surface-container-lowest"}>
<span className={"font-label-caps text-label-caps uppercase text-primary-fixed"}>
{"Regional Biennial • 12,000 SQM"}</span>
<h4 className={"font-headline-sm text-headline-sm font-bold"}>
{"MTE EXPO Western India"}</h4>
</div>
</div>
<div>
<h5 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" Machine Tools, Sheet Metal & Laser Machining "}</h5>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>
{" Positioned directly at India's largest automotive casting and tier-1 vendor belt in Pune-Chakan-Pimpri. Specialized in multi-axis turning centers, hydraulic presses, and fiber laser sheet-metal systems. "}</p>
</div>
<div className={"grid grid-cols-2 gap-space-xs p-space-xs rounded-lg bg-surface-container-low font-label-sm text-label-sm"}>
<div>
<strong className={"text-on-surface"}>
{"220+"}</strong>
{" Machine Tool Builders"}</div>
<div>
<strong className={"text-on-surface"}>
{"18,000+"}</strong>
{" Plant Heads Attending"}</div>
</div>
</div>
<div className={"flex items-center gap-space-sm pt-space-md"}>
<Link className={"flex-1 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md text-center hover:bg-tertiary transition-colors"} href={"/events?q=MTE"}>
{"Show Profile"}</Link>
<Link className={"px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"} href={"/events?q=MTE"}>
{"Book Stand"}</Link>
</div>
</div>
<div className={"brand-item lg:col-span-6 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"} data-category={"expos"}>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between"}>
<span className={"px-2.5 py-1 rounded-full bg-surface-container font-label-caps text-label-caps font-bold text-secondary uppercase tracking-wider"}>
{"ROBOTURBO INDIA"}</span>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"Chennai Trade Centre"}</span>
</div>
<div className={"relative h-44 rounded-lg overflow-hidden bg-surface-container"}>
<div className={"absolute inset-0 bg-cover bg-center"} style={{"backgroundImage":"url('/images/stitch/industrial-robotic-arm-assembly-and-collaborativ-b62ac85869.jpg')"}}>
</div>
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/80 via-transparent to-transparent"}>
</div>
<div className={"absolute bottom-3 left-3 right-3 text-surface-container-lowest"}>
<span className={"font-label-caps text-label-caps uppercase text-primary-fixed"}>
{"Southern Tech Hub • 8,500 SQM"}</span>
<h4 className={"font-headline-sm text-headline-sm font-bold"}>
{"ROBOTURBO INDIA"}</h4>
</div>
</div>
<div>
<h5 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" Smart Robotics, Industrial Vision & Industry 4.0 "}</h5>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>
{" Accelerating automated material handling, cobots, automated guided vehicles (AGVs), and SCADA IoT sensors across Tamil Nadu & Andhra Pradesh electronic and automotive corridors. "}</p>
</div>
<div className={"grid grid-cols-2 gap-space-xs p-space-xs rounded-lg bg-surface-container-low font-label-sm text-label-sm"}>
<div>
<strong className={"text-on-surface"}>
{"160+"}</strong>
{" Automation Brands"}</div>
<div>
<strong className={"text-on-surface"}>
{"14,000+"}</strong>
{" System Integrators"}</div>
</div>
</div>
<div className={"flex items-center gap-space-sm pt-space-md"}>
<Link className={"flex-1 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md text-center hover:bg-tertiary transition-colors"} href={"/events?q=ROBOTURBO"}>
{"Show Profile"}</Link>
<button className={"px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"} type={"button"} data-resource-title={"ROBOTURBO INDIA"} data-resource-description={"ROBOTURBO INDIA"} data-resource-email={"corporate@maxxmedia.in"} aria-label={"Request Floorplan"}>
{"Request Floorplan"}</button>
</div>
</div>
<div className={"brand-item lg:col-span-6 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"} data-category={"expos"}>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between"}>
<span className={"px-2.5 py-1 rounded-full bg-surface-container font-label-caps text-label-caps font-bold text-secondary uppercase tracking-wider"}>
{"FASTTECH EXPO"}</span>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"IEML, Greater Noida"}</span>
</div>
<div>
<span className={"font-label-caps text-label-caps text-primary uppercase font-semibold"}>
{"National Annual Cycle • 10,000 SQM"}</span>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold mt-1"}>
{" Industrial Fasteners, Cold-Heading & Assembly Machinery "}</h4>
<p className={"font-body-sm text-body-sm text-secondary mt-2"}>
{" The national exhibition dedicated exclusively to high-tensile structural bolts, aerospace blind rivets, multi-station cold-forging presses, and industrial surface chemical coatings. "}</p>
</div>
<div className={"grid grid-cols-2 gap-space-xs p-space-xs rounded-lg bg-surface-container-low font-label-sm text-label-sm"}>
<div>
<strong className={"text-on-surface"}>
{"190+"}</strong>
{" Direct Exhibitors"}</div>
<div>
<strong className={"text-on-surface"}>
{"16,500+"}</strong>
{" Automotive & Infra Buyers"}</div>
</div>
</div>
<div className={"flex items-center gap-space-sm pt-space-md"}>
<Link className={"flex-1 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md text-center hover:bg-surface-container-high transition-colors"} href={"/events?q=FASTTECH"}>
{"View FastTech Delhi-NCR"}</Link>
<button className={"px-space-md py-2.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-on-surface transition-colors"} type={"button"} data-resource-title={" Industrial Fasteners, Cold-Heading & Assembly Machinery "} data-resource-description={" Industrial Fasteners, Cold-Heading & Assembly Machinery "} data-resource-email={"corporate@maxxmedia.in"} aria-label={"Request Brochure"}>
{"Brochure"}</button>
</div>
</div>
<div className={"brand-item lg:col-span-6 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"} data-category={"expos"}>
<div className={"space-y-space-sm"}>
<div className={"flex items-center justify-between"}>
<span className={"px-2.5 py-1 rounded-full bg-surface-container font-label-caps text-label-caps font-bold text-secondary uppercase tracking-wider"}>
{"INDUS-MACHINE ASIA"}</span>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"BIEC & Tier-2 Circuits"}</span>
</div>
<div>
<span className={"font-label-caps text-label-caps text-primary uppercase font-semibold"}>
{"Regional Modernization • 15,000 SQM"}</span>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold mt-1"}>
{" Regional Capital Goods & Heavy Fabrication Expo "}</h4>
<p className={"font-body-sm text-body-sm text-secondary mt-2"}>
{" Accelerating technology upgrades across SME manufacturing clusters. Covers heavy plate welding automation, press brakes, CNC plasma tables, and tube bending lines. "}</p>
</div>
<div className={"grid grid-cols-2 gap-space-xs p-space-xs rounded-lg bg-surface-container-low font-label-sm text-label-sm"}>
<div>
<strong className={"text-on-surface"}>
{"310+"}</strong>
{" Machinery Displays"}</div>
<div>
<strong className={"text-on-surface"}>
{"21,000+"}</strong>
{" MSME Fabricators"}</div>
</div>
</div>
<div className={"flex items-center gap-space-sm pt-space-md"}>
<Link className={"flex-1 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md text-center hover:bg-surface-container-high transition-colors"} href={"/events?q=INDUS"}>
{"Show Blueprint"}</Link>
<Link className={"px-space-md py-2.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-on-surface transition-colors"} href={"/events?q=INDUS"}>
{"Reserve Stall"}</Link>
</div>
</div>
<div className={"brand-item lg:col-span-12 bg-linear-to-r/srgb from-inverse-surface via-[#22262c] to-inverse-surface text-inverse-on-surface rounded-xl p-space-lg shadow-md"} data-category={"conclaves"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"}>
<div className={"lg:col-span-8 space-y-space-sm"}>
<div className={"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-caps text-label-caps uppercase tracking-wider font-bold"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"psychology"}</span>
{" Executive C-Suite Symposium & Closed-Door Sourcing Forum "}</div>
<h3 className={"font-headline-lg text-headline-lg text-surface-container-lowest font-bold tracking-tight"}>
{" TOOL & DIE TECH CONCLAVE 2026 "}</h3>
<p className={"font-body-md text-body-md text-surface-variant max-w-3xl"}>
{" Co-located alongside DIEMEX, this Chatham House symposium convenes 350+ Managing Directors, CTOs, and sovereign research delegates (Fraunhofer IPT, VDMA, JMTBA) to debate giga-casting die longevity, conformal cooling 3D metal sintering, and light-weighting strategies for EV structural battery enclosures. "}</p>
<div className={"flex flex-wrap items-center gap-space-md pt-space-xs font-label-sm text-label-sm text-surface-variant"}>
<div className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-primary-container text-[18px]"} aria-hidden={"true"}>
{"groups"}</span>
<span>
{"350+ C-Level Delegates"}</span>
</div>
<div className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-primary-container text-[18px]"} aria-hidden={"true"}>
{"record_voice_over"}</span>
<span>
{"40+ Global Keynote Speakers"}</span>
</div>
<div className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-primary-container text-[18px]"} aria-hidden={"true"}>
{"handshake"}</span>
<span>
{"Pre-Vetted B2B Sourcing Roundtables"}</span>
</div>
</div>
</div>
<div className={"lg:col-span-4 flex flex-col gap-space-xs justify-center items-start lg:items-end"}>
<button className={"w-full lg:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary transition-colors shadow-sm"} type={"button"} data-resource-title={"TOOL & DIE TECH CONCLAVE 2026"} data-resource-description={"Co-located alongside DIEMEX, this Chatham House symposium convenes 350+ Managing Directors, CTOs, and sovereign research delegates (Fraunhofer IPT, VDMA, JMTBA) to debate giga-casting die longevity, conformal cooling 3D metal sintering, and light-weighting strategies for EV structural battery enclosures."} data-resource-email={"corporate@maxxmedia.in"}>
<span>
{"Apply for C-Level Accreditation"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"chevron_right"}</span>
</button>
<button className={"w-full lg:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-surface-container-high/10 text-surface-container-lowest font-label-md text-label-md hover:bg-surface-container-high/20 transition-colors"} type={"button"} data-resource-title={"TOOL & DIE TECH CONCLAVE 2026"} data-resource-description={"Co-located alongside DIEMEX, this Chatham House symposium convenes 350+ Managing Directors, CTOs, and sovereign research delegates (Fraunhofer IPT, VDMA, JMTBA) to debate giga-casting die longevity, conformal cooling 3D metal sintering, and light-weighting strategies for EV structural battery enclosures."} data-resource-email={"corporate@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"article"}</span>
<span>
{"View Agenda & Keynotes"}</span>
</button>
</div>
</div>
</div>
</div>
</section>
<section className={"py-space-xl bg-surface-container-low"} id={"publications-pillar"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg"}>
<div className={"space-y-2"}>
<div className={"inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold"}>
<span className={"w-1.5 h-4 bg-primary-container rounded-sm"}>
</span>
{" Operational Pillar 02 "}</div>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
{" Authoritative Industrial Trade Media & Publishing Division "}</h2>
<p className={"font-body-md text-body-md text-secondary max-w-2xl"}>
{" Unlike episodic event managers, MAXX maintains daily editorial relevance through peer-reviewed print periodicals and digital technical digests read by certified shop-floor leaders and procurement engineers. "}</p>
</div>
<div className={"flex items-center gap-2 font-label-sm text-label-sm text-secondary"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container"} aria-hidden={"true"}>
{"menu_book"}</span>
<span>
{"ABC Certified Audited Circulation"}</span>
</div>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-2 gap-gutter-lg"}>
<div className={"brand-item bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"} data-category={"publications"}>
<div className={"space-y-space-md"}>
<div className={"flex items-center justify-between"}>
<div className={"inline-flex items-center gap-2"}>
<span className={"px-2.5 py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps uppercase tracking-wider font-bold"}>
{"IMTR"}</span>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"Founded 2008 • Monthly"}</span>
</div>
<span className={"px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface font-medium"}>
{"Print & Interactive Digital"}</span>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-12 gap-space-md items-center"}>
<div className={"sm:col-span-5 relative rounded-lg overflow-hidden shadow-sm h-64 bg-surface-container"}>
<div className={"absolute inset-0 bg-cover bg-center"} style={{"backgroundImage":"url('/images/stitch/cover-of-industrial-machinery-and-tooling-review-ba7df37c47.jpg')"}}>
</div>
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/70 via-transparent to-transparent"}>
</div>
<div className={"absolute bottom-2 left-2 right-2 text-surface-container-lowest"}>
<span className={"font-label-caps text-label-caps uppercase text-primary-fixed"}>
{"Issue 184 • Current Edition"}</span>
<div className={"font-label-md text-label-md font-bold truncate"}>
{"Aerospace Titanium Milling"}</div>
</div>
</div>
<div className={"sm:col-span-7 space-y-space-xs"}>
<h3 className={"font-headline-md text-headline-md text-on-surface font-bold"}>
{" Industrial Machinery & Tooling Review (IMTR) "}</h3>
<p className={"font-body-sm text-body-sm text-secondary"}>
{" The definitive technical periodical covering 5-axis CNC machining centers, metallurgical chip-thinning science, cutting tool coatings (PVD/CVD), coolant hydraulics, and smart factory telemetry. "}</p>
<div className={"p-space-xs rounded-lg bg-surface-container-low space-y-1"}>
<div className={"flex items-center justify-between font-label-sm text-label-sm"}>
<span className={"text-secondary"}>
{"Verified Print Circulation:"}</span>
<strong className={"text-on-surface"}>
{"45,000+ Copies Mailed"}</strong>
</div>
<div className={"flex items-center justify-between font-label-sm text-label-sm"}>
<span className={"text-secondary"}>
{"Monthly Digital Reads:"}</span>
<strong className={"text-primary"}>
{"80,000+ Verified Sessions"}</strong>
</div>
</div>
</div>
</div>
<div className={"pt-space-xs border-t border-surface-container"}>
<div className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider mb-2"}>
{"Regular Editorial Departments:"}</div>
<div className={"flex flex-wrap gap-1 text-secondary font-label-sm text-label-sm"}>
<span className={"px-2 py-0.5 rounded bg-surface-container"}>
{"Spindle Benchmarks"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container"}>
{"Coolant Chemistry"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container"}>
{"Shop-Floor Case Studies"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container"}>
{"Machine Tool Buyers Index"}</span>
</div>
</div>
</div>
<div className={"flex flex-wrap items-center gap-space-xs pt-space-md"}>
<Link className={"px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary transition-colors shadow-sm inline-flex items-center gap-1.5"} href={"/publications#digital-vault"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"menu_book"}</span>
<span>
{"Browse Digital Editions"}</span>
</Link>
<Link className={"px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors inline-flex items-center gap-1.5"} href={"/publications#media-kit-download"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"analytics"}</span>
<span>
{"Media Kit & Rate Card"}</span>
</Link>
<Link className={"px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors inline-flex items-center gap-1.5"} href={"/publications#inquiry-form"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"send"}</span>
<span>
{"Submit Whitepaper"}</span>
</Link>
</div>
</div>
<div className={"brand-item bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"} data-category={"publications"}>
<div className={"space-y-space-md"}>
<div className={"flex items-center justify-between"}>
<div className={"inline-flex items-center gap-2"}>
<span className={"px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps uppercase tracking-wider font-bold"}>
{"DMW"}</span>
<span className={"font-label-sm text-label-sm text-secondary"}>
{"Founded 2012 • Bi-Monthly"}</span>
</div>
<span className={"px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface font-medium"}>
{"Specialized Tooling Journal"}</span>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-12 gap-space-md items-center"}>
<div className={"sm:col-span-5 relative rounded-lg overflow-hidden shadow-sm h-64 bg-surface-container"}>
<div className={"absolute inset-0 bg-cover bg-center"} style={{"backgroundImage":"url('/images/stitch/cover-of-die-and-mould-world-technical-journal-i-ffa163b598.jpg')"}}>
</div>
<div className={"absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/70 via-transparent to-transparent"}>
</div>
<div className={"absolute bottom-2 left-2 right-2 text-surface-container-lowest"}>
<span className={"font-label-caps text-label-caps uppercase text-primary-fixed"}>
{"Volume 14 • Special Edition"}</span>
<div className={"font-label-md text-label-md font-bold truncate"}>
{"Hot Runner Innovations"}</div>
</div>
</div>
<div className={"sm:col-span-7 space-y-space-xs"}>
<h3 className={"font-headline-md text-headline-md text-on-surface font-bold"}>
{" Die & Mould World (DMW) "}</h3>
<p className={"font-body-sm text-body-sm text-secondary"}>
{" Exclusively targeted at toolmakers, mould designers, plastic injection moulders, and HPDC foundries. Deeply technical audits on EDM wire erosion, micro-moulding tolerances, and mould base metallurgy. "}</p>
<div className={"p-space-xs rounded-lg bg-surface-container-low space-y-1"}>
<div className={"flex items-center justify-between font-label-sm text-label-sm"}>
<span className={"text-secondary"}>
{"Dedicated Circulation:"}</span>
<strong className={"text-on-surface"}>
{"28,000+ Toolrooms & Foundries"}</strong>
</div>
<div className={"flex items-center justify-between font-label-sm text-label-sm"}>
<span className={"text-secondary"}>
{"Readership Tier:"}</span>
<strong className={"text-on-surface"}>
{"100% Verified Technical Buyers"}</strong>
</div>
</div>
</div>
</div>
<div className={"pt-space-xs border-t border-surface-container"}>
<div className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider mb-2"}>
{"Core Technical Coverage:"}</div>
<div className={"flex flex-wrap gap-1 text-secondary font-label-sm text-label-sm"}>
<span className={"px-2 py-0.5 rounded bg-surface-container"}>
{"Hot Runner Systems"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container"}>
{"Conformal Cooling 3D Print"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container"}>
{"Micro-Tooling"}</span>
<span className={"px-2 py-0.5 rounded bg-surface-container"}>
{"HPDC Die Steels"}</span>
</div>
</div>
</div>
<div className={"flex flex-wrap items-center gap-space-xs pt-space-md"}>
<Link className={"px-space-md py-2.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-on-surface transition-colors shadow-sm inline-flex items-center gap-1.5"} href={"/publications#digital-vault"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"auto_stories"}</span>
<span>
{"Read Latest Issue"}</span>
</Link>
<Link className={"px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors inline-flex items-center gap-1.5"} href={"/publications#subscription-form"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"subscriptions"}</span>
<span>
{"Print Subscription"}</span>
</Link>
<Link className={"px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors inline-flex items-center gap-1.5"} href={"/publications#media-kit-download"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"ad_units"}</span>
<span>
{"Advertising Specs"}</span>
</Link>
</div>
</div>
</div>
</div>
</section>
<section className={"brand-item py-space-xl max-w-[1360px] mx-auto px-margin lg:px-margin-lg w-full"} data-category={"digital"}>
<div className={"bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-sm border border-surface-container-high"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"}>
<div className={"lg:col-span-7 space-y-space-sm"}>
<div className={"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps uppercase tracking-wider font-bold"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>
{"hub"}</span>
{" Digital Ecosystem IP "}</div>
<h2 className={"font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight"}>
{" MAXX CONNECT • 365-Day Sourcing & Matchmaking Portal "}</h2>
<p className={"font-body-lg text-body-lg text-secondary"}>
{" Extending the business impact of biennial exhibitions into a continuous 365-day transactional directory. Connecting machinery manufacturers with enterprise capital buyers through automated RFQ dispatch and verified digital lead synchronization. "}</p>
<div className={"grid grid-cols-3 gap-space-sm pt-space-xs pb-space-xs"}>
<div className={"border-l-2 border-primary-container pl-3"}>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"3,500+"}</span>
<p className={"font-label-sm text-label-sm text-secondary"}>
{"Verified Plants"}</p>
</div>
<div className={"border-l-2 border-primary-container pl-3"}>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
{"12,000+"}</span>
<p className={"font-label-sm text-label-sm text-secondary"}>
{"Catalogued Machines"}</p>
</div>
<div className={"border-l-2 border-primary-container pl-3"}>
<span className={"font-headline-sm text-headline-sm font-bold text-primary"}>
{"₹340 Cr"}</span>
<p className={"font-label-sm text-label-sm text-secondary"}>
{"Monthly RFQ Value"}</p>
</div>
</div>
<div className={"flex flex-wrap items-center gap-space-sm pt-space-xs"}>
<button className={"px-space-lg py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary transition-colors shadow-sm inline-flex items-center gap-2"} type={"button"} data-resource-title={"MAXX CONNECT • 365-Day Sourcing & Matchmaking Portal"} data-resource-description={"Extending the business impact of biennial exhibitions into a continuous 365-day transactional directory. Connecting machinery manufacturers with enterprise capital buyers through automated RFQ dispatch and verified digital lead synchronization."} data-resource-email={"corporate@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"search"}</span>
<span>
{"Search Supplier Directory"}</span>
</button>
<button className={"px-space-lg py-3 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-on-surface transition-colors inline-flex items-center gap-2"} type={"button"} data-resource-title={"MAXX CONNECT • 365-Day Sourcing & Matchmaking Portal"} data-resource-description={"Extending the business impact of biennial exhibitions into a continuous 365-day transactional directory. Connecting machinery manufacturers with enterprise capital buyers through automated RFQ dispatch and verified digital lead synchronization."} data-resource-email={"corporate@maxxmedia.in"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"domain_add"}</span>
<span>
{"Claim Free Manufacturer Listing"}</span>
</button>
</div>
</div>
<div className={"lg:col-span-5 bg-surface-container-low rounded-xl p-space-md lg:p-space-lg space-y-space-md"}>
<div className={"flex items-center justify-between"}>
<span className={"font-label-caps text-label-caps uppercase text-secondary font-bold"}>
{"Portal Live Features"}</span>
<span className={"px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-bold"}>
{"v3.4 Live Engine"}</span>
</div>
<div className={"space-y-space-sm"}>
<div className={"flex items-start gap-space-xs"}>
<span className={"material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5"} aria-hidden={"true"}>
{"contactless"}</span>
<div>
<strong className={"font-label-md text-label-md text-on-surface"}>
{"NFC Smart-Badge Sync:"}</strong>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Badges scanned at live exhibitions instantly synchronize attendee profiles to supplier digital consoles."}</p>
</div>
</div>
<div className={"flex items-start gap-space-xs"}>
<span className={"material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5"} aria-hidden={"true"}>
{"encrypted"}</span>
<div>
<strong className={"font-label-md text-label-md text-on-surface"}>
{"Verified CAPEX Enquiries:"}</strong>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Zero unsolicited spam; each procurement RFQ is telephone-verified by MAXX industrial concierges."}</p>
</div>
</div>
<div className={"flex items-start gap-space-xs"}>
<span className={"material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5"} aria-hidden={"true"}>
{"video_camera_front"}</span>
<div>
<strong className={"font-label-md text-label-md text-on-surface"}>
{"Bilateral Reverse Matchmaking:"}</strong>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Automated algorithm pairs global machine builders with Indian tier-1 component vendors."}</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={"py-space-xl bg-surface-container-lowest"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"text-center max-w-3xl mx-auto space-y-2 mb-space-xl"}>
<span className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Strategic Synergy Architecture"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
{" How the MAXX Proprietary Brand Ecosystem Multiplies Market Value "}</h2>
<p className={"font-body-md text-body-md text-secondary"}>
{" No other Indian industrial organizer combines high-conviction live physical floorplates with peer-reviewed daily editorial prestige. Here is how our three operational dimensions interact: "}</p>
</div>
<div className={"grid grid-cols-1 md:grid-cols-3 gap-gutter-lg relative"}>
<div className={"bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between relative group hover:bg-surface-container-lowest hover:shadow-md transition-all"}>
<div className={"space-y-space-sm"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>
{"campaign"}</span>
</div>
<div className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider"}>
{"Phase 01 • 365 Days Continuous"}</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" Media Visibility & Technical Trust Building "}</h3>
<p className={"font-body-sm text-body-sm text-secondary"}>
{" Continuous technical exposure via "}<strong className={"text-on-surface"}>
{"IMTR"}</strong>
{" & "}<strong className={"text-on-surface"}>
{"DMW"}</strong>
{" establishes machine tool accuracy, spindle patents, and metallurgical reliability before trade show floors even open. "}</p>
</div>
<div className={"pt-space-md mt-space-md border-t border-surface-container flex items-center gap-2 font-label-sm text-label-sm text-primary font-semibold"}>
<span>
{"Result: Educated Decision Makers"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</div>
</div>
<div className={"bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between relative group hover:bg-surface-container-lowest hover:shadow-md transition-all"}>
<div className={"space-y-space-sm"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>
{"precision_manufacturing"}</span>
</div>
<div className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider"}>
{"Phase 02 • High-Impact Convergence"}</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" Floorplate Demonstration & Capital Deals "}</h3>
<p className={"font-body-sm text-body-sm text-secondary"}>
{" Live machinery cutting demonstrations at "}<strong className={"text-on-surface"}>
{"DIEMEX"}</strong>
{" and regional expos turn pre-nurtured technical curiosity into ₹1,800+ Cr spot purchase orders and signed dealership pacts. "}</p>
</div>
<div className={"pt-space-md mt-space-md border-t border-surface-container flex items-center gap-2 font-label-sm text-label-sm text-primary font-semibold"}>
<span>
{"Result: Validated Multi-Crore CAPEX"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</div>
</div>
<div className={"bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between relative group hover:bg-surface-container-lowest hover:shadow-md transition-all"}>
<div className={"space-y-space-sm"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>
{"database"}</span>
</div>
<div className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider"}>
{"Phase 03 • Perpetual Sourcing"}</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{" Digital Retargeting & Post-Show Whitepapers "}</h3>
<p className={"font-body-sm text-body-sm text-secondary"}>
{" Post-event buyer telemetry is catalogued inside "}<strong className={"text-on-surface"}>
{"MAXX Connect"}</strong>
{", while in-depth whitepapers and retrospective audits are published back across the print distribution network. "}</p>
</div>
<div className={"pt-space-md mt-space-md border-t border-surface-container flex items-center gap-2 font-label-sm text-label-sm text-primary font-semibold"}>
<span>
{"Result: Year-Round Contract Pipeline"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</div>
</div>
</div>
</div>
</section>
<section className={"py-space-lg bg-surface-container-high/30 border-y border-surface-container-high"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md"}>
<div className={"space-y-1"}>
<div className={"font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider"}>
{"Strict Governance Protocol"}</div>
<h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
{"Certified Verification Standards & Global Endorsement Seals"}</h4>
<p className={"font-body-sm text-body-sm text-secondary"}>
{"Zero inflated visitor counts. Certified turnstile telemetry and ABC audited print distribution."}</p>
</div>
<div className={"flex flex-wrap items-center gap-2"}>
<span className={"px-3 py-1.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface font-bold shadow-sm"}>
{"TAGMA INDIA"}</span>
<span className={"px-3 py-1.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface font-bold shadow-sm"}>
{"IMTMA"}</span>
<span className={"px-3 py-1.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface font-bold shadow-sm"}>
{"ACMA"}</span>
<span className={"px-3 py-1.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface font-bold shadow-sm"}>
{"EEPC INDIA"}</span>
<span className={"px-3 py-1.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface font-bold shadow-sm"}>
{"VDMA GERMANY"}</span>
<span className={"px-3 py-1.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface font-bold shadow-sm"}>
{"UCIMU ITALY"}</span>
<span className={"px-3 py-1.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-on-surface font-bold shadow-sm"}>
{"JMTBA JAPAN"}</span>
</div>
</div>
</div>
</section>
<section className={"py-space-xl max-w-[1360px] mx-auto px-margin lg:px-margin-lg w-full"} id={"portfolio-packages"}>
<div className={"text-center max-w-3xl mx-auto space-y-2 mb-space-xl"}>
<div className={"inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold"}>
{" Cross-Platform Enterprise Sponsorship "}</div>
<h2 className={"font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight"}>
{" Structured Multi-Brand Participation Frameworks "}</h2>
<p className={"font-body-md text-body-md text-secondary"}>
{" Maximize marketing ROI by bundling live exhibition footprint presence with full-year editorial spreads and VIP summit sponsorships. "}</p>
</div>
<div className={"grid grid-cols-1 md:grid-cols-3 gap-gutter-lg"}>
<div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between"}>
<div className={"space-y-space-md"}>
<div>
<span className={"font-label-caps text-label-caps uppercase text-secondary font-bold"}>
{"Tier 01 • Tactical Penetration"}</span>
<h3 className={"font-headline-md text-headline-md text-on-surface font-bold mt-1"}>
{"Regional Market Challenger"}</h3>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>
{"Engineered for specialized component suppliers and emerging automation toolmakers."}</p>
</div>
<ul className={"space-y-space-xs font-body-sm text-body-sm text-secondary"}>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"18 SQM Shell Scheme at 1 Regional Expo (MTE or Roboturbo)"}</span>
</li>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"Half-page Technical Spotlight in "}<strong className={"text-on-surface"}>
{"IMTR"}</strong>
{" (1 Issue)"}</span>
</li>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"Standard Verified Profile on "}<strong className={"text-on-surface"}>
{"MAXX Connect"}</strong>
</span>
</li>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"2 Delegate Passes to Tool & Die Tech Conclave"}</span>
</li>
</ul>
</div>
<div className={"pt-space-md mt-space-md border-t border-surface-container"}>
<Link className={"w-full py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md text-center block hover:bg-surface-container-high transition-colors"} href={"/contact#inquiry-desk"}>
{" Request Challenger Specs "}</Link>
</div>
</div>
<div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-md border-2 border-primary-container flex flex-col justify-between relative"}>
<div className={"absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary-container text-on-primary font-label-caps text-label-caps uppercase tracking-wider font-bold shadow-sm"}>
{" Most Popular Enterprise Model "}</div>
<div className={"space-y-space-md"}>
<div>
<span className={"font-label-caps text-label-caps uppercase text-primary font-bold"}>
{"Tier 02 • High Conversion"}</span>
<h3 className={"font-headline-md text-headline-md text-on-surface font-bold mt-1"}>
{"Machinery Category Leader"}</h3>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>
{"Ideal for CNC builders, laser cutting manufacturers, and tooling conglomerates."}</p>
</div>
<ul className={"space-y-space-xs font-body-sm text-body-sm text-secondary"}>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
<strong>
{"48 SQM Bare Island Stand"}</strong>
{" at DIEMEX or 2 Regional Expos"}</span>
</li>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"Full-Page Color Feature in "}<strong className={"text-on-surface"}>
{"DMW"}</strong>
{" + "}<strong className={"text-on-surface"}>
{"IMTR"}</strong>
{" (3 Issues each)"}</span>
</li>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"Dedicated Email Blast to 25,000 Verified Plant Heads"}</span>
</li>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"Featured Supplier Placement on MAXX Connect Homepage"}</span>
</li>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"1 Executive Panel Slot at Tool & Die Conclave"}</span>
</li>
</ul>
</div>
<div className={"pt-space-md mt-space-md border-t border-surface-container"}>
<Link className={"w-full py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md text-center block hover:bg-tertiary transition-colors shadow-sm"} href={"/contact#inquiry-desk"}>
{" Book Category Leader Package "}</Link>
</div>
</div>
<div className={"bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between"}>
<div className={"space-y-space-md"}>
<div>
<span className={"font-label-caps text-label-caps uppercase text-secondary font-bold"}>
{"Tier 03 • Definitive Market Hegemony"}</span>
<h3 className={"font-headline-md text-headline-md text-on-surface font-bold mt-1"}>
{"Ecosystem Anchor Partner"}</h3>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>
{"Exclusive sovereign pavilions, international multi-nationals, and industry titans."}</p>
</div>
<ul className={"space-y-space-xs font-body-sm text-body-sm text-secondary"}>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
<strong>
{"120+ SQM Premium Pavilion"}</strong>
{" + Title Co-Sponsorship of DIEMEX"}</span>
</li>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"12-Month Center-Spread in both IMTR & DMW"}</span>
</li>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"Permanent Top Banner on MAXX Connect with lead push"}</span>
</li>
<li className={"flex items-start gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"} aria-hidden={"true"}>
{"check_circle"}</span>
<span>
{"Keynote Address & Gala Dinner Host at Conclave"}</span>
</li>
</ul>
</div>
<div className={"pt-space-md mt-space-md border-t border-surface-container"}>
<Link className={"w-full py-2.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md text-center block hover:bg-on-surface transition-colors"} href={"/contact#inquiry-desk"}>
{" Custom Consultation "}</Link>
</div>
</div>
</div>
</section>
<section className={"w-full bg-inverse-surface text-inverse-on-surface py-space-xl"}>
<div className={"max-w-[1360px] mx-auto px-margin lg:px-margin-lg"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"}>
<div className={"lg:col-span-8 space-y-space-sm"}>
<div className={"inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high/10 text-primary-fixed font-label-caps text-label-caps tracking-wider uppercase font-bold"}>
<span className={"w-2 h-2 rounded-full bg-primary-container"}>
</span>
{" Partner with South Asia's Premier Industrial Organizer "}</div>
<h2 className={"font-headline-xl text-headline-xl font-bold tracking-tight text-surface-container-lowest"}>
{" Amplify Your Industrial Narrative Across 150,000+ Enterprise Decision-Makers. "}</h2>
<p className={"font-body-lg text-body-lg text-surface-variant max-w-2xl"}>
{" Whether launching a high-speed machining center line, co-sponsoring a sovereign bilateral trade pavilion, or establishing monthly editorial authority in India’s leading tooling journals, MAXX brands deliver measurable commercial return. "}</p>
</div>
<div className={"lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-center items-start lg:items-end"}>
<Link className={"w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-space-lg py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary transition-all duration-150 transform hover:-translate-y-0.5 shadow-md"} href={"/contact#inquiry-desk"}>
<span>
{"Schedule a Portfolio Consultation"}</span>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"calendar_month"}</span>
</Link>
<Link className={"w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-space-lg py-3.5 rounded-lg bg-surface-container-high/10 text-surface-container-lowest font-label-md text-label-md hover:bg-surface-container-high/20 transition-all duration-150"} href={"/events"}>
<span>
{"Explore Upcoming Events Calendar"}</span>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>
{"arrow_forward"}</span>
</Link>
</div>
</div>
</div>
</section>
</div>
</main>

  </StitchInteractions>;
}
