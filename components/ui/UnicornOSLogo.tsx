import React from 'react';

interface UnicornOSLogoProps {
  className?: string;
  size?: number;
}

export default function UnicornOSLogo({ className = "", size = 48 }: UnicornOSLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_25px_#67e8f9]"
      >
        <defs>
          <linearGradient id="unicornGrad" x1="30%" y1="20%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#e879f9" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
        </defs>

        <path 
          d="M60 20 Q30 50 35 80 Q45 95 60 90 Q80 95 85 75 Q90 45 60 20" 
          fill="url(#unicornGrad)" 
          stroke="#ffffff" 
          strokeWidth="3"
          filter="url(#glow)"
        />
        <path 
          d="M60 20 L62 8 Q65 5 68 12" 
          fill="#67e8f9" 
          stroke="#ffffff" 
          strokeWidth="4"
        />
        <circle cx="72" cy="48" r="6" fill="#0a0a1f" />
        <circle cx="74" cy="46" r="2" fill="#ffffff" />
      </svg>

      <div className="leading-none">
        <div className="text-4xl font-bold tracking-[-2px] text-white">
          Unicorn<span className="text-[#67e8f9]">OS</span>
        </div>
        <div className="text-[10px] text-white/60 tracking-[3px] -mt-1 font-mono">
          THE INTELLIGENCE OPERATING SYSTEM
        </div>
      </div>
    </div>
  );
}
