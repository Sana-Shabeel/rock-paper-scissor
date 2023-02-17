import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HandOption from "../components/HandOption";
import { classes } from "../Utils/Classes";

const Result = ({ className, img, sign, setScore }) => {
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
        setResult("YOU WIN");
        break;
      case "paperscissor":
      case "scissorrock":
      case "rockpaper":
        setResult("YOU LOSE");
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorscissor":
        setResult("ITS A DRAW");
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
            if (timer === 1) {
              console.log(timer);
              if (result === "YOU WIN") {
                setScore((prev) => prev + 1);
              } else if (result === "YOU LOSE") {
                setScore((prev) => prev - 1);
              }
            }
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
    <div className="grid h-96 place-items-center md:mt-20">
      <div className="relative mx-auto flex  items-center justify-around">
        {timer > 0 ? (
          <div className="flex items-center  gap-4">
            <HandOption className={className} img={img} />
            <div className="grid h-32 w-32 cursor-pointer place-items-center self-center  rounded-full bg-timerColor md:h-40 md:w-40 lg:h-48 lg:w-48">
              <h1 className="font-barlow text-7xl font-bold text-white">
                {timer}
              </h1>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-20">
            <div className="md:flex md:flex-col-reverse">
              <div
                className={`${
                  result === "YOU WIN" ? "shadow-win" : ""
                } rounded-full`}
              >
                <HandOption className={className} img={img} />
              </div>
              <h1 className="my-8 whitespace-pre text-center font-barlow text-lg font-semibold text-white">
                YOU PICKED
              </h1>
            </div>

            <div className="absolute -bottom-32 left-16 flex flex-col items-center gap-2 md:relative md:left-0 md:top-0 md:self-center">
              <h1 className="mx-6 whitespace-pre font-barlow text-4xl font-bold text-white	 ">
                {result}
              </h1>
              <Link to={"/"}>
                <button className="rounded-md bg-white py-2 px-8">
                  PLAY AGAIN
                </button>
              </Link>
            </div>

            <div className="md:flex md:flex-col-reverse">
              <div
                className={`${
                  result === "YOU LOSE" ? "shadow-win" : ""
                } rounded-full`}
              >
                <HandOption className={classImage.div} img={classImage.img} />
              </div>
              <h1 className="my-8 whitespace-pre text-center font-barlow text-lg font-semibold text-white">
                THE HOUSE PICKED
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
