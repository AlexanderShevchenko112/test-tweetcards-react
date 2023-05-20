import { Outlet, NavLink } from "react-router-dom";
import css from "./Layout.module.css";
const Layout = () => {
  return (
    <>
      <header>
        <ul className={css.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? css.activeLink : css.headerLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tweets"
              className={({ isActive }) =>
                isActive ? css.activeLink : css.headerLink
              }
            >
              Tweets
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
