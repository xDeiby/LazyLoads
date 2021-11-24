export interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}

export type ProductContextProps = { product: Product } & ProductButtonsProps;
