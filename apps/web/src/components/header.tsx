import { Button } from "@dkr/ui/components/button";
import { Github } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold hover:underline">
        chisme.dev
      </Link>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" asChild>
          <Link
            href="https://github.com/decker-dev/chisme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">GitHub repository</span>
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
