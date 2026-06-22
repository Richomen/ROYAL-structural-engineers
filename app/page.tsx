import Image from "next/image"
import type { ElementType } from "react"
import {
  Building2,
  Calculator,
  ClipboardCheck,
  HardHat,
  Target,
  Handshake,
  Wrench,
  Users,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  Linkedin,
  Facebook,
  Instagram,
  FileCheck2,
  Ruler,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Structural Design & Engineering",
    text: "Complete structural design solutions tailored to project requirements, with a focus on efficiency, code compliance, and constructability.",
  },
  {
    icon: Calculator,
    title: "Structural Calculations",
    text: "Accurate and defensible structural calculations prepared for permitting, approvals, and project documentation.",
  },
  {
    icon: HardHat,
    title: "Seismic Anchorage & Equipment Support",
    text: "Design of anchorage and support systems for equipment, including walk-in coolers/freezers and nonstructural components, in accordance with seismic requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Existing Conditions Evaluation",
    text: "Assessment of existing structures to identify structural capacity, deficiencies, and design constraints based on available information and field observations.",
  },
  {
    icon: Wrench,
    title: "Retrofit & Strengthening Design",
    text: "Engineering solutions to repair, reinforce, or modify existing structures to meet current code and performance requirements.",
  },
  {
    icon: Users,
    title: "Construction Administration & Support",
    text: "Responsive support during construction including RFI responses, submittal reviews, and clarification of design intent to assist with proper implementation.",
  },
]

const values = [
  {
    icon: Target,
    title: "Clarity",
    text: "Clear communication of scope, assumptions, and design intent to align teams and foster trust.",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Discipline",
    text: "Rigorous, precise, and code-compliant engineering grounded in consistency and attention to detail.",
  },
  {
    icon: Handshake,
    title: "Accountability",
    text: "Defined responsibility and ownership to support reliable, transparent project delivery.",
  },
  {
    icon: Ruler,
    title: "Constructability",
    text: "Practical, buildable solutions informed by real-world construction methods and constraints.",
  },
]

