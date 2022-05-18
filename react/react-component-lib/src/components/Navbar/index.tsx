import classNames from "classnames/bind";
import { ThemeColors } from "theme";

interface itemNavbar {
  component: any;
  isStart: boolean;
}
interface INavbar {
  item: itemNavbar[];
  color?: ThemeColors;
}

const Navbar: React.FC<INavbar> = ({
  item,
  children,
  color = "primary",
  ...rest
}) => {
  const NavbarClasses = classNames({
    navbar: true,
    [`is-${color}`]: !!color,
  });
  return (
    <nav
      {...rest}
      className={NavbarClasses}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item">{children}</a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        {item.map((item: itemNavbar, itemIndex: number) => (
          <div
            key={itemIndex.toString()}
            className={item.isStart ? "navbar-start" : "navbar-end"}
          >
            <a className="navbar-item">{item.component}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
