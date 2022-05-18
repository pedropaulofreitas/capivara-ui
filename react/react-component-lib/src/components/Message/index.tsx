import { useState } from "react";
import classNames from "classnames/bind";
import { ThemeColors, ThemeSizes } from "theme";

interface IMessage {
  title?: string;
  description: string;
  isDelete?: boolean;
  active?: boolean;
  color?: ThemeColors | "";
  size?: ThemeSizes;
}

const Message: React.FC<IMessage> = ({
  title,
  description,
  isDelete = true,
  color = "",
  active = true,
  size = "normal",
  ...rest
}) => {
  const MessageClasses = classNames({
    message: true,
    [`is-${color}`]: !!color,
    [`is-${size}`]: !!size,
  });
  const [isVisible, setIsVisible] = useState(active ? true : false);
  return (
    <>
      {isVisible && (
        <article {...rest} className={MessageClasses}>
          {title && (
            <div className="message-header">
              <p>{title}</p>
              {isDelete && (
                <button
                  onClick={() => setIsVisible(false)}
                  className="delete"
                  aria-label="delete"
                />
              )}
            </div>
          )}
          <div className="message-body">{description}</div>
        </article>
      )}
    </>
  );
};

export default Message;
