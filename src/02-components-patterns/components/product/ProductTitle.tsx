import { CSSProperties, useContext } from "react";
import styles from "../../styles/styles.module.css";

import { ProductContext } from "./ProductCard";

interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

// Title
export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title || product.title}
    </span>
  );
};
