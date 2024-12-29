"use client";

import { createRoomAction } from "@/app/_actions/create-room-action";
import { Button } from "@dkr/ui/components/button";

export function CreateTemporaryRoom() {
  async function handleClick() {
    await createRoomAction();
  }
  return (
    <Button
      size="lg"
      className="text-lg px-8 py-6 rounded-full"
      onClick={handleClick}
    >
      Crear sala temporal
    </Button>
  );
}
