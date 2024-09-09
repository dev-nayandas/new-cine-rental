/* eslint-disable no-unused-vars */
import ring from "./assets/ring.svg"
import logo from "./assets/logo.svg"
import moon from "./assets/icons/moon.svg"
import sun from "./assets/icons/sun.svg"
import cart from "./assets/shopping-cart.svg"
import { useContext, useState } from "react";
import ShopingCard from "./ShopingCard";
import { MovieContext, ThemeContext } from "./context";
import { data } from "autoprefixer"
const NavBar = () => {

  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);


  const handleCartShow = () => {
    setShowCart(true);
  };
  const handleClose = () => {
    setShowCart(false);
  };
  return (
   <>
   {showCart && <ShopingCard onClose={handleClose}/>}
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=>setDarkMode(!darkMode)}
            >
              <img
                src={darkMode ? sun : moon }
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              onClick={handleCartShow}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
              href="#"
            >
              {
                state.cartData.length > 0 && <span  className="absolute top-1/2 left-1/2 translate-x-[32%] translate-y-[-112%] bg-[#00d991] w-5 h-5 text-[#ffffff] flex items-center justify-center rounded-full">{state.cartData.length}</span>
              }
              <img
                src={cart}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
   </>
  );
};

export default NavBar;
