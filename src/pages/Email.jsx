import { useState } from "react";

const Email = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedTwo, setIsFocusedTwo] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [email, setEmail] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleEmailFocus = () => {
    setIsFocusedTwo(true);
  };

  const handleBlur = () => {
    setIsFocused(nameValue.length > 0);
  };

  const handleEmailBlur = () => {
    setIsFocusedTwo(email.length > 0);
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="w-full bg-primaryBG py-14">
      <div className="container mx-auto lg:w-9/12 2xl:w-8/12 w-11/12">
        {/* Wrapper start */}
        <div className="w-full lg:w-8/12 mx-auto">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h1 className="text-secondaryText text-[28px] md:text-[33px] 2xl:text-[42px] leading-[125%] heading uppercase">
              email me
            </h1>
          </div>

          {/* sub heading */}
          <div>
            <p className="text-lightWhiteText md:text-start text-center text-lg md:text-xl lg:text-[22px] 2xl:text-2xl">
              Please Don{"'"}t Hesitate to Reach out!
            </p>
          </div>

          {/* Form Section */}
          <form className="w-full mt-7">
            {/* Name Box */}
            <div className="w-full bg-black relative">
              <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleNameChange}
                value={nameValue}
                type="text"
                className="w-full outline-none text-labelColor border border-transparent focus:border-lightWhiteText bg-transparent pt-[23px] pb-[7px] px-4 duration-200"
              />
              <label
                className={`text-base text-labelColor absolute left-4 ${
                  isFocused || nameValue.length > 0
                    ? "top-0 text-[13px]"
                    : "top-[14px]"
                } duration-200`}
              >
                Name
              </label>
            </div>

            {/* Email Box */}
            <div className="w-full bg-black relative my-7">
              <input
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                onChange={handleEmailChange}
                value={email}
                type="email"
                className="w-full outline-none border border-transparent focus:border-lightWhiteText text-labelColor bg-transparent pt-[23px] pb-[7px] px-4 duration-200"
              />
              <label
                className={`text-base text-labelColor absolute left-4 ${
                  isFocusedTwo || email.length > 0
                    ? "top-0 text-[13px]"
                    : "top-[14px]"
                } duration-200`}
              >
                Email
              </label>
            </div>

            {/* Message Box */}
            <div className="w-full bg-black">
              <textarea
                spellCheck={false}
                rows="7"
                className="w-full bg-transparent outline-none border border-transparent focus:border-lightWhiteText py-5 px-4 text-labelColor duration-200"
                placeholder="Message"
              ></textarea>
            </div>

            {/* Button */}
            <div className="my-7">
              <button
                type="submit"
                className="w-full bg-secondaryText text-black uppercase 2xl:text-base text-sm font-bold tracking-[1px] px-8 py-4 hover:bg-buttonHover duration-300"
              >
                send
              </button>
            </div>

            {/* Protection  */}
            <div className="text-center">
              <p className="text-xs lg:text-sm text-copyrightText">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </div>
          </form>
        </div>
        {/* Wrapper end */}
      </div>
    </div>
  );
};

export default Email;
