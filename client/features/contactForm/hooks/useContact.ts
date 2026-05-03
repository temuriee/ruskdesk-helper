import { useMutation } from "@tanstack/react-query";
import { submitContact } from "../api/contactApi";
import { ContactFormValues } from "../types/contactFormTypes";

export const useContact = () => {
  return useMutation<any, Error, ContactFormValues>({
    mutationFn: submitContact,
  });
};
