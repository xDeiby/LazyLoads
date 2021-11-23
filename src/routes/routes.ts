import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages";
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
export const LazyLayout = lazy(
  () =>
    import(
      // webpackChunkName:  "LazyLayout"
      "../01-lazyload/layout/LazyLayout"
    )
);

// All Routes
export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    component: LazyLayout,
    name: "Lazy Layout",
    default: true,
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    component: NoLazy,
    name: "No Lazy",
  },
];
