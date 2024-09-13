import * as z from "zod";

const contactFormValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required!" }),
  message: z
    .string({
      required_error:
        "Your questions must be at least 100 characters so that we can understand your queries better.",
    })
    .min(100, {
      message:
        "Your questions must be at least 100 characters so that we can understand your queries better.",
    }),
});

export const contactSchema = {
  contactFormValidationSchema,
};
