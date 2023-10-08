import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import { ComputerStoreProvider } from "./contexts/ComputerStoreContext";

function App() {
  return (
    <ComputerStoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </ComputerStoreProvider>
  );
}

export default App;
