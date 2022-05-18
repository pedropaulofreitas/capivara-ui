import classNames from 'classnames/bind';

import { ThemeColors, ThemeSizes } from 'theme';

interface ITag {
    color?: ThemeColors | '';
    size?: ThemeSizes;
    isRounded?: boolean;
}

const Tag: React.FC<ITag> = ({
    color = '',
    size = 'normal',
    isRounded = false,
    children,
    ...rest
}) => {
    const tagClasses = classNames({
        'tag': true,
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        'is-rounded': isRounded,
    });

    return (
        <span className={tagClasses} {...rest}>
            {children}
        </span>
    );
};

export default Tag;
