import FacebookSvg from "../assets/svg/facebook.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="p-4 xl:py-10 xl:px-0">
        <div className="max-w-[1000px] flex justify-center h-auto bg-[#D9D9D9] rounded-2xl my-10 mx-auto">
          <div className="hidden w-full md:w-1/2  md:flex items-center justify-center">
            {/* <img src="./manComputer.png" width={308} height={330} alt="" /> */}
          </div>
          <div className="w-full md:w-1/2 p-10">
            <h1 className="text-4xl font-bold mb-10">Login</h1>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="FancyDonkey@gmail.com"
                  className="rounded-full w-full h-[38px] px-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  Password
                </label>
                <input
                  type="text"
                  placeholder="*********"
                  className="rounded-full w-full h-[38px] px-4"
                />
              </div>
              <div className="flex justify-end mt-6">
                <Link to="/">Forgot Password?</Link>
              </div>
              <button className="w-full my-6 rounded-full bg-white p-2 font-semibold hover:bg-sky-400 hover:duration-200">
                Login
              </button>
              <div className="relative flex items-center justify-center py-2">
                <div className="h-[1px] bg-black flex-grow"></div>
                <p className="absolute text-lg bg-[#D9D9D9] px-3">
                  or sign in with
                </p>
              </div>
              <div className="flex justify-center mt-6 gap-10">
                <Link to="/">
                  {" "}
                  <img
                    src={FacebookSvg}
                    alt="Facebook Logo"
                    className="w-7 h-7"
                  />
                </Link>
                <Link to="/">
                  <img
                    src={FacebookSvg}
                    alt="Google Logo"
                    className="w-7 h-7"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
