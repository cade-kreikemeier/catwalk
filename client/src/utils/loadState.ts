import { useEffect, useState } from 'react';

function loadState<T>(promise: Promise<T>, initialValue: T): T {
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    promise
      .then(setData);
  }, []);
  return data;
}

export default loadState;