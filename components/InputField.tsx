"use client";

import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  validation?: object;
  error?: string;
  maxLength?: number;
}

export default function InputField({
  id,
  label,
  type = "text",
  required = false,
  placeholder = "",
  validation = {},
  error = "",
  maxLength,
}: InputFieldProps) {
  const { register } = useFormContext();

  return (
    <div className="relative flex flex-col gap-2">
      <div className="flex">
        <label htmlFor={id}>{label}</label>
        {required && <span className="text-primary-50">*</span>}
      </div>
      <input
        id={id}
        type={type}
        {...register(id, validation)}
        maxLength={maxLength}
        className={`h-[59px] rounded-xl bg-grayscale-05 px-6 py-4 placeholder:text-grayscale-40 focus:outline focus:outline-1 ${
          error
            ? "outline outline-1 outline-red-500"
            : "focus:outline-primary-50"
        }`}
        placeholder={placeholder}
      />
      {error && (
        <p className="absolute -bottom-6 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
