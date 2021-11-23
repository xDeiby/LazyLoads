import * as React from "react";
import logo from "../logo.svg";
import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

export const Navigation = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-active" : "";

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink className={activeLink} to="/lazy01">
                Lazy 01
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/lazy02">
                Lazy 02
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/lazy03">
                Lazy 03
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/lazy01" element={<LazyPage01 />} />
          <Route path="lazy02" element={<LazyPage02 />} />
          <Route path="lazy03" element={<LazyPage03 />} />
          <Route path="/*" element={<Navigate to="/lazy01" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
