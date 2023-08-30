import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // NavLinks
  const navLinks = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Resume",
      path: "https://drive.google.com/file/d/1_2R7AMjZZJEvxD8nXUjRfX9_VMipg3Dq/view?usp=sharing",
    },
    {
      id: 3,
      title: "Github",
      path: "https://github.com/Paramseh",
    },
    {
      id: 4,
      title: "Email",
      path: "/email",
    },
  ];

  // toggle sidebar state
  const [showSidebar, setShowSidebar] = useState(false);

  // Open sidebar function
  const openSidebar = () => {
    setShowSidebar(true);
  };

  // Close sidebar function
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  // Fixed popup state
  const [fixedTop, setFixedTop] = useState(false);

  // fixed top toggle function
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setFixedTop(true);
    } else {
      setFixedTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-primaryBG py-6 lg:py-4 w-full z-40 ${
        fixedTop === true ? "fixed top-0 left-0" : "relative"
      }`}
    >
      <div className="container mx-auto lg:w-9/12 2xl:w-8/12 w-11/12">
        {/* Wrapper Start */}
        <div className="w-full flex items-center justify-between">
          {/* left Side */}
          <div className="w-full">
            {/* logo */}
            <div>
              <NavLink to="/">
                <h1 className="heading text-lightWhiteText text-logoTextLg 2xl:text-logoText2xl uppercase">
                  Param Sehrawat
                </h1>
              </NavLink>
            </div>
          </div>

          {/* right Side */}
          <div className="w-full lg:block hidden">
            {/* Links box */}
            <ul className="w-full flex items-center justify-end gap-8 navbar">
              {navLinks?.map((item) => {
                const { id, path, title } = item;

                return (
                  <li key={id}>
                    <NavLink to={path}>
                      <p className="uppercase text-lightWhiteText hover:text-secondaryText duration-200 text-base 2xl:text-lg">
                        {title}
                      </p>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden block">
            {/* Icon */}
            <div>
              <svg
                onClick={openSidebar}
                viewBox="0 0 24 24"
                data-ux="IconHamburger"
                className="fill-headingColor w-7 h-7 md:w-9 md:h-9 cursor-pointer"
              >
                <g>
                  <path fillRule="evenodd" d="M4 8h16V6H4z"></path>
                  <path fillRule="evenodd" d="M4 13.096h16v-2.001H4z"></path>
                  <path fillRule="evenodd" d="M4 18.346h16v-2H4z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        {/* Wrapper End */}
      </div>

      {/* Sidebar start */}
      <div
        className={`w-full h-[100svh] bg-primaryBG fixed top-0 ${
          showSidebar === true ? "left-0" : "-left-full"
        } duration-500 z-50`}
      >
        <div className="w-[88%] mx-auto py-5">
          {/* Close Icon */}
          <div className="flex items-center justify-end">
            <svg
              onClick={closeSidebar}
              viewBox="0 0 24 24"
              fill="currentColor"
              data-ux="CloseIcon"
              data-edit-interactive="true"
              data-close="true"
              className="fill-headingColor hover:fill-secondaryText w-7 h-7 md:w-9 md:h-9 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M17.999 4l-6.293 6.293L5.413 4 4 5.414l6.292 6.293L4 18l1.413 1.414 6.293-6.292 6.293 6.292L19.414 18l-6.294-6.293 6.294-6.293z"
              ></path>
            </svg>
          </div>

          {/* Navlinks */}
          <div className="mt-5">
            <ul className="w-full flex items-start justify-start flex-col gap-4 mobile-navbar">
              {navLinks?.map((item, index) => {
                const { id, path, title } = item;
                const isLastItem = index === navLinks.length - 1;

                return (
                  <li
                    key={id}
                    className={`px-7 pb-3 ${
                      isLastItem ? "" : "border-b border-b-borderColor"
                    } w-full`}
                  >
                    <NavLink to={path}>
                      <p
                        onClick={closeSidebar}
                        className="text-lightWhiteText hover:text-secondaryText duration-200 text-[22px]"
                      >
                        {title}
                      </p>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Sidebar end */}
    </nav>
  );
};

export default Navbar;
