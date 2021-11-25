import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from "../../hooks/useProduct";
import {
  Product,
  ProductContextProps,
} from "../../interfaces/product.interfaces";
import styles from "../../styles/styles.module.css";

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (product: Product, count: number) => void;
  value?: number;
}

export function ProductCard({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: Props) {
  const productHook = useProduct({ product, onChange, value });

  return (
    <Provider value={{ ...productHook, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
}

// Opcional (Funciona si exportamos el componente desde este archivo, si lo exportamos desde un index, no aplicara)
// ProductCard.Image = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;
