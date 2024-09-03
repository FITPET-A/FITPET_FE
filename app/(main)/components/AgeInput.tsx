import { useFormContext } from "react-hook-form";

function AgeInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
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
  );
}

export default AgeInput;
