import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShoppingCart,
  Terminal,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import profileImg from "@/assets/profile.jpg";
import wristikImg from "@/assets/project-wristik.jpg";
import guessImg from "@/assets/project-guess.jpg";
import pharmImg from "@/assets/pharm.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Soban Waseem — Full Stack Web Developer" },
      {
        name: "description",
        content:
          "Full stack web developer specializing in React, Node.js, JavaScript and Python. I build professional websites and online stores for clients.",
      },
      {
        property: "og:title",
        content: "Muhammad Soban Waseem — Full Stack Web Developer",
      },
      {
        property: "og:description",
        content:
          "React and Node.js developer building fast, professional websites and e-commerce stores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const skills = [
  { name: "Full Stack Web Development", level: "Core focus", value: 92 },
  { name: "JavaScript", level: "Strong proficiency", value: 90 },
  { name: "React", level: "Specialisation", value: 88 },
  { name: "Node.js", level: "Specialisation", value: 84 },
  { name: "Python", level: "Strong proficiency", value: 82 },
];

const education = [
  {
    title: "BBIT — Business Information Technology",
    org: "University of Engineering and Technology (UET), Lahore",
    meta: "In progress · 2nd semester",
  },
  {
    title: "Pharm D",
    org: "Akhtar Saeed Medical College",
    meta: "Graduate",
  },
  {
    title: "AAPC Certificate",
    org: "Medical Billing and Coding",
    meta: "Certified",
  },
];

const experience = [
  { title: "Medical Biller / Coder", org: "PRG Pakistan", meta: "Current" },
  { title: "Audit Intern", org: "ICEE Freezers", meta: "6 months" },
  { title: "Pharmacy Operations", org: "Clinix Pharmacy", meta: "6 months" },
];

const services = [
  {
    icon: Code2,
    index: "01",
    title: "Website Development",
    body: "Custom, professional websites built with React and Node.js — fast, accessible, and tailored to how your business actually works.",
  },
  {
    icon: ShoppingCart,
    index: "02",
    title: "Online Store / E-commerce",
    body: "Functional, modern online stores with clean product experiences, reliable checkout flows, and an admin setup you can manage yourself.",
  },
  {
    icon: Terminal,
    index: "03",
    title: "Automation & Scripting",
    body: "Python tooling and integrations that remove repetitive work — data clean-up, reporting, and connecting the services you already use.",
  },
];

const projects = [
  {
    title: "AlChemist Pharmacy",
    tag: "Pharmacy Website",
    stack: "HTML · CSS · JavaScript",
    image: pharmImg.url,
    body: "A modern and responsive pharmacy website with a clean user interface and online product browsing experience.",
    href: "https://github.com/sobanwaseem80/Al-Chemist-Pharmacy.git",
  },
  {
    title: "Wristik",
    tag: "In progress",
    stack: "Vite · React",
    image: wristikImg,
    body: "A horological e-commerce experience for watch collectors: product catalogue, detail pages, and cart flow with a premium dark storefront.",
    href: null as string | null,
  },
  {
    title: "Guess the Number",
    tag: "Fun / casual project",
    stack: "JavaScript · Live",
    image: guessImg,
    body: "A kid-friendly number-guessing game with bright feedback and simple rules. Built as a playful break from client work — and it is live.",
    href: "https://sobanwaseem80.github.io/Guess-Number/",
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
      <span className="text-gradient-static font-semibold">{number}</span>
      {children}
    </span>
  );
}

