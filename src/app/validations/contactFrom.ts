import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Please enter 3 - 50 characters" })
    .max(50, { message: "Please enter 3 - 50 characters" }),
  email: z.string().email({ message: "Invalid email, please try again" }),
  subject: z
    .string()
    .min(3, { message: "Please enter 3 - 50 characters" })
    .max(50, { message: "Please enter 3 - 50 characters" }),
  message: z
    .string()
    .min(10, { message: "Please enter 10 - 255 characters" })
    .max(255, { message: "Please enter 10 - 255 characters" }),
});
