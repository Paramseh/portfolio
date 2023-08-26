const BannerBottom = () => {
  return (
    <div className="w-full bg-black py-10 md:py-14">
      <div className="container mx-auto lg:w-9/12 2xl:w-8/12 w-11/12">
        {/* Wrapper Start */}
        <div className="w-full flex items-center justify-between gap-12 lg:flex-row flex-col">
          {/* Left side */}
          <div className="w-full">
            <img
              src="./images/banner-2.webp"
              alt="banner-2"
              className="w-full h-full"
            />
          </div>

          {/* Right side */}
          <div className="w-full">
            {/* Heading */}
            <div>
              <h1 className="text-headingColor text-[28px] md:text-[33px] 2xl:text-[42px] leading-[125%] heading uppercase">
                AI architect
              </h1>
            </div>

            {/* Content */}
            <div className="mb-8 mt-7">
              <p className="text-xl md:text-[22px] 2xl:text-2xl text-primaryText leading-[160%] 2xl:leading-[155%]">
                Hello and welcome to my Personal Website! As a{" "}
                <br className="lg:block hidden" />{" "}
                <span className="font-bold">AI and SWE Enthusiast,</span> I have
                a passion for <br className="lg:block hidden" /> working on{" "}
                <span className="font-bold">
                  innovative technologies and <br className="lg:block hidden" />{" "}
                  crafting efficient algorithms.
                </span>{" "}
                Take a look at my resume to see some of my latest projects.
              </p>
            </div>

            {/* Button */}
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1RtLjN_5h6fUFTAIyCM8ISDVxbVaHubhP/view?usp=sharing"
              >
                <button className="w-full md:w-auto bg-secondaryText text-black uppercase 2xl:text-base text-sm font-bold tracking-[1px] px-8 py-4 hover:-translate-y-2 md:hover:translate-x-4 hover:bg-buttonHover duration-300">
                  find out more
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Wrapper End */}
      </div>
    </div>
  );
};

export default BannerBottom;
