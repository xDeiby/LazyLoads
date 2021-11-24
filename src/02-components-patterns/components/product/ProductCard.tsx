import { createContext } from "react";
import { useProduct } from "../../hooks/useProduct";
import {
  ProductContextProps,
  ProductCardProps,
} from "../../interfaces/product.interfaces";
import styles from "../../styles/styles.module.css";

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
const { Provider } = ProductContext;

export function ProductCard({ product, children }: ProductCardProps) {
  const productHook = useProduct();

  return (
    <Provider value={{ ...productHook, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
}

// Opcional (Funciona si exportamos el componente desde este archivo, si lo exportamos desde un index, no aplicara)
// ProductCard.Image = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;
