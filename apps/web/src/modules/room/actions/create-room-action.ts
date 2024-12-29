"use server";

import { createRoom } from "@/database/queries/room";
import { authActionClient } from "@/lib/safe-action";

export const createRoomAction = authActionClient
  .metadata({
    name: "create room",
    track: {
      event: "room_created",
      channel: "landing",
    },
  })
  .action(async () => {
    const data = await createRoom({
      name: "My Room",
      expiresAt: new Date("2025-01-01"),
    });

    return data;
  });
