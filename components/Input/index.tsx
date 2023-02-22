import { Label } from "./style";
import { UseFormRegister } from "react-hook-form";

interface IProps {
  size: "small" | "big";
  labelFor: string;
  type: string;
  placeholder: string;
  register?: UseFormRegister<any>;
}

const Input = ({
  size,
  labelFor,
  type,
  placeholder,
  register,
}: IProps): JSX.Element => {
  return (
    <Label htmlFor={labelFor} size={size}>
      {labelFor}
      <input
        type={type}
        id={labelFor}
        placeholder={placeholder}
        {...register!(labelFor!)}
      />
    </Label>
  );
};

export default Input;
