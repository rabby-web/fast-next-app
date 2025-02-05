"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("counter");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl text-center w-80 border border-gray-700">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-300">Counter</h1>
        <p className="text-5xl font-bold text-green-400 mb-6">{count}</p>
        <div className="flex space-x-4">
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all shadow-md"
            onClick={() => setCount(count + 1)}
          >
            +1
          </button>
          <button
            className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all shadow-md"
            onClick={() => setCount(count - 1)}
          >
            -1
          </button>
          <button
            className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all shadow-md"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
