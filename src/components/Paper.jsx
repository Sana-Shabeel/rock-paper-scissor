import React from "react";

const Paper = ({ setplayerChoice }) => {
  return (
    <div className="  m-6" onClick={() => setplayerChoice("paper")}>
      <div className="bg-white w-36 h-36 rounded-full grid place-items-center  border-[1.3rem] border-blue shadow-4xl cursor-pointer md:w-48 md:h-48">
        <img src="/images/icon-paper.svg" alt="paper" />
      </div>
    </div>
  );
};

export default Paper;
