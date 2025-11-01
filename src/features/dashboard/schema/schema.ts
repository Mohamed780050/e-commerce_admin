import * as z from "zod";

export const modalSchema = z.object({
  name: z.string().min(1, "Don't let that field empty."),
});
