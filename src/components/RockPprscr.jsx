import React from "react";
// import triangle from "../images/bg-triangle.svg";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";

function RockPprscr() {
  return (
    <div className="w-96 h-80   mx-auto mt-12  md:w-1/2 md:h-96 anas  flex flex-col justify-between lg:mt-32 lg:w-[29rem] 	">
      <div className="flex justify-between ">
        <div className="bg-white w-32 h-32 rounded-full flex justify-center items-center z-20   py-10 box-shadow border-[1.3rem] border-scoreText shadow-paper	 md:w-48	md:h-48		">
          <img className="w-16" src={paper} alt="paper" />
        </div>
        <div className="bg-white w-32 h-32 rounded-full flex justify-center items-center z-20 box-shadow py-10 md:w-48	md:h-48		">
          <img src={scissors} alt="scissors" />
        </div>
      </div>

      <div className="flex justify-center items-center  mt-7 mx-auto  ">
        <div className="bg-white w-32  h-32 rounded-full flex justify-center items-center z-20 box-shadow py-10 md:w-48	md:h-48		">
          <img src={rock} alt="rock" />
        </div>
      </div>
    </div>
  );
}

export default RockPprscr;
