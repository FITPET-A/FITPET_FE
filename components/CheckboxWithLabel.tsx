import { Checkbox } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface CheckboxWithLabelProps {
  id: string;
  label: string;
  required?: boolean;
}

function CheckboxWithLabel({
  id,
  label,
  required = false,
}: CheckboxWithLabelProps) {
  const { register } = useFormContext();

  return (
    <div className="flex items-center">
      <Checkbox
        id={id}
        {...register(id, { required })}
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
      <label htmlFor={id} className="text-primary-70">
        {label}
      </label>
    </div>
  );
}

export default CheckboxWithLabel;
