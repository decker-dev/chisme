import { readMessages } from "@/database/queries/message";

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  author: string;
}

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
