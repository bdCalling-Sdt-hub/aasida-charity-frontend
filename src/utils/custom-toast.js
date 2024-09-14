import { toast } from "sonner";

export const SuccessToast = (message, toastId = null) => {
  return toast.success(message || "Successful", {
    id: toastId,
  });
};

export const ErrorToast = (message, toastId = null) => {
  return toast.error(message || "Error", {
    id: toastId,
  });
};
