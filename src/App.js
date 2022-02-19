import { useContext } from "react";
import { Context } from "./Context";
import Board from "./components/Board";
import Navbar from "./components/Navbar";

function App() {
  const { boardData } = useContext(Context);

  return (
    <div className="App">
      <Navbar />
      <main>
        {boardData.map((item, index) => (
          <Board key={index} board={item} />
        ))}
      </main>
    </div>
  );
}

export default App;
