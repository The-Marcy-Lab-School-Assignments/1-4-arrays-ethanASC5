/* eslint-disable no-param-reassign */
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
