/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  useFormContext,
} from "react-hook-form";

interface PhoneNumberInputProps {
  required?: boolean;
  errors?: {
    phone2?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
    phone3?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  };
  errorMessages?: {
    required?: string;
    pattern?: string;
  };
  showDescription?: boolean;
}

export default function PhoneNumberInput({
  required = false,
  errors,
  errorMessages = {
    required: "번호를 입력해주세요.",
    pattern: "올바른 번호를 입력해주세요.",
  },
  showDescription = false,
}: PhoneNumberInputProps) {
  const { register } = useFormContext();

  return (
    <div className="relative flex flex-col gap-2">
      <div className="flex items-center">
        <div className="mr-2 flex">
          <label htmlFor="phone">전화번호</label>
          {required && <span className="text-primary-50">*</span>}
        </div>
        {showDescription && (
          <p className="text-sm text-grayscale-40">
            전화번호를 입력하면 문자로 견적서를 받을 수 있어요
          </p>
        )}
      </div>
      <div className="flex w-full items-center gap-2">
        <input
          id="phone1"
          value="010"
          readOnly
          className="flex-grow rounded-xl bg-grayscale-05 px-6 py-4 text-center placeholder:text-grayscale-40 focus:outline focus:outline-1 focus:outline-primary-50 tablet:w-[80px] desktop:w-[120px]"
        />
        <span className="text-grayscale-60">-</span>
        <input
          id="phone2"
          type="number"
          maxLength={4}
          {...register("phone2", {
            required: required ? errorMessages.required : false,
            pattern: {
              value: /^[0-9]{4}$/,
              message: errorMessages.pattern || "올바른 번호를 입력해주세요.",
            },
          })}
          className={`flex-grow rounded-xl bg-grayscale-05 px-6 py-4 text-center placeholder:text-grayscale-40 focus:outline focus:outline-1 tablet:w-[80px] desktop:w-[120px] ${
            errors?.phone2
              ? "outline outline-1 outline-red-500"
              : "focus:outline-primary-50"
          }`}
          placeholder="1234"
        />
        <span className="text-grayscale-60">-</span>
        <input
          id="phone3"
          type="number"
          maxLength={4}
          {...register("phone3", {
            required: required ? errorMessages.required : false,
            pattern: {
              value: /^[0-9]{4}$/,
              message: errorMessages.pattern || "올바른 번호를 입력해주세요.",
            },
          })}
          className={`flex-grow rounded-xl bg-grayscale-05 px-6 py-4 text-center placeholder:text-grayscale-40 focus:outline focus:outline-1 tablet:w-[80px] desktop:w-[120px] ${
            errors?.phone3
              ? "outline outline-1 outline-red-500"
              : "focus:outline-primary-50"
          }`}
          placeholder="5678"
        />
      </div>
      {(errors?.phone2 || errors?.phone3) && (
        <p className="absolute -bottom-6 text-sm text-red-500">
          {errors?.phone2?.message?.toString() ||
            errors?.phone3?.message?.toString() ||
            ""}
        </p>
      )}
    </div>
  );
}
