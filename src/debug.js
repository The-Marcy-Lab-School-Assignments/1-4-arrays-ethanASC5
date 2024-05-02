/* eslint-disable no-param-reassign */
/** FEEDBACK: Rewrite this code so that you are mutating the original array to be empty. */
const clearArr = (arr) => {
  arr = [];
};

const getFirstItem = (array) => {
 return array.at(0)
//  return array.shift();

};

module.exports = {
  clearArr,
  getFirstItem,
};
