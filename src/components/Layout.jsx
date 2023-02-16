import React from "react";
import { Link } from "react-router-dom";
import HandOption from "./HandOption";
import { classes } from "../Utils/Classes";

const Layout = ({ setPlayerchoice }) => {
  return (
    <div className="mx-auto w-11/12 md:w-3/5">
      <div className="mb-6 flex justify-around">
        <Link to={"/result"}>
          <HandOption
            setPlayerchoice={setPlayerchoice}
            className={classes.paper.div}
            img={classes.paper.img}
            sign="paper"
          />
        </Link>

        <Link to={"/result"}>
          <HandOption
            setPlayerchoice={setPlayerchoice}
            className={classes.rock.div}
            img={classes.rock.img}
            sign="rock"
          />
        </Link>
      </div>
      <div className="flex justify-center">
        <Link to={"/result"}>
          <HandOption
            setPlayerchoice={setPlayerchoice}
            className={classes.scissor.div}
            img={classes.scissor.img}
            sign="scissor"
          />
        </Link>
      </div>
    </div>
  );
};

export default Layout;
