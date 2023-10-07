import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ListProduct from "./components/ListProduct";
import { ComputerStoreProvider } from "./contexts/ComputerStoreContext";

function App() {
  return (
    <ComputerStoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/productPage/:productType/:productId"
            element={<ProductPage />}
          />
          <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
        <Footer />
      </Router>
    </ComputerStoreProvider>
  );
}

export default App;
