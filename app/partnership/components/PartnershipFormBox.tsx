"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "@components/InputField";
import PhoneNumberInput from "@components/PhoneNumberInput";
import CheckboxWithLabel from "@components/CheckboxWithLabel";
import TextAreaField from "@components/TextAreaFiled";
import SubmissionPopup from "@components/SubmissionPopup";

function PartnershipFormBox() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const methods = useForm();
  const {
    watch,
    formState: { errors },
    handleSubmit,
  } = methods;

  const watchedFields = watch([
    "companyName",
    "email",
    "phone2",
    "phone3",
    "privacyConsent",
    "inquiry",
  ]);

  const isFormValid =
    watchedFields.every((field) => field) && !Object.keys(errors).length;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (datas: any) => {
    setIsPopupOpen(true);
    return datas;
  };

  const handClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <FormProvider {...methods}>
        <div className="z-10 mt-12 flex flex-col rounded-3xl bg-white px-9 pb-8 pt-9 shadow-main-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-10 text-lg font-medium">
              <InputField
                id="companyName"
                label="기업명"
                required
                placeholder="기업명을 알려주세요."
                validation={{
                  required: "기업명을 입력해주세요.",
                }}
                error={errors.companyName?.message?.toString()}
              />
              <InputField
                id="email"
                label="E-mail 주소"
                type="email"
                required
                placeholder="example@sc.com"
                validation={{
                  required: "이메일 주소를 입력해주세요.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "유효한 이메일 주소를 입력해주세요.",
                  },
                }}
                error={errors.email?.message?.toString()}
              />
              <div className="flex flex-col gap-6">
                <PhoneNumberInput
                  errors={{
                    phone2: errors.phone2,
                    phone3: errors.phone3,
                  }}
                />
                <div className="flex h-14 items-center justify-between rounded-xl bg-primary-00/25 px-6 py-4 text-md">
                  <CheckboxWithLabel
                    id="privacyConsent"
                    label="개인정보 수집 및 이용 동의"
                    required
                  />
                  <button type="button" className="text-primary-50">
                    약관 보기
                  </button>
                </div>
              </div>
              <TextAreaField
                id="inquiry"
                label="제휴 문의 내용"
                required
                placeholder="제휴 문의 내용은 무엇인가요?"
                validation={{
                  required: "문의 내용을 입력해주세요",
                }}
                error={errors.inquiry?.message?.toString()}
              />
            </div>
            <div className="mt-10 flex w-full justify-center">
              <button
                type="submit"
                className={`w-[360px] rounded-2xl py-4 text-xl font-medium ${
                  isFormValid
                    ? "bg-primary-50 text-white"
                    : "bg-grayscale-10 text-grayscale-40"
                }`}
              >
                제안 전송
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
      {isPopupOpen && (
        <SubmissionPopup
          title="제안해주셔서 감사합니다"
          onClose={handClosePopup}
        />
      )}
    </>
  );
}

export default PartnershipFormBox;
