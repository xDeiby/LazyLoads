import { lazy, LazyExoticComponent } from "react";
// import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

export interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  default?: boolean;
}

// Lazy Load
export const Lazy01 = lazy(
  () =>
    import(
      // webpackChunkName:  "LazyPage01"
      "../01-lazyload/pages/LazyPage01"
    )
);
export const Lazy02 = lazy(
  () =>
    import(
      // webpackChunkName:  "LazyPage02"
      "../01-lazyload/pages/LazyPage02"
    )
);
export const Lazy03 = lazy(
  () =>
    import(
      // webpackChunkName:  "LazyPage03"
      "../01-lazyload/pages/LazyPage03"
    )
);

// All Routes
export const routes: Route[] = [
  {
    to: "/lazy01",
    path: "lazy01",
    component: Lazy01,
    name: "lazy 01",
    default: true,
  },
  {
    to: "/lazy02",
    path: "lazy02",
    component: Lazy02,
    name: "lazy 02",
  },
  {
    to: "/lazy03",
    path: "lazy03",
    component: Lazy03,
    name: "lazy 03",
  },
];
