import { db } from "@/database";
import { type InsertMessage, type Message, messages } from "@/database/schema";
import { takeFirstOrThrow } from "@/database/utils";

export async function createMessage(data: InsertMessage): Promise<Message> {
  return await db
    .insert(messages)
    .values(data)
    .returning()
    .then(takeFirstOrThrow);
}
