// components/ui/CustomToast.tsx
"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/utils/shadcn";
import styles from "./index.module.css"; // Import the CSS module

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onClose?: () => void;
  className?: string;
}

const Toast: React.FC<ToastProps> = ({ message, onClose, className }) => {
  return (
    <div className={cn(styles.toast, className, "primary-card")}>
      <span className={styles.message}>{message}</span>
      <button onClick={onClose} className={styles.closeButton}>
        <X className={styles.closeIcon} />
      </button>
    </div>
  );
};

export default Toast;
