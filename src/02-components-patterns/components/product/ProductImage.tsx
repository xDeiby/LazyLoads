import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../../styles/styles.module.css";

import noImage from "../../assets/no-image.jpg";

interface Props {
  image?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ image, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  const aviableImg = image ? image : product.img ? product.img : noImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={aviableImg}
      alt="Coffe Mug"
    />
  );
};
