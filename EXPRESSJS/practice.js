function slicedArray(array, start, end) {
  const sliced = array.slice(start, end);
  return sliced;
};

const array = [1, 2, 3, 4, 5];
const start = 1;
const end = 2;

console.log(`sliced array: ${slicedArray(array, start, end)}`);
