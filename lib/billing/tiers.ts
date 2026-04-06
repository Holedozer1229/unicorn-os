export const TIER_LIMITS = {
  free: {
    aiGenerationsPerMonth: 20,
    stripePriceId: null,
  },
  pro: {
    aiGenerationsPerMonth: 500,
    stripePriceId: process.env.STRIPE_PRICE_PRO!,
  },
  enterprise: {
    aiGenerationsPerMonth: -1,
    stripePriceId: process.env.STRIPE_PRICE_ENTERPRISE!,
  },
} as const

export type SubscriptionTier = keyof typeof TIER_LIMITS
