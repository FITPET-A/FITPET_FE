"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "@components/InputField";
import PhoneNumberInput from "@components/PhoneNumberInput";
import CheckboxWithLabel from "@components/CheckboxWithLabel";
import TextAreaField from "@components/TextAreaFiled";
import SubmissionPopup from "@components/SubmissionPopup";
import usePostProposal from "@app/api/hooks/usePostPropsal";
import { useToast } from "@chakra-ui/react";
import POLICIES from "@constants/policy";
import PolicyModal from "@components/PolicyModal";

type ProposalFormValues = {
  companyName: string;
  email: string;
  comment: string;
  phone2?: string;
  phone3?: string;
  privacyConsent: boolean;
};

type ProposalData = {
  name: string;
  email: string;
  comment: string;
  phoneNum?: string;
};

function PartnershipFormBox() {
  const toast = useToast();
  const [isPolicyPopupOpen, setIsPolicyPopupOpen] = useState(false);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);

  const methods = useForm<ProposalFormValues>();
  const {
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = methods;

  const watchedFields = watch([
    "companyName",
    "email",
    "privacyConsent",
    "comment",
  ]);

  const phone2 = watch("phone2");
  const phone3 = watch("phone3");

  const isFormValid =
    watchedFields.every((field) => field) && !Object.keys(errors).length;

  const { mutate } = usePostProposal();

  const onSubmit = (data: ProposalFormValues) => {
    const proposalData: ProposalData = {
      name: data.companyName,
      email: data.email,
      comment: data.comment,
    };

    if (phone2 || phone3) {
      proposalData.phoneNum = `010-${phone2}-${phone3}`;
    }

    mutate(proposalData, {
      onSuccess: () => {
        setIsSubmitPopupOpen(true);
        reset();
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast({
            title: `${error.response.data.message}`,
            status: "error",
            isClosable: true,
          });
        } else {
          toast({
            title: "알 수 없는 에러가 발생했습니다.",
            status: "error",
            isClosable: true,
          });
        }
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
      <FormProvider {...methods}>
        <div className="z-10 mt-4 flex flex-col overflow-hidden rounded-3xl bg-white pt-6 shadow-main-form tablet:mt-12 tablet:px-8 tablet:pb-8 tablet:pt-9 desktop:px-9">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-8 px-4 text-lg font-medium tablet:grid tablet:grid-cols-2 tablet:gap-x-8 tablet:gap-y-10 tablet:px-0 desktop:gap-x-12">
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
                <div className="-14 hidden items-center justify-between rounded-xl bg-primary-00/25 px-6 py-4 text-sm tablet:flex desktop:text-md">
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
              <TextAreaField
                id="comment"
                label="제휴 문의 내용"
                required
                placeholder="제휴 문의 내용은 무엇인가요?"
                validation={{
                  required: "문의 내용을 입력해주세요",
                }}
                error={errors.comment?.message?.toString()}
              />
              <div className="flex h-14 items-center justify-between rounded-xl bg-primary-00/25 px-6 py-4 text-sm tablet:hidden desktop:text-md">
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
            <div className="mt-10 hidden w-full justify-center tablet:flex">
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
            <button
              type="submit"
              className={`mt-8 w-full py-6 text-xl font-semibold tablet:hidden ${
                isFormValid
                  ? "bg-primary-50 text-white"
                  : "bg-grayscale-10 text-grayscale-40"
              }`}
            >
              제안 전송
            </button>
          </form>
        </div>
      </FormProvider>
      {isSubmitPopupOpen && (
        <SubmissionPopup
          title="제안해주셔서 감사합니다"
          onClose={handCloseSubmitPopup}
        />
      )}
      {isPolicyPopupOpen && (
        <PolicyModal
          detail={POLICIES.PROPOSAL_POLICY}
          onClose={handleClosePolicyPopup}
        />
      )}
    </>
  );
}

export default PartnershipFormBox;
