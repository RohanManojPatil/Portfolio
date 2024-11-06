import "./Navbar.css";
import Logo from "../../Components/Logo";
import { navigation } from "../../source";
import { Link } from "react-scroll";
import ThemeToggle from "../../Components/ThemeToggle";
import { TiThMenu } from "react-icons/ti";
import Sidebar from "../../Components/Sidebar";
import { useState } from "react";
import useNavbar from "../../hook/useNavbar";
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const {showNavbar} = useNavbar();

  const handleSidebarToggle = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <>
      <Sidebar openSidebar={openSidebar} onClose={() => setOpenSidebar(false)} />
      <nav id="navbar" className={`flex__center ${showNavbar ? "drop":""}`}>
        <Logo />
        <div className="flex nav__routes">
          {navigation.map((list, index) => (
            <Link
              to={list.id}
              smooth={true}
              spy={true}
              offset={-50}
              className="route"
              activeClass="active"
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </div>
        <div className="flex__center">
          <ThemeToggle />
          <div className="icon__container menu__btn" onClick={handleSidebarToggle}>
            <TiThMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
