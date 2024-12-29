import { getMessages } from "@/app/room/[roomId]/_lib/get-messages";
import { RoomContent } from "./room-content";

export default async function RoomPage({
  params,
}: { params: { roomId: string } }) {
  const messages = await getMessages(params.roomId);

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Sala: {params.roomId}
      </h1>
      <RoomContent roomId={params.roomId} initialMessages={messages} />
    </div>
  );
}
