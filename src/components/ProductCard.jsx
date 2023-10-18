import { Link } from "react-router-dom";
import test from "../assets/img/Apple_MacBook_Pro_2023.jpg";
function ProductCard() {
  return (
    <Link
      to="/"
      className="w-full h-[400px] bg-[#D9D9D9] rounded-2xl flex flex-col"
    >
      <img src={test} alt="" className="h-2/3 p-10" />
      <div className="h-1/3 px-10 flex flex-col gap-2 justify-center items-center">
        <h1 className="text-lg font-semibold">MacBook Pro M2</h1>
        <p className="text-md">$2000</p>
      </div>
    </Link>
  );
}

export default ProductCard;
