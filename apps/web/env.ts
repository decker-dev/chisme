import {createEnv} from "@t3-oss/env-nextjs";
import {vercel} from "@t3-oss/env-nextjs/presets";
import {z} from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  extends: [vercel()],
  server: {
    // Authentication
    AUTH_SECRET: z.string().min(1),
    AUTH_GOOGLE_ID: z.string().min(1),
    AUTH_GOOGLE_SECRET: z.string().min(1),

    // Database
    DATABASE_URL: z.string().url(),

    // OpenPanel
    OPENPANEL_SECRET_KEY: z.string().min(1),

    // Stripe
    STRIPE_SECRET_KEY: z.string().startsWith("sk_"),
    STRIPE_WEBHOOK_SECRET: z.string().startsWith("whsec_"),

    // Upstash
    UPSTASH_REDIS_REST_URL: z.string().url(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),

    // Blob Storage
    BLOB_READ_WRITE_TOKEN: z.string().min(1),

    // Email
    RESEND_API_KEY: z.string().startsWith("re_"),

    // HubSpot
    HUBSPOT_CLIENT_ID: z.string().min(1),
    HUBSPOT_CLIENT_SECRET: z.string().min(1),
    HUBSPOT_REDIRECT_URI: z.string().url(),

    // Optional: Node Environment
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    // OpenPanel
    NEXT_PUBLIC_OPENPANEL_CLIENT_ID: z.string().min(1),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    // Authentication
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,

    // Database
    DATABASE_URL: process.env.DATABASE_URL,

    // OpenPanel
    NEXT_PUBLIC_OPENPANEL_CLIENT_ID: process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID,
    OPENPANEL_SECRET_KEY: process.env.OPENPANEL_SECRET_KEY,

    // Stripe
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,

    // Upstash
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,

    // Blob Storage
    BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,

    // Email
    RESEND_API_KEY: process.env.RESEND_API_KEY,

    // HubSpot
    HUBSPOT_CLIENT_ID: process.env.HUBSPOT_CLIENT_ID,
    HUBSPOT_CLIENT_SECRET: process.env.HUBSPOT_CLIENT_SECRET,
    HUBSPOT_REDIRECT_URI: process.env.HUBSPOT_REDIRECT_URI,

    // Node Environment
    NODE_ENV: process.env.NODE_ENV,
  },
});
