import { ThemeColors, ThemeSizes } from 'theme';
import classNames from 'classnames/bind';

interface IProgressBar {
    color?: ThemeColors,
    value?: number | undefined;
    size?: ThemeSizes,
}

const ProgressBar: React.FC<IProgressBar> = ({
    color = 'primary',
    value = undefined,
    size = 'normal',
}) => {
    const progressBarClasses = classNames({
        'progress': true,
        [`is-${size}`]: size,
        [`is-${color}`]: color,
    });
    return (
        <progress value={value} max="100"
            className={progressBarClasses}>
        </progress>
    );
};

export default ProgressBar;
