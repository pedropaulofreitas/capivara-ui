import classNames from "classnames/bind";
import { ThemeColors, ThemeSizes } from "theme";

interface itemSelect {
  name: string;
  value: string;
}
interface ISelect {
  item: itemSelect[];
  color?: ThemeColors | "";
  size?: ThemeSizes;
  isMultiple?: boolean;
  isRounded?: boolean;
  isLoading?: boolean;
  onChange: (s: string) => void;
}

const Select: React.FC<ISelect> = ({
  item,
  onChange,
  color = "",
  size = "normal",
  isMultiple = false,
  isRounded = false,
  isLoading = false,
  ...rest
}) => {
  const selectClasses = classNames({
    select: true,
    [`is-${color}`]: !!color,
    "is-multiple": !!isMultiple,
    "is-rounded": !!isRounded,
    "is-loading": !!isLoading,
    [`is-${size}`]: !!size,
  });
  return (
    <div {...rest} className={selectClasses}>
      <select>
        {item.map((item: itemSelect, itemIndex: number) => (
          <option
            key={itemIndex.toString()}
            onClick={() => onChange(item.value)}
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
