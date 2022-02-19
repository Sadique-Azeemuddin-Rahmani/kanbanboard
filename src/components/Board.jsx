import React, { useState, useContext } from "react";
import { Context } from "../Context";
import Card from "./Card";

const Board = ({ board }) => {
  const { addCard, handleDragEnter } = useContext(Context);
  const [showAddCard, setShowAddCard] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [search, setSearch] = useState("");

  const searchCards = board.cards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );
  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);
  }

  function handleAddCardSubmit(e) {
    e.preventDefault();
    addCard(cardTitle, board.id);
    setShowAddCard(false);
    setCardTitle("");
  }

  return (
    <div className="board">
      <div className="board-header">
        <p>{board.name}</p>
      </div>

      {/* Search Cards */}
      <div className="add-card">
        <input
          className="form-input"
          type="text"
          value={search}
          placeholder="Search Cards By Name..."
          onChange={handleSearch}
        />
      </div>

      {/* Cards Listing */}
      <div
        className="card-list"
        id={board.id}
        onDragEnter={() => handleDragEnter(board.id)}
      >
        {(search ? searchCards : board.cards).map((item) => (
          <Card key={item.id} card={item} boardId={board.id} />
        ))}
      </div>

      {/* Add Card Form */}
      <div className="add-card">
        {showAddCard ? (
          <form className="card-form" onSubmit={handleAddCardSubmit}>
            <input
              className="form-input"
              type="text"
              value={cardTitle}
              placeholder="Enter Card Title"
              onChange={(e) => setCardTitle(e.target.value)}
              autoFocus
            />
            <div className="form-btns-div">
              <button className="form-btn">Add</button>
              <button
                className="form-btn"
                onClick={() => setShowAddCard(false)}
              >
                Close
              </button>
            </div>
          </form>
        ) : (
          <button className="add-card-btn" onClick={() => setShowAddCard(true)}>
            Add Card
          </button>
        )}
      </div>
    </div>
  );
};

export default Board;
