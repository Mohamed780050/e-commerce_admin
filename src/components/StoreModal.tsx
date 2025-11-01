"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "./Modal";
import { useActionState, useEffect, useState } from "react";
import { modalState } from "@/interfaces/interface";
import { CreateAStore } from "@/features/dashboard/actions/server action";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function StoreModal() {
  const initialState: modalState = { message: null, errors: null };

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
      {state.errors?.map((error) => (
        <p className="mb-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
      <form className="flex gap-2" action={formAction}>
        <Input name="name" placeholder="Store Name" />
        <Button
          disabled={isPending}
          variant="outline"
          className="cursor-pointer"
          type="submit"
        >
          Create
        </Button>
      </form>
    </Modal>
  );
}
