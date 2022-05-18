import classNames from "classnames/bind";

interface itemBreadcrumb {
  name: string;
  active: boolean;
  icon?: any;
}

interface IBreadcrumb {
  iconSeparator?: "arrow" | "bullet" | "dot" | "succeeds";
  alignment?: "centered" | "right";
  size?: "small" | "medium" | "large";
  item: itemBreadcrumb[];
  onChange: (s: string) => void;
}

const Breadcrumb: React.FC<IBreadcrumb> = ({
  alignment,
  iconSeparator,
  size,
  item,
  onChange,
  ...rest
}) => {
  const BreadcrumbClasses = classNames({
    breadcrumb: true,
    [`is-${alignment}`]: !!alignment,
    [`has-${iconSeparator}-separator`]: !!iconSeparator,
    [`is-${size}`]: !!size,
  });

  return (
    <nav {...rest} className={BreadcrumbClasses}>
      <ul>
        {item.map((item: itemBreadcrumb, itemIndex: number) => (
          <li
            className={!item.active ? "is-active" : ""}
            key={itemIndex.toString()}
          >
            <a
              onClick={() => onChange(item.name)}
              aria-current={!item.active && "page"}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
