import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/product";
import { products } from "../data/products.data";
import { useShoppingCard } from "../hooks/useShoppingCard";
import "../styles/custom-styles.css";

export default function ShoppingPage() {
  const { shoppingCart, onProductCountChange } = useShoppingCard();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={
              Object.keys(shoppingCart).includes(product.id)
                ? shoppingCart[product.id.toString()].count
                : 0
            }
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white font-weight" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        <div className="shopping-cart">
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              className="bg-dark text-white"
              style={{ width: "200px" }}
              product={product}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title title={product.count.toString()} />
              <ProductCard.Buttons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          ))}
        </div>
      </div>

      <p>{JSON.stringify(shoppingCart)}</p>
    </div>
  );
}
