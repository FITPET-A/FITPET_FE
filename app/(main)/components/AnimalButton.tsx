interface AnimalButtonProps {
  label: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
}

function AnimalButton({ label, icon, isSelected, onClick }: AnimalButtonProps) {
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
      {icon} {label}
    </button>
  );
}

export default AnimalButton;
