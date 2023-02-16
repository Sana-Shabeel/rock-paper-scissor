import React from "react";

const HandOption = ({ setPlayerchoice, className, img, sign }) => {
  // console.log("HandOption", className);
  return (
    <div
      onClick={() =>
        setPlayerchoice({
          className: className,
          img: img,
          sign: sign,
        })
      }
    >
      <div
        className={`${className} grid h-32 w-32 cursor-pointer place-items-center rounded-full border-[1.3rem] bg-white md:h-40 md:w-40 lg:h-48 lg:w-48`}
      >
        <img src={img} alt="paper" />
      </div>
    </div>
  );
};

export default HandOption;
