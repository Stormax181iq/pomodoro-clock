import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold text-purple-700">Hello world</h1>
      <button
        className="bg-blue-300 hover:bg-blue-600 active:bg-purple-500"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </>
  );
}

export default App;
