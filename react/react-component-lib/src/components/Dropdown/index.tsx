import classNames from "classnames/bind";
import Icon from "components/Icon";
import { useState, useEffect, useRef } from "react";
import { ThemeColors } from "theme";

interface itemDropdown {
  name: string;
  divider?: boolean;
  value: string;
}

interface IDropdown {
  placeholder?: string;
  item: itemDropdown[];
  click?: "active" | "hoverable";
  color?: ThemeColors | "";
  isRight?: boolean;
  isUp?: boolean;
  onChange: (s: string) => void;
}

const Dropdown: React.FC<IDropdown> = ({
  item,
  placeholder,
  onChange,
  click = "active",
  isRight = false,
  isUp = false,
  color = "",
  ...rest
}) => {
  const DropdownClasses = classNames({
    dropdown: true,
    [`is-${click}`]: !!click,
    "is-right": !!isRight,
    "is-up": !!isUp,
  });
  const [isVisible, setIsVisible] = useState(false);
  const elRef = useRef<any>(null);
  const selectOption = (optionValue: string) => {
    setIsVisible(false);
    onChange(optionValue);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (elRef && elRef.current && !elRef.current.contains(e.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div {...rest} className={DropdownClasses}>
      <div
        onClick={() => setIsVisible(!isVisible)}
        ref={elRef}
        className="dropdown-trigger"
      >
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          color={color}
        >
          <span>{placeholder}</span>
          <div className="mt-1 ml-4 mr-1">
            <Icon name={isUp ? "arrowUp" : "arrowDown"} size="small" />
          </div>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        {isVisible && (
          <>
            <div className="dropdown-content">
              {item.map((item: itemDropdown, itemIndex: number) => (
                <div key={itemIndex.toString()}>
                  {item.divider && <hr className="dropdown-divider" />}
                  <a
                    onClick={() => selectOption(item.value)}
                    className="dropdown-item"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
