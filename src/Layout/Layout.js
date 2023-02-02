import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
    return (
      <>
        <header className="">
            <h2 className="text-center py-3 font-bold text-2xl">Shopping Cart</h2>
          <div className=" text-white flex justify-center bg-gray-800">
              <nav className="w-[300px] md:w-[700px] font-bold">
                  <NavLink className={(linkData) => linkData.isActive ? `bg-white text-gray-800 inline-block px-3 py-3` : `inline-block px-3 py-3`} to="/">Home</NavLink>
                  <NavLink className={(linkData) => linkData.isActive ? `bg-white text-gray-800 inline-block px-3 py-3` : `px-3 py-3`} to="shopping-cart">Cart</NavLink>
              </nav>
          </div>
        </header>
        {children}
      </>
    );
  };
  
  export default Layout;
  