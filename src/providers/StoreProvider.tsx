"use client";

import StoreModal from "@/components/StoreModal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function StoreProvider() {
  const { isOpen, onOpen } = useStoreModal();
  useEffect(() => {
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);

  return <StoreModal />;
}
