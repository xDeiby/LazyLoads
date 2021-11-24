import logo from "../logo.svg";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import ShoppingPage from "../02-components-patterns/pages/ShoppingPage";

export const Navigation = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-active" : "";

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          {/* Logo */}
          <img src={logo} alt="React Logo" />

          {/* Links  */}
          <ul>
            <NavLink className={activeLink} to="/">
              Home
            </NavLink>
          </ul>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
