import React, { useContext } from "react";
import { FaRegComment } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { Context } from "../Context";

export default function Card({ card, boardId }) {
  const { showLabel, setShowLabel, handleDragEnd, handleDragEnter } = useContext(Context);

  return (
    <div
      className="card"
      id={card.id}
      draggable
      onDragEnd={() => handleDragEnd(boardId, card.id)}
      onDragEnter={() => handleDragEnter(boardId, card.id)}
    >
      {showLabel ? (
        <div
          className="card-label-div"
          style={{ backgroundColor: card.label === "Fault" && "#eb5a46" }}
          onClick={() => setShowLabel(false)}
        >
          {card.label}
        </div>
      ) : (
        <div
          className="card-label"
          style={{ backgroundColor: card.label === "Fault" && "#eb5a46" }}
          onClick={() => setShowLabel(true)}
        ></div>
      )}

      <p className="card-title">{card.title}</p>

      <div className="badges">
        {card.comment && (
          <span className="badge">
            <FaRegComment /> {card.comment}
          </span>
        )}
        {card.tasks && (
          <span className="badge">
            <IoMdCheckboxOutline /> {card.tasks}
          </span>
        )}
        {card.likes && (
          <span className="badge">
            <AiOutlineLike /> {card.likes}
          </span>
        )}
      </div>
    </div>
  );
}
