const after = (milli: number): Promise<null> => {
  return new Promise(resolve => {
    setTimeout(() => { resolve(null); }, milli);
  });
};

export default after;
