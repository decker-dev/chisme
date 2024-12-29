"use server";

import { createMessage } from "@/database/queries/message";
import type { Message } from "@/database/schema";
import { getRandomAnonymousName } from "@/modules/message/lib/utils";
import { revalidatePath } from "next/cache";

export async function createMessageAction(
  roomId: string,
  content: string,
): Promise<Message> {
  const newMessage = await createMessage({
    roomId: roomId,
    username: getRandomAnonymousName(),
    content: content,
  });
  revalidatePath(`/room/${roomId}`);
  return newMessage;
}
