import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Box,
  Brush,
  Check,
  Layers3,
  Menu,
  Palette,
  PenTool,
  Printer,
  Sparkles,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaisimha — Product & Graphic Designer" },
      { name: "description", content: "Portfolio of Jaisimha, a Product and Graphic Designer creating packaging, labels, branding, and print design." },
      { property: "og:title", content: "Jaisimha — Product & Graphic Designer" },
      { property: "og:description", content: "Creative packaging, labels, branding, and print design by Jaisimha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const navItems = ["Home", "About", "Services", "Portfolio", "Experience", "Contact"];

const services = [
  { icon: Box, title: "Product & Packaging Design", text: "Attractive, practical packaging that communicates the product clearly and professionally." },
  { icon: Layers3, title: "Label Design", text: "Clean, print-ready labels with strong visual hierarchy and consistent branding." },
  { icon: Sparkles, title: "Logo & Branding", text: "Memorable visual identities that help businesses become clear and recognizable." },
  { icon: PenTool, title: "Visiting Card Design", text: "Professional business cards crafted for people, brands, and growing businesses." },
  { icon: Brush, title: "Brochure & Flyer Design", text: "Engaging, informative marketing pieces designed to make every message easy to follow." },
  { icon: Palette, title: "Poster Design", text: "Bold promotional posters that attract attention and communicate with purpose." },
];

const projects = [
  { title: "Product Packaging", category: "Packaging", text: "Complete label, pack, logo, and print artwork presentation.", tone: "bg-coral", shape: "aspect-[4/5]" },
  { title: "Label System", category: "Labels", text: "A clear, flexible visual system for product variants.", tone: "bg-cobalt", shape: "aspect-[4/3]" },
  { title: "Brand Identity", category: "Branding", text: "Logo and practical brand touchpoints for everyday use.", tone: "bg-lime", shape: "aspect-square" },
  { title: "Business Stationery", category: "Print", text: "Visiting card and print-ready business materials.", tone: "bg-ink", shape: "aspect-[4/3]" },
  { title: "Campaign Flyer", category: "Marketing", text: "Promotional layout with confident hierarchy and calls to action.", tone: "bg-cobalt", shape: "aspect-[4/5]" },
  { title: "Promotional Poster", category: "Marketing", text: "High-impact poster composition for commercial communication.", tone: "bg-coral", shape: "aspect-square" },
];

const skills = ["Product Design", "Packaging Design", "Label Design", "Logo Design", "Branding", "Visiting Card Design", "Brochure Design", "Flyer Design", "Poster Design", "Print Design", "Portfolio Prompt Creation"];

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sent, setSent] = useState(false);
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-foreground/15 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto grid h-18 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 md:px-10">
          <a href="#home" className="font-display text-xl font-extrabold">JAI<span className="text-coral">.</span></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase transition-colors hover:text-coral">{item}</a>)}
            <Button asChild className="h-11 rounded-full px-6 shadow-none"><a href="#contact">Contact me <ArrowDownRight /></a></Button>
          </nav>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-foreground/15 bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block border-b border-foreground/10 py-3 font-display text-xl font-bold">{item}</a>)}</nav>}
      </header>

      <main>
        <section id="home" className="relative mx-auto max-w-[1440px] overflow-hidden px-5 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-rise">
              <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase"><span className="h-2 w-2 rounded-full bg-lime" /> Available for creative projects</div>
              <p className="mb-3 font-display text-lg font-bold text-coral md:text-2xl">Product Designer & Graphic Designer</p>
              <h1 className="font-display text-6xl font-extrabold leading-[0.88] md:text-8xl lg:text-[8.5rem]">Jai<br /><span className="text-cobalt">simha.</span></h1>
              <p className="mt-8 max-w-2xl text-xl font-semibold leading-snug md:text-3xl">Creative product and graphic design for packaging, labels, brands, and print.</p>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">I combine hands-on production experience with clear visual thinking to create identities and print-ready designs that work for real businesses.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-13 rounded-full px-7 shadow-none"><a href="#portfolio">View my work <ArrowDownRight /></a></Button>
                <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-foreground bg-transparent px-7 shadow-none hover:bg-foreground hover:text-background"><a href="#contact">Let&apos;s work together <ArrowRight /></a></Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl animate-float">
              <div className="absolute -left-3 top-8 z-10 bg-lime px-4 py-3 text-xs font-extrabold uppercase shadow-[6px_6px_0_var(--ink)]">3+ years<br />professional experience</div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-2 border-foreground bg-secondary p-5 shadow-[14px_14px_0_var(--cobalt)]">
                <div className="grid h-full place-items-center overflow-hidden rounded-[1.3rem] border border-dashed border-foreground/40 bg-card">
                  <div className="text-center"><div className="mx-auto mb-5 grid h-32 w-32 place-items-center rounded-full bg-coral text-5xl font-display font-extrabold text-coral-foreground">J</div><p className="font-display text-2xl font-bold">Portrait placeholder</p><p className="mt-2 text-sm text-muted-foreground">Add Jaisimha&apos;s professional photo</p></div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-2 rounded-full border-2 border-foreground bg-background px-5 py-4 font-display text-sm font-bold md:right-8">Amberpet · Hyderabad</div>
            </div>
          </div>
          <div className="mt-20 border-y border-foreground/20 py-5"><div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold uppercase text-muted-foreground">{["Product Design", "Packaging Design", "Label Design", "Logo & Branding", "Print Design"].map((item) => <span key={item}>✦ {item}</span>)}</div></div>
        </section>

        <section id="about" className="bg-ink text-background">
          <div className="mx-auto grid max-w-[1440px] gap-16 px-5 py-24 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:py-32">
            <SectionLabel number="01" label="About" inverse />
            <div><h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">Practical design.<br /><span className="text-lime">Clear communication.</span><br />Built for the real world.</h2><div className="mt-10 grid gap-8 md:grid-cols-2"><p className="text-lg leading-8 text-background/75">I&apos;m Jaisimha, a Product Designer and Graphic Designer with more than three years of professional experience at VMR Graphics in Amberpet.</p><p className="leading-7 text-background/60">My work covers product packaging, labels, logos, visiting cards, brochures, flyers, posters, and other print materials—balancing creativity with production-ready detail.</p></div><div className="mt-12 inline-flex items-center gap-5 border-t border-background/20 pt-6"><span className="font-display text-4xl font-bold text-coral">10th</span><span className="text-sm text-background/60">Secondary School<br />Education</span></div></div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><SectionLabel number="02" label="Services" /><div><h2 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">Design support from <span className="text-coral">shelf</span> to <span className="text-cobalt">street.</span></h2><p className="mt-5 max-w-xl text-muted-foreground">Focused visual design services for businesses that need to look clear, credible, and memorable.</p></div></div>
          <div className="mt-16 grid border-l border-t border-foreground/20 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => { const Icon = service.icon; return <article key={service.title} className="group min-h-72 border-b border-r border-foreground/20 bg-background p-7 transition-all duration-300 hover:bg-card hover:-translate-y-1"><div className="flex items-start justify-between"><span className="font-display text-sm font-bold text-muted-foreground">0{index + 1}</span><Icon className="h-7 w-7 text-coral transition-transform group-hover:rotate-6 group-hover:scale-110" /></div><h3 className="mt-16 font-display text-2xl font-bold">{service.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{service.text}</p></article>; })}</div>
        </section>

        <section id="portfolio" className="bg-card py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><SectionLabel number="03" label="Selected work" /><div><h2 className="font-display text-5xl font-bold md:text-7xl">Work that speaks<br /><span className="text-cobalt">before words do.</span></h2><p className="mt-5 max-w-lg text-muted-foreground">Portfolio image spaces are ready for Jaisimha&apos;s original design work.</p></div></div>
            <div className="mt-12 flex flex-wrap gap-2">{["All", "Packaging", "Labels", "Branding", "Print", "Marketing"].map((item) => <Button key={item} variant={filter === item ? "default" : "outline"} onClick={() => setFilter(item)} className="rounded-full shadow-none">{item}</Button>)}</div>
            <div className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project, index) => <article key={project.title} className={cn("group", index % 3 === 1 && "lg:mt-16")}><div className={cn("relative overflow-hidden rounded-lg border border-foreground/15", project.shape, project.tone)}><div className="absolute inset-5 grid place-items-center rounded-md border border-dashed border-background/60 bg-background/10 p-6 text-center"><div><Printer className="mx-auto mb-4 h-8 w-8 text-background" /><p className={cn("font-display text-lg font-bold", project.tone === "bg-lime" ? "text-lime-foreground" : "text-background")}>Project image placeholder</p><p className={cn("mt-1 text-xs", project.tone === "bg-lime" ? "text-lime-foreground/70" : "text-background/70")}>Replace with original artwork</p></div></div></div><div className="mt-5 flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase text-coral">{project.category}</p><h3 className="mt-1 font-display text-2xl font-bold">{project.title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{project.text}</p></div><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background"><ArrowDownRight className="h-4 w-4" /></span></div></article>)}</div>
          </div>
        </section>

        <section className="bg-cobalt text-cobalt-foreground">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-32">
            <div className="flex flex-wrap items-end justify-between gap-6"><div><p className="text-xs font-bold uppercase text-lime">Featured case study · Product Packaging</p><h2 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight md:text-7xl">From product idea to a complete shelf-ready identity.</h2></div><span className="font-display text-7xl font-bold text-cobalt-foreground/15">01</span></div>
            <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]"><PlaceholderPanel label="Main packaging mockup" className="min-h-[420px] lg:min-h-[620px]" /><div className="grid gap-5"><PlaceholderPanel label="Label detail" className="min-h-64" /><PlaceholderPanel label="Print artwork" className="min-h-64" /></div></div>
            <div className="mt-14 grid gap-10 border-t border-cobalt-foreground/25 pt-10 md:grid-cols-3"><CaseDetail label="Project overview" text="Product packaging design created for a local business." /><CaseDetail label="My role" text="Product Designer & Graphic Designer" /><CaseDetail label="Design work" text="Product label · Packaging · Logo · Print artwork" /></div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><SectionLabel number="04" label="Experience" /><div className="border-t-2 border-foreground pt-8"><div className="grid gap-8 md:grid-cols-[1fr_auto]"><div><p className="text-xs font-bold uppercase text-coral">VMR Graphics · Amberpet</p><h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Product Designer &<br />Graphic Designer</h2></div><div className="rounded-lg bg-lime p-6 text-lime-foreground"><p className="font-display text-5xl font-bold">3+</p><p className="mt-1 text-xs font-bold uppercase">Years of professional<br />experience</p></div></div><div className="mt-12 grid gap-3 sm:grid-cols-2">{["Product & packaging design", "Product label design", "Logo & identity design", "Poster & flyer design", "Visiting card & brochure design", "Creative print-ready artwork"].map((item) => <div key={item} className="flex items-center gap-3 border-b border-foreground/15 py-4"><Check className="h-4 w-4 text-coral" /><span className="text-sm font-semibold">{item}</span></div>)}</div></div></div>
        </section>

        <section className="border-y border-foreground/15 bg-secondary py-24 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><SectionLabel number="05" label="Skills" /><div className="flex flex-wrap gap-3">{skills.map((skill, index) => <span key={skill} className={cn("rounded-full border border-foreground px-5 py-3 font-display text-lg font-bold", index % 5 === 0 && "bg-coral text-coral-foreground", index % 5 === 2 && "bg-cobalt text-cobalt-foreground", index % 5 === 4 && "bg-lime text-lime-foreground")}>{skill}</span>)}</div></div></div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:py-32"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><SectionLabel number="06" label="Process" /><div><h2 className="font-display text-4xl font-bold md:text-6xl">A clear path from brief<br />to <span className="text-coral">finished artwork.</span></h2><div className="mt-14 grid md:grid-cols-2">{[{n:"01",t:"Understand",d:"Learn the product, audience, brand, and practical requirements."},{n:"02",t:"Explore",d:"Develop concepts, visual directions, layouts, and design ideas."},{n:"03",t:"Design",d:"Create, review, and refine the strongest visual solution."},{n:"04",t:"Deliver",d:"Prepare polished, professional, and print-ready artwork."}].map((step) => <div key={step.n} className="border-l border-t border-foreground/20 p-6 md:min-h-52"><p className="font-display text-sm font-bold text-coral">{step.n}</p><h3 className="mt-8 font-display text-3xl font-bold">{step.t}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{step.d}</p></div>)}</div></div></div></section>

        <section id="contact" className="bg-ink text-background">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:px-10 lg:grid-cols-2 lg:py-32"><div><p className="text-xs font-bold uppercase text-lime">Start a conversation</p><h2 className="mt-5 font-display text-5xl font-bold leading-none md:text-7xl">Have a design<br />project in mind?</h2><p className="mt-6 max-w-lg text-lg leading-8 text-background/65">Let&apos;s create something professional, creative, and memorable together.</p><div className="mt-12 space-y-5 text-sm"><ContactLine label="Phone" value="Add Phone Number" /><ContactLine label="Email" value="Add Email Address" /><ContactLine label="Location" value="Add City / Location" /></div></div><form onSubmit={submitForm} className="border-t border-background/25 pt-8"><div className="grid gap-5 sm:grid-cols-2"><FormField label="Name"><Input required placeholder="Your name" className="h-12 border-background/25 bg-background/5 text-background placeholder:text-background/40" /></FormField><FormField label="Email"><Input required type="email" placeholder="you@example.com" className="h-12 border-background/25 bg-background/5 text-background placeholder:text-background/40" /></FormField></div><FormField label="Project type"><Input required placeholder="Packaging, branding, print..." className="h-12 border-background/25 bg-background/5 text-background placeholder:text-background/40" /></FormField><FormField label="Message"><Textarea required placeholder="Tell me a little about your project" className="min-h-36 border-background/25 bg-background/5 text-background placeholder:text-background/40" /></FormField><Button type="submit" size="lg" className="mt-2 h-13 rounded-full bg-lime px-7 text-lime-foreground shadow-none hover:bg-lime/85">Send inquiry <ArrowRight /></Button>{sent && <p role="status" className="mt-5 flex items-center gap-2 text-sm text-lime"><Check className="h-4 w-4" /> Inquiry captured. Add contact delivery details to receive messages.</p>}</form></div>
        </section>
      </main>

      <footer className="bg-coral text-coral-foreground"><div className="mx-auto max-w-[1440px] px-5 py-10 md:px-10"><div className="flex flex-col justify-between gap-8 md:flex-row"><div><p className="font-display text-3xl font-bold">Jaisimha.</p><p className="mt-2 text-sm text-coral-foreground/75">Product Designer & Graphic Designer</p></div><div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">{["Home","About","Services","Portfolio","Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline">{item}</a>)}</div></div><div className="mt-10 flex flex-col justify-between gap-3 border-t border-coral-foreground/25 pt-5 text-xs text-coral-foreground/65 md:flex-row"><p>© 2026 Jaisimha. All Rights Reserved.</p><p>Phone · Email · Location</p></div></div></footer>
    </div>
  );
}

