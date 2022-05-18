import classNames from "classnames/bind";

interface itemTabs {
  name: string;
  value: string;
  active: boolean;
}

interface ITabs {
  item: itemTabs[];
  size?: "small" | "medium" | "large";
  styles?: "boxed" | "toggle" | "toggle-rounded";
  alignment?: "right" | "centered" | "fullwidth";
  onChange: (s: string) => void;
}

const Tabs: React.FC<ITabs> = ({
  item,
  onChange,
  size = "medium",
  styles = "",
  alignment = "",
  ...rest
}) => {
  const TabsClasses = classNames({
    tabs: true,
    [`is-${size}`]: !!size,
    [`is-${styles}`]: !!styles,
    [`is-${alignment}`]: !!alignment,
  });

  return (
    <div {...rest} className={TabsClasses}>
      <ul>
        {item.map((item: itemTabs, itemIndex: number) => (
          <li
            className={item.active ? "is-active" : ""}
            key={itemIndex.toString()}
            onClick={() => onChange(item.value)}
          >
            <a>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
