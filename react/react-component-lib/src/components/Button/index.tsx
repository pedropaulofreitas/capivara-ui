import classNames from 'classnames/bind';

import { ThemeColors, ThemeSizes } from 'theme';

interface IButton {
    color?: ThemeColors | '';
    size?: ThemeSizes;
    isOutlined?: boolean;
    isLight?: boolean;
    isFullWidth?: boolean;
    isRounded?: boolean;
    isLoading?: boolean;
}

const Button: React.FC<
    IButton & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ 
    color = '',
    size = 'normal',
    isOutlined = false,
    isLight = false,
    isFullWidth = false,
    isRounded = false,
    isLoading = false,
    children,
    ...rest
}) =>{
    const buttonClasses = classNames({
        'button': true,
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        'is-light': isLight,
        'is-fullwidth': isFullWidth,
        'is-outlined': isOutlined,
        'is-rounded': isRounded,
        'is-loading': isLoading,
    })
    return (
        <button
            className={buttonClasses}
            {...rest}
            >{children}</button>
    );
};

export default Button;