const process = [
  {
    number: "1",
    title: "Proposal",
    text: "We define the project scope, identify key structural considerations, and outline a clear approach, schedule, and fee to align expectations from the outset.",
  },
  {
    number: "2",
    title: "Feasibility Studies",
    text: "We evaluate existing conditions and design options to determine practical, code-compliant solutions before advancing into detailed design.",
  },
  {
    number: "3",
    title: "Construction Documents",
    text: "We develop complete structural drawings and calculations that are accurate, coordinated, and ready for permitting and construction.",
  },
  {
    number: "4",
    title: "Construction Administration",
    text: "We support the project during construction by responding to RFIs, reviewing submittals, and providing guidance to help ensure the design is properly executed.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#071b33]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04145c]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/ROYAL Vector Blanco.png"
              alt="Royal Structural Engineers"
              width={410}
              height={148}
              className="h-auto w-[240px] object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
            <a href="#home" className="border-b-2 border-[#c8a94a] pb-1">
              Home
            </a>
            <a href="#services" className="transition hover:text-[#c8a94a]">
              Services
            </a>
            <a href="#about" className="transition hover:text-[#c8a94a]">
              About
            </a>
            <a href="#process" className="transition hover:text-[#c8a94a]">
              Process
            </a>
            <a href="#contact" className="transition hover:text-[#c8a94a]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden border border-[#c8a94a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c8a94a] hover:text-[#071b33] md:inline-flex"
          >
            Request a Consultation
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-[#d8d8d8] bg-[#f7f5ef]"
      >
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#071b33_1px,transparent_1px),linear-gradient(to_bottom,#071b33_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 h-1 w-16 bg-[#c8a94a]" />

            <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[1.05] tracking-tight text-[#071b33] md:text-6xl">
              Structural Integrity for Projects That Stand the Test of Time
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#4c5663] md:text-lg">
              At Royal Structural Engineers, we combine deep technical expertise
              with disciplined engineering principles to deliver safe, efficient
              and enduring solutions. From concept to completion, we build
              confidence in every structure.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-[#0057d9] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#003f9f]"
              >
                Our Services
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-[#0057d9] px-6 py-4 text-sm font-semibold text-[#0057d9] transition hover:bg-[#0057d9] hover:text-white"
              >
                Contact Royal
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-[#d8d8d8] bg-white shadow-xl">
            <Image
              src="/hero-building.png"
              alt="Royal Structural Engineers building"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 border-l-4 border-[#c8a94a] bg-white/90 p-5 shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0057d9]">
                Engineering
              </p>
              <p className="mt-1 max-w-md font-serif text-2xl font-bold text-[#071b33]">
                Clarity. Discipline. Accountability. Constructability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#f7f5ef] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Services"
            title="Specialized Structural Engineering Services"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <article
                  key={service.title}
                  className="group border border-[#d8d8d8] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#c8a94a] hover:shadow-xl"
                >
                  <Icon className="mb-6 text-[#0057d9]" size={38} />

                  <h3 className="font-serif text-xl font-bold text-[#071b33]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#596575]">
                    {service.text}
                  </p>

                  <div className="mt-6 flex justify-end text-[#c8a94a]">
                    <ArrowRight
                      size={20}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-[#d8d8d8] bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#c8a94a]">
              About Royal
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-4xl font-bold leading-tight text-[#071b33] md:text-5xl">
              Clear, Reliable and Buildable Structural Engineering.
            </h2>

            <div className="mt-5 h-1 w-16 bg-[#c8a94a]" />

            <p className="mt-6 max-w-xl text-base leading-8 text-[#4c5663]">
              Royal Structural Engineers, Inc is a structural engineering
              consultancy focused on delivering clear, reliable, and buildable
              solutions. We work closely with architects, developers,
              contractors, and private clients to provide thoughtful design,
              responsive service, and technically sound engineering.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon

                return (
                  <div key={value.title}>
                    <Icon className="text-[#0057d9]" size={32} />

                    <h3 className="mt-3 font-serif text-lg font-bold text-[#071b33]">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#596575]">
                      {value.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-[#d8d8d8] bg-[#eef1f5] shadow-xl">
            <Image
              src="/about-structure.png"
              alt="Structural engineering model over technical plans"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

{/* PRINCIPAL */}
<section className="bg-[#f7f5ef] px-6 py-20 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <SectionTitle
      eyebrow="Technical Leadership"
      title="Principal-Led Structural Engineering Consulting"
    />

    <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
    <div className="border border-[#d8d8d8] bg-white p-8 shadow-xl">
  <div className="mx-auto max-w-[320px]">
    <div className="relative aspect-[4/5] overflow-hidden border border-[#d8d8d8] bg-[#f7f5ef] shadow-md">
      <Image
        src="/Ricardo_Business_Small.png"
        alt="Principal Licensed Engineer"
        fill
        className="object-cover object-top"
      />
    </div>

    <div className="mt-6 border-l-4 border-[#c8a94a] pl-5">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0057d9]">
        Principal Licensed Engineer
      </p>

      <h3 className="mt-3 font-serif text-2xl font-bold text-[#071b33]">
        Technical Leadership
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#596575]">
        Principal-led engineering guidance with a focus on clear communication,
        practical solutions, and construction-ready documentation.
      </p>
      <div className="mt-6 border-t border-[#d8d8d8] pt-6">
     <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a94a]">
    Certification
    </p>

    <div className="flex justify-start">
    <Image
      src="/mbe-certification.png"
      alt="MBE Certification"
      width={180}
      height={180}
      className="h-auto w-[140px] object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</div>

      <article className="border border-[#d8d8d8] bg-white p-8 shadow-xl md:p-10">
        <div className="mb-6 h-1 w-16 bg-[#c8a94a]" />

        <div className="space-y-5 text-base leading-8 text-[#4c5663]">
          <p>
            Royal Structural Engineers, Inc. provides structural engineering
            consulting services across a wide range of project types, including
            educational, healthcare, commercial, and specialized equipment
            installations. Led by a Principal Licensed Engineer, the firm
            delivers code-compliant, practical, and buildable design solutions
            for projects throughout the United States. Services include
            structural analysis, design, construction documentation, and
            construction-phase support, with an emphasis on coordination and
            clear communication across all stakeholders.
          </p>

          <p>
            The firm’s work is grounded in disciplined engineering principles
            and spans new construction, tenant improvements, equipment
            anchorage, and the evaluation and retrofit of existing structures.
            Experience includes projects in regulated environments such as
            schools and hospitals, requiring coordination with governing
            agencies and adherence to strict code and compliance standards.
            Through all phases of design, the firm provides technical
            leadership, develops construction-ready documents, and supports
            permitting and construction efforts.
          </p>

          <p>
            The Principal’s technical expertise, combined with hands-on project
            leadership and client-focused service, ensures effective
            communication and collaboration with architects, contractors, and
            owners. A strong emphasis is placed on constructability,
            accountability, and risk management, helping project teams identify
            challenges early and execute solutions efficiently. This approach
            supports consistent delivery of reliable engineering solutions and
            successful project outcomes from initial concept through
            construction completion.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>
      {/* PROCESS */}
      <section
        id="process"
        className="border-y border-[#d8d8d8] bg-white px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Process"
            title="A Clear Method from Proposal to Construction Support"
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article key={step.number} className="relative text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0057d9] text-lg font-bold text-white">
                  {step.number}
                </div>

                <div className="mx-auto mt-6 h-px w-24 bg-[#c8a94a]" />

                <h3 className="mt-6 font-serif text-xl font-bold text-[#071b33]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#596575]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#0057d9] px-6 py-10 lg:px-8"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-5">
            <div className="hidden border border-[#c8a94a] p-4 text-[#c8a94a] md:block">
              <FileCheck2 size={36} />
            </div>

            <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
              Let’s build structures that endure. Let’s build with confidence.
            </h2>
          </div>

          <a
            href="mailto:info@royalstructural.com"
            className="inline-flex items-center justify-center border border-[#c8a94a] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#c8a94a] hover:text-[#071b33]"
          >
            Contact Royal Today
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#04145c] px-6 py-14 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <Image
              src="/ROYAL Vector Blanco.png"
              alt="Royal Structural Engineers"
              width={410}
              height={148}
              className="h-auto w-[260px] object-contain"
            />

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
              Code-compliant, practical, and buildable structural engineering
              solutions.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold">Contact Us</h3>

            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-[#c8a94a]" />
                <span>
                  1371 E Idaho St,
                  <br />
                  West Covina, CA 91790
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-[#c8a94a]" />
                (626) 260-5985
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-[#c8a94a]" />
                info@royalstructural.com
              </li>
              <li className="flex gap-3">
                <Globe size={18} className="shrink-0 text-[#c8a94a]" />
                www.royalstructural.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a href="#home" className="hover:text-[#c8a94a]">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c8a94a]">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#c8a94a]">
                  About
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#c8a94a]">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c8a94a]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold">Follow Us</h3>

            <div className="mt-5 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[#c8a94a] hover:text-[#c8a94a]"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[#c8a94a] hover:text-[#c8a94a]"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[#c8a94a] hover:text-[#c8a94a]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2026 Royal Structural Engineers, Inc. All rights reserved.
        </div>
      </footer>
    </main>
  )
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#c8a94a]">
        {eyebrow}
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-[#071b33] md:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-5 h-1 w-16 bg-[#c8a94a]" />
    </div>
  )
}
