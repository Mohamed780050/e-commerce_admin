"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "./Modal";

export default function StoreModal() {
  const { isOpen, onClose } = useStoreModal();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create a store"
      description="Add a new store to manage Products and Categories."
    >
      children
    </Modal>
  );
}
