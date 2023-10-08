import AuthPageImg from "../assets/img/auth_img.png";

function SignUp() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className=" p-4 xl:py-10 xl:px-0">
        <div className="max-w-[1000px] flex justify-center h-auto bg-[#D9D9D9] rounded-2xl my-10 mx-auto">
          <div className="hidden w-full md:w-1/2 md:flex items-center justify-center p-10">
            <img src={AuthPageImg} alt="AuthPageImg" />
          </div>
          <div className="w-full md:w-1/2 p-10">
            <h1 className="text-4xl font-bold mb-10">Sign Up</h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-lg font-semibold">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Fancy"
                    className="rounded-full w-full h-[38px] px-4"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-lg font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Donkey"
                    className="rounded-full w-full h-[38px] px-4"
                  />
                </div>
              </div>
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
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  Confirm Password
                </label>
                <input
                  type="text"
                  placeholder="*********"
                  className="rounded-full w-full h-[38px] px-4"
                />
              </div>
              <button className="w-full mt-6 bg-white p-2 rounded-full font-semibold hover:bg-sky-400 hover:duration-200">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SignUp;
