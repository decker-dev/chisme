import { readMessages } from "@/database/queries/message";
import type { Message } from "@/modules/message/lib/types";

export async function getMessages(roomId: string): Promise<Message[]> {
  const messages = await readMessages(roomId);
  return messages.map((message) => ({
    id: message.id,
    content: message.content,
    timestamp: message.createdAt.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    author: message.username,
  }));
}
