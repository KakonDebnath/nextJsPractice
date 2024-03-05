'use client';
import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => setCounter((pre) => pre + 1)}
        className="btn btn-primary"
      >
        Increase
      </button>
      <button
        onClick={() => setCounter((pre) => pre - 1)}
        className="btn btn-accent"
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
