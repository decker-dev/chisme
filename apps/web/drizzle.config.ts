import type { Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./src/database/schema.ts",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["*"],
} satisfies Config;
