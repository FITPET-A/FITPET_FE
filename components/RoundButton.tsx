interface RoundButtonProps {
  label: string;

  isSelected: boolean;
  onClick: () => void;
}

function RoundButton({ label, isSelected, onClick }: RoundButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        isSelected
          ? "border-transparent bg-primary-50 text-white"
          : "border-grayscale-30 text-grayscale-50 hover:border-primary-50"
      } h-10 rounded-[90px] border-1 px-5 py-2 text-md font-semibold`}
    >
      {label}
    </button>
  );
}

export default RoundButton;
