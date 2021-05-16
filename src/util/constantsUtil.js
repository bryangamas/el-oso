export const LETTERS = {
  S: "S",
  O: "O",
};

export const PLAYERS = {
  1: "Computadora",
  2: "Humano",
};

export const WINNER = {
  COMPUTER: 1,
  HUMAN: 2,
  TIED_GAME: 3,
};

export const DIFFICULTY = {
  EASY: 1,
  MEDIUM: 2,
  DIFFICULT: 3,
};

export const HIT_REDUCTION = {
  [DIFFICULTY.EASY]: 50,
  [DIFFICULTY.MEDIUM]: 20,
  [DIFFICULTY.DIFFICULT]: 0,
};
