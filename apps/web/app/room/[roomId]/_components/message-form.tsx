"use client";

import { createMessage } from "@/app/room/[roomId]/_actions/create-message-action";
import { Button } from "@dkr/ui/components/button";
import { Textarea } from "@dkr/ui/components/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function MessageForm({ roomId }: { roomId: string }) {
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
  );
}
