// Runtime settings for the billing integration.
export const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_KEY.startsWith('sk_live_')) throw new Error('expected a live secret key');
