import { useEffect, useState } from 'react';

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const changeValue = forwards ? 1 : -1;
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + changeValue);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
