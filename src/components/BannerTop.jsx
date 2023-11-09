const BannerTop = () => {
  return (
    <div className="w-full bg-primaryBG py-10 md:py-14">
      <div className="container mx-auto lg:w-9/12 2xl:w-8/12 w-11/12">
        <div className="w-full flex items-center justify-between gap-12 lg:flex-row flex-col">
          {/* left side */}
          <div className="w-full">
            

            {/* Title */}
            <div className="text-center mb-9">
              <h2 className="text-secondaryText text-[28px] leading-[125%] md:text-3xl 2xl:text-4xl">
                The world belongs to the <br className="md:block hidden" />{" "}
                energetic.
              </h2>
            </div>

            {/* line break */}
            <div className="bg-iconColor w-10 h-[2px] mx-auto"></div>

          </div>

          {/* right side */}
          
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
