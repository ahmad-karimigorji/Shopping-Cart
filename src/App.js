import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./componetns/CartPage/CartPage";
import HomePage from "./componetns/HomePage/HomePage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <div className="w-[300px] sm:w-[620px] lg:w-[1000px] mx-auto my-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shopping-cart" element={<CartPage />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
