import React, { useEffect, useState } from "react";
import HandOption from "./HandOption";
import { classes } from "../Utils/Classes";

const Result = ({ className, img }) => {
  // compute the computers choice
  const [compute, setCompute] = useState({
    className: "",
    img: "",
  });

  const computerChoices = ["rock", "paper", "scissor"];
  const computerChooses = () => {
    const chosen = Math.floor(Math.random() * computerChoices.length);
    // console.log(computerChoices[chosen]);
    if (computerChoices[chosen] === "paper") {
      setCompute({
        className: classes.paper.div,
        img: classes.paper.img,
      });
      return classes.paper;
    } else if (computerChoices[chosen] === "scissor") {
      setCompute({
        className: classes.scissor.div,
        img: classes.scissor.img,
      });
      return classes.scissor;
    } else if (computerChoices[chosen] === "rock") {
      setCompute({
        className: classes.rock.div,
        img: classes.rock.img,
      });
      return classes.rock;
    }
  };

  // call the computer function on the first render
  useEffect(() => {
    computerChooses();
    console.log(compute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex item-center justify-around mt-12">
      <HandOption className={className} img={img} />
      <HandOption className={compute.className} img={compute.img} />
    </div>
  );
};

export default Result;
