import { useState } from "react";
import { Product } from "../interfaces/product.interfaces";

interface ProductInCart extends Product {
  count: number;
}

type ShoppingCart = { [key: string]: ProductInCart };

export const useShoppingCard = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

  const onProductCountChange = (product: Product, count: number) => {
    setShoppingCart((prev) => {
      if (count === 0) {
        const values = { ...prev };
        delete values[product.id];
        return values;
      }

      return { ...prev, [product.id]: { ...product, count } };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
