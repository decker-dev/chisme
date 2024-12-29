"use server";

import { createRoom } from "@/database/queries/room";

export async function createRoomAction() {
  await createRoom({
    name: "My Room",
    expiresAt: new Date("2025-01-01"),
  });
}
