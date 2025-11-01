"use server"
import { modalState } from "@/interfaces/interface";
import { modalSchema } from "@/features/dashboard/schema/schema";
import * as z from "zod";

export async function CreateAStore(
  prevState: modalState,
  formData: FormData
): Promise<modalState> {
  try {
    const validate = modalSchema.safeParse({
      name: formData.get("name"),
    });

    if (!validate.success) {
      const flattened = z.flattenError(validate.error);
      return {
        errors: { error: flattened.fieldErrors.name }, // or map however you need
        message: "something is wrong",
      };
    }
    return {}
  } catch (error) {
    console.log(error);
    return { message: "something is wrong", errors: undefined };
  }
}
