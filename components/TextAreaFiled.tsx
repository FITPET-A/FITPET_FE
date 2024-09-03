"use client";

import { useFormContext } from "react-hook-form";

interface TextAreaFieldProps {
  id: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  validation?: object;
  error?: string;
  maxLength?: number;
}

export default function TextAreaField({
  id,
  label,
  required = false,
  placeholder = "",
  validation = {},
  error = "",
  maxLength = 500,
}: TextAreaFieldProps) {
  const { register } = useFormContext();

  return (
    <div className="relative flex flex-col gap-2">
      <div className="flex">
        <label htmlFor={id}>{label}</label>
        {required && <span className="text-primary-50">*</span>}
      </div>
      <textarea
        id={id}
        {...register(id, {
          ...validation,
          maxLength: {
            value: maxLength,
            message: `최대 ${maxLength}자까지 입력할 수 있습니다.`,
          },
        })}
        maxLength={maxLength}
        className={`h-full rounded-xl bg-grayscale-05 px-6 py-4 placeholder:text-grayscale-40 focus:outline focus:outline-1 ${
          error
            ? "outline outline-1 outline-red-500"
            : "focus:outline-primary-50"
        }`}
        placeholder={placeholder}
        style={{ resize: "none" }}
      />
      {error && (
        <p className="absolute -bottom-6 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
