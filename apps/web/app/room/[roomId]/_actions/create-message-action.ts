"use server";

import { createMessage } from "@/database/queries/message";
import type { Message } from "@/database/schema";
import { revalidatePath } from "next/cache";

const anonymousNames = [
  "Murciélago Anónimo",
  "Kiwi Anónimo",
  "Panda Anónimo",
  "Koala Anónimo",
  "Pingüino Anónimo",
  "Canguro Anónimo",
  "Delfín Anónimo",
  "Tucán Anónimo",
  "Jirafa Anónima",
  "Leopardo Anónimo",
  "Tigre Anónimo",
  "Elefante Anónimo",
];

function getRandomAnonymousName(): string {
  return (
    anonymousNames[Math.floor(Math.random() * anonymousNames.length)] || ""
  );
}

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
