import { getAIGenerationCount, trackAIGeneration } from "@/lib/redis"
import { TIERS } from "@/lib/billing/tiers"

// NOTE: in production this should come from DB synced via Stripe webhook
function getUserTier(): "free" | "pro" | "enterprise" {
  return "free"
}

export async function enforceLimit(userId: string) {
  const tier = getUserTier()
  const limits = TIERS[tier]

  if (limits.aiGenerationsPerMonth === -1) {
    await trackAIGeneration(userId)
    return { allowed: true }
  }

  const used = await getAIGenerationCount(userId)
  const remaining = limits.aiGenerationsPerMonth - used

  if (remaining <= 0) {
    return {
      allowed: false,
      error: "Upgrade required (Stripe enforced limit reached)",
    }
  }

  await trackAIGeneration(userId)

  return {
    allowed: true,
    remaining: remaining - 1,
  }
}
