import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  /** the field name used by react-hook-form */
  name: Path<T>;
  label: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
  /** render a textarea instead of an input */
  as?: "input" | "textarea";
  className?: string;
}

export function FormField<T extends FieldValues>({
  name,
  label,
  placeholder,
  register,
  error,
  type = "text",
  as = "input",
  className = "",
}: FormFieldProps<T>) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        className="text-[14px] font-bold text-[#334155]"
        htmlFor={String(name)}
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={String(name)}
          {...register(name)}
          placeholder={placeholder}
          className="bg-[#F8FAFC] min-h-[144px] rounded-xl px-4 py-3.25 border border-[#000000]"
        />
      ) : (
        <input
          id={String(name)}
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className="bg-[#F8FAFC] rounded-xl px-4 py-3.25 border border-[#000000]"
        />
      )}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
