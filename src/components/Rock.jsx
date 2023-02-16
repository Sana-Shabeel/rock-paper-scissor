import React from "react";

const Rock = ({ setplayerChoice }) => {
  return (
    <div className="  m-6" onClick={() => setplayerChoice("Rock")}>
      <div className="bg-white w-36 h-36 rounded-full grid place-items-center  border-[1.3rem] border-red shadow-6xl cursor-pointer md:w-48 md:h-48">
        <img src="/images/icon-rock.svg" alt="paper" />
      </div>
    </div>
  );
};

export default Rock;
