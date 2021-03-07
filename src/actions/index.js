export const increment = (numToInc) => {
   return { type: "INCREMENT", payload: numToInc };
};

export const decrement = (numToDec) => {
   return { type: "DECREMENT", payload: numToDec };
};
