import { toast } from "react-toastify";

export default function triggerAlert() {
  toast.warn("You must select an answer.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
    toastId: "answer-toast",
  });
}
