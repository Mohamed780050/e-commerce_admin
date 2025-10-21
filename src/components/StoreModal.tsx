"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "./Modal";
import { useEffect, useState } from "react";

export default function StoreModal() {
  const { isOpen, onClose } = useStoreModal();
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;
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
