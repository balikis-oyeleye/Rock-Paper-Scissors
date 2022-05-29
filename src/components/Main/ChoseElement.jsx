import React from "react";
import scissors from "../../assets/images/icon-scissors.svg";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";

const ChoseElement = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-12">
      <div className="box__1 flex justify-between items-center gap-24">
        <div className="box__1-image__1 cursor-pointer">
          <div className="bg-white">
            <img src={rock} alt="rock" className="w-3/4 h-auto" />
          </div>
        </div>
        <div className="box__1-image__2 cursor-pointer">
          <div className="bg-white">
            <img src={scissors} alt="scissors" className="w-3/4 h-auto" />
          </div>
        </div>
      </div>
      <div className="box__2">
        <div className="box__2-image__1 cursor-pointer">
          <div className="bg-white">
            <img src={paper} alt="paper" className="w-3/4 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseElement;
