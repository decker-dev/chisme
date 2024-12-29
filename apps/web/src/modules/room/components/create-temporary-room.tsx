"use client";

import { useActionStatus } from "@/hooks/use-action-toast";
import { createRoomAction } from "@/modules/room/actions/create-room-action";
import { Button } from "@dkr/ui/components/button";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function CreateTemporaryRoom() {
  const createRoom = useAction(createRoomAction);
  const router = useRouter();

  useActionStatus({
    isExecuting: createRoom.isExecuting,
    hasErrored: createRoom.hasErrored,
    hasSucceeded: createRoom.hasSucceeded,
    successMessage: "Sala creada exitosamente",
    errorMessage: "Error creando la sala",
    loadingMessage: "Creando sala",
  });

  useEffect(() => {
    if (createRoom.hasSucceeded) {
      router.push(`/room/${createRoom.result.data!.id}`);
    }
  }, [createRoom.hasSucceeded]);

  const handleClick = () => {
    createRoom.execute();
  };
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
