import Image from "next/image"
import {
  Building2,
  Calculator,
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  Target,
  Handshake,
  FileText,
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
} from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Structural Calculations",
    text: "Accurate analysis and calculations ensuring safety, stability and long-term performance.",
  },
  {
    icon: Building2,
    title: "Structural Design",
    text: "Functional, efficient and code-compliant designs tailored to each project.",
  },
  {
    icon: FileText,
    title: "Technical Reports",
    text: "Comprehensive reports for assessment, approval, due diligence and project documentation.",
  },
  {
    icon: Wrench,
    title: "Rehabilitation & Strengthening",
    text: "Solutions to restore, upgrade and extend the life of existing structures.",
  },
  {
    icon: Users,
    title: "Technical Consulting",
    text: "Expert guidance at every stage to support sound engineering decisions.",
  },
  {
    icon: HardHat,
    title: "Project Support",
    text: "Coordination, review and technical support for smooth project execution.",
  },
]

const process = [
  {
    number: "1",
    title: "Analysis",
    text: "We study project requirements, site conditions and constraints to understand the challenge.",
  },
  {
    number: "2",
    title: "Proposal",
    text: "We present a clear scope, approach and technical proposal tailored to your needs.",
  },
  {
    number: "3",
    title: "Calculation & Documentation",
    text: "We perform rigorous analysis and prepare accurate, code-compliant documentation.",
  },
  {
    number: "4",
    title: "Ongoing Support",
    text: "We remain available for reviews, clarifications and support throughout the project.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#071b33]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071b33]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/royal-logo.png"
              alt="ROYAL Structural Engineers"
              width={360}
              height={190}
              className="h-14 w-auto object-contain"
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
              At ROYAL Structural Engineers, we combine deep technical
              expertise with disciplined engineering principles to deliver safe,
              efficient and enduring solutions. From concept to completion, we
              build confidence in every structure.
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
                Contact ROYAL
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
<div className="relative min-h-[420px] overflow-hidden border border-[#d8d8d8] bg-white shadow-xl">
  <Image
    src="/hero-building.png"
    alt="ROYAL Structural Engineers building"
    fill
    className="object-cover"
    priority
  />

  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />

  <div className="absolute bottom-6 left-6 border-l-4 border-[#c8a94a] bg-white/90 p-5 shadow-lg">
    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0057d9]">
      Engineering
    </p>
    <p className="mt-1 font-serif text-2xl font-bold text-[#071b33]">
      Discipline. Precision. Trust.
    </p>
  </div>
</div>
      </section>

      {/* FEATURE STRIP */}
      <section className="border-b border-[#d8d8d8] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 md:grid-cols-3 lg:px-8">
          <FeatureItem
            icon={Building2}
            title="Structural Design"
            text="Innovative and code-compliant designs for all types of structures."
          />
          <FeatureItem
            icon={ClipboardCheck}
            title="Technical Reports"
            text="Clear, accurate and reliable reports for informed decisions."
          />
          <FeatureItem
            icon={Wrench}
            title="Reinforcement Solutions"
            text="Efficient detailing and reinforcement solutions for durability and safety."
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#f7f5ef] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Our Services" title="Specialized Engineering Services" />

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
              About ROYAL
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-4xl font-bold leading-tight text-[#071b33] md:text-5xl">
              Engineering Confidence. Built on Discipline and Trust.
            </h2>

            <div className="mt-5 h-1 w-16 bg-[#c8a94a]" />

            <p className="mt-6 max-w-xl text-base leading-8 text-[#4c5663]">
              ROYAL Structural Engineers is a professional structural
              engineering consultancy committed to excellence, integrity and
              long-term value. We work closely with architects, developers,
              contractors and private clients to deliver practical, reliable and
              buildable solutions.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <TrustPoint
                icon={ShieldCheck}
                title="Safety"
                text="Safety in every decision and design."
              />
              <TrustPoint
                icon={Target}
                title="Precision"
                text="Accuracy, detail and technical control."
              />
              <TrustPoint
                icon={Handshake}
                title="Reliability"
                text="Professional service you can count on."
              />
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-[#eef1f5] p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#071b33_1px,transparent_1px),linear-gradient(to_bottom,#071b33_1px,transparent_1px)] bg-[size:38px_38px] opacity-[0.07]" />

            <div className="relative mx-auto mt-10 h-72 max-w-md border border-[#071b33]/20 bg-white shadow-xl">
              <div className="absolute inset-x-8 top-8 h-56 border-x-4 border-[#7c8795]" />
              <div className="absolute inset-x-14 top-14 h-44 border-x-4 border-[#7c8795]" />
              <div className="absolute left-8 right-8 top-20 h-1 bg-[#7c8795]" />
              <div className="absolute left-8 right-8 top-36 h-1 bg-[#7c8795]" />
              <div className="absolute left-8 right-8 top-52 h-1 bg-[#7c8795]" />

              <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,rgba(0,87,217,0.15),transparent_60%)]" />
            </div>

            <div className="relative mt-8 flex items-center justify-between border-t border-[#c8a94a] pt-5 text-sm text-[#4c5663]">
              <span>Structural model</span>
              <span>Technical documentation</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-[#f7f5ef] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Our Process" title="A Clear Method from First Review to Final Support" />

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
              <Building2 size={36} />
            </div>

            <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
              Let’s build structures that endure. Let’s build with confidence.
            </h2>
          </div>

          <a
            href="mailto:info@royalengineers.com"
            className="inline-flex items-center justify-center border border-[#c8a94a] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#c8a94a] hover:text-[#071b33]"
          >
            Contact ROYAL Today
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#071b33] px-6 py-14 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <Image
              src="/royal-logo.png"
              alt="ROYAL Structural Engineers"
              width={190}
              height={90}
              className="h-20 w-auto object-contain"
            />

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
              Structural integrity. Professional excellence. Trusted by clients.
              Built on discipline and trust.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold">Contact Us</h3>

            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-[#c8a94a]" />
                123 Engineering Avenue, Business District
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-[#c8a94a]" />
                +34 000 000 000
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-[#c8a94a]" />
                info@royalengineers.com
              </li>
              <li className="flex gap-3">
                <Globe size={18} className="shrink-0 text-[#c8a94a]" />
                www.royalengineers.com
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
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[#c8a94a] hover:text-[#c8a94a]"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[#c8a94a] hover:text-[#c8a94a]"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2026 ROYAL Structural Engineers. All rights reserved.
        </div>
      </footer>
    </main>
  )
}

function FeatureItem({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType
  title: string
  text: string
}) {
  return (
    <div className="flex gap-5 border-[#d8d8d8] md:border-r md:pr-8 last:border-r-0">
      <Icon className="mt-1 shrink-0 text-[#0057d9]" size={42} />

      <div>
        <h3 className="font-serif text-lg font-bold text-[#071b33]">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-[#596575]">{text}</p>
      </div>
    </div>
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

function TrustPoint({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType
  title: string
  text: string
}) {
  return (
    <div>
      <Icon className="text-[#0057d9]" size={32} />

      <h3 className="mt-3 font-serif text-lg font-bold text-[#071b33]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#596575]">{text}</p>
    </div>
  )
}
