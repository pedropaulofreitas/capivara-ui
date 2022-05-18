import classNames from "classnames/bind";
import Icon from "components/Icon";
import { ThemeColors } from "theme";

interface IFile {
  isRight?: boolean;
  isBoxed?: boolean;
  isFullwidth?: boolean;
  fileName?: string;
  name?: string;
  onChange: () => void;
  color?: ThemeColors | "";
}

const File: React.FC<IFile> = ({
  onChange,
  isRight = false,
  isBoxed = false,
  isFullwidth = false,
  fileName = "",
  color = "",
  name,
  ...rest
}) => {
  const fileClasses = classNames({
    file: true,
    "has-name": !!fileName,
    "is-right": !!isRight,
    "is-boxed": !!isBoxed,
    [`is-${color}`]: !!color,
    "is-fullwidth": !!isFullwidth,
  });
  const colorIcon = () => {
    if (color !== ("warning" || "light" || "white" || "text" || "ghost")) {
      return "white";
    }
    return "black";
  };

  return (
    <div {...rest} className={fileClasses}>
      <label className="file-label">
        <input
          onChange={onChange}
          className="file-input"
          type="file"
          name="resume"
        />
        <span className="file-cta">
          <div className="mt-1 mr-2">
            <Icon name="upload" color={colorIcon.toString()} size="small" />
          </div>
          <span className="file-label">{name}</span>
        </span>
        {fileName && <span className="file-name">{fileName}</span>}
      </label>
    </div>
  );
};

export default File;
