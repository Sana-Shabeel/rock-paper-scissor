import React, { useEffect, useState } from "react";
import HandOption from "./HandOption";
import { classes } from "../Utils/Classes";

const Result = ({ className, img, sign }) => {
  // compute the computers choice
  const [timer, setTimer] = useState(3);
  const [result, setResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const [classImage, setClassImage] = useState({});
  const computerChooses = () => {
    const choices = ["rock", "paper", "scissor"];
    const chosen = Math.floor(Math.random() * choices.length);

    // set the class name and image
    setClassImage(classes[choices[chosen]]);

    setComputerResult(choices[chosen]);

    return chosen;
  };

  useEffect(() => {
    computerChooses();
    console.log(result);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (sign + computerResult) {
      case "scissorpaper":
      case "rockscissor":
      case "paperrock":
        setResult("YOU WIN!");
        break;
      case "paperscissor":
      case "scissorrock":
      case "rockpaper":
        setResult("YOU LOSE!");
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorscissor":
        setResult("ITS A DRAW!");
        break;
    }
  }, [sign, computerResult]);

  // delay the computer choice by 3
  useEffect(() => {
    const countDown =
      timer > 0
        ? setInterval(() => {
            setTimer(timer - 1);
            console.log("Timer");
          }, 1000)
        : "";

    return () => {
      clearInterval(countDown);
    };
    // to avoid the effect running everytime the timer changes, we put up a conditional
    // to check for if timer > 0
  }, [classImage, timer]);

  console.log(result);

  return (
    <div className="flex item-center justify-around mt-12 md:w-3/5 mx-auto">
      {timer > 0 ? (
        <div className="flex item-center">
          <HandOption className={className} img={img} />
          <div className="bg-timerColor w-32 h-32 rounded-full  cursor-pointer md:w-40 md:h-40 lg:w-48 lg:h-48 self-center"></div>
        </div>
      ) : (
        <div className="flex item-center">
               <div className="shadow-win rounded-full">
          <HandOption className={className} img={img} />
                    </div>

          <h1>{result}</h1>
     
            <HandOption className={classImage.div} img={classImage.img} />
        </div>
      )}
    </div>
  );
};

export default Result;
