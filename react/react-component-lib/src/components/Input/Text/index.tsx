import { useState, useEffect, useRef, forwardRef, ForwardedRef } from "react";
import classNames from "classnames/bind";

import { ThemeColors, ThemeSizes } from "theme";

interface IInput {
  value: string;
  onChange: (v: string) => void;
  debounced?: boolean;
  color?: ThemeColors | "";
  size?: ThemeSizes;
  type?: "text" | "password" | "email" | "tel";
  isRounded?: boolean;
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  label?: string;
  error?: string;
}

const InputText = forwardRef(
  (
    {
      value,
      onChange,
      label = "",
      error = "",
      debounced = false,
      color = "",
      size = "normal",
      type = "text",
      placeholder = "",
      isRounded = false,
      disabled = false,
      isLoading = false,
      ...rest
    }: IInput,
    ref: ForwardedRef<any>
  ) => {
    const [_value, _setValue] = useState("");
    const timeoutId = useRef<any>();
    const inputClasses = classNames({
      input: true,
      [`is-${color}`]: !!color,
      "is-rounded": !!isRounded,
      [`is-${size}`]: size,
    });
    const controlClasses = classNames({
      control: true,
      "is-loading": !!isLoading,
      [`is-${size}`]: !!size,
    });

    useEffect(() => {
      _setValue(value);
    }, [value]);

    useEffect(() => {
      if (debounced) {
        if (!timeoutId.current) {
          timeoutId.current = setTimeout(() => onChange(_value), 500);
        } else {
          clearTimeout(timeoutId.current);
          timeoutId.current = setTimeout(() => onChange(_value), 500);
        }
      } else {
        onChange(_value);
      }

      return () => {
        if (timeoutId.current) clearTimeout(timeoutId.current);
      };
    }, [_value]);

    return (
      <div className="field">
        {label && <label className="label">{label}</label>}
        <div className={controlClasses}>
          <input
            ref={ref}
            value={_value}
            onChange={(e) => _setValue(e.target.value)}
            className={inputClasses}
            type={type}
            placeholder={placeholder}
            disabled={disabled || isLoading}
            {...rest}
          />
        </div>
        {error && <p className="help is-danger">{error}</p>}
      </div>
    );
  }
) as React.FC<IInput>;

export default InputText;
