import { TIER_LIMITS } from "@/lib/types"
import { getAIGenerationCount, trackAIGeneration } from "@/lib/redis"

export async function enforceLimit(userId: string, tier: string) {
  const limits = TIER_LIMITS[tier || "free"]

  // unlimited tier
  if (limits.aiGenerationsPerMonth === -1) {
    await trackAIGeneration(userId)
    return { allowed: true }
  }

  const used = await getAIGenerationCount(userId)
  const remaining = limits.aiGenerationsPerMonth - used

  if (remaining <= 0) {
    return {
      allowed: false,
      error: "AI generation limit reached. Upgrade required.",
    }
  }

  // track usage only if allowed
  await trackAIGeneration(userId)

  return {
    allowed: true,
    remaining: remaining - 1,
  }
}
