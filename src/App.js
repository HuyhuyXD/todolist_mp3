import { useState } from "react";

function App() {
  const [work, setWork] = useState('')


  return (
    <div className="flex h-screen gap-1 border border-red-500 items-center justify-center">
      <input
        type="text"
        className="outline-none border border-blue-500 rounded-md px-4 py-2 w-[400px]"
        value={work}
        onChange={e => setWork(e.target.value)}
      />

      <button 
        type="button"
        className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
      >
        Add
      </button>
    </div>
  );
}

export default App;
