import Link from "next/link";
import PageInteractions from "@/components/PageInteractions";

export const metadata = { title: "About Us | MAXX Business Media" };

// Layout and assets adapted from the original, user-provided Stitch screen.
export default function Page() {
return (
<PageInteractions>
<main className="w-full pt-20 bg-background min-h-screen" id="main-content">
<div className="flex flex-col w-full">
<section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-24">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="flex flex-wrap items-center gap-space-xs font-label-caps text-label-caps uppercase text-secondary tracking-widest mb-space-md">
<Link className="hover:text-primary transition-colors" href="/">
{"Home"}</Link>
<span className="material-symbols-outlined text-[13px] text-secondary" aria-hidden="true">
{"chevron_right"}</span>
<span className="text-primary font-bold">
{"About Us"}</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-end mb-space-xl">
<div className="lg:col-span-8 space-y-space-md">
<div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-primary">
</span>
{" Our Origin & Purpose "}</div>
<h1 className="font-headline-xl text-headline-xl text-inverse-surface tracking-tight leading-tight">
{" Architecting Industrial Growth Through High-Impact Trade Platforms. "}</h1>
<p className="font-body-lg text-body-lg text-secondary max-w-3xl leading-relaxed">
{" Founded with the ambition to bridge global manufacturing innovation and India's burgeoning industrial landscape, MAXX Business Media Pvt. Ltd. has evolved into an authoritative powerhouse in B2B exhibition organization and specialized technical journalism. "}</p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-primary-fixed/50 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[28px]" aria-hidden="true">
{"verified"}</span>
</div>
<div>
<span className="font-headline-md text-headline-md text-inverse-surface font-bold">
{"18+ Years"}</span>
<p className="font-body-sm text-body-sm text-secondary">
{"Of Industrial Convocations & Trade Summits"}</p>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-inverse-surface text-[28px]" aria-hidden="true">
{"domain_verification"}</span>
</div>
<div>
<span className="font-headline-md text-headline-md text-inverse-surface font-bold">
{"250,000+"}</span>
<p className="font-body-sm text-body-sm text-secondary">
{"Verified Enterprise Decision-Makers Engaged"}</p>
</div>
</div>
</div>
</div>
<div className="relative w-full h-[380px] lg:h-[480px] rounded-2xl overflow-hidden shadow-md">
<img alt="MAXX Industrial Exhibition Floor" className="w-full h-full object-cover" src="/images/stitch/maxx-industrial-exhibition-floor-442c436ac5.jpg" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/90 via-inverse-surface/30 to-transparent">
</div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-space-md">
<div className="space-y-1">
<span className="inline-block px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-caps text-label-caps uppercase tracking-wider">
{" Flagship Scale "}</span>
<p className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
{" Engineering the High-Stakes Ground for Capital Goods Commerce "}</p>
<p className="font-body-sm text-body-sm text-surface-variant max-w-xl">
{" Capturing transactions across Die & Mould, Machine Tools, Industrial Automation, and Precision Engineering. "}</p>
</div>
<div className="bg-surface-container-lowest/90 backdrop-blur-md px- space-md py- space-sm rounded-lg flex items-center gap-space-sm p-4 shrink-0 shadow-lg">
<span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">
{"flag"}</span>
<div>
<p className="font-label-caps text-label-caps text-secondary uppercase">
{"Operational Footprint"}</p>
<p className="font-label-md text-label-md text-inverse-surface font-bold">
{"Mumbai • Bengaluru • Pune • Delhi NCR"}</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
<div className="lg:col-span-7 space-y-space-lg">
<div className="space-y-space-xs">
<p className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
{"The MAXX Institutional Mandate"}</p>
<h2 className="font-headline-lg text-headline-lg text-inverse-surface font-bold">
{" Where Capital Goods Meet Technical Conviction. "}</h2>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
{" Headquartered in the commercial epicentre of India with active operation hubs across key industrial corridors, MAXX Business Media Pvt. Ltd. was established to resolve a persistent friction point in industrial trade: the gap between breakthrough tooling engineering and executive purchasing authority. "}</p>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
{" Unlike generic exhibition contractors, our institutional foundation is built upon dual competencies. We organize flagship trade expos designed from the ground up for high-tonnage machinery logistics while operating widely read technical publications that keep our editorial team embedded inside precision workshops, automotive tier-1 manufacturing hubs, and aerospace R&D centers year-round. "}</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
<div className="p-space-md rounded-xl bg-surface-container-low space-y-space-xs">
<span className="material-symbols-outlined text-primary text-[28px]" aria-hidden="true">
{"precision_manufacturing"}</span>
<h3 className="font-headline-sm text-headline-sm text-inverse-surface">
{"Heavy Machinery Floorplates"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{" Turnkey logistical engineering handling 40-tonne 5-axis machines, live spindle demos, compressed air lines, and high-voltage power grids. "}</p>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low space-y-space-xs">
<span className="material-symbols-outlined text-primary text-[28px]" aria-hidden="true">
{"menu_book"}</span>
<h3 className="font-headline-sm text-headline-sm text-inverse-surface">
{"Technical Editorial Authority"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{" Peer-reviewed trade journalism distributed directly to plant managers, chief metallurgists, and technical directors across South Asia. "}</p>
</div>
</div>
</div>
<div className="lg:col-span-5 space-y-space-md lg:sticky lg:top-28">
<div className="relative p-space-lg rounded-xl bg-surface-container-lowest shadow-md overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-container">
</div>
<div className="flex items-start justify-between mb-space-sm">
<span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
{"Strategic Mission"}</span>
<div className="w-8 h-8 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"target"}</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md text-inverse-surface font-bold mb-space-xs">
{" Catalyze Bilateral Commerce. "}</h3>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
{" Catalyze bilateral manufacturing commerce by engineering world-class, transaction-driven exhibition ecosystems and disseminating authoritative technical market intelligence that empowers manufacturing enterprises to modernize profitably. "}</p>
</div>
<div className="relative p-space-lg rounded-xl bg-inverse-surface text-surface-container-lowest shadow-md overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-tertiary-container">
</div>
<div className="flex items-start justify-between mb-space-sm">
<span className="font-label-caps text-label-caps text-tertiary-fixed uppercase font-bold tracking-wider">
{"Corporate Vision"}</span>
<div className="w-8 h-8 rounded-full bg-surface-container-high/20 flex items-center justify-center text-primary-fixed">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"visibility"}</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md text-surface-container-lowest font-bold mb-space-xs">
{" Preeminent Industrial Convenor. "}</h3>
<p className="font-body-md text-body-md text-surface-variant leading-relaxed">
{" To be South Asia's preeminent B2B industrial convenor, recognized globally for uncompromising event execution, vetted buyer turnout, and sustainable industry development across smart manufacturing and precision tooling. "}</p>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface py-space-xl lg:py-24">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="text-center max-w-2xl mx-auto mb-space-xl space-y-space-xs">
<span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
{"Operational Rigor"}</span>
<h2 className="font-headline-lg text-headline-lg text-inverse-surface font-bold">
{" The Bedrock Values Driving Every Floorplan. "}</h2>
<p className="font-body-md text-body-md text-secondary">
{" We operate at the intersection of heavy engineering logistics and executive procurement. Every event and publication reflects our core institutional standards. "}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">
{"tune"}</span>
</div>
<div className="font-label-caps text-label-caps text-secondary mb-1">
{"01 / DISCIPLINE"}</div>
<h3 className="font-headline-sm text-headline-sm text-inverse-surface font-bold mb-space-xs">
{" Industrial Precision & Rigor "}</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
{" Flawless infrastructural execution, from mega machinery load-in schedules and industrial load-bearing power grids to millimetre-accurate floor zoning. "}</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label-caps text-label-caps text-primary font-bold">
<span>
{"ZERO DOWNTIME MANDATE"}</span>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">
{"query_stats"}</span>
</div>
<div className="font-label-caps text-label-caps text-secondary mb-1">
{"02 / ACCOUNTABILITY"}</div>
<h3 className="font-headline-sm text-headline-sm text-inverse-surface font-bold mb-space-xs">
{" Commercial ROI for Exhibitors "}</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
{" Relentless attendee qualification ensuring stall spaces convert directly into validated OEM contracts, RFQs, and tangible balance sheet additions. "}</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label-caps text-label-caps text-primary font-bold">
<span>
{"QUALIFIED ATTENDEES ONLY"}</span>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">
{"auto_stories"}</span>
</div>
<div className="font-label-caps text-label-caps text-secondary mb-1">
{"03 / TRUTH IN REPORTAGE"}</div>
<h3 className="font-headline-sm text-headline-sm text-inverse-surface font-bold mb-space-xs">
{" Editorial Integrity & Depth "}</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
{" Engineering-first journalism authored for plant heads, metallurgists, and technical directors rather than superficial PR copy or recycled releases. "}</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label-caps text-label-caps text-primary font-bold">
<span>
{"TECHNICAL SCRUTINY"}</span>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">
{"handshake"}</span>
</div>
<div className="font-label-caps text-label-caps text-secondary mb-1">
{"04 / PARTNERSHIP"}</div>
<h3 className="font-headline-sm text-headline-sm text-inverse-surface font-bold mb-space-xs">
{" Ecosystem Stewardship "}</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
{" Decades-long strategic alliances with leading trade associations, toolmaking guilds, and export promotion councils to foster cross-border trade. "}</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label-caps text-label-caps text-primary font-bold">
<span>
{"SUSTAINED COLLABORATION"}</span>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-lowest py-space-xl lg:py-24 overflow-hidden">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-space-xl gap-space-md">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
{"Evolutionary Timeline"}</span>
<h2 className="font-headline-lg text-headline-lg text-inverse-surface font-bold">
{" Eighteen Years of Grounded Industrial Expansion. "}</h2>
<p className="font-body-md text-body-md text-secondary max-w-xl">
{" From our foundational roots as a specialized Mumbai technical journal to operating South Asia's preeminent die, mould, and tooling convocations. "}</p>
</div>
<div className="flex items-center gap-space-xs shrink-0 font-label-md text-label-md text-secondary">
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse">
</span>
<span>
{"Continuously Expanding 2008 – Present"}</span>
</div>
</div>
<div className="relative">
<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-surface-container -translate-y-8 z-0">
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-gutter-sm relative z-10">
<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-lowest transition-all hover:shadow-md flex flex-col justify-between space-y-space-sm group">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-headline-md text-headline-md text-primary font-bold">
{"2008"}</span>
<span className="w-7 h-7 rounded-full bg-primary-fixed/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"history_edu"}</span>
</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-inverse-surface font-bold mb-1">
{"Genesis & Inception"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{" Founded in Mumbai as a dedicated technical publishing enterprise serving domestic tooling shops and die casting professionals. "}</p>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant font-medium">
{"MUMBAI HQ"}</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-lowest transition-all hover:shadow-md flex flex-col justify-between space-y-space-sm group">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-headline-md text-headline-md text-primary font-bold">
{"2010"}</span>
<span className="w-7 h-7 rounded-full bg-primary-fixed/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"apartment"}</span>
</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-inverse-surface font-bold mb-1">
{"Inaugural DIEMEX"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{" Successfully launched our flagship international die, mould, and tooling expo at BIEC Bengaluru with 120+ exhibitors. "}</p>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant font-medium">
{"BENGALURU EXPANSION"}</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-lowest transition-all hover:shadow-md flex flex-col justify-between space-y-space-sm group">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-headline-md text-headline-md text-primary font-bold">
{"2014"}</span>
<span className="w-7 h-7 rounded-full bg-primary-fixed/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"library_books"}</span>
</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-inverse-surface font-bold mb-1">
{"Journal Scale-Up"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{" Debuted 'Industrial Machinery & Tooling Review', achieving circulation across 12,000+ audited enterprise plants nationwide. "}</p>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant font-medium">
{"NATIONAL REACH"}</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-lowest transition-all hover:shadow-md flex flex-col justify-between space-y-space-sm group">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-headline-md text-headline-md text-primary font-bold">
{"2018"}</span>
<span className="w-7 h-7 rounded-full bg-primary-fixed/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"hub"}</span>
</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-inverse-surface font-bold mb-1">
{"Regional Hubs"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{" Expanded into Pune, Chennai, and Delhi NCR auto clusters with specialized regional symposiums and supplier tables. "}</p>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant font-medium">
{"AUTO-CLUSTER CLUSTERS"}</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-lowest transition-all hover:shadow-md flex flex-col justify-between space-y-space-sm group">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-headline-md text-headline-md text-primary font-bold">
{"2022"}</span>
<span className="w-7 h-7 rounded-full bg-primary-fixed/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"sync_alt"}</span>
</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-inverse-surface font-bold mb-1">
{"Hybrid Systems"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{" Pioneered continuous 365-day matchmaking directories and digitally pre-scheduled buyer table reservations. "}</p>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant font-medium">
{"DIGITAL MATCHMAKING"}</span>
</div>
<div className="p-space-md rounded-xl bg-inverse-surface text-surface-container-lowest hover:shadow-xl transition-all flex flex-col justify-between space-y-space-sm">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-headline-md text-headline-md text-tertiary-fixed font-bold">
{"2025–27"}</span>
<span className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"public"}</span>
</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold mb-1">
{"Global Vision"}</h3>
<p className="font-body-sm text-body-sm text-surface-variant">
{" Scaling DIEMEX floorplate to 25,000+ sqm with confirmed pavilions from Germany, Japan, Italy, Taiwan, and South Korea. "}</p>
</div>
<span className="font-label-caps text-label-caps text-primary-fixed font-bold">
{"25,000+ SQM HORIZON"}</span>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface py-space-xl lg:py-24">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="max-w-2xl mb-space-xl space-y-space-xs">
<span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
{"Executive Stewardship"}</span>
<h2 className="font-headline-lg text-headline-lg text-inverse-surface font-bold">
{" Steered by Veterans of Industrial Media. "}</h2>
<p className="font-body-md text-body-md text-secondary">
{" Our governance combines decades of engineering journalism pedigree, mega-venue infrastructure management, and close bilateral trade relationships. "}</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch">
<div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-md flex flex-col sm:flex-row gap-space-lg items-start">
<div className="w-full sm:w-56 shrink-0 aspect-[4/5] rounded-xl overflow-hidden relative shadow-sm">
<img alt="Managing Director portrait" className="w-full h-full object-cover" src="/images/stitch/managing-director-portrait-dac6e50a57.jpg" loading="lazy" decoding="async" />
<div className="absolute bottom-2 left-2 bg-inverse-surface/85 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-surface-container-lowest uppercase tracking-wider font-bold">
{" FOUNDER & MD "}</div>
</div>
<div className="space-y-space-md flex-1">
<div>
<h3 className="font-headline-md text-headline-md text-inverse-surface font-bold">
{"Rajesh V. Sharma"}</h3>
<p className="font-label-md text-label-md text-primary">
{"Founder & Managing Director"}</p>
<p className="font-label-caps text-label-caps text-secondary uppercase mt-0.5">
{"MAXX Business Media Pvt. Ltd."}</p>
</div>
<div className="relative pl-space-md py-1">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container rounded">
</div>
<blockquote className="font-headline-sm text-headline-sm text-inverse-surface font-medium italic leading-snug">
{" “Exhibitions are not merely physical gatherings; they are the catalyst where capital goods meet technical conviction.” "}</blockquote>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
{" With over 24 years orchestrating high-value industrial convocations, Rajesh has personally steered the trade floor trajectories of hundreds of European and Asian tooling manufacturers entering the Indian market. "}</p>
<div className="flex items-center gap-space-sm pt-space-xs font-label-sm text-label-sm text-inverse-surface">
<span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
{"workspace_premium"}</span>
<span>
{"Past Advisor to Machine Tool Industry Consortia"}</span>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
<div className="bg-surface-container-low p-space-lg rounded-xl space-y-space-md">
<div className="space-y-1">
<h4 className="font-headline-sm text-headline-sm text-inverse-surface font-bold">
{"Senior Governance Desk"}</h4>
<p className="font-body-sm text-body-sm text-secondary">
{" Complementing the Founder's vision is a cadre of specialized division heads overseeing floor mechanics, trade journalism, and international delegate sales. "}</p>
</div>
<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-lowest">
<span className="font-headline-md text-headline-md text-primary font-bold">
{"60+ Yrs"}</span>
<p className="font-body-sm text-body-sm text-secondary">
{"Cumulative Media & Expo Seniority"}</p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest">
<span className="font-headline-md text-headline-md text-primary font-bold">
{"14 State"}</span>
<p className="font-body-sm text-body-sm text-secondary">
{"Industrial Corridors Actively Covered"}</p>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm">
<p className="font-label-caps text-label-caps text-secondary uppercase font-bold">
{"Division Leadership"}</p>
<div className="flex items-center justify-between py-1">
<div>
<p className="font-label-md text-label-md text-inverse-surface font-bold">
{"Sunil K. Bhatt"}</p>
<p className="font-body-sm text-body-sm text-secondary">
{"Director — Exhibition Infrastructure & Technical Logistics"}</p>
</div>
<span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
{"engineering"}</span>
</div>
<div className="flex items-center justify-between py-1">
<div>
<p className="font-label-md text-label-md text-inverse-surface font-bold">
{"Dr. Anita S. Deshmukh"}</p>
<p className="font-body-sm text-body-sm text-secondary">
{"Chief Editor — Industrial & Tooling Publications"}</p>
</div>
<span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
{"feed"}</span>
</div>
<div className="flex items-center justify-between py-1">
<div>
<p className="font-label-md text-label-md text-inverse-surface font-bold">
{"Marcus Vance"}</p>
<p className="font-body-sm text-body-sm text-secondary">
{"Head — Global Pavilions & Foreign Delegations"}</p>
</div>
<span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
{"public"}</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="text-center max-w-3xl mx-auto mb-space-xl space-y-space-xs">
<span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
{"The Institutional Edge"}</span>
<h2 className="font-headline-lg text-headline-lg text-inverse-surface font-bold">
{" Why Industrial Titans Choose MAXX Business Media. "}</h2>
<p className="font-body-md text-body-md text-secondary">
{" We do not assemble temporary tents; we construct high-throughput commercial marketplaces built on technical credibility and verifiable trade outcomes. "}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
<div className="p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface hover:shadow-md transition-all flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="w-14 h-14 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[32px]" aria-hidden="true">
{"campaign"}</span>
</div>
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps text-primary uppercase font-bold">
{"Pillar 01"}</span>
<h3 className="font-headline-md text-headline-md text-inverse-surface font-bold">
{" Dual Powerhouse: Events + Media "}</h3>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
{" Standard expos leave exhibitors with a 3-day window of visibility every two years. With our peer-reviewed industrial publications, digital portals, and OEM vendor digests, our exhibitors stay actively visible to procurement heads all 365 days of the year. "}</p>
</div>
<div className="pt-space-sm">
<span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-inverse-surface font-bold">
<span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
{"check_circle"}</span>
{" Year-Round Brand Reinforcement "}</span>
</div>
</div>
<div className="p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface hover:shadow-md transition-all flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="w-14 h-14 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[32px]" aria-hidden="true">
{"foundation"}</span>
</div>
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps text-primary uppercase font-bold">
{"Pillar 02"}</span>
<h3 className="font-headline-md text-headline-md text-inverse-surface font-bold">
{" Deep Industrial Roots "}</h3>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
{" Nearly two decades embedded in automotive, defense component manufacturing, aerospace precision, and plastic injection moulding clusters. We know who the authentic machine buyers, factory owners, and toolroom heads are in every major belt. "}</p>
</div>
<div className="pt-space-sm">
<span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-inverse-surface font-bold">
<span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
{"check_circle"}</span>
{" Direct Access to Tier-1 & Tier-2 Decision-Makers "}</span>
</div>
</div>
<div className="p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface hover:shadow-md transition-all flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="w-14 h-14 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[32px]" aria-hidden="true">
{"forklift"}</span>
</div>
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps text-primary uppercase font-bold">
{"Pillar 03"}</span>
<h3 className="font-headline-md text-headline-md text-inverse-surface font-bold">
{" Turnkey Show Operations "}</h3>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
{" We own the entire operational stack: heavy industrial crane freight clearance, customs bonded warehousing assistance, instantaneous QR visitor accreditation, and protocol services for international consulates and delegations. "}</p>
</div>
<div className="pt-space-sm">
<span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-inverse-surface font-bold">
<span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
{"check_circle"}</span>
{" Frictionless Execution for Overseas Exhibitors "}</span>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface py-space-lg lg:py-16">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="flex flex-col items-center text-center space-y-space-sm mb-space-lg">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
{"Institutional Partnerships"}</span>
<p className="font-body-sm text-body-sm text-secondary max-w-xl">
{" Trusted organizing partner and official media collaborator to leading industrial consortiums, trade guilds, and export promotion councils across India and abroad. "}</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-md items-center justify-center">
<div className="h-20 bg-surface-container-lowest rounded-xl flex flex-col items-center justify-center p-3 text-center shadow-sm">
<span className="font-headline-sm text-headline-sm text-inverse-surface font-bold tracking-tight">
{"TAGMA"}</span>
<span className="text-[10px] text-secondary font-medium uppercase mt-0.5">
{"Tool & Gauge Mfrs"}</span>
</div>
<div className="h-20 bg-surface-container-lowest rounded-xl flex flex-col items-center justify-center p-3 text-center shadow-sm">
<span className="font-headline-sm text-headline-sm text-inverse-surface font-bold tracking-tight">
{"IMTMA"}</span>
<span className="text-[10px] text-secondary font-medium uppercase mt-0.5">
{"Machine Tool Assoc."}</span>
</div>
<div className="h-20 bg-surface-container-lowest rounded-xl flex flex-col items-center justify-center p-3 text-center shadow-sm">
<span className="font-headline-sm text-headline-sm text-inverse-surface font-bold tracking-tight">
{"ACMA"}</span>
<span className="text-[10px] text-secondary font-medium uppercase mt-0.5">
{"Auto Component Mfrs"}</span>
</div>
<div className="h-20 bg-surface-container-lowest rounded-xl flex flex-col items-center justify-center p-3 text-center shadow-sm">
<span className="font-headline-sm text-headline-sm text-inverse-surface font-bold tracking-tight">
{"EEPC"}</span>
<span className="text-[10px] text-secondary font-medium uppercase mt-0.5">
{"Engineering Export"}</span>
</div>
<div className="h-20 bg-surface-container-lowest rounded-xl flex flex-col items-center justify-center p-3 text-center shadow-sm">
<span className="font-headline-sm text-headline-sm text-inverse-surface font-bold tracking-tight">
{"AIA"}</span>
<span className="text-[10px] text-secondary font-medium uppercase mt-0.5">
{"Industrial Automation"}</span>
</div>
<div className="h-20 bg-surface-container-lowest rounded-xl flex flex-col items-center justify-center p-3 text-center shadow-sm">
<span className="font-headline-sm text-headline-sm text-inverse-surface font-bold tracking-tight">
{"CII"}</span>
<span className="text-[10px] text-secondary font-medium uppercase mt-0.5">
{"Confed. of Indian Ind."}</span>
</div>
</div>
</div>
</section>
<section className="w-full bg-inverse-surface text-surface-container-lowest py-space-xl lg:py-24">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="max-w-4xl mx-auto text-center space-y-space-md">
<div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-caps text-label-caps uppercase tracking-wider mx-auto">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"handshake"}</span>
{" Strategic Alliances Desk "}</div>
<h2 className="font-headline-xl text-headline-xl text-surface-container-lowest font-bold leading-tight">
{" Partner With An Organizer That Understands Your Industry. "}</h2>
<p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto leading-relaxed">
{" Whether you represent a global trade association seeking an Indian exhibition partner or a manufacturing enterprise ready to exhibit at DIEMEX, our directors are available for strategic consultation. "}</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-space-md pt-space-md">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container hover:text-on-tertiary transition-all duration-150 transform hover:-translate-y-0.5 shadow-md" href="mailto:info@maxxmedia.in?subject=Corporate%20enquiry">
<span>
{"Schedule a Corporate Consultation"}</span>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"calendar_today"}</span>
</a>
<Link className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-surface-container-high/15 hover:bg-surface-container-high/25 text-surface-container-lowest font-label-md text-label-md transition-colors" href="/#brands">
<span>
{"Explore Our Exhibition Brands"}</span>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
</div>
<div className="pt-space-md flex flex-wrap items-center justify-center gap-space-lg font-body-sm text-body-sm text-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-fixed text-[18px]" aria-hidden="true">
{"check"}</span>
<span>
{"Joint Venture Inquiries"}</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-fixed text-[18px]" aria-hidden="true">
{"check"}</span>
<span>
{"Country Pavilion Partnerships"}</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-fixed text-[18px]" aria-hidden="true">
{"check"}</span>
<span>
{"Editorial Pitch Desk"}</span>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

</PageInteractions>
);
}
