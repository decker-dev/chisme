import { MessageForm } from "@/app/room/[roomId]/_components/message-form";
import { getMessages } from "@/app/room/[roomId]/_lib/get-messages";
import { ScrollArea } from "@dkr/ui/components/scroll-area";

export default async function RoomPage({
  params,
}: { params: { roomId: string } }) {
  const messages = await getMessages(params.roomId);

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Sala: {params.roomId}
      </h1>
      <div className="space-y-4">
        <MessageForm roomId={params.roomId} />
        <ScrollArea className="h-[60vh] border rounded-md p-4">
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
    </div>
  );
}
