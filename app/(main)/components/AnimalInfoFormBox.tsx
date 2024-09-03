import { useEffect, useRef, useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import { PetType } from "@ctypes/main";
import { RightDirectionIcon } from "@public/svg";
import { useForm } from "react-hook-form";
import RoundButton from "@components/RoundButton";
import useGetPetSpecies from "@app/api/hooks/useGetPetSpecies";
import SubmissionPopup from "./SubmissionPopup";

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

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
      <div className="z-10 mt-12 flex h-[636px] flex-col rounded-3xl bg-white px-12 shadow-main-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8 flex space-x-4">
            {animals.map((animal) => (
              <RoundButton
                key={animal.value}
                label={animal.label}
                isSelected={petType === animal.value}
                onClick={() => onButtonClick(animal.value)}
              />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-12 text-lg font-medium">
            <div className="relative flex flex-col gap-2">
              <div className="flex">
                <label htmlFor="name">이름</label>
                <span className="text-primary-50">*</span>
              </div>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "우리 아이의 올바른 이름을 입력해 주세요.",
                  maxLength: {
                    value: 10,
                    message: "이름은 최대 10자까지 입력 가능합니다.",
                  },
                  pattern: {
                    value: /^[가-힣]{1,10}$/,
                    message: "우리 아이의 올바른 이름을 입력해 주세요.",
                  },
                })}
                className={`h-[59px] rounded-xl bg-grayscale-05 px-6 py-4 placeholder:text-grayscale-40 focus:outline focus:outline-1 ${
                  errors.name
                    ? "outline outline-1 outline-red-500"
                    : "focus:outline-primary-50"
                }`}
                placeholder="아이의 이름은 무엇인가요?"
              />
              {errors.name && (
                <p className="absolute -bottom-6 text-sm text-red-500">
                  {errors.name?.message?.toString()}
                </p>
              )}
            </div>
            <div className="relative flex flex-col gap-2">
              <div className="flex">
                <label htmlFor="breed">상세 품종</label>
                <span className="text-primary-50">*</span>
              </div>
              <input
                id="breed"
                type="text"
                {...register("breed", {
                  required: "아이의 품종을 입력해 주세요.",
                  onBlur: handleBlur,
                })}
                ref={(e) => {
                  register("breed").ref(e);
                  breedInputRef.current = e;
                }}
                onFocus={handleFocus}
                className={`h-[59px] rounded-xl bg-grayscale-05 px-6 py-4 placeholder:text-grayscale-40 focus:outline focus:outline-1 ${
                  (breed && petSpeciesList?.length === 0) || errors.breed
                    ? "outline outline-1 outline-red-500"
                    : "focus:outline-primary-50"
                }`}
                placeholder="아이의 품종은 무엇인가요?"
              />
              {isDropdownVisible && (
                <div className="absolute top-[110px] z-20 max-h-[255px] w-full overflow-y-auto rounded-xl bg-white shadow-main-form">
                  {petSpeciesList?.map((species) => (
                    <button
                      key={species}
                      type="button"
                      className="w-full cursor-pointer px-6 py-3 text-left transition-colors duration-200 hover:bg-grayscale-10"
                      onMouseDown={(e) => e.preventDefault()} // 드롭다운 클릭 시 blur 방지
                      onClick={() => {
                        handleClick(species);
                      }}
                    >
                      {species}
                    </button>
                  ))}
                </div>
              )}
              {breed && petSpeciesList?.length === 0 && (
                <p className="absolute -bottom-6 text-sm text-red-500">
                  정보를 찾을 수 없습니다.
                </p>
              )}
              {errors.breed && (
                <p className="absolute -bottom-6 text-sm text-red-500">
                  {errors.breed?.message?.toString()}
                </p>
              )}
            </div>
            <div className="relative flex flex-col gap-2">
              <div className="flex">
                <label htmlFor="age">만 나이</label>
                <span className="text-primary-50">*</span>
              </div>
              <div className="relative w-full">
                <input
                  id="age"
                  type="number"
                  {...register("age", {
                    required: "우리 아이의 정확한 만 나이를 입력해주세요.",
                    validate: {
                      positive: (value) => {
                        const age = parseInt(value, 10);
                        return (
                          age <= 10 ||
                          "현재 만 10살 초과된 아이는 펫보험 가입이 어렵습니다."
                        );
                      },
                      isNumber: (value) =>
                        /^[0-9]+$/.test(value) ||
                        "우리 아이의 정확한 만 나이를 입력해주세요.",
                    },
                  })}
                  className={`h-[59px] w-full rounded-xl bg-grayscale-05 py-4 pl-6 pr-[50px] placeholder:text-grayscale-40 focus:outline focus:outline-1 ${
                    errors.age
                      ? "outline outline-1 outline-red-500"
                      : "focus:outline-primary-50"
                  }`}
                  placeholder="아이의 만 나이를 알려주세요."
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 transform text-gray-500">
                  세
                </span>
                {errors.age && (
                  <p className="absolute -bottom-6 text-sm text-red-500">
                    {errors.age?.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="condition">반려동물 상태</label>
              <input
                id="condition"
                {...register("condition")}
                maxLength={30}
                className="h-[59px] rounded-xl bg-grayscale-05 px-6 py-4 placeholder:text-grayscale-40 focus:outline focus:outline-1 focus:outline-primary-50"
                placeholder="수술 이력, 건강 상태 등 특이사항을 간단히 작성해주세요."
              />
            </div>
            <div className="relative flex flex-col gap-2">
              <div className="flex items-center">
                <div className="mr-2 flex">
                  <label htmlFor="phone">전화번호</label>
                  <span className="text-primary-50">*</span>
                </div>
                <p className="text-sm text-grayscale-40">
                  전화번호를 입력하면 문자로 견적서를 받을 수 있어요
                </p>
              </div>
              <div className="flex items-center justify-between">
                <input
                  id="phone1"
                  value="010"
                  readOnly
                  className="h-[59px] w-[120px] rounded-xl bg-grayscale-05 px-6 py-4 text-center placeholder:text-grayscale-40 focus:outline focus:outline-1 focus:outline-primary-50"
                />
                <span className="text-grayscale-60">-</span>
                <input
                  id="phone2"
                  type="number"
                  maxLength={4}
                  {...register("phone2", {
                    required: "견적서 발송을 위해 정확한 번호를 입력해주세요.",
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message: "견적서 발송을 위해 정확한 번호를 입력해주세요.",
                    },
                  })}
                  className={`h-[59px] w-[120px] rounded-xl bg-grayscale-05 px-6 py-4 text-center placeholder:text-grayscale-40 focus:outline focus:outline-1 ${
                    errors.phone2
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
                    required: "견적서 발송을 위해 정확한 번호를 입력해주세요.",
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message: "견적서 발송을 위해 정확한 번호를 입력해주세요.",
                    },
                  })}
                  className={`h-[59px] w-[120px] rounded-xl bg-grayscale-05 px-6 py-4 text-center placeholder:text-grayscale-40 focus:outline focus:outline-1 ${
                    errors.phone3
                      ? "outline outline-1 outline-red-500"
                      : "focus:outline-primary-50"
                  }`}
                  placeholder="5678"
                />
              </div>
              {(errors.phone2 || errors.phone3) && (
                <p className="absolute -bottom-6 text-sm text-red-500">
                  {errors.phone2?.message?.toString() ||
                    errors.phone3?.message?.toString()}
                </p>
              )}
            </div>
            <div className="mt-[37px] flex h-14 items-center justify-between rounded-xl bg-primary-00/25 px-6 py-4 text-md">
              <div className="flex items-center">
                <Checkbox
                  id="privacyConsent"
                  {...register("privacyConsent", { required: true })}
                  className="relative z-10 mr-3"
                  borderColor="#008CFF"
                  sx={{
                    "& .chakra-checkbox__control": {
                      width: "24px",
                      height: "24px",
                      borderRadius: "4px",
                      bg: "white",
                      borderWidth: "1.5px",
                    },
                    "& .chakra-checkbox__control[data-checked]": {
                      bg: "#008CFF",
                      borderColor: "#008CFF",
                      _hover: {
                        bg: "#008CFF",
                        borderColor: "inherit",
                      },
                    },
                  }}
                />
                <label htmlFor="privacyConsent" className="text-primary-70">
                  개인정보 수집 및 이용 동의
                </label>
              </div>
              <button type="button" className="text-primary-50">
                약관 보기
              </button>
            </div>
          </div>
          <div className="mt-10 flex w-full justify-center">
            <button
              type="submit"
              // disabled={!isFormValid}
              className={`flex h-[98px] w-[488px] items-center justify-center gap-3 rounded-3xl ${
                isFormValid ? "bg-primary-50" : "bg-grayscale-10"
              }`}
            >
              <span
                className={`font-paperlogy-title text-3xl ${
                  isFormValid ? "text-white" : "text-grayscale-40"
                }`}
              >
                견적서 발급받기
              </span>
              <RightDirectionIcon
                className={`${isFormValid ? "stroke-white" : "stroke-[#ACACB9]"}`}
              />
            </button>
          </div>
        </form>
      </div>
      {isPopupOpen && <SubmissionPopup onClose={handClosePopup} />}
    </>
  );
}

export default AnimalInfoFormBox;
