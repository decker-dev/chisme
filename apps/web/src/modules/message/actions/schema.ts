import z from "zod";
export const createMessageSchema = z.object({
  roomId: z.string(),
  content: z
    .string()
    .min(1, {
      message: "Message must be at least 1 character.",
    })
    .max(280, {
      message: "Message must be at most 1000 characters.",
    }),
});
