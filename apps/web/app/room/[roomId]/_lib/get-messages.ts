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
];

export async function getMessages(roomId: string): Promise<Message[]> {
  // Simular una demora en la red
  await new Promise((resolve) => setTimeout(resolve, 500));

  // En una implementación real, aquí se consultaría a una base de datos
  return mockMessages;
}
