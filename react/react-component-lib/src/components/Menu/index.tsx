interface itemMenu {
  name: string;
  value: string;
}

interface IMenu {
  item: itemMenu[];
  onChange: (s: string) => void;
  title: string;
}

const Menu: React.FC<IMenu> = ({ title, item, onChange, ...rest }) => {
  return (
    <aside {...rest} className="menu">
      <p className="menu-label">{title}</p>
      {item.map((item: itemMenu, itemIndex: number) => (
        <ul key={itemIndex.toString()} className="menu-list">
          <li>
            <a onClick={() => onChange(item.value)}>{item.name}</a>
          </li>
        </ul>
      ))}
    </aside>
  );
};

export default Menu;
