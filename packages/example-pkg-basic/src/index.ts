export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('development msg: boop!!!!');
    console.log('test rush change');
  }
  return a + b;
};
