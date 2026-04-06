"use client"

import React, { useId } from "react"

interface UnicornOSLogoProps {
  size?: number
  className?: string
  iconOnly?: boolean
}

export default function UnicornOSLogo({ size = 48, className = "", iconOnly = false }: UnicornOSLogoProps) {
  const u = useId().replace(/:/g, "_")
  const bg   = "bg_" + u, hg   = "hg_" + u, spec = "sp_" + u
  const halo = "hl_" + u, rimG = "rg_" + u, mg   = "mg_" + u
  const gf   = "gf_" + u, hf   = "hf_" + u, ef   = "ef_" + u
  const ts   = Math.round(size * 0.52)
  const ss   = Math.max(7, Math.round(size * 0.148))

  const svgEl = (
    <svg width={size} height={Math.round(size * 1.22)} viewBox="0 0 105 128"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      className="unicorn-float" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={bg} x1="10%" y1="0%" x2="95%" y2="100%">
          <stop offset="0%"   stopColor="#b2f5ea" />
          <stop offset="25%"  stopColor="#67e8f9" />
          <stop offset="60%"  stopColor="#818cf8" />
          <stop offset="100%" stopColor="#3730a3" />
        </linearGradient>
        <linearGradient id={hg} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#fde68a" />
          <stop offset="35%"  stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id={mg} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
        <linearGradient id={rimG} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#fbbf24" stopOpacity="0" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id={spec} cx="30%" cy="22%" r="40%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={halo} cx="52%" cy="55%" r="50%">
          <stop offset="0%"   stopColor="#4c1d95" stopOpacity="0.25" />
          <stop offset="50%"  stopColor="#00d4ff" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <filter id={gf} x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id={hf} x="-90%" y="-90%" width="280%" height="280%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b2" />
          <feMerge><feMergeNode in="b1" /><feMergeNode in="b2" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id={ef} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* ── BACKGROUND HALO ── */}
      <ellipse cx="52" cy="68" rx="54" ry="52" fill={"url(#"+halo+")"} className="halo-breathe" />

      {/* ── DEPTH SHADOW (3-D extrude) ── */}
      <path d="M52,18 L58,14 L70,10 L82,20 L86,42 L82,68 L72,85 L55,92 L40,92 L24,86 L16,76 L18,64 L28,54 L36,42 L44,32 L52,22 Z"
        fill="#0c0a1e" opacity="0.75" transform="translate(4,5)" />

      {/* ── CRYSTAL PLANES — angular geometric horse head ── */}
      {/* P1 — Crown (top of skull, maximum brightness — full overhead light) */}
      <polygon points="58,14 70,10 82,20 64,26 52,18" fill="#b2f5ea" opacity="0.95" />

      {/* P2 — Forehead / brow (bright, facing viewer + light) */}
      <polygon points="52,18 64,26 54,38 44,32" fill="#67e8f9" opacity="0.88" />

      {/* P3 — Upper cheek / back skull (catches some light) */}
      <polygon points="64,26 82,20 86,42 70,46 54,38" fill="#818cf8" opacity="0.85" />

      {/* P4 — Face center (medium) */}
      <polygon points="44,32 54,38 48,55 36,42" fill="#7c3aed" opacity="0.82" />

      {/* P5 — Rear lower cheek (medium-dark, angled away) */}
      <polygon points="70,46 86,42 82,68 68,60 54,38" fill="#5b21b6" opacity="0.90" />

      {/* P6 — Lower face / jaw back (dark) */}
      <polygon points="68,60 82,68 72,85 58,70" fill="#4c1d95" opacity="0.95" />

      {/* P7 — Face lower center (medium-dark) */}
      <polygon points="48,55 54,38 68,60 58,70 50,72" fill="#6d28d9" opacity="0.85" />

      {/* P8 — Muzzle / front face (medium, facing viewer) */}
      <polygon points="36,42 28,54 18,64 16,76 24,86 40,92 55,92 50,72 58,70 48,55" fill="#7c3aed" opacity="0.78" />

      {/* P9 — Chin underside (darkest, facing down) */}
      <polygon points="55,92 72,85 58,70 50,72" fill="#312e81" opacity="0.95" />

      {/* ── SPECULAR HIGHLIGHT (top-left light) ── */}
      <path d="M52,18 L58,14 L70,10 L82,20 L64,26 L54,38 L44,32 Z" fill={"url(#"+spec+")"} />

      {/* ── RIM LIGHT (warm gold along skull back edge) ── */}
      <path d="M58,14 L70,10 L82,20 L86,42 L82,68" stroke={"url(#"+rimG+")"} strokeWidth="2" fill="none" opacity="0.6" />

      {/* ── CRYSTAL EDGE HIGHLIGHTS (facet lines) ── */}
      <line x1="58" y1="14" x2="64" y2="26" stroke="rgba(255,255,255,0.5)"  strokeWidth="0.9" />
      <line x1="70" y1="10" x2="64" y2="26" stroke="rgba(255,255,255,0.4)"  strokeWidth="0.8" />
      <line x1="64" y1="26" x2="54" y2="38" stroke="rgba(255,255,255,0.35)" strokeWidth="0.7" />
      <line x1="64" y1="26" x2="70" y2="46" stroke="rgba(255,255,255,0.2)"  strokeWidth="0.6" />
      <line x1="54" y1="38" x2="48" y2="55" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6" />
      <line x1="54" y1="38" x2="68" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <line x1="48" y1="55" x2="58" y2="70" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
      {/* ── EAR (sharp angular) ── */}
      <polygon points="72,16 76,2 84,20" fill="#818cf8" opacity="0.92" stroke="rgba(165,243,252,0.4)" strokeWidth="1" />
      <polygon points="73,16 76,6 82,19" fill="#e0f2fe" opacity="0.55" />

      {/* ── HORN (long, dramatic, glowing) ── */}
      {/* Horn body */}
      <polygon points="48,24 56,20 30,-8 40,22" fill={"url(#"+hg+")"} filter={"url(#"+hf+")"} className="horn-glow" />
      {/* Twist detail lines */}
      <line x1="46" y1="23" x2="35" y2="4"  stroke="rgba(255,255,255,0.65)" strokeWidth="1.0" />
      <line x1="42" y1="18" x2="33" y2="1"  stroke="rgba(255,255,255,0.42)" strokeWidth="0.7" />
      <line x1="38" y1="12" x2="31" y2="-3" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
      {/* Horn tip supernova */}
      <circle cx="30" cy="-8" r="5"   fill="#fbbf24" filter={"url(#"+hf+")"} opacity="0.95" />
      <circle cx="30" cy="-8" r="2.5" fill="#fde68a" opacity="0.98" />
      <circle cx="30" cy="-8" r="1"   fill="white"  opacity="1" />

      {/* ── MANE — 5 rainbow strands from back of skull ── */}
      <path d="M82,22 Q98,32 102,52 Q106,70 98,86 Q92,96 82,101"
        stroke="#00d4ff" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.88" />
      <path d="M84,14 Q103,22 108,44 Q112,62 104,80 Q97,92 84,98"
        stroke="#c084fc" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.78" />
      <path d="M80,30 Q95,38 99,56 Q102,74 93,87 Q88,94 80,98"
        stroke="#f472b6" strokeWidth="2.8" strokeLinecap="round" fill="none" opacity="0.68" />
      <path d="M86,8  Q106,14 112,36 Q116,56 107,74 Q100,86 88,93"
        stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.58" />
      <path d="M78,38 Q90,44 94,60 Q96,74 88,85 Q83,91 78,95"
        stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.50" />
      {/* ── EYE — intense, detailed ── */}
      <ellipse cx="67" cy="48" rx="9" ry="10" fill="rgba(4,4,20,0.95)" filter={"url(#"+ef+")"} />
      <ellipse cx="67" cy="49" rx="6.5" ry="7"  fill="#1e1b4b" />
      <ellipse cx="67" cy="49" rx="4.5" ry="5"  fill="#4c1d95" />
      <ellipse cx="67" cy="49" rx="2.8" ry="3.2" fill="#7c3aed" />
      <ellipse cx="67" cy="50" rx="1.5" ry="1.8" fill="#0a0a1f" />
      <circle cx="70" cy="45" r="2.5" fill="white"  opacity="0.98" />
      <circle cx="69" cy="45" r="1"   fill="#00d4ff" opacity="0.85" />
      <circle cx="64" cy="53" r="0.9" fill="rgba(0,212,255,0.65)" />
      <ellipse cx="67" cy="49" rx="10" ry="11" fill="none" stroke="rgba(0,212,255,0.2)" strokeWidth="1.2" />

      {/* ── NOSTRIL (horse detail) ── */}
      <ellipse cx="22" cy="78" rx="3.5" ry="2" fill="rgba(0,0,0,0.35)" transform="rotate(-15,22,78)" />

      {/* ── SPARKLE STARS ── */}
      <g className="sp-a" style={{ transformOrigin: "92px 12px" }}>
        <path d="M92 7 L93.5 11 L98 11 L94.5 13.5 L96 18 L92 15.5 L88 18 L89.5 13.5 L86 11 L90.5 11Z" fill="#fbbf24" />
      </g>
      <g className="sp-b" style={{ transformOrigin: "10px 82px" }}>
        <path d="M10 77 L11.2 80.5 L15 80.5 L12.5 82.5 L13.5 86 L10 84 L6.5 86 L7.5 82.5 L5 80.5 L8.8 80.5Z" fill="#00d4ff" />
      </g>
      <g className="sp-c" style={{ transformOrigin: "92px 102px" }}>
        <path d="M92 98 L93 100.5 L96 100.5 L94 102 L95 105 L92 103 L89 105 L90 102 L88 100.5 L91 100.5Z" fill="#c084fc" />
      </g>
      <circle cx="14" cy="32" r="2"   fill="#34d399" className="sp-a" style={{ transformOrigin: "14px 32px" }} opacity="0.85" />
      <circle cx="8"  cy="58" r="1.3" fill="#fbbf24" className="sp-c" style={{ transformOrigin: "8px 58px" }} opacity="0.65" />

    </svg>
  )

  if (iconOnly) return <div className={className}>{svgEl}</div>

  return (
    <div className={"flex items-center gap-3 " + className} style={{ lineHeight:1 }}>
      {svgEl}
      <div style={{ lineHeight:1 }}>
        <div style={{ fontSize:ts, fontWeight:900, letterSpacing:"-0.03em", background:"linear-gradient(135deg,#b2f5ea,#818cf8,#c084fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
          UnicornOS
        </div>
        <div style={{ fontSize:ss, fontWeight:500, letterSpacing:"0.18em", color:"rgba(255,255,255,0.4)", fontFamily:"monospace", marginTop:2, textTransform:"uppercase" }}>
          THE INTELLIGENCE OPERATING SYSTEM
        </div>
      </div>
    </div>
  )
}