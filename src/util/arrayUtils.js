import { randomNumber } from "./randomUtils";

export const randomItem = (array) => {
  return array[randomNumber(0, array.length - 1)];
};

export const checkDimension = (array, ...nums) => {
  let dim = array.length;
  for (let num of nums) {
    if (num >= dim || num < 0) {
      return false;
    }
  }
  return true;
};

export const newMatrix = (dim) => {
  return Array(dim)
    .fill(0)
    .map(() => Array(dim).fill(0));
};
