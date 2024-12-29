import { CreateTemporaryRoom } from "@/app/_components/create-temporary-room";
import { ThemeToggle } from "@/components/theme-toggle";
import { getRooms } from "@/lib/get-rooms";

export default async function Page() {
  const rooms = await getRooms();
  console.log(rooms);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted px-4">
      <ThemeToggle />

      <div className="max-w-3xl mx-auto text-center space-y-12">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl"></h1>

        <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal sm:text-2xl sm:leading-normal"></p>

        <div className="flex justify-center">
          <CreateTemporaryRoom />
        </div>
      </div>
    </main>
  );
}
