import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../../styles/styles.module.css";

import noImage from "../../assets/no-image.jpg";

export const ProductImage = ({ image = "" }) => {
  const { product } = useContext(ProductContext);

  const aviableImg = image ? image : product.img ? product.img : noImage;

  return <img className={styles.productImg} src={aviableImg} alt="Coffe Mug" />;
};
