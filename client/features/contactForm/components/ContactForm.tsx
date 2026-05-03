"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createContactSchema,
  ContactSchemaType,
} from "../schemas/contactSchema";

import { useTranslations } from "next-intl";

import { useContact } from "../hooks/useContact";
import { FormField } from "./FormField";
import { ContactFormValues } from "../types/contactFormTypes";
import toast from "react-hot-toast";

const ContactForm = () => {
  const tValidation = useTranslations("validation");
  const t = useTranslations("contact");

  const schema = createContactSchema(tValidation);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { mutate, isPending, isSuccess } = useContact();

  const onSubmit = (data: ContactFormValues) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        toast.success(t("success") || "Message sent successfully!");
      },
      onError: (error: any) => {
        const errorMsg =
          error?.message || t("serverError") || "Something went wrong";
        toast.error(errorMsg);
        // Global form error
        setError("root", {
          type: "server",
          message: errorMsg,
        });
      },
    });
  };

  return (
    <section className="w-full min-h-100dvh px-7.25 md:px-15 xl:px-25">
      <div className="mx-auto w-full max-w-204.5 flex flex-col items-center">
        {/* Header */}
        <div className="text-center lg:mt-15 md:mt-12 mt-9">
          <h1 className="text-[#0F172A] text-[48px] font-noto-bold mb-4 max-md:text-[36px] max-xs:text-[30px]">
            {t("title")}
          </h1>

          <p className="text-[18px] max-md:text-[16px] leading-[29.25px] max-xs:text-[18px] text-[#475569]">
            {t("description")}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="lg:mt-15 md:mt-12 mt-7 w-full max-w-204.5 border-2 border-[#1E293B] rounded-xl px-7 border-t-8 border-t-[#4E876D] py-7 mb-[50px] contact-shadow gap-6 bg-white flex flex-col"
        >
          {/* Global server error */}
          {errors.root && (
            <p className="text-red-600 text-sm text-center">
              {errors.root.message}
            </p>
          )}

          {/* Name + LastName */}
          <div className="flex max-xs:flex-col gap-6">
            <FormField
              name="name"
              label={t("name")}
              placeholder={t("namePlaceholder")}
              register={register}
              error={errors.name?.message}
              className="flex-1"
            />

            <FormField
              name="lastName"
              label={t("lastName")}
              placeholder={t("lastNamePlaceholder")}
              register={register}
              error={errors.lastName?.message}
              className="flex-1"
            />
          </div>

          {/* Email + Phone */}
          <div className="flex max-xs:flex-col gap-6">
            <FormField
              name="email"
              label={t("email")}
              placeholder={t("emailPlaceholder")}
              register={register}
              error={errors.email?.message}
              type="email"
              className="flex-1"
            />

            <FormField
              name="phone"
              label={t("phone")}
              placeholder={t("phonePlaceholder")}
              register={register}
              error={errors.phone?.message}
              type="tel"
              className="flex-1"
            />
          </div>

          {/* Message */}
          <FormField
            name="message"
            label={t("message")}
            placeholder={t("messagePlaceholder")}
            register={register}
            error={errors.message?.message}
            as="textarea"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="mt-6 max-xs:max-w-full bg-[#4E876D] max-w-43 px-12 py-4 rounded-xl text-white font-bold leading-6 disabled:opacity-50"
          >
            {isPending ? t("sending") : t("submit")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
