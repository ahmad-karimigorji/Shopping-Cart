import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../Provider/ProductProvider";

const Layout = ({ children }) => {
  const { cart } = useContext(ProductContext);
  return (
    <>
      <header className="sticky top-[-56px] z-10">
        <h2 className="text-center py-3 font-bold text-2xl">Shopping Cart</h2>
        <div className=" text-white flex justify-center bg-gray-800">
          <nav className="w-[300px] sm:w-[620px] lg:w-[1000px] font-bold">
            <NavLink
              className={(linkData) =>
                linkData.isActive
                  ? `bg-white text-gray-800 inline-block px-3 py-3`
                  : `inline-block px-3 py-3`
              }
              to="/"
            >
              Home
            </NavLink>
            <span className="relative">
              <NavLink
                className={(linkData) =>
                  linkData.isActive
                    ? `bg-white text-gray-800 inline-block px-3 py-3`
                    : `px-3 py-3`
                }
                to="shopping-cart"
              >
                Cart
              </NavLink>
              {cart.length > 0 && (
                <span className="absolute w-6 h-6 flex justify-center items-center top-[-14px] right-[-10px] bg-red-500 rounded-full">
                  {cart.length}
                </span>
              )}
            </span>
          </nav>
        </div>
      </header>
      {children}
    </>
  );
};

export default Layout;
