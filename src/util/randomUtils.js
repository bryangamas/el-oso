export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
