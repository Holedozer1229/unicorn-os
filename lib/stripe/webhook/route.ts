import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { createClient } from "@/lib/supabase/server"
import { headers } from "next/headers"

export async function POST(req: Request) {
  const body = await req.text()
  const sig = headers().get("stripe-signature")!

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  const supabase = await createClient()

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as any

      const userId = session.metadata.userId
      const tier = session.metadata.tier

      await supabase
        .from("subscriptions")
        .upsert({
          user_id: userId,
          tier,
          stripe_customer_id: session.customer,
          stripe_subscription_id: session.subscription,
          status: "active",
        })
    }
  }

  return NextResponse.json({ received: true })
}
