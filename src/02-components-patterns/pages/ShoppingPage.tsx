import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/product";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

export default function ShoppingPage() {
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
        <ProductCard product={product}>
          <ProductImage className="custom-image" />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
        <ProductCard className="bg-dark text-white" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title
            className="text-white font-weight"
            title="Card 2"
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "crimson" }}>
          <ProductCard.Image />
          <ProductCard.Title title="Card 2" />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
}
