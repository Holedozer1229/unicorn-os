"use client"

import React, { useId } from "react"

interface UnicornOSLogoProps { className?: string; size?: number; iconOnly?: boolean; }

export default function UnicornOSLogo({ className="", size=48, iconOnly=false }: UnicornOSLogoProps) {
  const u=useId().split(":").join("_")
  const bg="bg_"+u, br="br_"+u, hg="hg_"+u, eg="eg_"+u, hf="hf_"+u, ef="ef_"+u
  const ts=Math.round(size*0.75), ss=Math.max(7,Math.round(size*0.18))

  const svgEl=(
    <svg width={size} height={Math.round(size*1.16)} viewBox="0 0 160 185" fill="none" xmlns="http://www.w3.org/2000/svg" style={{overflow:"visible"}}>
      <defs>
        <linearGradient id={bg} x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#0ea5e9"/>
          <stop offset="45%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#1e1b4b"/>
        </linearGradient>
        <linearGradient id={br} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.65"/>
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id={hg} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fef08a"/>
          <stop offset="50%" stopColor="#fbbf24"/>
          <stop offset="100%" stopColor="#00d4ff"/>
        </linearGradient>
        <radialGradient id={eg} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#67e8f9"/>
          <stop offset="100%" stopColor="#1e1b4b"/>
        </radialGradient>
        <filter id={hf} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id={ef} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <polygon points="82,24 44,50 24,70 18,90 20,102 36,115 60,122 74,148 78,162 144,162 153,130 151,95 148,68 140,34 124,6 130,32" fill={"url(#"+bg+")"} stroke="rgba(103,232,249,0.25)" strokeWidth="1"/>
      <polygon points="82,24 44,50 72,86 132,66 140,34 130,32" fill={"url(#"+br+")"}/>
      <polygon points="124,6 112,26 134,34" fill="#22d3ee" opacity="0.85"/>
      <polygon points="124,6 116,24 130,30" fill="#bae6fd" opacity="0.4"/>
      <line x1="82" y1="24" x2="72" y2="86" stroke="#67e8f9" strokeWidth="1.5" opacity="0.8"/>
      <line x1="72" y1="86" x2="132" y2="66" stroke="#67e8f9" strokeWidth="1.2" opacity="0.65"/>
      <line x1="44" y1="50" x2="72" y2="86" stroke="#a5f3fc" strokeWidth="1.0" opacity="0.6"/>
      <line x1="72" y1="86" x2="36" y2="115" stroke="#7dd3fc" strokeWidth="0.9" opacity="0.45"/>
      <line x1="72" y1="86" x2="74" y2="148" stroke="#38bdf8" strokeWidth="0.8" opacity="0.35"/>
      <line x1="132" y1="66" x2="140" y2="34" stroke="#67e8f9" strokeWidth="1.0" opacity="0.5"/>
      <line x1="132" y1="66" x2="151" y2="95" stroke="#4f86c6" strokeWidth="0.8" opacity="0.4"/>
      <path d="M 130,32 L 140,34 L 148,68 L 153,130 L 144,162" stroke="rgba(251,191,36,0.45)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <polygon points="80,25 70,-18 90,25" fill={"url(#"+hg+")"} filter={"url(#"+hf+")"} />
      <line x1="80" y1="25" x2="73" y2="-4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2"/>
      <line x1="80" y1="25" x2="76" y2="-11" stroke="rgba(255,255,255,0.6)" strokeWidth="0.7"/>
      <circle cx="70" cy="-18" r="4" fill="#fef08a" filter={"url(#"+hf+")"} opacity="0.95"/>
      <ellipse cx="114" cy="66" rx="9" ry="10" fill="#050514" filter={"url(#"+ef+")"} />
      <ellipse cx="114" cy="67" rx="6.5" ry="7" fill={"url(#"+eg+")"} />
      <ellipse cx="114" cy="68" rx="3.5" ry="4" fill="#000"/>
      <circle cx="118" cy="63" r="3" fill="white" opacity="0.95"/>
      <circle cx="117" cy="63" r="1.4" fill="#67e8f9" opacity="0.9"/>
      <ellipse cx="21" cy="97" rx="3.5" ry="2" fill="rgba(0,0,0,0.45)" transform="rotate(-15,21,97)"/>
    </svg>
  )

  if(iconOnly) return <div className={className}>{svgEl}</div>

  return (
    <div className={"flex items-center gap-3 "+className}>
      {svgEl}
      <div className="leading-none">
        <div style={{fontSize:ts,fontWeight:900,letterSpacing:"-0.03em",background:"linear-gradient(135deg,#cffafe,#818cf8,#c084fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>UnicornOS</div>
        <div style={{fontSize:ss,fontWeight:500,letterSpacing:"0.18em",color:"rgba(255,255,255,0.4)",fontFamily:"monospace",marginTop:2,textTransform:"uppercase"}}>THE INTELLIGENCE OPERATING SYSTEM</div>
      </div>
    </div>
  )
}