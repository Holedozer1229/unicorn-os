import { scoreIdea } from "@/lib/ai";
import { rateLimit } from "@/lib/rate-limit";
import { TIERS } from "@/lib/tier";

export async function POST(req: Request) {
  const { idea, userId = "anon" } = await req.json();

  const tier = "free"; // TODO: fetch from DB
  const limit = TIERS[tier].limit;

  if (!rateLimit(userId, limit)) {
    return Response.json(
      { error: "Limit reached. Upgrade to Pro." },
      { status: 429 }
    );
  }

  const result = await scoreIdea(idea);

  return Response.json(result);
}
