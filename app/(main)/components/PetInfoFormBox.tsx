import { useEffect, useRef, useState } from "react";
import { PetType } from "@ctypes/main";
import { FormProvider, useForm } from "react-hook-form";
import RoundButton from "@components/RoundButton";
import useGetPetSpecies from "@app/api/hooks/useGetPetSpecies";
import InputField from "@components/InputField";
import PhoneNumberInput from "@components/PhoneNumberInput";
import CheckboxWithLabel from "@components/CheckboxWithLabel";
import PolicyModal from "@components/PolicyModal";
import POLICIES from "@constants/policy";
import usePostComparison from "@app/api/hooks/usePostComparison";
import { useToast } from "@chakra-ui/react";
import AgeInput from "./AgeInput";
import BreedInput from "./BreedInput";
import SubmissionPopup from "./SubmissionPopup";

const animals: { label: string; value: PetType }[] = [
  { label: "🐶 강아지", value: "DOG" },
  { label: "🐱 고양이", value: "CAT" },
];

interface PetInfoFormBoxProps {
  petType: PetType;
  onButtonClick: (pet: PetType) => void;
}

type PetInfoFormValues = {
  name: string;
  breed: string;
  age: string;
  condition?: string;
  phone2: string;
  phone3: string;
  privacyConsent: boolean;
};

type PetInfoData = {
  petName: string;
  petType: string;
  petSpecies: string;
  petAge: number;
  phoneNumber: string;
  comment?: string;
  referSite?: string;
  referUserId?: string;
};

function PetInfoFormBox({ petType, onButtonClick }: PetInfoFormBoxProps) {
  const toast = useToast();
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const [isPolicyPopupOpen, setIsPolicyPopupOpen] = useState(false);
  const [debouncedBreed, setDebouncedBreed] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const breedInputRef = useRef<HTMLInputElement | null>(null);

  const methods = useForm<PetInfoFormValues>();
  const {
    setValue,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = methods;

  const watchedFields = watch([
    "name",
    "breed",
    "age",
    "phone2",
    "phone3",
    "privacyConsent",
  ]);

  const isFormValid =
    watchedFields.every((field) => field) && !Object.keys(errors).length;

  const breed = watch("breed");
  useEffect(() => {
    const handler = setTimeout(() => {
      if (breed) {
        setDebouncedBreed(breed.trim());
      } else {
        setDebouncedBreed("");
      }
    }, 100);

    return () => {
      clearTimeout(handler);
    };
  }, [breed]);

  const { data: petSpeciesData } = useGetPetSpecies({
    petType,
    petSpecies: debouncedBreed,
  });
  const petSpeciesList = petSpeciesData?.data.petSpeciesList;

  const handleFocus = () => {
    setIsDropdownVisible(true);
  };
  const handleBlur = () => {
    setIsDropdownVisible(false);
  };

  const handleClick = (species: string) => {
    setValue("breed", species);
    setIsDropdownVisible(false);
    if (breedInputRef.current) {
      breedInputRef.current.blur();
    }
  };

  const { mutate } = usePostComparison();

  const onSubmit = (data: PetInfoFormValues) => {
    const petInfoData: PetInfoData = {
      petName: data.name,
      petType,
      petSpecies: data.breed,
      petAge: Number(data.age),
      phoneNumber: `010-${data.phone2}-${data.phone3}`,
      comment: data.condition,
    };

    mutate(petInfoData, {
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
        <div className="z-10 mt-4 flex flex-col rounded-3xl bg-white pt-6 shadow-main-form tablet:mt-12 tablet:px-8 tablet:py-8 desktop:px-9">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full justify-center space-x-4 tablet:justify-start">
              {animals.map((animal) => (
                <RoundButton
                  key={animal.value}
                  label={animal.label}
                  isSelected={petType === animal.value}
                  onClick={() => onButtonClick(animal.value)}
                />
              ))}
            </div>
            <div className="grid-grid-cols-1 mt-6 grid gap-8 px-4 text-lg font-medium tablet:grid-cols-2 tablet:gap-10 tablet:px-0">
              <InputField
                id="name"
                label="이름"
                required
                placeholder="아이의 이름은 무엇인가요?"
                validation={{
                  required: "우리 아이의 올바른 이름을 입력해 주세요.",
                  maxLength: {
                    value: 10,
                    message: "이름은 최대 10자까지 입력 가능합니다.",
                  },
                  pattern: {
                    value: /^[가-힣]{1,10}$/,
                    message: "우리 아이의 올바른 이름을 입력해 주세요.",
                  },
                }}
                error={errors.name?.message?.toString()}
              />
              <BreedInput
                petSpeciesList={petSpeciesList}
                breed={breed}
                isDropdownVisible={isDropdownVisible}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                handleClick={handleClick}
              />
              <AgeInput />
              <InputField
                id="condition"
                label="반려동물 상태"
                placeholder="건강상태 등을 알려주세요."
                maxLength={30}
              />
              <PhoneNumberInput
                required
                showDescription
                errors={{
                  phone2: errors.phone2,
                  phone3: errors.phone3,
                }}
                errorMessages={{
                  required: "견적서 발송을 위해 정확한 번호를 입력해주세요.",
                  pattern: "견적서 발송을 위해 정확한 번호를 입력해주세요.",
                }}
              />
              <div className="mt-5 flex h-14 items-center justify-between rounded-xl bg-primary-00/25 px-6 py-4 text-sm tablet:mt-[37px] desktop:text-md">
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
                className={`w-[360px] rounded-2xl py-[14px] font-paperlogy-title text-3xl ${
                  isFormValid
                    ? "bg-primary-50 text-white"
                    : "bg-grayscale-10 text-grayscale-40"
                }`}
              >
                견적서 발급받기
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
              견적서 발급받기
            </button>
          </form>
        </div>
      </FormProvider>
      {isSubmitPopupOpen && <SubmissionPopup onClose={handCloseSubmitPopup} />}
      {isPolicyPopupOpen && (
        <PolicyModal
          detail={POLICIES.INSURANCE_POLICY}
          onClose={handleClosePolicyPopup}
        />
      )}
    </>
  );
}

export default PetInfoFormBox;
