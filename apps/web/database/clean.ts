import { db } from "@/database";
import { messages, rooms } from "@/database/schema";

export async function cleanAll() {
  try {
    console.log("⏳ Deleting old data...");
    await db.delete(rooms);
    await db.delete(messages);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  }
}

if (require.main === module) {
  cleanAll()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
