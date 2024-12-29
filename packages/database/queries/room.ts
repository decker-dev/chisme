import "server-only";

import { db } from "@/database";
import { type InsertRoom, type Room, rooms } from "@/schema";
import { takeFirstOrThrow } from "@/scripts/utils";

export async function createRoom(data: InsertRoom): Promise<Room> {
  return await db.insert(rooms).values(data).returning().then(takeFirstOrThrow);
}
