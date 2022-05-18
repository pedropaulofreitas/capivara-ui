import { useState } from "react";

interface IRadio {
  name: string;
  value: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange: (s: string) => void;
}

const Radio: React.FC<IRadio> = ({
  name,
  value,
  isChecked = false,
  isDisabled = false,
  onChange,
  ...rest
}) => {
  const [checked, setChecked] = useState(isChecked ? true : false);
  const selectOption = (optionValue: string) => {
    setChecked(!checked);
    if (checked) {
      onChange(optionValue);
    }
  };
  return (
    <div {...rest} className="control">
      <label className="radio">
        <input
          type="radio"
          onClick={() => selectOption(value)}
          checked={checked}
          disabled={isDisabled}
        />
        <span className="ml-1">{name}</span>
      </label>
    </div>
  );
};

export default Radio;
