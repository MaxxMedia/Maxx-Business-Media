import Link from "next/link";
import PageInteractions from "@/components/PageInteractions";

export const metadata = { title: "MAXX Business Media | Creating Platforms. Building Partnerships." };

// Layout and assets adapted from the original, user-provided Stitch screen.
export default function Page() {
return (
<PageInteractions>
<main className="w-full pt-20 bg-background min-h-screen" id="main-content">
<div className="flex flex-col w-full">
<section className="relative w-full bg-inverse-surface overflow-hidden" id="hero">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transform transition-transform duration-1000" style={{"backgroundImage":"url('/images/stitch/expansive-panoramic-view-of-a-premier-high-tech-f3a0f5b697.jpg')"}}>
</div>
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface via-inverse-surface/80 to-transparent">
</div>
<div className="absolute inset-0 bg-linear-to-r/srgb from-inverse-surface via-inverse-surface/70 to-transparent">
</div>
</div>
<div className="relative z-10 max-w-[1360px] mx-auto px-margin lg:px-margin-lg pt-space-xl pb-space-xl">
<div className="flex flex-col max-w-4xl space-y-space-md">
<div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 rounded-full bg-surface-container-high/15 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse">
</span>
<span className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider">
{"Premier B2B Industrial Exhibitions & Publishing"}</span>
</div>
<h1 className="font-headline-xl text-headline-xl md:font-display-hero md:text-display-hero text-surface-container-lowest font-extrabold tracking-tight leading-tight">
{" Creating Platforms."}<br />
<span className="text-primary-container">
{"Building Partnerships."}</span>
</h1>
<p className="font-body-lg text-body-lg text-surface-variant max-w-2xl leading-relaxed">
{" Connecting industries, ideas, and opportunities through high-impact international trade exhibitions, specialized engineering symposiums, and authoritative technical media. "}</p>
<div className="flex flex-wrap items-center gap-space-md pt-space-xs">
<Link className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container shadow-md transition-all duration-200 transform hover:-translate-y-0.5" data-path="events" href="/events">
<span>
{"Explore Our Events"}</span>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
<a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-surface-container-lowest font-label-md text-label-md backdrop-blur-sm transition-all duration-200" href="#about-section">
<span>
{"Discover MAXX"}</span>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"expand_more"}</span>
</a>
</div>
</div>
<div className="mt-space-xl pt-space-md bg-surface-container-lowest/5 backdrop-blur-md rounded-xl p-space-md flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary-container shrink-0">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">
{"flag"}</span>
</div>
<div>
<div className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider">
{"Next Flagship Exhibition"}</div>
<div className="font-headline-sm text-headline-sm text-surface-container-lowest font-semibold">
{"DIEMEX 2027 • Bengaluru, India"}</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-lg text-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"calendar_today"}</span>
<span>
{"Q1 2027 | BIEC Exhibition Centre"}</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-primary-container" aria-hidden="true">
{"domain"}</span>
<span>
{"Hall 1, 2 & 3A • 25,000+ sqm"}</span>
</div>
<Link className="inline-flex items-center gap-1 text-primary-fixed hover:text-surface-container-lowest font-label-md text-label-md transition-colors" data-path="events" href="/events">
<span>
{"Reserve Stall"}</span>
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"chevron_right"}</span>
</Link>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-lowest py-space-xl shadow-sm">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-lg">
<div className="flex flex-col space-y-space-xs p-space-md bg-surface-container-low rounded-xl">
<span className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
{"18+"}</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
{"Years"}</span>
<p className="font-body-sm text-body-sm text-secondary">
{"Of Industrial Excellence & Trade Leadership"}</p>
</div>
<div className="flex flex-col space-y-space-xs p-space-md bg-surface-container-low rounded-xl">
<span className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
{"25+"}</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
{"Exhibitions"}</span>
<p className="font-body-sm text-body-sm text-secondary">
{"Large-Scale Trade Expos Successfully Executed"}</p>
</div>
<div className="flex flex-col space-y-space-xs p-space-md bg-surface-container-low rounded-xl">
<span className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
{"3,500+"}</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
{"Exhibitors"}</span>
<p className="font-body-sm text-body-sm text-secondary">
{"Manufacturing Brands & Global Tech Providers"}</p>
</div>
<div className="flex flex-col space-y-space-xs p-space-md bg-surface-container-low rounded-xl">
<span className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
{"150k+"}</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
{"Trade Visitors"}</span>
<p className="font-body-sm text-body-sm text-secondary">
{"Procurement Officers, Engineers & Decision Makers"}</p>
</div>
<div className="flex flex-col space-y-space-xs p-space-md bg-surface-container-low rounded-xl col-span-2 md:col-span-1">
<span className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
{"4+"}</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
{"Publications"}</span>
<p className="font-body-sm text-body-sm text-secondary">
{"Specialized Print & Digital Engineering Journals"}</p>
</div>
</div>
</div>
</section>
<section className="w-full bg-background py-space-xl" id="about-section">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
<div className="lg:col-span-6 relative">
<div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container-high aspect-[4/3]">
<img className="w-full h-full object-cover" src="/images/stitch/high-precision-industrial-cnc-5-axis-milling-mac-953ec6981e.jpg" alt="High-precision industrial CNC 5-axis milling machine cutting aircraft grade steel with bright cooling lubricant mist at an international tra" loading="lazy" decoding="async" />
</div>
<div className="hidden sm:block absolute -bottom-6 -right-6 bg-surface-container-lowest p-space-lg rounded-xl shadow-xl max-w-xs">
<div className="flex items-center gap-space-xs text-primary-container pb-2">
<span className="material-symbols-outlined text-[24px]" aria-hidden="true">
{"verified"}</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface font-bold">
{"Authorized Network"}</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
{"Convening tier-1 suppliers, government bodies, and international manufacturing conglomerates since 2007."}</p>
</div>
</div>
<div className="lg:col-span-6 space-y-space-md">
<div className="inline-flex items-center gap-space-xs">
<span className="w-2.5 h-0.5 bg-primary-container">
</span>
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
{"ABOUT MAXX BUSINESS MEDIA"}</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight leading-snug">
{" More Than Exhibitions."}<br />
{" We Create Business Opportunities. "}</h2>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
{" MAXX Business Media Pvt. Ltd. stands as a premier catalyst in India's rapid industrial transformation. We engineer high-stakes exhibition environments where industrial equipment manufacturers, precision toolmakers, automation pioneers, and enterprise buyers forge lucrative bilateral partnerships. "}</p>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
{" From world-class venues like BIEC Bengaluru and Pragati Maidan to targeted editorial digests distributed to verified manufacturing plants nationwide, our integrated ecosystem drives verified commercial ROI. "}</p>
<div className="pt-space-xs">
<Link className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-tertiary transition-colors" data-path="about-us" href="/about-us">
<span>
{"Learn More About Our Mission"}</span>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-low py-space-xl" id="events">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
{"CALENDAR OF INDUSTRIAL SHOWS"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
{"Upcoming Events & Exhibitions"}</h2>
</div>
<div className="flex items-center gap-1 bg-surface-container p-1 rounded-lg self-start">
<button className="px-space-md py-1.5 rounded bg-surface-container-lowest shadow-sm text-on-surface font-label-md text-label-md" data-home-filter="all" aria-pressed="true" type="button">
{"All Events"}</button>
<button className="px-space-md py-1.5 rounded hover:bg-surface-container-lowest/50 text-secondary font-label-md text-label-md transition-colors" data-home-filter="upcoming" aria-pressed="false" type="button">
{"Upcoming 2026-2027"}</button>
<button className="px-space-md py-1.5 rounded hover:bg-surface-container-lowest/50 text-secondary font-label-md text-label-md transition-colors" data-home-filter="archive" aria-pressed="false" type="button">
{"Past Flagships"}</button>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 group" data-home-event="upcoming">
<div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[340px]">
<img className="w-full h-full object-cover" src="/images/stitch/high-precision-heavy-duty-cnc-vertical-machining-af0e56bc25.jpg" alt="High precision heavy-duty CNC vertical machining center operating at DIEMEX industrial trade show" loading="lazy" decoding="async" />
<div className="absolute top-4 left-4 bg-primary-container text-on-primary font-label-caps text-label-caps uppercase px-space-sm py-1 rounded shadow-sm">
{" Flagship Expo "}</div>
</div>
<div className="lg:col-span-5 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="flex flex-wrap gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">
{"Die & Mould"}</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">
{"Precision Tooling"}</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">
{"Manufacturing Tech"}</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">
{"DIEMEX 2027"}</h3>
<p className="font-headline-sm text-headline-sm text-primary font-semibold">
{"International Die & Mould Exhibition"}</p>
<p className="font-body-sm text-body-sm text-secondary">
{" South Asia's premier platform dedicated exclusively to die, mould, press tools, specialized tooling, and advanced subtractive machining technologies. "}</p>
<div className="pt-space-xs space-y-1 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden="true">
{"calendar_month"}</span>
<span>
{"February 18 – 21, 2027"}</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-primary-container" aria-hidden="true">
{"location_on"}</span>
<span>
{"Bangalore International Exhibition Centre (BIEC), Bengaluru"}</span>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<Link className="inline-flex items-center justify-center px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container transition-all" data-path="events" href="/events">
<span>
{"View Event Details"}</span>
</Link>
<Link className="inline-flex items-center justify-center px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" href="/events/diemex-2027">
<span>
{"Visit Official Website"}</span>
<span className="material-symbols-outlined text-[16px] ml-1" aria-hidden="true">
{"launch"}</span>
</Link>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg">
<div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow p-space-lg flex flex-col justify-between space-y-space-md" data-home-event="upcoming">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-primary uppercase">
{"Machine Tools"}</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
{"Pune • 2026"}</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"MTE EXPO 2026"}</h4>
<p className="font-body-sm text-body-sm text-secondary">
{"National Machine Tool & Smart Automation Symposium connecting auto-cluster makers with automation vendors."}</p>
</div>
<div className="pt-space-xs flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">
{"Auto Cluster Centre, Pune"}</span>
<Link className="text-primary font-label-md text-label-md hover:underline flex items-center" data-path="events" href="/events">
<span>
{"Details"}</span>
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"chevron_right"}</span>
</Link>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow p-space-lg flex flex-col justify-between space-y-space-md" data-home-event="upcoming">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-primary uppercase">
{"Automation & Robotics"}</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
{"Chennai • 2026"}</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"ROBOTURBO INDIA"}</h4>
<p className="font-body-sm text-body-sm text-secondary">
{"Industrial Robotics, Collaborative Cobots & Smart Sensors Summit targeting aerospace and automotive OEMs."}</p>
</div>
<div className="pt-space-xs flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">
{"CTC Chennai Trade Centre"}</span>
<Link className="text-primary font-label-md text-label-md hover:underline flex items-center" data-path="events" href="/events">
<span>
{"Details"}</span>
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"chevron_right"}</span>
</Link>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow p-space-lg flex flex-col justify-between space-y-space-md" data-home-event="upcoming">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-primary uppercase">
{"Fastener & Hardware"}</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
{"Delhi NCR • 2026"}</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"FASTTECH EXPO"}</h4>
<p className="font-body-sm text-body-sm text-secondary">
{"Industrial Fasteners, Fixtures, and Precision Assembly Technologies Trade Showcase."}</p>
</div>
<div className="pt-space-xs flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">
{"India Expo Centre, Greater Noida"}</span>
<Link className="text-primary font-label-md text-label-md hover:underline flex items-center" data-path="events" href="/events">
<span>
{"Details"}</span>
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"chevron_right"}</span>
</Link>
</div>
</div>
</div>
<p className="hidden rounded-xl bg-surface-container-lowest p-space-lg text-secondary" data-home-empty="true" role="status">
{"Browse our "}<Link className="text-primary underline" href="/events?status=archive">
{"past editions and archives"}</Link>
{" in the full events calendar."}</p>
</div>
</section>
<section className="w-full bg-surface-container-lowest py-space-xl" id="brands">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
{"PROPRIETARY IP BRANDS"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
{"Our Exhibition Brands & Portfolio"}</h2>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded bg-on-surface text-surface-container-lowest font-label-sm text-label-sm cursor-pointer">
{"Die & Mould"}</span>
<span className="px-3 py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm hover:bg-surface-container-high cursor-pointer transition-colors">
{"Machine Tools"}</span>
<span className="px-3 py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm hover:bg-surface-container-high cursor-pointer transition-colors">
{"Industrial Automation"}</span>
<span className="px-3 py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm hover:bg-surface-container-high cursor-pointer transition-colors">
{"Precision Engineering"}</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg">
<div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
<div className="h-48 relative">
<img className="w-full h-full object-cover" src="/images/stitch/high-tech-industrial-display-showing-intricate-d-4d30065698.jpg" alt="High tech industrial display showing intricate die and mould metal tools" loading="lazy" decoding="async" />
<div className="absolute bottom-2 left-3 bg-inverse-surface/80 backdrop-blur-sm text-surface-container-lowest px-2 py-1 rounded text-label-sm font-label-sm">
{" Established 2010 "}</div>
</div>
<div className="p-space-lg space-y-space-sm flex-1 flex flex-col justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"DIEMEX International"}</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">
{"The benchmark trade exhibition for the tooling, die casting, and mould production ecosystem in India."}</p>
</div>
<div className="pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span>
{"+38% Exhibitor Growth YoY"}</span>
<Link className="text-primary font-label-md text-label-md hover:underline" data-path="our-brands" href="/our-brands">
{"Explore Portfolio"}</Link>
</div>
</div>
</div>
<div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
<div className="h-48 relative">
<img className="w-full h-full object-cover" src="/images/stitch/automated-robotic-arm-performing-precision-spot-74445adac9.jpg" alt="Automated robotic arm performing precision spot welding and laser measurement on automobile body chassis on trade exhibition demonstration b" loading="lazy" decoding="async" />
<div className="absolute bottom-2 left-3 bg-inverse-surface/80 backdrop-blur-sm text-surface-container-lowest px-2 py-1 rounded text-label-sm font-label-sm">
{" Established 2016 "}</div>
</div>
<div className="p-space-lg space-y-space-sm flex-1 flex flex-col justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"TOOL & DIE TECH CONCLAVE"}</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">
{"High-level closed-door symposium bringing aerospace, defense, and EV tooling directors into structured B2B meetings."}</p>
</div>
<div className="pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span>
{"850+ C-Level Attendees"}</span>
<Link className="text-primary font-label-md text-label-md hover:underline" data-path="our-brands" href="/our-brands">
{"Explore Portfolio"}</Link>
</div>
</div>
</div>
<div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
<div className="h-48 relative">
<img className="w-full h-full object-cover" src="/images/stitch/row-of-modern-multi-axis-cnc-lathes-and-milling-e91221ac9a.jpg" alt="Row of modern multi-axis CNC lathes and milling machines on exhibition showroom floor with visitors speaking to engineering consultants" loading="lazy" decoding="async" />
<div className="absolute bottom-2 left-3 bg-inverse-surface/80 backdrop-blur-sm text-surface-container-lowest px-2 py-1 rounded text-label-sm font-label-sm">
{" Established 2019 "}</div>
</div>
<div className="p-space-lg space-y-space-sm flex-1 flex flex-col justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"INDUS-MACHINE ASIA"}</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">
{"Regional machine tool showcase series designed to bridge tier-2 industrial clusters with capital machinery suppliers."}</p>
</div>
<div className="pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span>
{"3 Regional Editions"}</span>
<Link className="text-primary font-label-md text-label-md hover:underline" data-path="our-brands" href="/our-brands">
{"Explore Portfolio"}</Link>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-background py-space-xl" id="services">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
{"CAPABILITIES & EXPERTISE"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
{"Core Services"}</h2>
<p className="font-body-md text-body-md text-secondary mt-2">
{"End-to-end industrial event architecture, attendee acquisition pipelines, and high-impact publishing infrastructure tailored for manufacturing sectors."}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-lg">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]" aria-hidden="true">
{"domain_add"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"Exhibition Organizing"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"Full turnkey trade show production, hall management, stall fabrication, VIP protocol, and infrastructure engineering."}</p>
<ul className="text-body-sm font-body-sm text-secondary space-y-1 pt-2">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Floor plan zoning & CAD layout"}</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Heavy machinery logistics & power"}</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Turnkey venue administration"}</span>
</li>
</ul>
</div>
<Link className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-tertiary pt-space-xs" data-path="services" href="/services">
<span>
{"Inquire Service"}</span>
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]" aria-hidden="true">
{"group_add"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"Marketing & Attendee Acquisition"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"Targeted B2B outreach campaigns, VIP buyer delegations, omnichannel media, and pre-scheduled meeting matrices."}</p>
<ul className="text-body-sm font-body-sm text-secondary space-y-1 pt-2">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Direct plant GM & MD invitations"}</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Industry association tie-ups"}</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Targeted industrial digital push"}</span>
</li>
</ul>
</div>
<Link className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-tertiary pt-space-xs" data-path="services" href="/services">
<span>
{"Inquire Service"}</span>
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]" aria-hidden="true">
{"menu_book"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"Industrial Magazine Publishing"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"High-circulation technical trade journals providing thought leadership, product spotlights, and market forecasts."}</p>
<ul className="text-body-sm font-body-sm text-secondary space-y-1 pt-2">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Pan-India plant distribution"}</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Technical case studies & reviews"}</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Digital interactive flipbooks"}</span>
</li>
</ul>
</div>
<Link className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-tertiary pt-space-xs" data-path="services" href="/services">
<span>
{"Inquire Service"}</span>
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]" aria-hidden="true">
{"hub"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"Trade Fair Directory & Matchmaking"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"Comprehensive supplier indexing, 365-day digital marketplace listings, and automated vendor-buyer matching portals."}</p>
<ul className="text-body-sm font-body-sm text-secondary space-y-1 pt-2">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Verified manufacturing catalog"}</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Automated RFP matchmaking"}</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span>
{"Annual physical directory book"}</span>
</li>
</ul>
</div>
<Link className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-tertiary pt-space-xs" data-path="services" href="/services">
<span>
{"Inquire Service"}</span>
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-low py-space-xl" id="industries">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl">
<div className="text-center max-w-2xl mx-auto">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
{"SECTOR REACH"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
{"Industries We Connect"}</h2>
<p className="font-body-md text-body-md text-secondary mt-2">
{"Delivering specialized commerce avenues across mission-critical heavy engineering and manufacturing disciplines."}</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter-lg">
<div className="relative group rounded-xl overflow-hidden shadow-sm bg-inverse-surface h-60">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-300" src="/images/stitch/automotive-injection-moulding-tool-and-press-too-ce050e6589.jpg" alt="Automotive injection moulding tool and press tooling die steel components" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface via-inverse-surface/40 to-transparent">
</div>
<div className="absolute bottom-0 left-0 right-0 p-space-md">
<h3 className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
{"Die & Mould"}</h3>
<p className="font-body-sm text-body-sm text-surface-variant line-clamp-1">
{"Plastic injection molds, press stamping, die casting tooling."}</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-sm bg-inverse-surface h-60">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-300" src="/images/stitch/heavy-industrial-cnc-horizontal-boring-and-milli-2c7189d8b4.jpg" alt="Heavy industrial CNC horizontal boring and milling center working on large cast iron turbine casing in factory floor" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface via-inverse-surface/40 to-transparent">
</div>
<div className="absolute bottom-0 left-0 right-0 p-space-md">
<h3 className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
{"Machine Tools"}</h3>
<p className="font-body-sm text-body-sm text-surface-variant line-clamp-1">
{"CNC lathes, multi-tasking centers, laser cutting machinery."}</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-sm bg-inverse-surface h-60">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-300" src="/images/stitch/modern-smart-factory-automated-conveyor-assembly-5faf0e7e92.jpg" alt="Modern smart factory automated conveyor assembly line with synchronized orange industrial robots assembling parts" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface via-inverse-surface/40 to-transparent">
</div>
<div className="absolute bottom-0 left-0 right-0 p-space-md">
<h3 className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
{"Industrial Automation"}</h3>
<p className="font-body-sm text-body-sm text-surface-variant line-clamp-1">
{"Robotics, PLC drives, industrial IoT, inspection sensors."}</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-sm bg-inverse-surface h-60">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-300" src="/images/stitch/precision-aerospace-tooling-cutter-micro-machine-1636aad782.jpg" alt="Precision aerospace tooling cutter" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface via-inverse-surface/40 to-transparent">
</div>
<div className="absolute bottom-0 left-0 right-0 p-space-md">
<h3 className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
{"Tooling & Precision Tech"}</h3>
<p className="font-body-sm text-body-sm text-surface-variant line-clamp-1">
{"Carbide cutting tools, toolholders, chucks, workholding."}</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-sm bg-inverse-surface h-60">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-300" src="/images/stitch/sheet-metal-fabrication-facility-with-fiber-lase-0f6eaf51a5.jpg" alt="Sheet metal fabrication facility with fiber laser cutting sparks shooting outward in high speed cutting cycle" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface via-inverse-surface/40 to-transparent">
</div>
<div className="absolute bottom-0 left-0 right-0 p-space-md">
<h3 className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
{"Manufacturing Technology"}</h3>
<p className="font-body-sm text-body-sm text-surface-variant line-clamp-1">
{"Additive manufacturing, 3D printing, advanced metallurgy."}</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-sm bg-inverse-surface h-60">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-300" src="/images/stitch/cleanroom-high-precision-optical-coordinate-meas-9fe8d605e9.jpg" alt="Cleanroom high precision optical coordinate measuring machine CMM probing automotive engine block" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface via-inverse-surface/40 to-transparent">
</div>
<div className="absolute bottom-0 left-0 right-0 p-space-md">
<h3 className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
{"Engineering & Metrology"}</h3>
<p className="font-body-sm text-body-sm text-surface-variant line-clamp-1">
{"Quality testing, vision systems, surface roughness gauges."}</p>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-lowest py-space-xl" id="publications">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
<div className="lg:col-span-5 space-y-space-md">
<div>
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
{"TECHNICAL PRINT & DIGITAL MEDIA"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
{"Authoritative Trade Journals"}</h2>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
{" MAXX Business Media publishes industry-leading periodicals reaching verified procurement managers, plant heads, and tooling engineers across 12,000+ manufacturing facilities throughout India. "}</p>
<div className="grid grid-cols-2 gap-space-md p-space-md bg-surface-container-low rounded-xl">
<div>
<div className="font-headline-md text-headline-md text-primary font-bold">
{"45,000+"}</div>
<div className="font-label-sm text-label-sm text-secondary font-medium">
{"Verified Print Readers"}</div>
</div>
<div>
<div className="font-headline-md text-headline-md text-primary font-bold">
{"80,000+"}</div>
<div className="font-label-sm text-label-sm text-secondary font-medium">
{"Digital Monthly Impressions"}</div>
</div>
</div>
<div className="flex items-center gap-space-md pt-space-xs">
<Link className="inline-flex items-center justify-center px-space-md py-2.5 rounded-lg bg-on-surface text-surface-container-lowest font-label-md text-label-md hover:bg-secondary transition-colors" data-path="publications" href="/publications">
<span>
{"View Publications Archive"}</span>
</Link>
<Link className="font-label-md text-label-md text-primary hover:underline" data-path="contact" href="/contact">
<span>
{"Media Kit & Rates →"}</span>
</Link>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col space-y-space-sm shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-high shadow-md relative">
<img className="w-full h-full object-cover" src="/images/stitch/cover-of-industrial-machinery-tooling-review-mag-d5cbe9b260.jpg" alt="Cover of Industrial Machinery & Tooling Review magazine featuring high tech 5 axis milling tool cutting aircraft turbine wheel" loading="lazy" decoding="async" />
<span className="absolute top-2 right-2 bg-primary-container text-on-primary font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow">
{"Monthly"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"Industrial Machinery & Tooling Review"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"Focusing on heavy machine tools, laser processing, cutting fluids, and factory robotics."}</p>
</div>
<Link className="font-label-sm text-label-sm text-primary font-semibold hover:underline inline-flex items-center" data-path="publications" href="/publications">
<span>
{"Read Digital Edition"}</span>
<span className="material-symbols-outlined text-[14px] ml-1" aria-hidden="true">
{"arrow_outward"}</span>
</Link>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col space-y-space-sm shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-high shadow-md relative">
<img className="w-full h-full object-cover" src="/images/stitch/cover-of-die-mould-world-technical-journal-showi-ebc3194685.jpg" alt="Cover of Die & Mould World technical journal showing complex precision injection mold core and automotive headlamp tooling in polished steel" loading="lazy" decoding="async" />
<span className="absolute top-2 right-2 bg-inverse-surface text-surface-container-lowest font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow">
{"Bi-Monthly"}</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
{"Die & Mould World"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"The definitive voice on hot runner systems, press die steels, and additive tooling solutions."}</p>
</div>
<Link className="font-label-sm text-label-sm text-primary font-semibold hover:underline inline-flex items-center" data-path="publications" href="/publications">
<span>
{"Read Digital Edition"}</span>
<span className="material-symbols-outlined text-[14px] ml-1" aria-hidden="true">
{"arrow_outward"}</span>
</Link>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-background py-space-xl">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
{"THE MAXX ADVANTAGE"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
{"Why Leading Brands Choose MAXX"}</h2>
<p className="font-body-md text-body-md text-secondary mt-2">
{"Uniting precision execution with genuine industry access that translates into confirmed vendor contracts."}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg">
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]" aria-hidden="true">
{"precision_manufacturing"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-1">
{"Industrial Market Expertise"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"Deep structural understanding of supply chains, capital procurement cycles, and technical specifications across diverse manufacturing hubs."}</p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]" aria-hidden="true">
{"handshake"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-1">
{"Focused Business Networks"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"Decades of verified relationships with national trade bodies, plant directors, tooling associations, and trade export councils."}</p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]" aria-hidden="true">
{"architecture"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-1">
{"End-to-End Solutions"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"Flawless management from power and heavy foundation logistics to automated visitor credential badge management."}</p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]" aria-hidden="true">
{"trending_up"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-1">
{"Proven Exhibitor ROI"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"Over 78% of our exhibitors secure multiple confirmed sales leads or enter distribution contracts directly during our show windows."}</p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]" aria-hidden="true">
{"auto_stories"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-1">
{"High-Value Publishing Reach"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"Continuous marketing continuity throughout the year through our trade periodicals even between biennial exhibition cycles."}</p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]" aria-hidden="true">
{"verified_user"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-1">
{"Uncompromising Execution"}</h3>
<p className="font-body-sm text-body-sm text-secondary">
{"Strict adherence to event security, international stall fabrication standards, VIP protocols, and smooth emergency preparedness."}</p>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-lowest py-space-xl" id="media">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
{"ACTION ON THE SHOW FLOOR"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
{"Event Experience & Media Gallery"}</h2>
</div>
<Link className="font-label-md text-label-md text-primary hover:underline inline-flex items-center" data-path="media" href="/media">
<span>
{"View All Galleries & Videos"}</span>
<span className="material-symbols-outlined text-[18px] ml-1" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
<div className="relative group rounded-xl overflow-hidden shadow-sm h-72">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/images/stitch/official-exhibition-grand-opening-ceremony-digni-79b3e7eda5.jpg" alt="Official exhibition grand opening ceremony" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/80 via-transparent to-transparent">
</div>
<div className="absolute bottom-3 left-3 text-surface-container-lowest">
<span className="font-label-caps text-label-caps text-primary-fixed uppercase">
{"Dignitary Inauguration"}</span>
<p className="font-body-sm text-body-sm font-semibold">
{"Grand Ribbon Cutting & VIP Delegation Tour"}</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-sm h-72">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/images/stitch/packed-exhibition-hall-concourse-filled-with-bus-33cefe9cc5.jpg" alt="Packed exhibition hall concourse filled with business professionals" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/80 via-transparent to-transparent">
</div>
<div className="absolute bottom-3 left-3 text-surface-container-lowest">
<span className="font-label-caps text-label-caps text-primary-fixed uppercase">
{"High Footfall"}</span>
<p className="font-body-sm text-body-sm font-semibold">
{"Over 35,000 Verified B2B Decision Makers"}</p>
</div>
</div>
<div className="relative group rounded-xl overflow-hidden shadow-sm h-72">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/images/stitch/technical-conference-room-at-trade-fair-panel-di-794c8d4bb1.jpg" alt="Technical conference room at trade fair" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-linear-to-t/srgb from-inverse-surface/80 via-transparent to-transparent">
</div>
<div className="absolute bottom-3 left-3 text-surface-container-lowest">
<span className="font-label-caps text-label-caps text-primary-fixed uppercase">
{"Knowledge Forum"}</span>
<p className="font-body-sm text-body-sm font-semibold">
{"Technical Die & Tooling Symposium"}</p>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-lg">
<div className="text-center max-w-xl mx-auto">
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
{"ENDORSED BY INDUSTRY"}</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
{"Our Partners & Supporting Associations"}</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-md items-center">
<div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex items-center justify-center text-center h-20">
<span className="font-headline-sm text-headline-sm font-bold text-secondary">
{"TAGMA"}</span>
</div>
<div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex items-center justify-center text-center h-20">
<span className="font-headline-sm text-headline-sm font-bold text-secondary">
{"IMTMA"}</span>
</div>
<div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex items-center justify-center text-center h-20">
<span className="font-headline-sm text-headline-sm font-bold text-secondary">
{"ACMA"}</span>
</div>
<div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex items-center justify-center text-center h-20">
<span className="font-headline-sm text-headline-sm font-bold text-secondary">
{"EEPC"}</span>
</div>
<div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex items-center justify-center text-center h-20">
<span className="font-headline-sm text-headline-sm font-bold text-secondary">
{"AIA"}</span>
</div>
<div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex items-center justify-center text-center h-20">
<span className="font-headline-sm text-headline-sm font-bold text-secondary">
{"CII"}</span>
</div>
</div>
</div>
</section>
<section className="w-full bg-background py-space-xl" id="insights">
<div className="max-w-[1360px] mx-auto px-margin lg:px-margin-lg space-y-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
{"MARKET INTELLIGENCE"}</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
{"News & Technical Insights"}</h2>
</div>
<Link className="font-label-md text-label-md text-primary hover:underline inline-flex items-center" data-path="media" href="/media">
<span>
{"Read All Articles"}</span>
<span className="material-symbols-outlined text-[18px] ml-1" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
<article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div className="h-48">
<img className="w-full h-full object-cover" src="/images/stitch/close-up-shot-of-smart-machine-tool-with-real-ti-fcc8cf90b2.jpg" alt="Close up shot of smart machine tool with real time digital sensor dashboard interface monitoring tooling temperature and vibration" loading="lazy" decoding="async" />
</div>
<div className="p-space-lg space-y-space-sm flex-1 flex flex-col justify-between">
<div className="space-y-space-xs">
<div className="flex items-center justify-between text-label-sm font-label-sm text-secondary">
<span className="text-primary font-semibold">
{"Tech Focus"}</span>
<span>
{"March 2025 • 5 min read"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary transition-colors">
<a href="/contact#inquiry-desk">
{"The Future of Smart Tooling & Precision Die Manufacturing"}</a>
</h3>
<p className="font-body-sm text-body-sm text-secondary">
{" How Industry 4.0 sensor embedding into progressive dies is curbing scrap rates and boosting uptime for Tier 1 auto vendors. "}</p>
</div>
<a className="font-label-md text-label-md text-primary font-semibold hover:underline inline-flex items-center pt-space-xs" href="/contact#inquiry-desk">
<span>
{"Read Article"}</span>
<span className="material-symbols-outlined text-[16px] ml-1" aria-hidden="true">
{"arrow_forward"}</span>
</a>
</div>
</article>
<article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div className="h-48">
<img className="w-full h-full object-cover" src="/images/stitch/modern-indian-manufacturing-plant-with-rows-of-p-72925159c0.jpg" alt="Modern Indian manufacturing plant with rows of precision machining equipment and technicians in hardhats" loading="lazy" decoding="async" />
</div>
<div className="p-space-lg space-y-space-sm flex-1 flex flex-col justify-between">
<div className="space-y-space-xs">
<div className="flex items-center justify-between text-label-sm font-label-sm text-secondary">
<span className="text-primary font-semibold">
{"Market Trends"}</span>
<span>
{"February 2025 • 4 min read"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary transition-colors">
<a href="/contact#inquiry-desk">
{"Key Trends Driving Indian Machine Tool Expo Expansion"}</a>
</h3>
<p className="font-body-sm text-body-sm text-secondary">
{" Domestic capital equipment investments witness an unprecedented surge fueled by localized automotive and electronics supply initiatives. "}</p>
</div>
<a className="font-label-md text-label-md text-primary font-semibold hover:underline inline-flex items-center pt-space-xs" href="/contact#inquiry-desk">
<span>
{"Read Article"}</span>
<span className="material-symbols-outlined text-[16px] ml-1" aria-hidden="true">
{"arrow_forward"}</span>
</a>
</div>
</article>
<article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div className="h-48">
<img className="w-full h-full object-cover" src="/images/stitch/business-professionals-in-formal-attire-shaking-9917c0f357.jpg" alt="Business professionals in formal attire shaking hands on trade exhibition booth" loading="lazy" decoding="async" />
</div>
<div className="p-space-lg space-y-space-sm flex-1 flex flex-col justify-between">
<div className="space-y-space-xs">
<div className="flex items-center justify-between text-label-sm font-label-sm text-secondary">
<span className="text-primary font-semibold">
{"Exhibitor Strategy"}</span>
<span>
{"January 2025 • 6 min read"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary transition-colors">
<a href="/contact#inquiry-desk">
{"Maximizing B2B Trade Show ROI in 2026: The Strategic Playbook"}</a>
</h3>
<p className="font-body-sm text-body-sm text-secondary">
{" Step-by-step guidance on pre-event digital outreach, booth lead tracking, and VIP prospect conversion strategies. "}</p>
</div>
<a className="font-label-md text-label-md text-primary font-semibold hover:underline inline-flex items-center pt-space-xs" href="/contact#inquiry-desk">
<span>
{"Read Article"}</span>
<span className="material-symbols-outlined text-[16px] ml-1" aria-hidden="true">
{"arrow_forward"}</span>
</a>
</div>
</article>
</div>
</div>
</section>
<section className="w-full bg-inverse-surface text-inverse-on-surface py-space-xl relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none">
</div>
<div className="relative z-10 max-w-[1360px] mx-auto px-margin lg:px-margin-lg">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-xl">
<div className="max-w-2xl space-y-space-sm">
<div className="inline-flex items-center gap-space-xs">
<span className="w-2.5 h-0.5 bg-primary-container">
</span>
<span className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-widest">
{"GET STARTED TODAY"}</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-surface-container-lowest font-bold leading-tight">
{" Let's Create Your Next Business Opportunity. "}</h2>
<p className="font-body-lg text-body-lg text-surface-variant leading-relaxed">
{" Whether you are looking to exhibit at an industry-defining trade show, advertise in leading technical journals, or forge strategic partnerships across key manufacturing corridors, MAXX is ready to elevate your business. "}</p>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col shrink-0 gap-space-sm">
<Link className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-tertiary-container shadow-md transition-all" data-path="events" href="/events">
<span>
{"Explore Our Events"}</span>
<span className="material-symbols-outlined text-[18px] ml-2" aria-hidden="true">
{"arrow_forward"}</span>
</Link>
<Link className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-surface-container-lowest/10 text-surface-container-lowest hover:bg-surface-container-lowest/20 font-label-md text-label-md transition-all" data-path="contact" href="/contact">
<span>
{"Partner With MAXX"}</span>
</Link>
<Link className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-transparent text-secondary-fixed-dim hover:text-surface-container-lowest font-label-md text-label-md transition-all" data-path="contact" href="/contact">
<span>
{"Contact Corporate Desk"}</span>
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
