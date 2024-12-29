"use client";

import { Button } from "@dkr/ui/components/button";
import { ScrollArea } from "@dkr/ui/components/scroll-area";
import { Textarea } from "@dkr/ui/components/textarea";
import { useEffect, useState } from "react";

interface Message {
  id: number;
  content: string;
  timestamp: string;
  author: string;
}

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

function getRandomAnonymousName() {
  return anonymousNames[Math.floor(Math.random() * anonymousNames.length)];
}

const mockMessages: Message[] = [
  {
    id: 1,
    content: "¡Hola a todos! ¿Qué tal el día?",
    timestamp: "10:30 AM",
    author: "Murciélago Anónimo",
  },
  {
    id: 2,
    content: "¿Alguien sabe qué pasó con María?",
    timestamp: "10:32 AM",
    author: "Kiwi Anónimo",
  },
  {
    id: 3,
    content: "Escuché que se mudó a otra ciudad",
    timestamp: "10:35 AM",
    author: "Panda Anónimo",
  },
  {
    id: 4,
    content: "¿En serio? No sabía nada",
    timestamp: "10:37 AM",
    author: "Koala Anónimo",
  },
  {
    id: 5,
    content: "Sí, al parecer consiguió un nuevo trabajo",
    timestamp: "10:40 AM",
    author: "Pingüino Anónimo",
  },
];

export function RoomContent({ roomId }: { roomId: string }) {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    setCurrentUser(getRandomAnonymousName());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        author: currentUser,
      };
      setMessages([...messages, message]);
      setNewMessage("");
      setCharCount(0);
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
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            Publicando como: {currentUser}
          </span>
          <Button type="submit" disabled={newMessage.trim().length === 0}>
            Enviar
          </Button>
        </div>
      </form>

      <ScrollArea className="h-[400px] border rounded-md p-4">
        {messages.map((message) => (
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
