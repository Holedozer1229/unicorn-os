"use client"

import React, { useId } from "react"

interface UnicornOSLogoProps { size?: number; className?: string; iconOnly?: boolean }

export default function UnicornOSLogo({ size=48, className="", iconOnly=false }: UnicornOSLogoProps) {
  const u=useId().replace(/:/g,"_")
  const lg="lg_"+u, hg="hg_"+u, sd="sd_"+u, hi="hi_"+u
  const hf="hf_"+u, gf="gf_"+u, ef="ef_"+u, cp="cp_"+u
  const ts=Math.round(size*0.52), ss=Math.max(7,Math.round(size*0.148))

  const svgEl=(
    <svg width={size} height={Math.round(size*1.32)} viewBox="0 0 120 158"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      className="unicorn-float" style={{overflow:"visible"}}>
      <defs>
        {/* Main 3-D lighting gradient: near-white top-left → near-black bottom-right */}
        <linearGradient id={lg} x1="8%" y1="4%" x2="92%" y2="96%">
          <stop offset="0%"   stopColor="#cffafe"/>
          <stop offset="22%"  stopColor="#67e8f9"/>
          <stop offset="50%"  stopColor="#3b82f6"/>
          <stop offset="78%"  stopColor="#1e1b4b"/>
          <stop offset="100%" stopColor="#080616"/>
        </linearGradient>
        {/* Horn gradient: gold tip → cyan → indigo */}
        <linearGradient id={hg} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#fde68a"/>
          <stop offset="40%"  stopColor="#00d4ff"/>
          <stop offset="100%" stopColor="#818cf8"/>
        </linearGradient>
        {/* Shadow overlay gradient */}
        <linearGradient id={sd} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#080616" stopOpacity="0"/>
          <stop offset="100%" stopColor="#080616" stopOpacity="0.72"/>
        </linearGradient>
        {/* Highlight overlay */}
        <radialGradient id={hi} cx="28%" cy="20%" r="38%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </radialGradient>
        {/* Clip path — horse head + neck silhouette facing LEFT */}
        <clipPath id={cp}>
          <path d="M58,20 C66,14 74,11 80,12 C88,15 98,22 104,30 C110,40 112,54 110,68 C108,82 103,98 96,114 C90,126 82,136 70,142 C60,146 50,142 42,134 C34,124 28,110 22,96 C16,84 10,78 12,78 C12,70 14,64 18,60 C22,54 28,48 34,44 C40,38 46,30 54,24 Z" />
        </clipPath>
        {/* Filters */}
        <filter id={hf} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b1"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b2"/>
          <feMerge><feMergeNode in="b1"/><feMergeNode in="b2"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id={gf} x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id={ef} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* AMBIENT HALO */}
      <ellipse cx="60" cy="90" rx="54" ry="52" fill="rgba(76,29,149,0.2)" className="halo-breathe"/>

      {/* DEPTH SHADOW (3-D extrude) */}
      <path d="M58,20 C66,14 74,11 80,12 C88,15 98,22 104,30 C110,40 112,54 110,68 C108,82 103,98 96,114 C90,126 82,136 70,142 C60,146 50,142 42,134 C34,124 28,110 22,96 C16,84 10,78 12,78 C12,70 14,64 18,60 C22,54 28,48 34,44 C40,38 46,30 54,24 Z"
        fill="#06040e" opacity="0.82" transform="translate(5,6)" filter={"url(#"+gf+")"}/>

      {/* MAIN HEAD — filled with 3-D lighting gradient */}
      <path d="M58,20 C66,14 74,11 80,12 C88,15 98,22 104,30 C110,40 112,54 110,68 C108,82 103,98 96,114 C90,126 82,136 70,142 C60,146 50,142 42,134 C34,124 28,110 22,96 C16,84 10,78 12,78 C12,70 14,64 18,60 C22,54 28,48 34,44 C40,38 46,30 54,24 Z"
        fill={"url(#"+lg+")"}/>

      {/* SHADOW OVERLAY — darkens the back-right (shadow side) */}
      <path d="M58,20 C66,14 74,11 80,12 C88,15 98,22 104,30 C110,40 112,54 110,68 C108,82 103,98 96,114 C90,126 82,136 70,142 C60,146 52,142 48,130 L62,90 Z"
        fill={"url(#"+sd+")"} opacity="0.65" clipPath={"url(#"+cp+")"}/>

      {/* SPECULAR HIGHLIGHT — bright spot on forehead (key light) */}
      <path d="M58,20 C66,14 74,11 80,12 C78,26 72,38 62,46 C56,36 54,28 58,20 Z"
        fill={"url(#"+hi+")"}/>

      {/* CRYSTAL FACET LINES — the key lines that make it look like cut crystal */}
      {/* Primary ridge: poll to mid-face */}
      <line x1="80" y1="12" x2="60" y2="66" stroke="rgba(255,255,255,0.65)" strokeWidth="1.4"/>
      {/* Secondary: forehead to mid-face */}
      <line x1="58" y1="20" x2="60" y2="66" stroke="rgba(255,255,255,0.5)"  strokeWidth="1.0"/>
      {/* Cheek line: mid-face to jaw */}
      <line x1="60" y1="66" x2="96" y2="114" stroke="rgba(255,255,255,0.3)" strokeWidth="0.9"/>
      {/* Lower face: mid to chin */}
      <line x1="60" y1="66" x2="34" y2="118" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
      {/* Brow: poll across face */}
      <line x1="80" y1="12" x2="42" y2="40" stroke="rgba(207,250,254,0.45)" strokeWidth="0.8"/>
      {/* Rim light on back skull edge */}
      <path d="M80,12 C88,15 98,22 104,30 C110,40 112,54 110,68"
        stroke="rgba(251,191,36,0.5)" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* EAR */}
      <polygon points="86,16 92,2 100,20" fill="#3b82f6" opacity="0.92"/>
      <polygon points="87,16 92,6 98,19" fill="#cffafe" opacity="0.45"/>
      <line x1="86" y1="16" x2="92" y2="2" stroke="rgba(207,250,254,0.7)" strokeWidth="0.9"/>

      {/* HORN — long, dominant, gold-to-cyan, glowing */}
      <polygon points="50,26 60,20 32,-12 44,24" fill={"url(#"+hg+")"} filter={"url(#"+hf+")"} className="horn-glow"/>
      <line x1="49" y1="25" x2="36" y2="1"   stroke="rgba(255,255,255,0.8)" strokeWidth="1.3"/>
      <line x1="45" y1="18" x2="34" y2="-4"  stroke="rgba(255,255,255,0.5)" strokeWidth="0.9"/>
      <line x1="40" y1="10" x2="33" y2="-8"  stroke="rgba(255,255,255,0.3)" strokeWidth="0.6"/>
      <circle cx="32" cy="-12" r="6"   fill="#fde68a" filter={"url(#"+hf+")"} opacity="0.98"/>
      <circle cx="32" cy="-12" r="3.5" fill="#fffbeb" opacity="1"/>
      <circle cx="32" cy="-12" r="1.5" fill="white"  opacity="1"/>

      {/* MANE — 5 vivid strands from behind poll, sweeping right-downward */}
      <path d="M98,22 Q116,36 118,60 Q120,82 112,102 Q104,118 94,126" stroke="#00d4ff" strokeWidth="5.5" strokeLinecap="round" fill="none" opacity="0.9"/>
      <path d="M102,14 Q122,24 126,50 Q130,72 120,94 Q112,110 98,120" stroke="#c084fc" strokeWidth="4"   strokeLinecap="round" fill="none" opacity="0.78"/>
      <path d="M96,30 Q112,42 114,64 Q116,84 106,102 Q100,112 92,118" stroke="#f472b6" strokeWidth="3.2" strokeLinecap="round" fill="none" opacity="0.68"/>
      <path d="M106,8  Q128,16 132,42 Q136,64 124,86 Q116,100 102,110" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.55"/>
      <path d="M94,38  Q108,50 110,70 Q112,88 102,104 Q96,112 90,116" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.45"/>

      {/* EYE */}
      <ellipse cx="72" cy="52" rx="9" ry="10" fill="#080616" filter={"url(#"+ef+")"}/>
      <ellipse cx="72" cy="53" rx="6.5" ry="7"  fill="#1e1b4b"/>
      <ellipse cx="72" cy="53" rx="4.5" ry="5"  fill="#4338ca"/>
      <ellipse cx="72" cy="54" rx="2.5" ry="3"  fill="#080616"/>
      <circle cx="76" cy="48" r="2.8" fill="white"   opacity="0.98"/>
      <circle cx="75" cy="48" r="1.2" fill="#67e8f9" opacity="0.9"/>
      <circle cx="69" cy="57" r="0.9" fill="rgba(99,102,241,0.7)"/>
      <ellipse cx="72" cy="53" rx="11" ry="12" fill="none" stroke="rgba(0,212,255,0.2)" strokeWidth="1.3"/>

      {/* NOSTRIL */}
      <ellipse cx="18" cy="82" rx="3.5" ry="2" fill="rgba(0,0,0,0.4)" transform="rotate(-20,18,82)"/>

      {/* SPARKLES */}
      <g className="sp-a" style={{transformOrigin:"10px 36px"}}><path d="M10 30 L11.5 34 L16 34 L12.5 36.5 L14 41 L10 38 L6 41 L7.5 36.5 L4 34 L8.5 34Z" fill="#fbbf24"/></g>
      <g className="sp-b" style={{transformOrigin:"110px 136px"}}><path d="M110 131 L111 134 L114 134 L112 136 L113 139 L110 137 L107 139 L108 136 L106 134 L109 134Z" fill="#00d4ff"/></g>
      <g className="sp-c" style={{transformOrigin:"8px 108px"}}><path d="M8 103 L9 106 L12 106 L10 108 L11 111 L8 109 L5 111 L6 108 L4 106 L7 106Z" fill="#c084fc"/></g>
      <circle cx="114" cy="58" r="2"   fill="#34d399" className="sp-b" style={{transformOrigin:"114px 58px"}} opacity="0.8"/>
      <circle cx="6"   cy="70" r="1.4" fill="#f472b6" className="sp-a" style={{transformOrigin:"6px 70px"}} opacity="0.7"/>

    </svg>
  )

  if (iconOnly) return <div className={className}>{svgEl}</div>

  return (
    <div className={"flex items-center gap-3 "+className} style={{lineHeight:1}}>
      {svgEl}
      <div style={{lineHeight:1}}>
        <div style={{fontSize:ts,fontWeight:900,letterSpacing:"-0.03em",background:"linear-gradient(135deg,#cffafe,#818cf8,#c084fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
          UnicornOS
        </div>
        <div style={{fontSize:ss,fontWeight:500,letterSpacing:"0.18em",color:"rgba(255,255,255,0.4)",fontFamily:"monospace",marginTop:2,textTransform:"uppercase"}}>
          THE INTELLIGENCE OPERATING SYSTEM
        </div>
      </div>
    </div>
  )
}