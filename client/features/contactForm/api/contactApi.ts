import { safeFetch } from "@/features/lib/apiClient";

import { ContactFormValues } from "../types/contactFormTypes";

export const submitContact = async (data: ContactFormValues) => {
  return safeFetch<any>("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
