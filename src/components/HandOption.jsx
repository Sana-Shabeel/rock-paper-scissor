import React from "react";

const HandOption = ({ setPlayerchoice, className, img }) => {
  console.log("HandOption", className);
  return (
    <div
      className="  m-6"
      onClick={() =>
        setPlayerchoice({
          className: className,
          img: img,
        })
      }
    >
      <div
        className={`${className} bg-white w-36 h-36 rounded-full grid place-items-center  border-[1.3rem] shadow-4xl cursor-pointer md:w-48 md:h-48`}
      >
        <img src={img} alt="paper" />
      </div>
    </div>
  );
};

export default HandOption;
