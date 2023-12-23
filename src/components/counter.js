
import { useRecoilState } from 'recoil';
import { countState } from './atom';

const Counter = () => {
  // Using the useState hook to create a state variable 'count' with initial value 0
  const [count, setCount] = useRecoilState(countState);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;