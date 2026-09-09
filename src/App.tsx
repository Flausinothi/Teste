import { useState, lazy, Suspense } from "react";
import type { Tab } from "./types";
import { useResumeData } from "../src/hooks/useResume";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Certificates from "./components/Certificates";

const Cronogram = lazy(() => import("./components/Cronogram"));

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("resume");
  const { data } = useResumeData();

  return (
    <div className="min-h-screen bg-[#0d1117] text-zinc-100">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} ownerName={data.name} />

      {activeTab === "resume" ? (
        <Resume data={data} />
      ) : activeTab === "certificates" ? (
        <Certificates certificates={data.certificates} />
      ) : (
        <Suspense
          fallback={
            <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-amber-400/30 border-t-amber-400 animate-spin" />
            </div>
          }
        >
          <Cronogram />
        </Suspense>
      )}
    </div>
  );
}
