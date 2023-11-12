const BannerBottom = () => {
  return (
    <div className="w-full bg-black py-10 md:py-14">
      <div className="container mx-auto lg:w-9/12 2xl:w-8/12 w-11/12">
        {/* Wrapper Start */}
        <div className="w-full flex items-center justify-between gap-12 lg:flex-row flex-col">
          {/* Left side */}
          <div className="w-full">
            <img
              src="./images/banner-22.jpg"
              alt="banner-2"
              className="w-8vw h-8vw"
            />
          </div>

          {/* Right side */}
          <div className="w-full">

            {/* Content */}
            <div className="mb-8 mt-7">
              <p className="text-xl md:text-[22px] 2xl:text-2xl text-primaryText leading-[160%] 2xl:leading-[155%]">
                Hello and welcome to my Personal Website! I love{" "}
                to work on code, 
                I particularly enjoy anything from 
                <span className="font-bold"> networks</span> to{" "}
                <span className="font-bold">systems</span> to 
                <span className="font-bold"> Web3 </span>{" "}
                to <span className="font-bold">CV. </span>
                Take a look at my resume to see some of my latest projects.
              </p>
            </div>

            {/* Button */}
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1pn5R3RAYT7yHZs05FvsoX03TGjHCURfB/view?usp=sharing"
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
