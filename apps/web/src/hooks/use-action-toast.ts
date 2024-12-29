import {useEffect} from "react";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

interface UseActionStatusProps {
  isExecuting: boolean;
  hasErrored: boolean;
  hasSucceeded: boolean;
  loadingMessage?: string;
  errorMessage?: string;
  successMessage?: string;
  url?: string;
}

export const useActionStatus = ({
  isExecuting,
  hasErrored,
  hasSucceeded,
  loadingMessage = "Cargando...",
  errorMessage = "Ha ocurrido un error",
  successMessage = "Operación exitosa",
  url,
}: UseActionStatusProps) => {
  const router = useRouter();

  useEffect(() => {
    let toastId: string | number;

    if (isExecuting) {
      toastId = toast.loading(loadingMessage);
    }

    if (!isExecuting) {
      if (hasErrored) {
        toast.dismiss(toastId!);
        toast.error(errorMessage);
      }
      if (hasSucceeded) {
        toast.dismiss(toastId!);
        toast.success(successMessage);
        if (url) {
          router.push(url);
        }
      }
    }
  }, [isExecuting, hasErrored, hasSucceeded, loadingMessage, errorMessage, successMessage]);
};
