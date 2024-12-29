"use server";

import type { Message } from "@/app/room/[roomId]/_lib/get-messages";
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

export async function createMessage(
  roomId: string,
  content: string,
): Promise<Message> {
  // Simular una demora en la red
  await new Promise((resolve) => setTimeout(resolve, 500));

  const newMessage: Message = {
    id: Date.now(),
    content,
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    author: getRandomAnonymousName(),
  };

  // En una implementación real, aquí se guardaría el mensaje en una base de datos

  revalidatePath(`/room/${roomId}`);
  return newMessage;
}
