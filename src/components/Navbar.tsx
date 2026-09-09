import type { Tab } from "../types";

interface Props {
  activeTab: Tab;
  setActiveTab: (t: Tab) => void;
  ownerName: string;
}

export default function Navbar({ activeTab, setActiveTab, ownerName }: Props) {
  const tabs: { key: Tab; label: string }[] = [
    { key: "resume", label: "Currículo" },
    { key: "certificates", label: "Certificados" },
    { key: "cronogram", label: "Cronograma"}
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/95 backdrop-blur-md border-b border-white/8">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-serif text-lg text-amber-300/90 tracking-wide">{ownerName}</span>

        <div className="flex items-center gap-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === t.key
                  ? "bg-amber-400/15 text-amber-300"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
