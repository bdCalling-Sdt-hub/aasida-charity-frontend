import { toast } from "sonner";

export const SuccessToast = (message, toastId = null, desc) => {
  return toast.success(message || "Successful", {
    id: toastId,
    description: desc,
  });
};

export const ErrorToast = (message, toastId = null) => {
  return toast.error(message || "Error", {
    id: toastId,
  });
};
