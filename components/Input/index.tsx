import { LabelHTMLAttributes } from "react";
import { Label } from "./style";
import { UseFormRegister } from "react-hook-form";

interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {
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
  ...rest
}: IProps): JSX.Element => {
  return (
    <Label htmlFor={labelFor} size={size} {...rest}>
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
