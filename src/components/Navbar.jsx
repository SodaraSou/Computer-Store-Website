import { Link } from "react-router-dom";
import accountSvg from "../assets/svg/user-regular.svg";
import cartSvg from "../assets/svg/cart-plus-solid.svg";
import { auth } from "../firebase.config";
// import searchSvg from "../assets/svg/magnifying-glass-solid.svg";

function Navbar() {
  return (
    <nav>
      <div className="max-w-7xl mx-auto p-4 xl:px-0 xl:py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-4xl font-bold mr-10">
            Logo
          </Link>
          <ul className="hidden md:flex gap-8 text-lg">
            <li>
              <Link>Categories</Link>
            </li>
            <li>
              <Link>Deals</Link>
            </li>
            <li>
              <Link>What's New</Link>
            </li>
            <li>
              <Link>Delivery</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center text-lg">
          <div>
            <input
              type="text"
              className="w-[347px] h-[48px] px-4 rounded-full bg-[#D9D9D9] mr-10"
              placeholder="Search Product"
            />
          </div>
          <ul className="flex gap-8">
            <li className="flex items-center">
              <Link to="/profile" className="flex flex-row items-center gap-2">
                <img src={accountSvg} alt="instagramSvg" className="svg-size" />
                Account
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/cart" className="flex flex-row items-center gap-2">
                <img src={cartSvg} alt="cartSvg" className="svg-size" />
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
