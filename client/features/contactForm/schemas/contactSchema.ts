import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(1, t("nameRequired")).max(20, t("nameMax")),

    lastName: z
      .string()
      .min(1, t("lastNameRequired"))
      .max(25, t("lastNameMax")),

    email: z.string().trim().toLowerCase().regex(emailRegex, t("emailInvalid")),

    phone: z.string().regex(/^\d{9}$/, t("phoneInvalid")),

    message: z.string().min(1, t("messageRequired")).max(1000, t("messageMax")),
  });

export type ContactSchemaType = z.infer<ReturnType<typeof createContactSchema>>;
