import { useNavigate } from "react-router-dom";
import { userLogout, getProfile } from "../contexts/ComputerStoreAction";
import { useEffect, useContext } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import ComputerStoreContext from "../contexts/ComputerStoreContext";
import EditSvg from "../assets/svg/pen-to-square-solid.svg";

function Profile() {
  const { loading, userProfile, dispatch } = useContext(ComputerStoreContext);
  // const { loggedIn, test } = useAuthStatus();
  useEffect(() => {
    const getUserProfile = () => {
      try {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const userId = user.uid;
            const data = await getProfile(userId);
            dispatch({ type: "GET_PROFILE", payload: data }); // Unsubscribe when user is found
          } else {
            console.log("No user is currently authenticated");
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    getUserProfile();
  }, []);
  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    try {
      const logoutStatus = userLogout();
      if (logoutStatus) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      {/* <section className="py-10">
        {userProfile.email}
        <button onClick={logOut}>Log Out</button>
      </section> */}
      <section className="p-4 xl:py-10 xl:px-0">
        <div className="w-full md:max-w-[1000px] mx-auto flex flex-col gap-4 md:gap-10">
          {/* Profile Section */}
          <div className="w-full border rounded-xl p-4 md:p-10">
            <div className="flex justify-between items-center mb-4 md:mb-10">
              <h1 className="font-bold text-2xl md:text-4xl">My Profile</h1>
              <button
                onClick={logOut}
                className="bg-red-500 h-10 w-32 rounded-full font-bold"
              >
                Log Out
              </button>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-10">
              <div className="w-full md:w-1/4 flex flex-col gap-4 justify-center items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
                  alt="Profile Image"
                  className="rounded-full w-40 h-40"
                />
                <button className="text-lg flex items-center gap-2">
                  <img src={EditSvg} alt="edit" width={18} height={18} />
                  Edit Profile
                </button>
              </div>
              <div className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="username"
                      className="text-md md:text-lg font-semibold"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      id="username"
                      className="rounded-lg w-full h-[38px] px-4 border"
                    />
                  </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-md md:text-lg font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    id="email"
                    className="rounded-lg w-full h-[38px] px-4 border"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                  <label
                    htmlFor="phoneNumber"
                    className="text-md md:text-lg font-semibold"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    id="phoneNumber"
                    className="rounded-lg w-full h-[38px] px-4 border"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Address and Payment Section */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <div className="w-full md:w-1/2 border rounded-xl p-4 md:p-10">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl md:text-4xl font-bold">Address</h1>
                <button>
                  <img src={EditSvg} alt="edit" className="svg-size" />
                </button>
              </div>
              <div className="text-lg">
                <p>Sou Sodara</p>
                <p>
                  123, St. Norodom, <br />
                  Boeung Kok, Toul Kork, <br /> Phnom Penh, 100100
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 border rounded-xl p-4 md:p-10">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl md:text-4xl font-bold">Payment</h1>
                <button>
                  <img src={EditSvg} alt="edit" className="svg-size" />
                </button>
              </div>
              <div className="text-lg">
                <p>*************1234</p>
                <p>Expiration date: 01/2024</p>
                <p>Sou Sodara</p>
              </div>
            </div>
          </div>
          {/* Order History */}
          <div className="w-full border rounded-xl p-4 md:p-10">
            <h1 className="text-2xl md:text-4xl font-bold">Order History</h1>
            <div className="h-[1px] w-full bg-[#D9D9D9] mt-4 mb-10"></div>
            <div className="flex flex-col gap-4 md:gap-10">
              <div className="flex justify-between">
                <div className="w-full">
                  <h1 className="font-bold">
                    Date of Order 01/12/2023 11:12 AM
                  </h1>
                  <p>Order number: 000000001</p>
                  <p>Order status: Complete</p>
                  <p>Delivery by: J&T</p>
                </div>
                <button className="h-10 w-32 rounded-full bg-[#D9D9D9] font-bold">
                  Detail
                </button>
              </div>
              <div className="flex justify-between">
                <div className="w-full">
                  <h1 className="font-bold">
                    Date of Order 01/12/2023 11:12 AM
                  </h1>
                  <p>Order number: 000000001</p>
                  <p>Order status: Complete</p>
                  <p>Delivery by: J&T</p>
                </div>
                <button className="h-10 w-32 rounded-full bg-[#D9D9D9] font-bold">
                  Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="w-full h-auto flex flex-row">
        <div className="flex flex-col w-full">
          <div className="w-full border rounded-xl mb-5">
            <h1 className="font-bold text-3xl m-10">My Profile</h1>
            <div className="flex">
              <img
                src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
                alt="Profile Image"
                className="rounded-full w-40 h-40 mx-10"
              />
              <div className="ml-10">
                <h1 className="font-bold">Username</h1>
                <p className="mb-2">Sou Sodara</p>
                <h1 className="font-bold">Email Address</h1>
                <p className="mb-2">sousodara@gmail.com</p>
                <h1 className="font-bold">Birthday</h1>
                <p className="mb-2">01/01/2003</p>
                <h1 className="font-bold">Phone</h1>
                <p className="mb-2">012345678</p>
                <h1 className="font-bold">Gender</h1>
                <p>Male</p>
                <p className="mb-10"></p>
              </div>
            </div>
          </div>

          <div className="w-full border rounded-xl mb-5">
            <h1 className="font-bold text-3xl ml-10 mt-10">Address</h1>
            <div className="ml-10 mb-10">
              <p className="mt-3">Sou Sodara</p>
              <p>
                123, St. Norodom, <br />
                Boeung Kok, Toul Kork, <br /> Phnom Penh, 100100
              </p>
            </div>
          </div>

          <div className="w-full border rounded-xl mb-5">
            <h1 className="font-bold text-3xl ml-10 mt-10">Payment</h1>
            <div className="w-12 h-8 ml-10 mt-3 bg-[#D9D9D9] border"></div>
            <div className="ml-10 mt-3 mb-10">
              <p>*************1234</p>
              <p>Expiration date: 01/2024</p>
              <p>Sou Sodara</p>
            </div>
          </div>

          <div className="w-full border rounded-xl mb-5">
            <h1 className="font-bold text-3xl ml-10 mt-10">Order History</h1>
            <div className="flex">
              <div className="ml-10 mb-10 mt-3 w-3/4">
                <h1 className="font-bold">Date of Order 01/12/2023 11:12 AM</h1>
                <p>Order number: 000000001</p>
                <p>Order status: Complete</p>
                <p>Delivery by: J&T</p>
              </div>
              <button className="h-10 w-32 rounded-full bg-[#D9D9D9] font-bold">
                Detail
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Profile;
