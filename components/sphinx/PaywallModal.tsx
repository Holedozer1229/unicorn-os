"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaywallModal({ isOpen, onClose }: PaywallModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-3xl border border-[rgba(0,200,255,0.3)] bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-[rgba(0,200,255,0.02)] p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Sphinx emblem */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-3xl mb-4">
            🧿
          </div>
          <h2 className="text-2xl font-black text-white mb-2">Unlock Infinite Wisdom</h2>
          <p className="text-white/60 text-sm">Join the Creator Plan to talk with the Sphinx unlimited times</p>
        </div>

        {/* Current usage */}
        <div className="bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.3)] rounded-xl p-4 mb-6 text-center">
          <p className="text-sm text-white/70 mb-1">You've used all 5 free requests</p>
          <p className="text-lg font-bold text-[#fbbf24]">Upgrade to continue the conversation</p>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3">
            <div className="text-[#00d4ff] text-lg mt-1">✓</div>
            <div>
              <p className="text-white font-semibold text-sm">Unlimited Sphinx Requests</p>
              <p className="text-white/50 text-xs">Ask the oracle anything, anytime</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-[#34d399] text-lg mt-1">✓</div>
            <div>
              <p className="text-white font-semibold text-sm">Creator Tools</p>
              <p className="text-white/50 text-xs">Content Engine, Smart Planner, Monetization AI</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-[#a78bfa] text-lg mt-1">✓</div>
            <div>
              <p className="text-white font-semibold text-sm">Multi-Platform Support</p>
              <p className="text-white/50 text-xs">OnlyFans, YouTube, TikTok, Instagram & more</p>
            </div>
          </div>
        </div>

        {/* Pricing highlight */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-[rgba(0,200,255,0.2)] rounded-xl p-4 mb-6 text-center">
          <div className="text-3xl font-black text-white">$19</div>
          <p className="text-white/60 text-xs mt-1">per month • Cancel anytime</p>
        </div>

        {/* CTA */}
        <Link
          href="/auth/sign-up"
          className="block w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:brightness-110 rounded-xl text-white font-bold text-center transition-all active:scale-95 shadow-lg shadow-cyan-500/30 mb-3"
        >
          Create Creator Account
        </Link>

        {/* Secondary CTA */}
        <button
          onClick={onClose}
          className="w-full py-2 px-4 text-white/60 hover:text-white hover:bg-white/5 rounded-xl text-sm font-semibold transition-all"
        >
          Maybe later
        </button>

        {/* Trust signal */}
        <p className="text-center text-[10px] text-white/30 mt-6 font-mono tracking-wider">
          ✓ Join 42,000+ creators • No credit card required • Instant access
        </p>
      </div>
    </div>
  );
}
