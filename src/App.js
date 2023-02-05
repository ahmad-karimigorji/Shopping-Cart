import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./componetns/CartPage/CartPage";
import HomePage from "./componetns/HomePage/HomePage";
import NotFoundPage from "./componetns/NotFoundPage/NotFoundPage";
import Layout from "./Layout/Layout";
import ProductProvider from "./Provider/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <Layout>
        <div className="w-[300px] sm:w-[620px] lg:w-[1000px] mx-auto my-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shopping-cart" element={<CartPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Layout>
    </ProductProvider>
  );
}

export default App;