function SectionLabel({ number, label, inverse = false }: { number: string; label: string; inverse?: boolean }) { return <div className={cn("flex h-fit items-center gap-3 border-t pt-4 text-xs font-bold uppercase", inverse ? "border-background/30 text-background/60" : "border-foreground/30 text-muted-foreground")}><span className={inverse ? "text-lime" : "text-coral"}>{number}</span><span>{label}</span></div>; }
function PlaceholderPanel({ label, className }: { label: string; className?: string }) { return <div className={cn("grid place-items-center rounded-lg border border-dashed border-cobalt-foreground/50 bg-cobalt-foreground/10 p-6 text-center", className)}><div><Printer className="mx-auto mb-4 h-9 w-9" /><p className="font-display text-xl font-bold">{label}</p><p className="mt-1 text-xs text-cobalt-foreground/65">Original project image placeholder</p></div></div>; }
function CaseDetail({ label, text }: { label: string; text: string }) { return <div><p className="text-xs font-bold uppercase text-lime">{label}</p><p className="mt-3 text-base leading-7 text-cobalt-foreground/80">{text}</p></div>; }
function ContactLine({ label, value }: { label: string; value: string }) { return <div className="grid grid-cols-[5rem_1fr] gap-4 border-b border-background/15 pb-4"><span className="text-background/45">{label}</span><span className="font-semibold">[{value}]</span></div>; }
function FormField({ label, children }: { label: string; children: React.ReactNode }) { return <label className="mb-5 block"><span className="mb-2 block text-xs font-bold uppercase text-background/60">{label}</span>{children}</label>; }