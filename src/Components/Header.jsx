import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../Constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNav = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };

  useEffect(() => {
    if (openNavigation) {
      document.body.style.overflowY = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.touchAction = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [openNavigation]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] inset-0 bg-n-8 lg:static lg:flex lg:max-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                className={`block relative font-code text-2xl uppercase text-n-1 transtition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } leading-5 lg:hover:text-n-1 xl:px-12`}
                key={item.id}
                href={item.url}
                onClick={handleClick}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HambugerMenu />
        </nav>
        <div className="flex items-center">
          <a
            href="#signup"
            className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            New Account
          </a>
          <Button className="hidden lg:flex" href="#login">
            Sign in
          </Button>
          <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNav}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
