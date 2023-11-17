import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleReversalAndDecrement = () => {
    if (counter % 4 === 0) {
      // Reverse the counter value
      setCounter(-counter);
    } else if (counter % 7 === 0) {
      // Decrement by 10 on divisibility by 7
      setCounter((prevCounter) => prevCounter - 10);
    } else {
      // Increment by 1 for other cases
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  return (
    <div className="App">
      <h1>React Counter App</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReversalAndDecrement}>
        Reversal/Decrement
      </button>
    </div>
  );
}

export default App;