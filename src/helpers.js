export const suffle = (arr) => {
  const TOTAL_NUM = arr.length;

  const newArr = [];

  let index = 0;
  while (index < TOTAL_NUM) {
    const newIdx = Math.floor(Math.random() * TOTAL_NUM);
    if (newArr[newIdx] || newIdx === index) continue;

    newArr[newIdx] = arr[index];
    index++;
  }

  return newArr;
};
