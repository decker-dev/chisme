"use server";

import { createRoom } from "@/database/queries/room";
import { redirect } from "next/navigation";

export async function createRoomAction() {
  const data = await createRoom({
    name: "My Room",
    expiresAt: new Date("2025-01-01"),
  });

  redirect(`/room/${data.id}`);
}
