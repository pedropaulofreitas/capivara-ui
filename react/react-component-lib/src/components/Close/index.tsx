import classNames from 'classnames/bind';

import { ThemeSizes } from 'theme';

interface IClose {
    size?: ThemeSizes;
};

const Close: React.FC<IClose> = ({
    size = 'normal',
    ...rest
}) => {
    const closeClasses = classNames({
        'delete': true,
        [`is-${size}`]: size,
    });
    return (
        <button className={closeClasses} {...rest}>
        </button>
    );
};

export default Close;
