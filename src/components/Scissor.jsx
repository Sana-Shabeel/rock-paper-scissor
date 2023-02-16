import React from "react";

const Scissor = ({ setplayerChoice }) => {
  return (
    <div className="  m-6" onClick={() => setplayerChoice("Scissor")}>
      <div className="bg-white w-36 h-36  rounded-full grid place-items-center  border-[1.3rem] border-yellow shadow-5xl cursor-pointer md:w-48 md:h-48">
        <img src="/images/icon-scissors.svg" alt="scissors" />
      </div>
    </div>
  );
};

export default Scissor;
