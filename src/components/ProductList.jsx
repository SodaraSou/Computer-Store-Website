import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

function ProductList({ listProducts }) {
  return (
    <>
      {listProducts.map((item) => {
        // <ProductItem key={item.id} listProducts={listProducts} />
        return (
          <Link key={item.id} to={`/productpage/${item.data.type}/${item.id}`}>
            {item.data.model}
          </Link>
        );
      })}
    </>
  );
}

export default ProductList;
