import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { createClient } from "@/lib/supabase/server"
import { TIER_LIMITS } from "@/lib/billing/tiers"

export async function POST(req: Request) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { tier } = await req.json()

  const priceId = TIER_LIMITS[tier as keyof typeof TIER_LIMITS]?.stripePriceId

  if (!priceId) {
    return NextResponse.json({ error: "Invalid tier" }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: user.email!,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?success=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing?canceled=1`,
    metadata: {
      userId: user.id,
      tier,
    },
  })

  return NextResponse.json({ url: session.url })
}
