import { readRooms } from "@/database/queries/room";

export async function getRooms() {
  return readRooms();
}
