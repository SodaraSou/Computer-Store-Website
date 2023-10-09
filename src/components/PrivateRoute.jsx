import { useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
