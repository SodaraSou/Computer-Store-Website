import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import OrderHistoryDetial from "./pages/OrderHistoryDetial";
import { ComputerStoreProvider } from "./contexts/ComputerStoreContext";

function App() {
  return (
    <ComputerStoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/orderHistory" element={<OrderHistoryDetial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </ComputerStoreProvider>
  );
}

export default App;
