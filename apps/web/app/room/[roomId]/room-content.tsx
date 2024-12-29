"use client";

import type { Message } from "@/app/room/[roomId]/_lib/get-messages";
import { createMessage } from "@/app/room/_actions/create-message-action";
import { Button } from "@dkr/ui/components/button";
import { ScrollArea } from "@dkr/ui/components/scroll-area";
import { Textarea } from "@dkr/ui/components/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function RoomContent({
  roomId,
  initialMessages,
}: { roomId: string; initialMessages: Message[] }) {
  const [newMessage, setNewMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      await createMessage(roomId, newMessage.trim());
      setNewMessage("");
      setCharCount(0);
      router.refresh();
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="relative">
          <Textarea
            placeholder="Escribe tu chisme aquí..."
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value);
              setCharCount(e.target.value.length);
            }}
            className="resize-none pr-16"
            rows={3}
            maxLength={280}
          />
          <span className="absolute bottom-2 right-2 text-sm text-muted-foreground">
            {charCount}/280
          </span>
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={newMessage.trim().length === 0}>
            Enviar
          </Button>
        </div>
      </form>

      <ScrollArea className="h-[400px] border rounded-md p-4">
        {initialMessages.map((message) => (
          <div key={message.id} className="mb-4 p-4 bg-muted rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{message.author}</span>
              <span className="text-sm text-muted-foreground">
                {message.timestamp}
              </span>
            </div>
            <p>{message.content}</p>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
