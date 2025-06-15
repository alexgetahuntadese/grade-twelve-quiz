
import * as React from "react";

type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  duration?: number;
  variant?: "default" | "destructive";
};

type AddToast = (toast: Toast) => void;
type RemoveToast = (id: string) => void;

interface ToastContextType {
  toasts: Toast[];
  addToast: AddToast;
  removeToast: RemoveToast;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const addToast: AddToast = React.useCallback((toast) => {
    setToasts((prev) => [
      ...prev,
      { ...toast, id: toast.id || Date.now().toString() }
    ]);
  }, []);

  const removeToast: RemoveToast = React.useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return {
    toasts: context.toasts,
    toast: context.addToast,
    removeToast: context.removeToast
  };
};
