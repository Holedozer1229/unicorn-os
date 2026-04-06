import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lightbulb, Calendar, DollarSign, BarChart3, Check, Zap, Crown, ArrowRight, Play, Cpu, Radio, TrendingUp, Star } from "lucide-react"
import UnicornOSLogo from "@/components/ui/UnicornOSLogo"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[rgba(0,200,255,0.12)] bg-[rgba(4,4,15,0.85)] backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/">
            <UnicornOSLogo size={32} />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <Link href="#features" className="hover:text-[#00d4ff] transition-colors">Features</Link>
            <Link href="#stats" className="hover:text-[#00d4ff] transition-colors">Intelligence</Link>
            <Link href="#pricing" className="hover:text-[#00d4ff] transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" className="text-white/70 hover:text-white hover:bg-white/5">
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-[#00d4ff] hover:bg-[#00bde8] text-[#04040f] font-bold rounded-full px-5 shadow-[0_0_20px_rgba(0,212,255,0.4)]">
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden circuit-grid starfield">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/8 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/8 blur-[100px]" />
            <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-[#fbbf24]/5 blur-[80px] -translate-x-1/2" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-[700px] h-[300px] rounded-full border border-[rgba(0,200,255,0.08)]" style={{transform:"rotateX(70deg)",boxShadow:"0 0 80px rgba(0,200,255,0.06) inset"}} />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,200,255,0.25)] bg-[rgba(0,200,255,0.06)] mb-8 text-xs font-mono tracking-widest text-[#00d4ff] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4ff]" />
              </span>
              AI Intelligence Operating System — Live
            </div>
            <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-black tracking-tight md:text-7xl lg:text-8xl leading-none">
              <span className="text-white">The Operating System</span>
              <br />
              <span className="text-gradient">for Modern Creators</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/55 md:text-xl leading-relaxed">
              Generate content ideas, plan your calendar, discover monetization strategies, and track your growth — all powered by AI.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-16">
              <Button asChild size="lg" className="bg-[#00d4ff] hover:bg-[#00bde8] text-[#04040f] font-bold text-base rounded-full px-8 h-12 shadow-[0_0_30px_rgba(0,212,255,0.45)] hover:shadow-[0_0_45px_rgba(0,212,255,0.6)] transition-all">
                <Link href="/auth/sign-up">Start for Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[rgba(0,200,255,0.25)] text-white/80 hover:border-[#00d4ff] hover:text-[#00d4ff] hover:bg-[rgba(0,200,255,0.05)] rounded-full px-8 h-12 transition-all">
                <Link href="#features"><Play className="mr-2 h-4 w-4" /> See How It Works</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { label: "USAGE", value: "0.91", color: "#fbbf24" },
                { label: "ERGOTROPY", value: "18.2", color: "#00d4ff" },
                { label: "AI JOBS RUNNING", value: "42", color: "#a78bfa" },
              ].map(({ label, value, color }) => (
                <div key={label} className="cosmic-card px-5 py-3 rounded-xl flex items-center gap-3" style={{ borderColor: color + "33" }}>
                  <span className="text-2xl font-black font-mono" style={{ color }}>{value}</span>
                  <span className="text-xs font-mono tracking-widest text-white/40 uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKFLOW STATS BAR */}
        <section id="stats" className="border-y border-[rgba(0,200,255,0.1)] bg-[rgba(0,200,255,0.02)] py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { icon: Cpu, label: "AUTOMATED EDITING", desc: "AI handles your post-production workflow" },
                { icon: Radio, label: "AI JOBS RUNNING · 42", desc: "Real-time intelligence processing 24/7" },
                { icon: TrendingUp, label: "CONTENT OPTIMIZATION", desc: "Every piece tuned for maximum reach" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-center justify-center gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,200,255,0.08)] border border-[rgba(0,200,255,0.15)] group-hover:border-[#00d4ff] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all">
                    <Icon className="h-5 w-5 text-[#00d4ff]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-mono font-bold tracking-widest text-[#00d4ff] uppercase">{label}</div>
                    <div className="text-xs text-white/40 mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(0,200,255,0.2)] bg-[rgba(0,200,255,0.05)] mb-4 text-xs font-mono tracking-widest text-[#00d4ff] uppercase">
                <Star className="h-3 w-3" /> Core Modules
              </div>
              <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl text-white">
                Everything You Need to <span className="text-gradient">Grow</span>
              </h2>
              <p className="mx-auto max-w-2xl text-white/50">UnicornOS combines AI-powered tools with intuitive design to help you focus on what matters most — creating.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Lightbulb, title: "Content Engine", desc: "Generate endless content ideas tailored to your niche, audience, and preferred platforms using AI.", color: "#00d4ff", bg: "rgba(0,200,255,0.08)" },
                { icon: Calendar, title: "Smart Planner", desc: "Plan and schedule your content across multiple platforms with an intuitive calendar interface.", color: "#34d399", bg: "rgba(52,211,153,0.08)" },
                { icon: DollarSign, title: "Monetization AI", desc: "Get personalized monetization strategies based on your audience size, niche, and platforms.", color: "#fbbf24", bg: "rgba(251,191,36,0.08)" },
                { icon: BarChart3, title: "Growth Analytics", desc: "Track your content performance, AI usage, and implemented strategies with detailed analytics.", color: "#a78bfa", bg: "rgba(167,139,250,0.08)" },
              ].map(({ icon: Icon, title, desc, color, bg }) => (
                <div key={title} className="cosmic-card rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300" style={{ borderColor: color + "22" }}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110" style={{ background: bg, borderColor: color + "40" }}>
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white">{title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 circuit-grid opacity-40" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(251,191,36,0.25)] bg-[rgba(251,191,36,0.06)] mb-4 text-xs font-mono tracking-widest text-[#fbbf24] uppercase">
                <Crown className="h-3 w-3" /> Simple Pricing
              </div>
              <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl text-white">
                Start Free, Scale <span className="text-gradient">Infinitely</span>
              </h2>
              <p className="mx-auto max-w-2xl text-white/50">No hidden fees. No surprises. Cancel anytime.</p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="cosmic-card rounded-2xl p-7">
                <div className="mb-6"><h3 className="text-lg font-bold text-white">Free</h3><p className="text-sm text-white/40 mt-1">Perfect to get started</p></div>
                <div className="mb-6"><span className="text-4xl font-black text-white">$0</span><span className="text-white/40 ml-1">/month</span></div>
                <ul className="space-y-3 text-sm mb-8">{["10 AI generations/month","25 saved ideas","5 scheduled posts","7-day analytics"].map(f=>(<li key={f} className="flex items-center gap-2 text-white/60"><Check className="h-4 w-4 text-[#34d399] shrink-0" />{f}</li>))}</ul>
                <Button asChild variant="outline" className="w-full border-[rgba(0,200,255,0.2)] text-white/70 hover:border-[#00d4ff] hover:text-[#00d4ff] hover:bg-[rgba(0,200,255,0.05)] rounded-xl transition-all">
                  <Link href="/auth/sign-up">Get Started</Link>
                </Button>
              </div>
              <div className="cosmic-card rounded-2xl p-7 relative" style={{ borderColor: "rgba(0,200,255,0.3)", boxShadow: "0 0 40px rgba(0,200,255,0.12),inset 0 0 40px rgba(0,200,255,0.03)" }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#00d4ff] text-[#04040f] shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                    <Zap className="h-3 w-3" /> POPULAR
                  </span>
                </div>
                <div className="mb-6"><h3 className="text-lg font-bold text-[#00d4ff]">Creator</h3><p className="text-sm text-white/40 mt-1">For growing creators</p></div>
                <div className="mb-6"><span className="text-4xl font-black text-white">$19</span><span className="text-white/40 ml-1">/month</span></div>
                <ul className="space-y-3 text-sm mb-8">{["100 AI generations/month","250 saved ideas","50 scheduled posts","30-day analytics","Monetization AI"].map(f=>(<li key={f} className="flex items-center gap-2 text-white/60"><Check className="h-4 w-4 text-[#00d4ff] shrink-0" />{f}</li>))}</ul>
                <Button asChild className="w-full bg-[#00d4ff] hover:bg-[#00bde8] text-[#04040f] font-bold rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.35)] transition-all">
                  <Link href="/auth/sign-up">Start Creator Plan</Link>
                </Button>
              </div>
              <div className="cosmic-card rounded-2xl p-7" style={{ borderColor: "rgba(251,191,36,0.2)" }}>
                <div className="mb-6"><h3 className="text-lg font-bold text-[#fbbf24] flex items-center gap-2"><Crown className="h-4 w-4" /> Pro</h3><p className="text-sm text-white/40 mt-1">For professional creators</p></div>
                <div className="mb-6"><span className="text-4xl font-black text-white">$49</span><span className="text-white/40 ml-1">/month</span></div>
                <ul className="space-y-3 text-sm mb-8">{["Unlimited AI generations","Unlimited ideas & posts","1-year analytics history","Advanced monetization AI","Priority support"].map(f=>(<li key={f} className="flex items-center gap-2 text-white/60"><Check className="h-4 w-4 text-[#fbbf24] shrink-0" />{f}</li>))}</ul>
                <Button asChild variant="outline" className="w-full border-[rgba(251,191,36,0.3)] text-[#fbbf24] hover:bg-[rgba(251,191,36,0.08)] hover:border-[#fbbf24] rounded-xl transition-all">
                  <Link href="/auth/sign-up">Start Pro Plan</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,200,255,0.04)] to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(0,200,255,0.08)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[rgba(0,200,255,0.06)]" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl text-white">
              Ready to <span className="text-gradient">Level Up</span> Your Content?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-white/50">Join thousands of creators using UnicornOS to generate better content, grow their audience, and monetize their passion.</p>
            <Button asChild size="lg" className="bg-[#00d4ff] hover:bg-[#00bde8] text-[#04040f] font-bold text-base rounded-full px-10 h-14 shadow-[0_0_40px_rgba(0,212,255,0.5)] hover:shadow-[0_0_60px_rgba(0,212,255,0.7)] transition-all">
              <Link href="/auth/sign-up">Start Creating for Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(0,200,255,0.1)] py-8 bg-[rgba(4,4,15,0.8)]">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <UnicornOSLogo size={28} />
          <p className="text-sm text-white/30 font-mono">Built for creators, by creators. © 2025 UnicornOS</p>
          <div className="flex items-center gap-1 text-xs text-white/20 font-mono">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
            SYSTEMS OPERATIONAL
          </div>
        </div>
      </footer>
    </div>
  )
}