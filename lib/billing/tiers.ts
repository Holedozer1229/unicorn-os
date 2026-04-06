export const TIERS = {
  free: {
    name: "free",
    aiGenerationsPerMonth: 20,
  },
  pro: {
    name: "pro",
    aiGenerationsPerMonth: 500,
    stripePriceId: process.env.STRIPE_PRICE_PRO!,
  },
  enterprise: {
    name: "enterprise",
    aiGenerationsPerMonth: -1,
    stripePriceId: process.env.STRIPE_PRICE_ENTERPRISE!,
  },
}
