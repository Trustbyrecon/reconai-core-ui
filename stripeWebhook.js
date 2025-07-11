const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const sig = event.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    const stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      webhookSecret
    );

    console.log("✅ Stripe Event Received:", stripeEvent.type);

    if (stripeEvent.type === 'payment_intent.succeeded') {
      const paymentIntent = stripeEvent.data.object;
      console.log("💰 Payment Succeeded for:", paymentIntent.amount);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err) {
    console.error("❌ Webhook Error:", err.message);
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }
};
