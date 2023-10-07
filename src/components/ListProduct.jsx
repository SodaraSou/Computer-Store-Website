import { Link } from "react-router-dom";
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
      {listProducts.map((listing) => (
        <Link
          to={`/productPage/${listing.data.type}/${listing.id}`}
          key={listing.id}
        >
          {listing.data.brand}
          <p>{listing.id}</p>
        </Link>
      ))}
    </div>
  );
}

export default ListProduct;
