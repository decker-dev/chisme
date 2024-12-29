"use client";

import { useActionStatus } from "@/hooks/use-action-toast";
import { createMessageAction } from "@/modules/message/actions/create-message-action";
import { Button } from "@dkr/ui/components/button";
import { Textarea } from "@dkr/ui/components/textarea";
import { useAction } from "next-safe-action/hooks";
import { type FormEvent, useState } from "react";

export function MessageForm({ roomId }: { roomId: string }) {
  const [newMessage, setNewMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const createMessage = useAction(createMessageAction);

  useActionStatus({
    isExecuting: createMessage.isExecuting,
    hasErrored: createMessage.hasErrored,
    hasSucceeded: createMessage.hasSucceeded,
    successMessage: "Mensaje enviado",
    errorMessage: "Error enviando el mensaje",
    loadingMessage: "Enviando mensaje",
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    createMessage.execute({ roomId, content: newMessage });
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
