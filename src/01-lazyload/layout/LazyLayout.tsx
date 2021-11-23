import React from "react";

import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { LazyPage01, LazyPage02, LazyPage03 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout Page</h1>

      {/* Links Rutas hijas */}
      <ul>
        <ul>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </ul>
        <ul>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </ul>
        <ul>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </ul>
      </ul>

      {/* Rutas hijas */}
      <Routes>
        <Route path={"lazy1"} element={<LazyPage01 />} />
        <Route path={"lazy2"} element={<LazyPage02 />} />
        <Route path={"lazy3"} element={<LazyPage03 />} />

        {/* De no definirlo, no ira a ninguna ruta de las anteriores */}
        {/* <Route path="/*" element={<h1>Not Found</h1>} /> */}
        <Route path="/*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
