import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PrintResumeButton } from "@/components/PrintResumeButton";
import { contact, education, experience, projects, skillGroups } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Resume | Yashodhan Jaltare" };

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 sm:py-20 print:bg-white print:py-0">
      <div className="container mx-auto mb-8 flex max-w-[920px] items-center justify-between px-4 print:hidden">
        <h1 className="text-3xl font-extrabold tracking-[-0.03em] text-gray-900 sm:text-4xl">RESUME</h1>
        <PrintResumeButton />
      </div>

      <article className="resume-shell mx-4 max-w-[920px] rounded-xl border border-gray-200 bg-white px-6 py-8 shadow-lg sm:mx-auto sm:px-12 sm:py-12">
        <header className="border-b-2 border-black pb-6">
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-gray-900 sm:text-5xl">Yashodhan Jaltare</h2>
          <p className="mt-2 text-base font-semibold text-green-600 sm:text-lg">Software, Data &amp; AI Engineer</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-gray-600 sm:text-sm">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">LinkedIn <ExternalLink size={11} /></a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">GitHub <ExternalLink size={11} /></a>
          </div>
        </header>

        <ResumeSection title="Experience">
          <div className="space-y-7">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="text-lg font-bold tracking-tight text-gray-900">{job.company}</h4>
                  <p className="shrink-0 text-xs font-semibold text-gray-500">{job.location}</p>
                </div>
                <div className="mt-3 space-y-5">
                  {job.roles.map((role) => (
                    <div key={role.title}>
                      <div className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                        <p className="font-bold text-gray-800">{role.title}</p>
                        <p className="shrink-0 text-xs font-semibold text-gray-500">{role.period}</p>
                      </div>
                      <ul className="mt-2 space-y-1.5 text-sm leading-6 text-gray-600 print:text-[9pt] print:leading-[1.4]">
                        {role.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><span aria-hidden="true">&bull;</span><span>{highlight}</span></li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Skills">
          <div className="grid gap-x-7 gap-y-3 sm:grid-cols-2">
            {skillGroups.map((group) => <p key={group.title} className="text-sm leading-6 text-gray-600"><strong className="text-gray-900">{group.title}:</strong> {group.items.join(", ")}</p>)}
          </div>
        </ResumeSection>

        <ResumeSection title="Projects">
          <div className="space-y-5">
            {projects.map((project) => (
              <div key={project.title}>
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="text-lg font-bold tracking-tight text-gray-900">{project.title}</h4>
                  <p className="shrink-0 text-xs font-semibold text-gray-500">{project.date}</p>
                </div>
                <p className="mt-1 text-sm leading-6 text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.school} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <div>
                  <h4 className="font-bold tracking-tight text-gray-900">{item.school}</h4>
                  <p className="text-sm text-gray-600">{item.degree}{item.detail ? ` - ${item.detail}` : ""}</p>
                </div>
                <p className="shrink-0 text-xs font-semibold text-gray-500">{item.period.slice(-4)}</p>
              </div>
            ))}
          </div>
        </ResumeSection>
      </article>
    </div>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="resume-section border-b border-gray-200 py-6 last:border-b-0 last:pb-0">
      <h3 className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-green-600">{title}</h3>
      {children}
    </section>
  );
}
