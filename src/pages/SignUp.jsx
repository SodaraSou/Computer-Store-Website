function SignUp() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[800px] flex justify-center h-[500px] bg-[#D9D9D9] rounded-2xl my-10">
        <div className="hidden w-full md:w-1/2  md:flex items-center justify-center">
          <img src="./manComputer.png" width={308} height={330} alt="" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
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
            <div className="flex flex-col gap-2 mt-6">
              <button className="bg-white p-2 rounded-2xl font-semibold hover:bg-sky-400 hover:duration-200">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
