import React from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissor from "./Scissor";

const Layout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-around">
        <Paper />
        <Scissor />
      </div>
      <div className="flex justify-center">
        <Rock />
      </div>
    </div>
  );
};

export default Layout;
