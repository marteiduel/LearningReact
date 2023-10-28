import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <div onClick={() => navigate("/")}>Home</div>
          <div onClick={() => navigate("/categories")}>Categories</div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
