"use server";

import { createMessage } from "@/database/queries/message";
import { authActionClient } from "@/lib/safe-action";
import { createMessageSchema } from "@/modules/message/actions/schema";
import {
  getRandomAnonymousName,
  getRandomColor,
} from "@/modules/message/lib/utils";
import { revalidatePath } from "next/cache";

export const createMessageAction = authActionClient
  .schema(createMessageSchema)
  .metadata({
    name: "create room",
    track: {
      event: "room_created",
      channel: "landing",
    },
  })
  .action(async ({ parsedInput: { roomId, content } }) => {
    const newMessage = await createMessage({
      roomId: roomId,
      username: getRandomAnonymousName(),
      usernameColor: getRandomColor(),
      content: content,
    });
    revalidatePath(`/room/${roomId}`);
    return newMessage;
  });
