import { useNavigate } from "react-router-dom";
import { userLogout, getProfile } from "../contexts/ComputerStoreAction";
import { useEffect, useContext } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import ComputerStoreContext from "../contexts/ComputerStoreContext";

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
      <section className="py-10">
        {userProfile.email}
        <button onClick={logOut}>Log Out</button>
      </section>

      <h1 className="font-bold text-4xl mb-10">Profile</h1>
      <div className="w-full h-auto flex flex-row">
        <ul className="flex flex-col gap-4 text-lg mb-10 w-2/5">
          <li>My Profile</li>
          <li>Address</li>
          <li>Order History</li>
          <li>Payment</li>
        </ul>
        <div className="flex flex-col w-full">
          <div className="w-full border rounded-xl mb-5">
            <h1 className="font-bold text-3xl m-10">My Profile</h1>
            <div className="flex">
              <img src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="Profile Image" className="rounded-full w-40 h-40 mx-10" />
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
              <p>123, St. Norodom, <br />Boeung Kok,
              Toul Kork, <br /> Phnom Penh, 100100</p>
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
            <div className="flex ">
              <div className="ml-10 mb-10 mt-3 w-3/4">
                <h1 className="font-bold">Date of Order 01/12/2023 11:12 AM</h1>
                <p>Order number: 000000001</p>
                <p>Order status: Complete</p>
                <p>Delivery by: J&T</p>
              </div>
              <button className="h-10 w-32 rounded-full bg-[#D9D9D9] font-bold">Detail</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
