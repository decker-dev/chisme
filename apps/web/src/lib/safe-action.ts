import { setupAnalytics } from "@dkr/analytics/server";
import { ratelimit } from "@dkr/kv/ratelimit";
import { logger } from "@dkr/logger";
import {
  DEFAULT_SERVER_ERROR_MESSAGE,
  createSafeActionClient,
} from "next-safe-action";
import { z } from "zod";

import { env } from "@/env";
const handleServerError = (e: Error) => {
  console.error("Action error:", e.message);

  if (e instanceof Error) {
    return e.message;
  }

  return DEFAULT_SERVER_ERROR_MESSAGE;
};

export const actionClientWithMeta = createSafeActionClient({
  handleServerError,
  defineMetadataSchema() {
    return z.object({
      name: z.string(),
      track: z
        .object({
          event: z.string(),
          channel: z.string(),
        })
        .optional(),
    });
  },
});

export const authActionClient = actionClientWithMeta
  .use(async ({ next, clientInput, metadata }) => {
    const result = await next({ ctx: {} });

    if (env.VERCEL_ENV === "development") {
      logger(`Input -> ${JSON.stringify(clientInput)}`);
      logger(`Result -> ${JSON.stringify(result.data)}`);
      logger(`Metadata -> ${JSON.stringify(metadata)}`);

      return result;
    }

    return result;
  })
  /*
  .use(async ({next, metadata}) => {
    const ip = headers().get("x-forwarded-for");

    const {success, remaining} = await ratelimit.limit(`${ip}-${metadata.name}`);

    if (!success) {
      throw new Error("Too many requests");
    }

    return next({
      ctx: {
        ratelimit: {
          remaining,
        },
      },
    });
  })
  */
  .use(async ({ next, metadata }) => {
    if (metadata) {
      const analytics = await setupAnalytics();

      if (metadata.track) {
        analytics.track(metadata.track);
      }
    }

    return next({ ctx: {} });
  });
