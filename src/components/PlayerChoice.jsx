import React from "react";

const Result = ({ playerChoice }) => {
  return (
    <>
      <div className="flex mt-12">
        {/* Player choice */}
        <div className="  m-6">
          <div className="bg-white w-36 h-36 rounded-full grid place-items-center  border-[1.3rem] border-blue shadow-4xl cursor-pointer md:w-48 md:h-48">
            <img src="/images/icon-paper.svg" alt="paper" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
