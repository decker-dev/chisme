import { drizzle } from "drizzle-orm/postgres-js";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "@/env";
import * as schema from "./schema";

declare global {
  var db: PostgresJsDatabase<typeof schema> | undefined;
}

// biome-ignore lint/suspicious/noRedeclare: <explanation>
let db: PostgresJsDatabase<typeof schema>;

if (env.VERCEL_ENV === "production") {
  db = drizzle(postgres(env.DATABASE_URL), { schema });
} else {
  if (!global.db) global.db = drizzle(postgres(env.DATABASE_URL), { schema });

  db = global.db;
}

export { db };