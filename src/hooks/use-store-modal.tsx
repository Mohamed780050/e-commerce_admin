import { useStoreModalInterface } from "@/interfaces/interface";
import { create } from "zustand";

export const useStoreModal = create<useStoreModalInterface>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
