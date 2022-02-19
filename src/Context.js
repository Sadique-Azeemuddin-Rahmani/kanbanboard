import React, { createContext, useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";

const Context = createContext();

function ContextProvider(props) {
  const [boardData, setBoardData] = useState(data);
  const [showLabel, setShowLabel] = useState(false);
  const [target, setTarget] = useState({
    cardId: "",
    boardId: "",
  });

  function addCard(title, boardId) {
    const card = {
      id: nanoid(),
      title,
      label: "CP",
      comment: 2,
      likes: 3,
    };

    const updatedBoard = boardData.find((boardObj) => boardObj.id === boardId);
    updatedBoard.cards.push(card);

    setBoardData((prevBoards) =>
      prevBoards.map((boardObj) =>
        boardObj.id === boardId ? updatedBoard : boardObj
      )
    );
  }

  function handleDragEnter(boardId, cardId) {
    setTarget({ cardId, boardId });
  }

  function handleDragEnd(boardId, cardId) {
    let sourceBoardIndex, sourceCardIndex, targetBoardIndex, targetCardIndex;

    sourceBoardIndex = boardData.findIndex(
      (boardObj) => boardObj.id === boardId
    );

    sourceCardIndex = boardData[sourceBoardIndex].cards.findIndex(
      (cardObj) => cardObj.id === cardId
    );

    targetBoardIndex = boardData.findIndex(
      (boardObj) => boardObj.id === target.boardId
    );

    targetCardIndex = boardData[targetBoardIndex].cards.findIndex(
      (cardObj) => cardObj.id === target.cardId
    );

    const tempBoards = [...boardData];
    const tempCard = tempBoards[sourceBoardIndex].cards[sourceCardIndex];

    tempBoards[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
    tempBoards[targetBoardIndex].cards.splice(targetCardIndex, 0, tempCard);

    setBoardData(tempBoards);
  }

  return (
    <Context.Provider
      value={{
        boardData,
        showLabel,
        setShowLabel,
        addCard,
        handleDragEnter,
        handleDragEnd,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
