import React from "react";

const ScoreBoard = ({ score }) => {
  return (
    <header className="mx-auto flex h-24 w-11/12 items-center justify-between border-2 border-headerOutline px-4 md:w-4/5 lg:h-36 lg:w-8/12  ">
      <div className="w-20 lg:w-40">
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <div className="grid h-[4.5rem] w-20 place-items-center rounded-md border bg-scoreBoard text-center lg:h-auto lg:w-36 lg:py-3">
        <div>
          <p className="text-xs text-scoreText lg:text-base">SCORE</p>
          <h1 className="text-4xl font-bold text-darkText lg:text-6xl">
            {score}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default ScoreBoard;
