import type { ResumeData } from "../types";

interface Props {
  data: ResumeData;
}

export default function Resume({ data }: Props) {
  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="lg:w-72 xl:w-80 bg-[#080c12] border-r border-white/6 lg:min-h-screen lg:sticky lg:top-0 lg:self-start pt-24 pb-10 px-8 flex flex-col gap-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/30 to-amber-600/20 border border-amber-400/20 flex items-center justify-center mx-auto">
          <span className="text-3xl text-amber-300/60 font-serif select-none">
            {data.name.charAt(0)}
          </span>
        </div>

        <div className="text-center">
          <h1 className="font-serif text-2xl text-zinc-100 leading-tight">{data.name}</h1>
          <p className="mt-1 text-amber-300/80 text-sm font-medium tracking-wide">{data.title}</p>
        </div>

        <div className="space-y-3">
          <ContactRow icon="✉" label={data.email} href={`mailto:${data.email}`} />
          <ContactRow icon="☏" label={data.phone} />
          <ContactRow icon="⌖" label={data.location} />
          <ContactRow icon="in" label={data.linkedin} href={`https://${data.linkedin}`} />
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 pt-24 pb-16 px-8 lg:px-12 xl:px-16 max-w-3xl">
        <Section title="Sobre">
          <p className="text-zinc-300 leading-relaxed text-sm">{data.about}</p>
        </Section>

        <Section title="Experiência">
          {data.experiences.map((exp) => (
            <div key={exp.id} className="mb-6 pl-4 border-l border-amber-400/20">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-zinc-100 font-semibold text-sm">{exp.role}</h3>
                  <p className="text-amber-300/70 text-xs mt-0.5">{exp.company}</p>
                </div>
                <div className="text-right text-xs text-zinc-500 shrink-0">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <p className="mt-2 text-zinc-400 text-xs leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </Section>

        <Section title="Formação Acadêmica">
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-4 pl-4 border-l border-amber-400/20">
              <h3 className="text-zinc-100 font-semibold text-sm">{edu.institution}</h3>
              <p className="text-amber-300/70 text-xs mt-0.5">{edu.degree} em {edu.field}</p>
              <p className="text-zinc-500 text-xs mt-0.5">{edu.period}</p>
              {edu.description && (
                <p className="mt-1 text-zinc-400 text-xs leading-relaxed">{edu.description}</p>
              )}
            </div>
          ))}
        </Section>

        <Section title="Habilidades">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.skills.map((sk) => (
              <div key={sk.id} className="bg-white/3 rounded-lg p-3 border border-white/6">
                <h4 className="text-amber-300/80 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  {sk.category}
                </h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{sk.items}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <div className="flex items-center mb-4">
        <h2 className="text-zinc-200 text-xs font-semibold uppercase tracking-widest shrink-0">
          {title}
        </h2>
        <div className="flex-1 h-px bg-white/8 ml-4" />
      </div>
      {children}
    </section>
  );
}

function ContactRow({ icon, label, href }: { icon: string; label: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-2">
      <span className="text-amber-400/50 w-4 text-center shrink-0 mt-0.5">{icon}</span>
      <span className="text-zinc-400 text-xs break-all leading-relaxed">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors block">
        {content}
      </a>
    );
  }
  return content;
}
