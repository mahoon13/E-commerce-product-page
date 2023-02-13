import CloseIcon from "../assets/icon-close.svg";

const Sidebar = (props) => {
  return (
    <div className="fixed w-[300px] h-full bg-white z-50 p-[2rem] flex flex-col gap-[3rem] top-0 left-0 sm:hidden">
      <CloseButton onclick={() => props.isHidden(!props.hidden)} />
      <NavbarList />
    </div>
  );
};

function CloseButton(props) {
  return <img src={CloseIcon} className="w-[1rem]" onClick={props.onclick} />;
}

function NavbarList() {
  return (
    <ul className="flex flex-col gap-4 mt-[8px] w-fit">
      <NavbarLink text="Collections" />
      <NavbarLink text="Men" />
      <NavbarLink text="Women" />
      <NavbarLink text="collections" />
      <NavbarLink text="About" />
      <NavbarLink text="Contact" />
    </ul>
  );
}

function NavbarLink(props) {
  return <li className="cursor-pointer font-bold text-xl">{props.text}</li>;
}

export default Sidebar;
