import { useRef } from "react";
import { useFormContext } from "react-hook-form";

interface BreedInputProps {
  petSpeciesList: string[] | undefined;
  breed: string;
  isDropdownVisible: boolean;
  handleFocus: () => void;
  handleBlur: () => void;
  handleClick: (species: string) => void;
}

function BreedInput({
  petSpeciesList,
  breed,
  isDropdownVisible,
  handleFocus,
  handleBlur,
  handleClick,
}: BreedInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const breedInputRef = useRef<HTMLInputElement | null>(null);

  return (
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
        className={`rounded-xl bg-grayscale-05 px-6 py-4 placeholder:text-grayscale-40 focus:outline focus:outline-1 ${
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
              onClick={() => handleClick(species)}
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
  );
}

export default BreedInput;
