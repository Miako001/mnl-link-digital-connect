import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone, ScanLine } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { QrMotif } from "@/components/site/QrMotif";
import { Reveal } from "@/components/site/Reveal";
import { brand, contact, demos, founders, services, values, why } from "@/lib/site-content";

const title = "M&L Link | Digital Solutions for Growing Businesses";
const description =
  "M&L Link creates practical digital solutions including QR-code experiences, websites and digital tools for small and growing businesses in Nairobi, Kenya.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "M&L Link",
          description,
          address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
          email: contact.email,
          telephone: contact.phones.join(", "),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div id="top" className="overflow-x-hidden">
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Work />
        <Founders />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-background">
      <div className="pointer-events-none absolute -right-10 top-10 hidden w-72 opacity-70 md:block lg:w-96">
        <QrMotif />
      </div>
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <div className="max-w-3xl">
          <img
            src={brand.logoUrl}
            alt="M&L Link logo"
            className="mb-10 h-14 w-14 animate-fade-in rounded-md bg-background object-contain p-1"
          />
          <p
            className="eyebrow animate-fade-in text-deco"
            style={{ animationDelay: "60ms", animationFillMode: "backwards" }}
          >
            Digital Solutions · Nairobi, Kenya
          </p>
          <h1
            className="mt-6 animate-fade-in font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "140ms", animationFillMode: "backwards" }}
          >
            Connect your business to the digital world.
          </h1>
          <p
            className="mt-6 max-w-xl animate-fade-in text-base leading-relaxed text-background/70 sm:text-lg"
            style={{ animationDelay: "260ms", animationFillMode: "backwards" }}
          >
            We create simple digital solutions that help small businesses get discovered, connect with customers, and
            grow.
          </p>
          <div
            className="mt-10 flex animate-fade-in flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "380ms", animationFillMode: "backwards" }}
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-deco px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-background"
            >
              Explore our services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p
            className="mt-8 animate-fade-in text-sm text-background/55"
            style={{ animationDelay: "460ms", animationFillMode: "backwards" }}
          >
            Founded by Michelle Miako &amp; Lyeon Kamau
          </p>

          <div
            className="mt-16 flex animate-fade-in flex-wrap items-center gap-x-5 gap-y-3 border-t border-background/15 pt-8"
            style={{ animationDelay: "560ms", animationFillMode: "backwards" }}
          >
            {["Scan", "Connect", "Grow"].map((step, i) => (
              <div key={step} className="flex items-center gap-5">
                {i > 0 && <span className="h-px w-8 bg-deco/60" />}
                <span className="flex items-center gap-2 eyebrow text-background/80">
                  {i === 0 && <ScanLine className="h-4 w-4 text-deco" />}
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, heading, sub }: { eyebrow?: string; heading: string; sub?: string }) {
  return (
    <Reveal className="max-w-2xl">
      <span className="mb-5 block h-1 w-12 bg-deco" aria-hidden="true" />
      {eyebrow && <p className="eyebrow text-muted-foreground">{eyebrow}</p>}
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {sub && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        heading="Digital tools that make business easier."
        sub="From your first customer scan to your online presence, we build practical digital experiences designed around how your business actually works."
      />
      <div className="mt-16 border-t border-hairline">
        {values.map((v, i) => (
          <Reveal key={v.num} delay={i * 100}>
            <div className="grid gap-4 border-b border-hairline py-10 md:grid-cols-[auto_1fr_1fr] md:items-baseline md:gap-10">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 bg-deco" />
                <span className="font-display text-sm text-muted-foreground">{v.num}</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-navy sm:text-3xl">
                {v.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        eyebrow="Services"
        heading="What we can connect."
        sub="Digital solutions designed for small and growing businesses."
      />
      <ul className="mt-16 border-t border-hairline">
        {services.map((s, i) => (
          <li key={s.num}>
            <Reveal delay={i * 100}>
              <div className="group grid gap-3 border-b border-hairline py-8 md:grid-cols-[4rem_1fr_1.1fr] md:items-baseline md:gap-8">
                <div className="flex items-center gap-3">
                  <span className={`h-2 w-2 shrink-0 ${i % 2 === 0 ? "bg-navy" : "bg-deco"}`} aria-hidden="true" />
                  <span className="font-display text-sm text-muted-foreground">{s.num}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">{s.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        eyebrow="Our work"
        heading="See what we can build."
        sub="Sample projects you can open and explore."
      />
      <ul className="mt-16 border-t border-hairline">
        {demos.map((d) => (
          <li key={d.title}>
            <Reveal>
              <div className="grid gap-3 border-b border-hairline py-8 md:grid-cols-[1fr_1.1fr_auto] md:items-center md:gap-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">{d.title}</h3>
                  <p className="mt-1 eyebrow text-muted-foreground">{d.meta}</p>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">{d.body}</p>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-deco px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-background"
                >
                  View demo <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Founders() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-[28rem] w-[28rem] rounded-full border border-hairline"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead eyebrow="About" heading="Meet the people behind M&L Link." />
        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-16">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 150}>
              <div>
                {/* Replace `photo` in src/lib/site-content.ts to swap portraits. */}
                <img
                  src={f.photo}
                  alt={f.name}
                  loading="lazy"
                  className="h-[120px] w-[120px] rounded-full border border-hairline object-cover"
                />
                <h3 className="mt-6 font-display text-2xl font-bold text-navy">{f.name}</h3>
                <p className="mt-1 eyebrow text-muted-foreground">{f.role}</p>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">{f.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead heading="Small team. Practical solutions." />
      <div className="mt-14 grid gap-10 border-t border-hairline pt-12 md:grid-cols-3 md:gap-12">
        {why.map((w, i) => (
          <Reveal key={w.title} delay={i * 100}>
            <span className="block h-2 w-2 bg-deco" aria-hidden="true" />
            <h3 className="mt-5 font-display text-lg font-bold text-navy">{w.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{w.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy text-background">
      <div className="pointer-events-none absolute -left-16 bottom-0 hidden w-64 opacity-40 md:block">
        <QrMotif />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Ready to get connected?
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-background/70">
          Tell us what you're trying to solve. Let's build something that works for your business.
        </p>
        <a
          href="tel:0746558266"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-deco px-8 py-4 text-sm font-medium text-navy transition-colors hover:bg-background"
        >
          Start a conversation <ArrowRight className="h-4 w-4" />
        </a>
        <dl className="mt-16 grid gap-8 border-t border-background/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <ContactItem icon={<Mail className="h-4 w-4" />} label="Email">
            <a href={`mailto:${contact.email}`} className="hover:text-deco">
              {contact.email}
            </a>
          </ContactItem>
          <ContactItem icon={<Phone className="h-4 w-4" />} label="Phone">
            <div className="flex flex-col gap-1">
              {contact.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-deco">
                  {phone}
                </a>
              ))}
            </div>
          </ContactItem>
          <ContactItem icon={<MapPin className="h-4 w-4" />} label="Location">
            {contact.location}
          </ContactItem>
        </dl>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="flex items-center gap-2 eyebrow text-deco">
        {icon}
        {label}
      </dt>
      <dd className="mt-2 text-sm text-background/80">{children}</dd>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-background/70">
      <div className="mx-auto max-w-6xl border-t border-background/15 px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <img
              src={brand.logoUrl}
              alt=""
              className="h-9 w-9 shrink-0 rounded-md bg-background object-contain p-0.5"
            />
            <div className="min-w-0">
              <p className="font-display text-lg font-bold text-background">{brand.name}</p>
              <p className="mt-1 text-sm">{brand.supporting}</p>
            </div>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm">
            <a href={`mailto:${contact.email}`} className="hover:text-deco">
              Email
            </a>
            <a href={`tel:${contact.phones[0]?.replace(/\s/g, "")}`} className="hover:text-deco">
              Phone
            </a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-background/50">© 2026 {brand.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
