"use client";

import { ModalProp } from "@/interfaces/interface";
import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Modal({
  children,
  description,
  isOpen,
  onClose,
  title,
}: ModalProp) {
  const onChange = (open: boolean) => {
    if (!open) onClose();
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
