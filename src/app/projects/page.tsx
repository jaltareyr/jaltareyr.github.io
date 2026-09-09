import type { Metadata } from "next";
import { Check } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Projects | Yashodhan Jaltare" };

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-green-600">Selected work</p>
          <h1 className="text-3xl font-extrabold tracking-[-0.03em] text-gray-900 sm:text-4xl">PROJECTS</h1>
        </div>
        <div className="space-y-6">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-lg">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-600">{project.type}</p>
                    <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">{project.title}</h2>
                  </div>
                  <p className="text-sm font-semibold text-gray-500">{project.date}</p>
                </div>
                <p className="mt-4 max-w-4xl leading-7 text-gray-600">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li key={technology} className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700"><Check className="h-3.5 w-3.5 text-green-600" />{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
