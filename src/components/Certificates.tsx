import { useState } from "react";
import type { Certificate } from "../types";

const PAGE_SIZE = 5;

interface Props {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: Props) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(certificates.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const slice = certificates.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <h1 className="font-serif text-3xl text-zinc-100">Certificados</h1>
          <p className="text-zinc-500 text-sm mt-1">
            {certificates.length} certificado{certificates.length !== 1 ? "s" : ""}
          </p>
        </div>

        {certificates.length === 0 ? (
          <div className="text-center py-20 text-zinc-600 text-sm">Nenhum certificado cadastrado.</div>
        ) : (
          <>
            <div className="space-y-4">
              {slice.map((cert) => <CertCard key={cert.id} cert={cert} />)}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <PageBtn onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={safePage === 1} label="← Anterior" />
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`w-8 h-8 rounded-md text-sm font-medium transition-all duration-150 ${
                      n === safePage ? "bg-amber-400 text-zinc-900" : "text-zinc-500 hover:text-zinc-200 hover:bg-white/8"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <PageBtn onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={safePage === totalPages} label="Próximo →" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function CertCard({ cert }: { cert: Certificate }) {
  return (
    <article className="bg-white/3 rounded-xl border border-white/8 p-6 hover:border-amber-400/20 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-amber-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-zinc-100 font-semibold text-sm leading-snug">{cert.title}</h3>
          <p className="text-amber-300/70 text-xs mt-1">{cert.issuer}</p>
          {cert.description && (
            <p className="text-zinc-500 text-xs mt-2 leading-relaxed">{cert.description}</p>
          )}
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <span className="text-zinc-600 text-xs">{cert.date}</span>
            {cert.credential && (
              <span className="text-zinc-600 text-xs font-mono">ID: {cert.credential}</span>
            )}
            {cert.url && (
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-amber-400/60 hover:text-amber-300 transition-colors text-xs">
                Ver certificado ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function PageBtn({ onClick, disabled, label }: { onClick: () => void; disabled: boolean; label: string }) {
  return (
    <button onClick={onClick} disabled={disabled} className="px-3 py-1.5 rounded-md text-xs text-zinc-400 hover:text-zinc-200 hover:bg-white/8 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
      {label}
    </button>
  );
}
