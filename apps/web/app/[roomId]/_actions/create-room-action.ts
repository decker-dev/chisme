"use server";
import { createRoom } from "@dkr/database/queries/room";

export async function createRoomAction() {
  await createRoom({ name: "My Room" });
}
