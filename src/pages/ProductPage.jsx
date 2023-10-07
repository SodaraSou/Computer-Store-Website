import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../contexts/ComputerStoreAction";
import ComputerStoreContext from "../contexts/ComputerStoreContext";

function ProductPage() {
  const { product, dispatch } = useContext(ComputerStoreContext);
  const { productType, productId } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(productType, productId);
      dispatch({ type: "GET_PRODUCT", payload: data });
    };
    fetchProduct();
  }, []);
  return <div>{product.model}</div>;
}

export default ProductPage;
