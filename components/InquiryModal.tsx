import usePostInquiry from "@app/api/hooks/usePostInquiry";
import { useToast } from "@chakra-ui/react";
import { CloseIcon } from "@public/svg";

import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import POLICIES from "@constants/policy";
import InputField from "./InputField";
import PhoneNumberInput from "./PhoneNumberInput";
import TextAreaField from "./TextAreaFiled";
import CheckboxWithLabel from "./CheckboxWithLabel";
import SubmissionPopup from "./SubmissionPopup";
import PolicyModal from "./PolicyModal";

type InquiryFormValues = {
  name: string;
  email: string;
  comment: string;
  phone2: string;
  phone3: string;
  privacyConsent: boolean;
};

type InquiryData = {
  name: string;
  email: string;
  comment: string;
  phoneNum: string;
};

interface InquiryModalProps {
  onClose: () => void;
}

export default function InquiryModal({ onClose }: InquiryModalProps) {
  const toast = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isPolicyPopupOpen, setIsPolicyPopupOpen] = useState(false);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 0);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const methods = useForm<InquiryFormValues>();
  const {
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = methods;

  const watchedFields = watch([
    "name",
    "email",
    "comment",
    "phone2",
    "phone3",
    "privacyConsent",
  ]);

  const isFormValid =
    watchedFields.every((field) => field) && !Object.keys(errors).length;

  const { mutate } = usePostInquiry();

  const onSubmit = (data: InquiryFormValues) => {
    const inquiryData: InquiryData = {
      name: data.name,
      email: data.email,
      comment: data.comment,
      phoneNum: `010-${data.phone2}-${data.phone3}`,
    };

    mutate(inquiryData, {
      onSuccess: () => {
        setIsSubmitPopupOpen(true);
        reset();
      },
      onError: () => {
        toast({
          title: "알 수 없는 에러가 발생했습니다.",
          status: "error",
          isClosable: true,
        });
      },
    });
  };

  const handCloseSubmitPopup = () => {
    setIsSubmitPopupOpen(false);
  };

  const handleClosePolicyPopup = () => {
    setIsPolicyPopupOpen(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-[342px] flex-col gap-6 overflow-hidden rounded-3xl bg-white pt-6 tablet:w-[536px] tablet:gap-8 tablet:pt-10">
              <div className="flex w-full flex-col gap-4 px-6 tablet:gap-6 tablet:px-12">
                <div className="flex w-full items-center justify-between">
                  <span className="font-paperlogy-title text-xl text-grayscale-100 tablet:text-3xl">
                    1:1 문의
                  </span>
                  <CloseIcon
                    className="cursor-pointer stroke-grayscale-60"
                    onClick={handleClose}
                  />
                </div>
                <div className="flex w-full flex-col gap-6 text-sm font-medium tablet:gap-8 tablet:text-lg">
                  <InputField
                    id="name"
                    label="이름"
                    required
                    placeholder="이름"
                    validation={{
                      required: "이름을 입력해주세요.",
                    }}
                    error={errors.name?.message?.toString()}
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
                  <PhoneNumberInput
                    required
                    errors={{
                      phone2: errors.phone2,
                      phone3: errors.phone3,
                    }}
                  />
                  <TextAreaField
                    id="comment"
                    label="문의 내용"
                    required
                    placeholder="문의 내용을 입력해주세요."
                    validation={{
                      required: "문의 내용을 입력해주세요",
                    }}
                    error={errors.comment?.message?.toString()}
                  />
                </div>
                <div className="flex h-14 w-full items-center justify-between rounded-xl bg-primary-00/25 px-6 py-4 text-sm tablet:text-md">
                  <CheckboxWithLabel
                    id="privacyConsent"
                    label="개인정보 수집 및 이용 동의"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setIsPolicyPopupOpen(true)}
                    className="text-primary-50"
                  >
                    약관 보기
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className={`w-full py-4 text-lg font-semibold tablet:py-6 tablet:text-3xl ${
                  isFormValid
                    ? "bg-primary-50 text-white"
                    : "bg-grayscale-10 text-grayscale-40"
                }`}
              >
                문의 전송
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
      {isSubmitPopupOpen && (
        <SubmissionPopup
          title="문의해주셔서 감사합니다"
          onClose={handCloseSubmitPopup}
        />
      )}
      {isPolicyPopupOpen && (
        <PolicyModal
          detail={POLICIES.INQUIRY_POLICY}
          onClose={handleClosePolicyPopup}
        />
      )}
    </>
  );
}
