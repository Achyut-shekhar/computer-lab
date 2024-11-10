import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center w-screen bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
          <button
            onClick={() => setcolor("black")}
            className="outline-none px-4 py-1 rounded-xl text-white shadow-xl"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 rounded-xl text-white shadow-xl"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-1 rounded-xl text-white shadow-xl"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setcolor("pink")}
            className="outline-none px-4 py-1 rounded-xl text-white shadow-xl"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
