import classNames from "classnames/bind";

import { ThemeSizes, ThemeSizeValues } from "theme";
import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";
import { ReactComponent as ArrowDownIcon } from "assets/icons/arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "assets/icons/arrow-up.svg";
import { ReactComponent as UploadIcon } from "assets/icons/upload.svg";

const IconExporter = {
  delete: DeleteIcon,
  arrowDown: ArrowDownIcon,
  arrowUp: ArrowUpIcon,
  upload: UploadIcon,
};

export type IconType = keyof typeof IconExporter;

interface IIcon {
  name: IconType;
  size?: ThemeSizes;
  color?: string;
}

const Icon: React.FC<IIcon> = ({ name, size = "normal", color, ...rest }) => {
  const IconJsx = IconExporter[name];
  const w = ThemeSizeValues[size];
  const iconClasses = classNames({
    icon: true,
  });

  return (
    <span className={iconClasses} {...rest}>
      {IconJsx ? (
        <IconJsx style={{ width: w, height: w, color: color }} />
      ) : null}
    </span>
  );
};

export default Icon;
