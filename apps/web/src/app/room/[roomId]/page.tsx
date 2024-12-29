import { RoomContent } from "@/app/room/[roomId]/_components/room-content";
import { Header } from "@/components/header";
import { getMessages } from "@/modules/message/lib/get-messages";
interface RoomPageProps {
  params: Promise<{
    roomId: string;
  }>;
}
export default async function RoomPage(props: RoomPageProps) {
  const params = await props.params;
  const messages = await getMessages(params.roomId);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Sala Temporal</h1>
        <RoomContent roomId={params.roomId} initialMessages={messages} />
      </div>
    </>
  );
}
