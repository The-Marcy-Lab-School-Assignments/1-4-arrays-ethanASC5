/* eslint-disable no-param-reassign */
/** FEEDBACK: Rewrite this code so that you are mutating the original array to be empty. */
const clearArr = (arr) => {
  arr.length = 0;
};

const getFirstItem = (arr) => {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined; 
  }
};

module.exports = {
  clearArr,
  getFirstItem,
};
