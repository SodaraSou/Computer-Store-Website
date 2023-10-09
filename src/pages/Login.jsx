import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../contexts/ComputerStoreAction";
import FacebookSvg from "../assets/svg/facebook.svg";
import GoogleSvg from "../assets/svg/google.svg";
import AuthPageImg from "../assets/img/auth_img.png";

function Login() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginStatus = await userLogin(inputData);
      if (loginStatus) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <section className="p-4 xl:py-10 xl:px-0">
        <div className="max-w-[1000px] flex justify-center h-auto bg-[#D9D9D9] rounded-2xl my-10 mx-auto">
          <div className="hidden w-full md:w-1/2 md:flex items-center justify-center p-10">
            <img src={AuthPageImg} alt="AuthPageImg" />
          </div>
          <div className="w-full md:w-1/2 p-10">
            <h1 className="text-4xl font-bold mb-10">Login</h1>
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-lg font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    id="email"
                    onChange={onChange}
                    className="rounded-full w-full h-[38px] px-4"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-lg font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="*********"
                    id="password"
                    onChange={onChange}
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
                      src={GoogleSvg}
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
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
