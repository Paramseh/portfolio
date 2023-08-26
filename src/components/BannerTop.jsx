const BannerTop = () => {
  return (
    <div className="w-full bg-primaryBG py-10 md:py-14">
      <div className="container mx-auto lg:w-9/12 2xl:w-8/12 w-11/12">
        <div className="w-full flex items-center justify-between gap-12 lg:flex-row flex-col">
          {/* left side */}
          <div className="w-full">
            {/* Svg icon */}
            <div className="flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 24 24"
                width="40"
                height="40"
                data-ux="Icon"
                data-aid="QUOTE_DECORATION_RENDERED_quote"
                className="fill-iconColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.373 20c-1.343 0-2.417-.494-3.222-1.482C3.384 17.491 3 16.168 3 14.548c0-2.212.575-4.207 1.726-5.985C5.915 6.746 7.718 5.225 10.134 4l.633.948c-1.15.711-2.205 1.719-3.164 3.022-.92 1.265-1.381 2.548-1.381 3.852 0 .356.096.652.288.89.191.197.479.295.863.295.958 0 1.764.356 2.416 1.067.69.672 1.036 1.501 1.036 2.489s-.346 1.817-1.036 2.489c-.652.632-1.458.948-2.416.948zm9.953 0c-1.343 0-2.417-.494-3.222-1.482-.767-1.027-1.15-2.35-1.15-3.97 0-2.212.575-4.207 1.725-5.985C15.87 6.746 17.671 5.225 20.087 4l.633.948c-1.15.711-2.205 1.719-3.164 3.022-.92 1.265-1.38 2.548-1.38 3.852 0 .356.095.652.287.89.192.197.48.295.863.295.959 0 1.764.356 2.416 1.067.69.672 1.036 1.501 1.036 2.489s-.345 1.817-1.036 2.489c-.652.632-1.457.948-2.416.948z"
                ></path>
              </svg>
            </div>

            {/* Title */}
            <div className="text-center mb-9">
              <h2 className="text-secondaryText text-[28px] leading-[125%] md:text-3xl 2xl:text-4xl">
                The world belongs to the <br className="md:block hidden" />{" "}
                energetic.
              </h2>
            </div>

            {/* line break */}
            <div className="bg-iconColor w-10 h-[2px] mx-auto"></div>

            {/* Writer */}
            <div className="mt-7 text-center">
              <p className="text-base 2xl:text-lg text-lightWhiteText">
                Ralph Waldo Emerson
              </p>
            </div>
          </div>

          {/* right side */}
          <div className="w-full">
            <img
              src="./images/banner-1.webp"
              alt="banner-image"
              className="w-full h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
