import "server-only";

import { db } from "@/database";
import { type InsertRoom, type Room, rooms } from "@/database/schema";
import { takeFirstOrThrow } from "@/database/utils";

export async function createRoom(data: InsertRoom): Promise<Room> {
  return await db.insert(rooms).values(data).returning().then(takeFirstOrThrow);
}

export async function readRooms(): Promise<Room[]> {
  return await db
    .select()
    .from(rooms)
    .then((rows) => rows);
}
