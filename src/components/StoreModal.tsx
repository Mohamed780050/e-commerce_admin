"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "./Modal";
import { useActionState, useEffect, useState } from "react";
import { modalState } from "@/interfaces/interface";
import { CreateAStore } from "@/features/dashboard/actions/server action";

export default function StoreModal() {
  const initialState: modalState = { message: null, errors: {} };

  const { isOpen, onClose } = useStoreModal();
  const [isMounted, setMounted] = useState(false);
  const [state, formAction, isPending] = useActionState(
    CreateAStore,
    initialState
  );

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
