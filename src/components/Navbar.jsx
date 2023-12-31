import { Link } from "react-router-dom";
import accountSvg from "../assets/svg/user-regular.svg";
import cartSvg from "../assets/svg/cart-plus-solid.svg";
import { auth } from "../firebase.config";
// import searchSvg from "../assets/svg/magnifying-glass-solid.svg";

function Navbar() {
  return (
    <nav>
      <div className="max-w-7xl mx-auto p-4 xl:px-0 xl:py-6 flex flex-col gap-4 md:gap-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold">
            Logo
          </Link>
          <div className="flex items-center text-lg">
            <div className="hidden md:block">
              <input
                type="text"
                className="w-[347px] h-[38px] px-4 rounded-lg bg-[#D9D9D9] mr-10"
                placeholder="Search Product"
              />
            </div>
            <ul className="flex gap-4 md:gap-8">
              <li className="flex items-center">
                <Link
                  to="/profile"
                  className="flex flex-row items-center gap-2"
                >
                  <img
                    src={accountSvg}
                    alt="instagramSvg"
                    className="svg-size"
                  />
                  <span className="hidden md:block">Account</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/cart" className="flex flex-row items-center gap-2">
                  <img src={cartSvg} alt="cartSvg" className="svg-size" />
                  <span className="hidden md:block">Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="block md:hidden">
          <input
            type="text"
            className="w-full h-[38px] px-4 rounded-lg bg-[#D9D9D9]"
            placeholder="Search Product"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
