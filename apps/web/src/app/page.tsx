import { ThemeToggle } from "@/components/theme-toggle";
import { CreateTemporaryRoom } from "@/modules/room/components/create-temporary-room";

export default async function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted px-4">
      <ThemeToggle isFixed />
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl">
          chisme.dev
        </h1>
        <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal sm:text-2xl sm:leading-normal">
          Cree una sala temporal de 24 horas y publica tus mejores chismes.
        </p>
        <div className="flex justify-center">
          <CreateTemporaryRoom />
        </div>
      </div>
    </main>
  );
}
