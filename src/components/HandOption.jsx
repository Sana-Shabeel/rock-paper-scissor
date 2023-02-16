import React from "react";

const HandOption = ({ setPlayerchoice, className, img, sign }) => {
  // console.log("HandOption", className);
  return (
    <div
      className=""
      onClick={() =>
        setPlayerchoice({
          className: className,
          img: img,
          sign: sign,
        })
      }
    >
      <div
        className={`${className} bg-white w-32 h-32 rounded-full grid place-items-center  border-[1.3rem] shadow-4xl cursor-pointer md:w-40 md:h-40 lg:w-48 lg:h-48`}
      >
        <img src={img} alt="paper" />
      </div>
    </div>
  );
};

export default HandOption;
