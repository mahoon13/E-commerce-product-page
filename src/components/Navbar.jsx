import { useState } from "react";
import CartIcon from "../assets/icon-cart.svg";
import UserAvatar from "../assets/image-avatar.png";
import MenuIcon from "../assets/icon-menu.svg";
import Sidebar from "./Sidebar";

const Navbar = (props) => {
  return (
    <div className="flex justify-between items-center py-[1.5rem] border-b-[2px] border-gray-200 mobile:px-[1rem] mobile:py-[.8rem]">
      <div className="flex items-center gap-4">
        <SideBarIcon />
        <div className="flex items-center gap-12">
          <NavbarLogo />
          <NavbarList />
        </div>
      </div>

      <div className="flex items-center gap-8 mobile:gap-5">
        <ShoppingCartIcon
          cartItems={props.cartItems}
          cartItemsCount={props.cartItemsCount}
        />
        <AvatarImg />
      </div>
    </div>
  );
};

function SideBarIcon() {
  const [hidden, isHidden] = useState(true);

  return (
    <div className="sm:hidden cursor-pointer">
      {!hidden && <Sidebar isHidden={isHidden} hidden={hidden} />}
      <img
        src={MenuIcon}
        onClick={() => isHidden(!hidden)}
        className="select-none"
      />
    </div>
  );
}

function NavbarList() {
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <ul className="flex gap-6 mt-[8px] mobile:hidden">
      <NavbarLink
        text="Collections"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <NavbarLink
        text="Men"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <NavbarLink
        text="Women"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <NavbarLink
        text="collections"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <NavbarLink
        text="About"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <NavbarLink
        text="Contact"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </ul>
  );
}

function NavbarLink(props) {
  return (
    <li
      className={`cursor-pointer relative ${
        props.text === props.currentPage ? "current__page" : ""
      }`}
      onClick={() => props.setCurrentPage(props.text)}
    >
      {props.text}
    </li>
  );
}

function NavbarLogo() {
  return (
    <div className="font-bold text-4xl font-josefin-sans text-stone-900 select-none">
      sneakers
    </div>
  );
}

function ShoppingCartIcon(props) {
  const [cartMenuHidden, setcartMenuHidden] = useState(true);

  return (
    <div className="sm:relative">
      <div
        className="relative cursor-pointer"
        onClick={() => {
          setcartMenuHidden(!cartMenuHidden);
        }}
      >
        <div className="text-white text-center font-bold bg-orange-500 rounded-[8px] text-center text-[10px] absolute top-[-6px] right-[-8px] w-[22px] select-none">
          {props.cartItemsCount()}
        </div>
        <img src={CartIcon} alt="cart icon" className="select-none" />
      </div>
      <Cart cartItems={props.cartItems} hidden={cartMenuHidden} />
    </div>
  );
}

function Cart(props) {
  return (
    <div
      className={`absolute w-[350px] top-[50px] left-[-200px] mobile:top-[80px] mobile:left-[5%] mobile:w-[90%] mobile:z-10 bg-white shadow-2xl rounded-xl overflow-hidden"
        ${props.hidden ? " hidden" : ""}`}
    >
      <h2 className="p-4 font-bold text-lg select-none">Cart</h2>
      <hr />
      {props.cartItems.length === 0 ? (
        <div className="p-[4rem] text-center">Your cart is empty.</div>
      ) : (
        <div className="flex flex-col p-[1.5rem] gap-[1rem]">
          {props.cartItems.map((item, i) => {
            return <CartItem item={item} key={i} />;
          })}
          <div className="text-center cursor-pointer bg-orange-500 text-white py-[10px] rounded-lg select-none">
            Checkout
          </div>
        </div>
      )}
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="flex gap-[1rem] items-center">
      <img
        src={props.item.thumbnail}
        className="w-[50px] h-[50px] rounded-md select-none"
      />
      <div className="flex flex-col">
        <div className="text-slate-500">{props.item.productName}</div>
        <div className="flex gap-[10px]">
          <div className="text-slate-400">{`${props.item.price} x ${props.item.count}`}</div>
          <div className="font-bold">
            {"$" + Math.floor(props.item.price.slice(1) * props.item.count)}
          </div>
        </div>
      </div>
    </div>
  );
}

function AvatarImg() {
  return (
    <div className="h-14 mobile:h-8 cursor-pointer select-none">
      <img src={UserAvatar} alt="avatar" className="h-full" />
    </div>
  );
}

export default Navbar;
