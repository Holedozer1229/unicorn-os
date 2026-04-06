"use client"

import React, { useId } from "react"

interface UnicornOSLogoProps {
  size?: number
  className?: string
  iconOnly?: boolean
}

export default function UnicornOSLogo({ size = 48, className = "", iconOnly = false }: UnicornOSLogoProps) {
  const u = useId().replace(/:/g, "_")
  const bg   = "bg_"   + u
  const hg   = "hg_"   + u
  const mg   = "mg_"   + u
  const spec = "sp_"   + u
  const halo = "hl_"   + u
  const rimG = "rg_"   + u
  const gf   = "gf_"   + u
  const hf   = "hf_"   + u
  const ef   = "ef_"   + u
  const ts   = Math.round(size * 0.52)
  const ss   = Math.max(7, Math.round(size * 0.148))

  const svgEl = (
    <svg
      width={size}
      height={Math.round(size * 1.18)}
      viewBox="0 0 100 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="unicorn-float"
      style={{ overflow: "visible" }}
    >
      <defs>

        {/* Body: top-left cyan light → bottom-right deep violet */}
        <linearGradient id={bg} x1="15%" y1="5%" x2="90%" y2="100%">
          <stop offset="0%"   stopColor="#a5f3fc" />
          <stop offset="28%"  stopColor="#818cf8" />
          <stop offset="65%"  stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>

        {/* Horn: gold tip → cyan → indigo base */}
        <linearGradient id={hg} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#fde68a" />
          <stop offset="40%"  stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>

        {/* Mane base gradient */}
        <linearGradient id={mg} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>

        {/* Specular highlight: white radial on forehead */}
        <radialGradient id={spec} cx="38%" cy="28%" r="38%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Background halo */}
        <radialGradient id={halo} cx="52%" cy="58%" r="50%">
          <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.22" />
          <stop offset="55%"  stopColor="#00d4ff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Rim light gradient: warm gold along back edge */}
        <linearGradient id={rimG} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#fbbf24" stopOpacity="0" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
        </linearGradient>

        {/* Body soft glow */}
        <filter id={gf} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Horn intense glow */}
        <filter id={hf} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b2" />
          <feMerge><feMergeNode in="b1" /><feMergeNode in="b2" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Eye glow */}
        <filter id={ef} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

      </defs>
      {/* ── HALO GLOW ── */}
      <ellipse className="halo-breathe" cx="52" cy="68" rx="54" ry="50" fill={"url(#"+halo+")"}  />

      {/* ── 3-D SHADOW / EXTRUDE LAYER ── */}
      <path
        d="M 78 96 Q 86 86 86 70 Q 84 52 76 39 Q 68 26 55 23 Q 45 22 38 32 Q 30 43 26 57 Q 22 68 26 79 Q 30 88 40 90 Q 56 96 72 94 Z"
        fill="#1e1b4b" opacity="0.7" transform="translate(4,4)"
      />

      {/* ── MAIN HEAD BODY ── */}
      <path
        d="M 78 96 Q 86 86 86 70 Q 84 52 76 39 Q 68 26 55 23 Q 45 22 38 32 Q 30 43 26 57 Q 22 68 26 79 Q 30 88 40 90 Q 56 96 72 94 Z"
        fill={"url(#"+bg+")"} filter={"url(#"+gf+")"}
      />

      {/* ── RIM LIGHT (back edge warm glow) ── */}
      <path
        d="M 78 96 Q 86 86 86 70 Q 84 52 76 39 Q 68 26 55 23"
        stroke={"url(#"+rimG+")"} strokeWidth="2.5" fill="none" opacity="0.6"
      />

      {/* ── CRYSTAL FACETS (3-D depth planes) ── */}
      <polygon points="55,23 38,32 54,60" fill="rgba(165,243,252,0.16)" />
      <polygon points="55,23 76,39 54,60" fill="rgba(99,102,241,0.13)" />
      <polygon points="38,32 26,57 54,60" fill="rgba(139,92,246,0.11)" />
      <polygon points="26,79 40,90 54,60" fill="rgba(196,181,253,0.09)" />
      <polygon points="76,39 86,70 54,60" fill="rgba(167,139,250,0.13)" />
      <polygon points="26,57 26,79 54,60" fill="rgba(109,40,217,0.10)" />

      {/* ── SPECULAR HIGHLIGHT (top-left lit) ── */}
      <path
        d="M 55 23 Q 45 22 38 32 Q 30 43 34 54 Q 40 60 54 60 Q 67 55 76 39 Q 68 26 55 23 Z"
        fill={"url(#"+spec+")"}
      />
      {/* ── EAR ── */}
      <path d="M 66 28 L 73 10 L 81 30" fill="#818cf8" stroke="rgba(165,243,252,0.45)" strokeWidth="1" />
      <path d="M 68 27 L 73 14 L 79 29" fill="#f0abfc" opacity="0.75" />
      <path d="M 66 28 L 81 30" stroke="rgba(165,243,252,0.3)" strokeWidth="0.7" fill="none" />

      {/* ── MANE strands — 5 coloured bezier curves ── */}
      {/* Strand 1 — cyan, closest */}
      <path d="M 82 32 Q 98 36 102 52 Q 105 68 97 82 Q 91 92 82 97"
        stroke="#00d4ff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.85" />
      {/* Strand 2 — purple */}
      <path d="M 84 24 Q 103 26 108 46 Q 112 62 103 78 Q 96 89 84 95"
        stroke="#c084fc" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.75" />
      {/* Strand 3 — hot pink */}
      <path d="M 80 40 Q 94 44 98 60 Q 100 74 91 84 Q 86 90 79 95"
        stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.65" />
      {/* Strand 4 — gold */}
      <path d="M 86 18 Q 106 18 112 38 Q 116 55 107 72 Q 101 82 90 88"
        stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.55" />
      {/* Strand 5 — teal accent */}
      <path d="M 78 48 Q 89 52 92 65 Q 93 76 85 85 Q 81 89 77 92"
        stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* ── HORN ── */}
      {/* Horn body */}
      <path d="M 43 32 L 22 -2 L 50 29 Z"
        fill={"url(#"+hg+")"} filter={"url(#"+hf+")"} className="horn-glow"
      />
      {/* Horn twist lines */}
      <line x1="42" y1="31" x2="32" y2="14" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
      <line x1="36" y1="21" x2="27" y2="7"  stroke="rgba(255,255,255,0.38)" strokeWidth="0.6" />
      <line x1="30" y1="11" x2="24" y2="1"  stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />
      {/* Horn tip star burst */}
      <circle cx="22" cy="-2" r="3.5" fill="#fde68a" filter={"url(#"+hf+")"} opacity="0.9" />
      <circle cx="22" cy="-2" r="1.5" fill="white" opacity="0.95" />
      {/* ── EYE ── */}
      {/* Outer dark */}
      <ellipse cx="64" cy="56" rx="9" ry="10" fill="rgba(4,4,20,0.92)" filter={"url(#"+ef+")"} />
      {/* Iris deep purple */}
      <ellipse cx="64" cy="57" rx="6.5" ry="7.5" fill="#4c1d95" />
      {/* Iris inner glow */}
      <ellipse cx="64" cy="57" rx="4.5" ry="5.5" fill="#7c3aed" />
      {/* Pupil */}
      <ellipse cx="64" cy="58" rx="2.5" ry="3" fill="#0a0a1f" />
      {/* Catchlight primary */}
      <circle cx="67" cy="53" r="2.2" fill="white" opacity="0.95" />
      {/* Catchlight secondary */}
      <circle cx="62" cy="62" r="1" fill="rgba(0,212,255,0.7)" />
      {/* Eye rim glow */}
      <ellipse cx="64" cy="57" rx="10" ry="11" fill="none" stroke="rgba(0,200,255,0.18)" strokeWidth="1.2" />

      {/* ── NOSTRIL ── */}
      <ellipse cx="29" cy="74" rx="2.8" ry="1.6" fill="rgba(0,0,0,0.28)" transform="rotate(-12,29,74)" />

      {/* ── SPARKLE STARS ── */}
      {/* Gold star top-right */}
      <g className="sp-a" style={{ transformOrigin: "90px 14px" }}>
        <path d="M90 10 L91.2 13 L94.5 13 L92 15.2 L93 18.5 L90 16.5 L87 18.5 L88 15.2 L85.5 13 L88.8 13Z" fill="#fbbf24" />
      </g>
      {/* Cyan star left */}
      <g className="sp-b" style={{ transformOrigin: "13px 78px" }}>
        <path d="M13 73 L14 76 L17 76 L15 77.8 L16 81 L13 79.2 L10 81 L11 77.8 L9 76 L12 76Z" fill="#00d4ff" />
      </g>
      {/* Purple star bottom-right */}
      <g className="sp-c" style={{ transformOrigin: "88px 100px" }}>
        <path d="M88 96 L89 98.5 L91.5 98.5 L89.8 100 L90.5 102.5 L88 101 L85.5 102.5 L86.2 100 L84.5 98.5 L87 98.5Z" fill="#c084fc" />
      </g>
      {/* Small teal dot top-left */}
      <circle cx="16" cy="30" r="1.8" fill="#34d399" className="sp-a" style={{ transformOrigin: "16px 30px" }} opacity="0.8" />
      {/* Small gold dot mid-left */}
      <circle cx="10" cy="55" r="1.2" fill="#fbbf24" className="sp-c" style={{ transformOrigin: "10px 55px" }} opacity="0.6" />

    </svg>
  )

  if (iconOnly) {
    return <div className={className}>{svgEl}</div>
  }

  return (
    <div className={"flex items-center gap-3 " + className} style={{ lineHeight: 1 }}>
      {svgEl}
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontSize: ts, fontWeight: 900, letterSpacing: "-0.03em", background: "linear-gradient(135deg,#a5f3fc,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          UnicornOS
        </div>
        <div style={{ fontSize: ss, fontWeight: 500, letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", fontFamily: "monospace", marginTop: 2, textTransform: "uppercase" }}>
          THE INTELLIGENCE OPERATING SYSTEM
        </div>
      </div>
    </div>
  )
}