import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@dkr/ui/components/button";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted px-4">
      <ThemeToggle />

      <div className="max-w-3xl mx-auto text-center space-y-12">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl">
          chisme.dev
        </h1>

        <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal sm:text-2xl sm:leading-normal">
          Cree una sala temporal de 24 horas y publique sus mejores chismes
        </p>

        <div className="flex justify-center">
          <Button size="lg" className="text-lg px-8 py-6 rounded-full">
            Crear sala temporal
          </Button>
        </div>
      </div>
    </main>
  );
}
