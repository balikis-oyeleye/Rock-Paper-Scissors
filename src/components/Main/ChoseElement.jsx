import React from "react";
import { useNavigate } from "react-router-dom";
import scissors from "../../assets/images/icon-scissors.svg";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";

const ChoseElement = ({ setChoice }) => {
  const navigate = useNavigate();

  const onClick = (event) => {
    setChoice(event.target.id);
    navigate("/game");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-12">
      <div className="box__1 flex justify-between items-center gap-24">
        <div
          className="box__1-image__1 cursor-pointer"
          onClick={(e) => onClick(e)}
          id="rock"
        >
          <div className="bg-white" id="rock">
            <img src={rock} alt="rock" className="w-3/4 h-auto" id="rock" />
          </div>
        </div>
        <div
          className="box__1-image__2 cursor-pointer"
          onClick={onClick}
          id="scissors"
        >
          <div className="bg-white" id="scissors">
            <img
              src={scissors}
              alt="scissors"
              className="w-3/4 h-auto"
              id="scissors"
            />
          </div>
        </div>
      </div>
      <div className="box__2">
        <div
          className="box__2-image__1 cursor-pointer"
          onClick={onClick}
          id="paper"
        >
          <div className="bg-white" id="paper">
            <img src={paper} alt="paper" className="w-3/4 h-auto" id="paper" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseElement;
