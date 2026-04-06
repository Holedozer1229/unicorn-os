import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
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
    return new NextResponse("Webhook Error", { status: 400 })
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object
      const userId = session.metadata?.userId

      // TODO: store subscription in DB
      // upgrade user tier → pro
      break
    }

    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object

      // TODO: sync subscription state
      break
    }
  }

  return NextResponse.json({ received: true })
}
