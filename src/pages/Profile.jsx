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
    </div>
  );
}

export default Profile;