function SectionHeader({
  number,
  label,
  title,
  copy,
}: {
  number: string;
  label: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal>
      <SectionLabel number={number}>{label}</SectionLabel>
      <h2 className="mt-6 max-w-2xl text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

function Portfolio() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Message ready to send", {
        description:
          "Thanks for reaching out — I'll reply within one business day.",
      });
    }, 600);
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Toaster />

      {/* ambient gradients */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-glow/20 blur-[130px]" />
        <div className="absolute bottom-0 -left-32 h-[26rem] w-[26rem] rounded-full bg-primary/15 blur-[130px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <a href="#home" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/20 text-sm font-bold text-foreground">
              SW
            </span>
            <span className="truncate text-sm font-semibold">Soban Waseem</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="story-link text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" className="shrink-0 rounded-full px-5">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section
          id="home"
          className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28"
        >
          <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 -z-10" />

          <Reveal className="min-w-0">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-glow" />
              </span>
              Full Stack Web Developer
            </p>

            <h1 className="mt-7 text-5xl leading-[1.02] font-semibold sm:text-6xl lg:text-7xl">
              <span className="block">Muhammad</span>
              <span className="text-gradient block">Soban Waseem</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I build websites and online stores that look sharp and hold up in
              production — React and Node.js on the front, JavaScript and Python
              under the hood.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground/80">
              Available for freelance and contract work with businesses that
              need a site they can trust.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="group rounded-full px-7 shadow-[0_18px_50px_-18px_var(--primary)]"
              >
                <a href="#work" className="inline-flex items-center gap-2">
                  View my work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-surface px-7 hover:bg-secondary"
              >
                <a href="#contact">Get in touch</a>
              </Button>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4">
              {[
                ["React · Node", "Primary stack"],
                ["JS · Python", "Languages"],
                ["BBIT @ UET", "Studying"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="glass-panel card-lift rounded-2xl px-4 py-3.5"
                >
                  <dt className="text-sm font-semibold">{value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <div className="relative mx-auto max-w-sm">
              {/* halo behind portrait */}
              <div
                aria-hidden
                className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_40%,transparent),transparent)] blur-2xl"
              />
              <div
                aria-hidden
                className="spin-slow absolute -inset-4 -z-10 rounded-[2.6rem] border border-primary/25"
              />
              <div className="glass-panel glow-ring relative overflow-hidden rounded-[2rem] p-2">
                <img
                  src={profileImg}
                  alt="Portrait of Muhammad Soban Waseem"
                  width={912}
                  height={1104}
                  className="w-full rounded-[1.6rem] object-cover"
                />
                <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="glass-panel absolute right-5 bottom-5 left-5 flex items-center gap-3 rounded-2xl px-4 py-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/25">
                    <Zap className="h-4 w-4 text-accent-glow" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">
                      Open to new projects
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      Lahore, Pakistan · Remote friendly
                    </p>
                  </div>
                </div>
              </div>

              {/* floating stack badges */}
              <div className="glass-panel float-a absolute -left-6 top-8 hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 sm:flex">
                <Code2 className="h-4 w-4 shrink-0 text-accent-glow" />
                <span className="text-xs font-semibold whitespace-nowrap">
                  React · Node.js
                </span>
              </div>
              <div className="glass-panel float-b absolute -right-4 top-1/2 hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 sm:flex">
                <Terminal className="h-4 w-4 shrink-0 text-accent-glow" />
                <span className="text-xs font-semibold whitespace-nowrap">
                  Python
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-border/70 py-16 lg:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="min-w-0">
              <SectionLabel number="01">About</SectionLabel>
              <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
                A developer with an unusually{" "}
                <span className="text-gradient-static">analytical</span>{" "}
                background
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  I'm a full stack web developer working mainly in React and
                  Node.js, with strong command of JavaScript and Python. I take
                  projects from a blank repository to a live, maintainable site
                  — clean interfaces, sensible data models, and code the next
                  developer can read.
                </p>
                <p>
                  I'm currently pursuing a BBIT (Bachelor of Business
                  Information Technology) at the University of Engineering and
                  Technology, Lahore, which keeps my technical work close to how
                  businesses actually operate.
                </p>
              </div>
              <blockquote className="glass-panel mt-6 rounded-2xl border-l-2 border-l-primary p-5 text-sm leading-relaxed text-muted-foreground">
                Before software, I earned a Pharm D and became an AAPC-certified
                medical biller and coder — a field that runs on precision,
                documentation, and unforgiving accuracy. It shaped how I work,
                but my career direction is firmly web development.
              </blockquote>
            </Reveal>

            <div className="grid min-w-0 content-start gap-5">
              <Reveal delay={100} className="glass-panel card-lift rounded-2xl p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                  <GraduationCap className="h-4 w-4 shrink-0 text-accent-glow" />
                  Education
                </h3>
                <ul className="mt-5 space-y-5">
                  {education.map((item) => (
                    <li key={item.title} className="relative pl-5">
                      <span
                        aria-hidden
                        className="absolute top-1.5 left-0 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]"
                      />
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                      <p className="mt-1 text-xs text-muted-foreground/80">
                        {item.meta}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={180} className="glass-panel card-lift rounded-2xl p-6">
                <h3 className="text-sm font-semibold tracking-wide uppercase">
                  Experience
                </h3>
                <ul className="mt-5 space-y-5">
                  {experience.map((item) => (
                    <li key={item.title} className="relative pl-5">
                      <span
                        aria-hidden
                        className="absolute top-1.5 left-0 h-2 w-2 rounded-full bg-accent-glow shadow-[0_0_12px_var(--accent-glow)]"
                      />
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                      <p className="mt-1 text-xs text-muted-foreground/80">
                        {item.meta}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="scroll-mt-24 border-t border-border/70 py-16 lg:py-24"
        >
          <SectionHeader
            number="02"
            label="Skills"
            title="The stack I build with"
            copy="A focused toolkit, kept sharp on real client work rather than tutorials."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <Reveal
                as="li"
                key={skill.name}
                delay={i * 70}
                className="glass-panel card-lift rounded-2xl p-5"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <p className="truncate text-sm font-semibold">{skill.name}</p>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {skill.level}
                  </span>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="skill-fill h-full rounded-full bg-gradient-to-r from-primary to-accent-glow"
                    style={{ "--w": `${skill.value}%` } as React.CSSProperties}
                  />
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-24 border-t border-border/70 py-16 lg:py-24"
        >
          <SectionHeader
            number="03"
            label="Services"
            title="How I can help your business"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal
                key={service.title}
                delay={i * 90}
                className="group glass-panel card-lift relative overflow-hidden rounded-2xl p-6"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-primary/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                />
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/20 transition-colors duration-300 group-hover:bg-primary/30">
                    <service.icon className="h-5 w-5 text-accent-glow" />
                  </span>
                  <span className="text-gradient-static text-sm font-semibold">
                    {service.index}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-glow"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section
          id="work"
          className="scroll-mt-24 border-t border-border/70 py-16 lg:py-24"
        >
          <SectionHeader
            number="04"
            label="Portfolio"
            title="Selected projects"
            copy="A growing set of work — client builds, product experiments, and the occasional side project for fun."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal
                as="article"
                key={project.title}
                delay={i * 100}
                className="group glass-panel card-lift overflow-hidden rounded-3xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <h3 className="truncate text-xl font-semibold">
                      {project.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                      {project.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-xs tracking-wide text-accent-glow uppercase">
                    {project.stack}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.body}
                  </p>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-glow"
                    >
                      Play it live <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <p className="mt-5 text-sm text-muted-foreground/80">
                      Case study coming soon.
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-border/70 py-16 lg:py-24"
        >
          <SectionHeader
            number="05"
            label="Contact"
            title="Let's build something"
            copy="Tell me about the site or store you have in mind — I usually reply within one business day."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="glass-panel min-w-0 content-start rounded-3xl p-6">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-accent-glow" />
                Lahore, Pakistan · Remote friendly
              </p>
              <ul className="mt-4 space-y-4">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "0302 3160302",
                    href: "tel:+923023160302",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "sobanwaseem80@gmail.com",
                    href: "mailto:sobanwaseem80@gmail.com",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "muhammad-soban-waseem",
                    href: "https://www.linkedin.com/in/muhammad-soban-waseem-00a68133b/",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "sobanwaseem80",
                    href: "https://github.com/sobanwaseem80",
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl px-2 py-2 transition-colors hover:bg-secondary/60"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/20 transition-colors group-hover:bg-primary/30">
                        <item.icon className="h-4 w-4 text-accent-glow" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                          {item.label}
                        </span>
                        <span className="block truncate text-sm font-medium">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="glass-panel min-w-0 rounded-3xl p-6">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs tracking-wide text-muted-foreground uppercase"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="bg-surface-2"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs tracking-wide text-muted-foreground uppercase"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="bg-surface-2"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="subject"
                    className="text-xs tracking-wide text-muted-foreground uppercase"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Website, online store, other…"
                    className="bg-surface-2"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs tracking-wide text-muted-foreground uppercase"
                  >
                    Project details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me what you're building and your timeline."
                    className="bg-surface-2"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
                  className="group rounded-full shadow-[0_18px_50px_-18px_var(--primary)]"
                >
                  <span className="inline-flex items-center gap-2">
                    {sending ? "Sending…" : "Send message"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 text-sm text-muted-foreground sm:flex sm:justify-between">
          <p className="min-w-0 truncate">
            © {new Date().getFullYear()} Muhammad Soban Waseem
          </p>
          <p className="shrink-0">Full Stack Web Developer · Lahore</p>
        </div>
      </footer>
    </div>
  );
}
