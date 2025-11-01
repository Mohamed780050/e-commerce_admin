import { ReactNode } from "react";

export interface ModalProp {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface useStoreModalInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface modalState {
  errors?: {
    error?: string[];
  };
  message?: string | null;
}
