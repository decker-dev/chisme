export interface Message {
  id: number;
  content: string;
  timestamp: string;
  author: string;
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

export async function getMessages(roomId: string): Promise<Message[]> {
  // Simular una demora en la red
  await new Promise((resolve) => setTimeout(resolve, 500));

  // En una implementación real, aquí se consultaría a una base de datos
  return mockMessages;
}
