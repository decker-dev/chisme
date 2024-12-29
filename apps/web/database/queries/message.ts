import { db } from "@/database";
import { type InsertMessage, type Message, messages } from "@/database/schema";
import { takeFirstOrThrow } from "@/database/utils";
import { eq } from "drizzle-orm";

export async function createMessage(data: InsertMessage): Promise<Message> {
  return await db
    .insert(messages)
    .values(data)
    .returning()
    .then(takeFirstOrThrow);
}

export async function readMessages(roomId: string): Promise<Message[]> {
  return db.select().from(messages).where(eq(messages.roomId, roomId));
}
