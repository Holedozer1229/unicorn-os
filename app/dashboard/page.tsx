"use client";

import { useEffect, useState } from "react";
import { generateShareText } from "@/lib/utils";

export default function UnicornOSDashboard() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [step, setStep] = useState(0);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [streamedText, setStreamedText] = useState("");

  const steps = [
    "Scanning attention graphs...",
    "Mapping emotional hooks...",
    "Simulating audience reaction...",
    "Running virality model v9...",
    "Finalizing holographic prediction..."
  ];

  async function runSimulation() {
    if (!idea.trim()) return;

    setLoading(true);
    setResult(null);
    setStreamedText("");
    setStep(0);
    setAnimatedScore(0);

    // Intelligence pipeline
    for (let i = 0; i < steps.length; i++) {
      setStep(i);
      await new Promise((resolve) => setTimeout(resolve, 680));
    }

    try {
      const response = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        setStreamedText(buffer);
      }

      const finalData = JSON.parse(buffer.split("\n\n").pop() || "{}");
      setResult(finalData);
    } catch (error) {
      console.error("Simulation error:", error);
      setStreamedText("Error processing your idea. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Animate score
  useEffect(() => {
    if (!result?.score) return;

    let current = 0;
    const target = Math.floor(result.score);
    const interval = setInterval(() => {
      current += Math.max(1, Math.floor((target - current) / 7));
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setAnimatedScore(current);
    }, 28);

    return () => clearInterval(interval);
  }, [result]);

  const shareText = result?.score ? generateShareText(result.score) : "";

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Holographic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-purple-600/10 blur-[200px] top-[-300px] left-[-300px]" />
        <div className="absolute w-[700px] h-[700px] bg-cyan-400/10 blur-[180px] bottom-[-250px] right-[-250px]" />
        <div className="absolute w-[500px] h-[500px] bg-violet-500/5 blur-[150px] top-1/3 left-1/3" />
      </div>

      {/* Top Navigation Bar */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🦄</div>
          <div className="text-2xl font-semibold tracking-tighter">Unicorn OS</div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div className="px-4 py-1.5 text-xs rounded-full border border-white/20 text-white/60">
            PRIVATE BETA
          </div>
          <button 
            onClick={() => {/* Open Stripe Portal */}}
            className="px-5 py-2 text-sm border border-white/30 hover:border-white/60 rounded-xl transition-colors"
          >
            Manage Billing
          </button>
        </div>
      </nav>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold tracking-tighter leading-none mb-6">
            See if your idea will{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-violet-300 bg-clip-text text-transparent">
              go viral
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Real-time audience simulation powered by SphinxOS and Holographic QAOA
          </p>
        </div>

        {/* Input Area */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-950/70 border border-white/10 rounded-3xl p-10 backdrop-blur-2xl shadow-2xl">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Describe your next viral idea in detail..."
              className="w-full h-40 bg-transparent resize-none outline-none text-lg placeholder:text-white/50 leading-relaxed"
              disabled={loading}
            />

            <button
              onClick={runSimulation}
              disabled={loading || !idea.trim()}
              className="mt-8 w-full py-4 rounded-2xl font-semibold text-lg tracking-wide
                bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-400 
                hover:brightness-110 active:scale-[0.985] transition-all duration-200
                disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Running Holographic Simulation..." : "⚡ Run Viral Simulation"}
            </button>

            {loading && (
              <div className="mt-8 text-cyan-400 text-sm font-mono tracking-widest">
                ▶ {steps[step]}
              </div>
            )}
          </div>
        </div>

        {/* Results Area */}
        {(streamedText || result) && (
          <div className="mt-16 max-w-4xl mx-auto space-y-10">
            {/* Live Stream */}
            {streamedText && (
              <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-10 text-white/80 text-[15px] leading-relaxed backdrop-blur-xl">
                {streamedText}
              </div>
            )}

            {/* Score Card */}
            {result && (
              <div className="bg-gradient-to-br from-zinc-950 to-black border border-white/10 rounded-3xl p-16 text-center backdrop-blur-2xl">
                <div className="uppercase tracking-[4px] text-xs text-white/50 mb-3">VIRALITY PREDICTION</div>
                <div className="text-[140px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-300 leading-none">
                  {animatedScore}
                </div>
                <div className="text-3xl text-white/40 -mt-4">/ 100</div>

                {animatedScore >= 85 && (
                  <div className="mt-8 text-2xl text-green-400 font-medium animate-pulse">
                    🔥 HIGH VIRAL POTENTIAL DETECTED
                  </div>
                )}
                {animatedScore <= 40 && (
                  <div className="mt-8 text-xl text-red-400">Low engagement risk detected</div>
                )}
              </div>
            )}

            {/* Insights */}
            {result && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-950/70 border border-white/10 rounded-3xl p-10">
                  <div className="text-purple-400 font-semibold mb-4 text-lg">Holographic Insight</div>
                  <p className="text-white/80 leading-relaxed">{result.insight || "Structural coherence analyzed via holographic regularization."}</p>
                </div>

                <div className="bg-zinc-950/70 border border-white/10 rounded-3xl p-10">
                  <div className="text-cyan-400 font-semibold mb-4 text-lg">Recommended Viral Upgrades</div>
                  <ul className="space-y-4 text-white/80 text-[15px]">
                    {result.improvements?.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-cyan-400 mt-1">•</span> {item}
                      </li>
                    )) || <li>Advanced upgrades available in Creator and Pro tiers.</li>}
                  </ul>
                </div>
              </div>
            )}

            {/* Share Section */}
            {result && (
              <div className="text-center pt-8">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(shareText);
                    alert("Share text copied to clipboard");
                  }}
                  className="px-12 py-4 bg-white text-black rounded-2xl font-semibold text-lg hover:bg-white/90 transition flex items-center gap-3 mx-auto"
                >
                  🚀 Share Result
                </button>
                <p className="text-xs text-white/40 mt-4 tracking-wide">
                  Sharing this result unlocks deeper prediction models
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-white/30 pb-16">
        Unicorn OS • Attention Intelligence System • Powered by SphinxOS + Holographic QAOA • Private Beta v0.1
      </div>
    </div>
  );
}
