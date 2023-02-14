import React from "react";

const ScoreBoard = () => {
  return (
    <header className="w-11/12 h-24 border-2 mx-auto border-headerOutline flex justify-between items-center px-4">
      <div className="w-20">
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <div className="w-20 h-[4.5rem] border bg-scoreBoard text-center grid place-items-center rounded-md">
        <div>
          <p className="text-scoreText text-xs">SCORE</p>
          <h1 className="text-darkText text-4xl font-bold">12</h1>
        </div>
      </div>
    </header>
  );
};

export default ScoreBoard;
