import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { contact, education, skillGroups } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Yashodhan Jaltare | Software, Data & AI Engineer",
  description:
    "Portfolio of Yashodhan Jaltare, a software, data, and AI engineer based in Charlotte, North Carolina.",
};

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-100 to-white"
      id="home"
    >
      <section className="relative h-[calc(100vh-4rem)] min-h-[560px] w-full overflow-hidden">
        <Image
          src="/banner.jpg"
          alt="Charlotte skyline"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 sm:text-sm">
            Hello, I&apos;m
          </p>
          <h1 className="max-w-full text-3xl font-extrabold tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Yashodhan Jaltare
          </h1>
          <div className="mt-5 min-h-10 text-lg font-semibold sm:text-xl md:text-2xl">
            <AnimatedText
              texts={[
                "Software Engineer",
                "AI Forward Deployed Engineer",
                "AI Engineer",
              ]}
              typingSpeed={65}
              deletingSpeed={12}
              delayBetweenTexts={900}
              className="text-center"
            />
          </div>
          <Link
            href="/#about"
            className="mt-10 rounded-full border border-white/60 bg-white/10 px-6 py-2.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
          >
            Explore my work
          </Link>
        </div>
      </section>

      <section className="py-14 sm:py-20" id="about">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
            <div className="flex flex-col lg:flex-row">
              <aside className="bg-gray-50 p-6 sm:p-8 lg:w-1/3">
                <div className="mx-auto mb-8 max-w-[260px] overflow-hidden rounded-full shadow-md ring-4 ring-white">
                  <Image
                    src="/profile.jpeg"
                    alt="Yashodhan Jaltare"
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <h2 className="mb-5 text-lg font-extrabold tracking-tight text-gray-900">
                  TECHNICAL SKILLS
                </h2>
                <div className="space-y-5">
                  {skillGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="mb-2 text-sm font-bold text-gray-800">
                        {group.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </aside>

              <div className="p-6 sm:p-10 lg:w-2/3 lg:p-12">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-600">
                  About me
                </p>
                <h2 className="mb-7 text-3xl font-extrabold tracking-[-0.035em] text-gray-900 sm:text-4xl">
                  I turn complex workflows into reliable software.
                </h2>
                <div className="space-y-5 text-base leading-7 text-gray-600">
                  <p>
                    I&apos;m a software, data, and AI engineer completing my
                    Master&apos;s in Computer Science at the University of North
                    Carolina at Charlotte, with a concentration in Data Science.
                  </p>
                  <p>
                    At{" "}
                    <strong className="font-semibold text-gray-900">
                      TheoremLabs.io
                    </strong>
                    , I build a HR technology platform supporting hiring,
                    timekeeping, payroll, billing, and invoicing workflows tied
                    to nearly $50M in business revenue. I take work from
                    requirements and architecture through development and
                    production.
                  </p>
                  <p>
                    My background also includes serverless product engineering
                    at{" "}
                    <strong className="font-semibold text-gray-900">
                      Discovery Education
                    </strong>{" "}
                    and large-scale data engineering at{" "}
                    <strong className="font-semibold text-gray-900">
                      Bajaj Finserv
                    </strong>
                    , where I built platforms handling more than 80 million
                    records and 200 TB of transactional data.
                  </p>
                  <p>
                    I care about practical outcomes: safer releases, cleaner
                    data, lower infrastructure costs, and products that make
                    difficult operational work feel straightforward.
                  </p>
                </div>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/resume"
                    className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                  >
                    View resume <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-black"
                  >
                    See projects <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20" id="experience">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="Career" title="EXPERIENCE" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ExperienceCard
              initials="TL"
              company="TheoremLabs.io"
              position="Programming Analyst · AI Intern"
              duration="Jan 2026 — Present"
              summary="Owning HR technology, document intelligence, and AI voice workflows from architecture through production."
              logo="/tl-logo.webp"
            />
            <ExperienceCard
              initials="DE"
              company="Discovery Education"
              position="Software Engineering Intern"
              duration="May 2025 — Aug 2025"
              summary="Built full-stack product APIs and serverless AWS workflows, reducing backend infrastructure costs by 25%."
              logo="/de-logo.png"
            />
            <ExperienceCard
              initials="BF"
              company="Bajaj Finserv"
              position="Data Engineer"
              duration="Jul 2022 — Jul 2024"
              summary="Engineered reliable data systems across 80M+ customer records and 200+ TB of transactional data."
              logo="/bfl_logo.png"
            />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20" id="education">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="Academic background" title="EDUCATION" />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.school}
                className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 text-center shadow-md transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={`${item.school} logo`}
                    width={112}
                    height={112}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold leading-snug text-gray-900">
                  {item.school}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.degree}
                </p>
                {item.detail && (
                  <p className="text-sm text-gray-500">{item.detail}</p>
                )}
                <p className="mt-auto pt-4 text-xs font-bold uppercase tracking-[0.12em] text-green-600">
                  {item.period}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white sm:py-28" id="contact">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
            Get in touch
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="mt-7 inline-block text-lg font-semibold text-gray-200 transition-colors hover:text-white sm:text-2xl"
          >
            {contact.email}
          </a>
          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-400">
            <MapPin size={15} /> Charlotte, North Carolina
          </p>
          <div className="mt-8 flex justify-center gap-5">
            <SocialLink href={`mailto:${contact.email}`} label="Email">
              <Mail />
            </SocialLink>
            <SocialLink href={contact.linkedin} label="LinkedIn">
              <Linkedin />
            </SocialLink>
            <SocialLink href={contact.github} label="GitHub">
              <Github />
            </SocialLink>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 text-center">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-green-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-gray-900 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function ExperienceCard({
  initials,
  company,
  position,
  duration,
  summary,
  logo,
}: {
  initials: string;
  company: string;
  position: string;
  duration: string;
  summary: string;
  logo?: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-gray-100">
        {logo ? (
          <Image
            src={logo}
            alt=""
            width={64}
            height={64}
            className="h-full w-full object-contain p-1"
          />
        ) : (
          <span className="text-lg font-extrabold text-gray-700">
            {initials}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{company}</h3>
      <p className="mt-1 text-sm font-semibold text-gray-700">{position}</p>
      <p className="mt-1 text-xs font-medium text-green-600">{duration}</p>
      <p className="mt-5 text-sm leading-6 text-gray-600">{summary}</p>
      <Link
        href="/resume"
        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-gray-900 hover:text-green-600"
      >
        Details <ArrowUpRight size={15} />
      </Link>
    </article>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="rounded-full border border-gray-700 p-3 text-gray-300 transition-colors hover:border-white hover:bg-white hover:text-black"
    >
      {children}
    </a>
  );
}
