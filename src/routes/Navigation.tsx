import * as React from "react";

import logo from "../logo.svg";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-active" : "";

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            {/* Logo */}
            <img src={logo} alt="React Logo" />

            {/* Links  */}
            <ul>
              {routes.map(({ path, to, name }) => (
                <li key={path}>
                  <NavLink className={activeLink} to={to}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Rutas */}
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route
              path="/*"
              element={
                <Navigate
                  to={
                    routes.find((route) => route.default && route)?.to ||
                    routes[0].path
                  }
                  replace
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
