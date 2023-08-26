import { NavLink } from "react-router-dom";

const Footer = () => {
  // FooterLinks
  const footerLinks = [
    {
      id: 1,
      title: "Resume",
      path: "https://drive.google.com/file/d/1RtLjN_5h6fUFTAIyCM8ISDVxbVaHubhP/view?usp=sharing",
    },
    {
      id: 2,
      title: "Github",
      path: "https://github.com/Paramseh",
    },
    {
      id: 3,
      title: "Email",
      path: "/email",
    },
  ];
  return (
    <footer className="w-full bg-primaryBG py-14">
      <div className="container mx-auto lg:w-9/12 2xl:w-8/12 w-11/12">
        {/* Wrapper start */}
        <div className="w-full">
          {/* Copyright text */}
          <div className="w-full text-center mb-9">
            <p className="text-sm xl:text-base text-copyrightText">
              Copyright © 2023 Param Sehrawat - All Rights Reserved.
            </p>
          </div>

          {/* Links */}
          <ul className="w-full flex items-center justify-center md:flex-row flex-col gap-4 md:mb-2">
            {footerLinks?.map((item) => {
              const { id, path, title } = item;

              return (
                <li key={id}>
                  <NavLink to={path}>
                    <p className="text-secondaryText text-base lg:text-lg">
                      {title}
                    </p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Wrapper end */}
      </div>
    </footer>
  );
};

export default Footer;
