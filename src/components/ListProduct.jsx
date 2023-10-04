import { useEffect, useContext, useState } from "react";
import { getAllProduct } from "../contexts/ComputerStoreAction";
import ComputerStoreContext from "../contexts/ComputerStoreContext";

function ListProduct() {
  const { listProducts, dispatch } = useContext(ComputerStoreContext);
  useEffect(() => {
    const fetchAllProduct = async () => {
      const listing = await getAllProduct();
      dispatch({ type: "GET_ALL_PRODUCT", payload: listing });
    };
    fetchAllProduct();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {listProducts.map((listing) => (
          <li>{listing.brand}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListProduct;
