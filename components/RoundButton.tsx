interface RoundButtonProps {
  label: string;
  isSelected: boolean;
  hasMobileSize?: boolean;
  onClick: () => void;
}

function RoundButton({
  label,
  isSelected,
  hasMobileSize = false,
  onClick,
}: RoundButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        isSelected
          ? "border-transparent bg-primary-50 text-white"
          : "border-grayscale-30 text-grayscale-50 hover:border-primary-50"
      } h-10 whitespace-nowrap rounded-[90px] border-1 font-semibold ${hasMobileSize ? "px-4 py-1 text-sm tablet:px-5 tablet:py-2 tablet:text-md" : "px-5 py-2 text-md"}`}
    >
      {label}
    </button>
  );
}

export default RoundButton;
