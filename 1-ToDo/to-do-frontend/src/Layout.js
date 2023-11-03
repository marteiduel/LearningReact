import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active-nav-item" : "nav-item"
          }
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-item active-nav-item" : "nav-item"
          }
          to="/categories"
        >
          Categories
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
