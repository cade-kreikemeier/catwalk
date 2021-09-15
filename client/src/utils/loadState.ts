import { useEffect, useState } from 'react';

function loadState<T>(promise: Promise<T>, initialValue: T): T {
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    promise
      .then(d => {
        setData(d);
      });
  });
  return data;
}

export default loadState;