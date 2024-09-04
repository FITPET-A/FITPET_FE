import { useEffect, useRef, useState } from "react";
import { PetType } from "@ctypes/main";
import { FormProvider, useForm } from "react-hook-form";
import RoundButton from "@components/RoundButton";
import useGetPetSpecies from "@app/api/hooks/useGetPetSpecies";
import InputField from "@components/InputField";
import PhoneNumberInput from "@components/PhoneNumberInput";
import CheckboxWithLabel from "@components/CheckboxWithLabel";
import SubmissionPopup from "./SubmissionPopup";
import AgeInput from "./AgeInput";
import BreedInput from "./BreedInput";

const animals: { label: string; value: PetType }[] = [
  { label: "🐶 강아지", value: "DOG" },
  { label: "🐱 고양이", value: "CAT" },
];

interface AnimalInfoFormBoxProps {
  petType: PetType;
  onButtonClick: (pet: PetType) => void;
}

function AnimalInfoFormBox({ petType, onButtonClick }: AnimalInfoFormBoxProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [debouncedBreed, setDebouncedBreed] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const breedInputRef = useRef<HTMLInputElement | null>(null);

  const methods = useForm();
  const {
    setValue,
    watch,
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
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [breed]);

  const { data } = useGetPetSpecies({ petType, petSpecies: debouncedBreed });
  const petSpeciesList = data?.data.petSpeciesList;

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
        <div className="z-10 mt-12 flex flex-col rounded-3xl bg-white py-8 shadow-main-form tablet:px-8 desktop:px-9">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex space-x-4">
              {animals.map((animal) => (
                <RoundButton
                  key={animal.value}
                  label={animal.label}
                  isSelected={petType === animal.value}
                  onClick={() => onButtonClick(animal.value)}
                />
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-10 text-lg font-medium">
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
                placeholder="수술 이력 등이 있나요?"
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
              <div className="mt-[37px] flex h-14 items-center justify-between rounded-xl bg-primary-00/25 px-6 py-4 text-sm desktop:text-md">
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
            <div className="mt-10 flex w-full justify-center">
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
          </form>
        </div>
      </FormProvider>
      {isPopupOpen && <SubmissionPopup onClose={handClosePopup} />}
    </>
  );
}

export default AnimalInfoFormBox;
