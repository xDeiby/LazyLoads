import { useEffect, useRef, useState } from "react";
import { Product } from "../interfaces/product.interfaces";

interface Params {
  onChange?: (product: Product, count: number) => void;
  value?: number;
  product: Product;
}

export function useProduct({ product, onChange, value = 0 }: Params) {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      onChange!(product, value);
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange(product, newValue);
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
}
