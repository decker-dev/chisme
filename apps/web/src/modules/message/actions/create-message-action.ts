"use server";

import { createMessage } from "@/database/queries/message";
import type { Message } from "@/database/schema";
import { revalidatePath } from "next/cache";

const anonymousNames = [
  "Murciélago",
  "Kiwi",
  "Panda",
  "Koala",
  "Pingüino",
  "Canguro",
  "Delfín",
  "Tucán",
  "Jirafa Anónima",
  "Leopardo",
  "Tigre",
  "Elefante",
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
