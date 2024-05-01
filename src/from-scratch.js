const addToFrontOrBack = (arr, value, isFront) => {
if (isFront === true ){ 
   

arr.unshift(value)   
} 

else { arr.push(value)

}
};

const reverseString = (string) => {

    let reversedString = ""
     
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }
    
    return reversedString
    
    
      } ;
///////////////////////////////

const newArrayFullOf = (value, numOfValue) => {
let repeat = [] 
for (let i = 0; numOfValue > i; i++){
  repeat.push(value) 
}
return repeat
};
// console.log(newArrayFullOf(1, 5))

const insertIntoMiddle = (arr, value) => {
  arr.splice(Math.floor(arr.length/2),0,value) 
};
// const arr1 = [1, 2, 3, 4, 5];
// console.log(insertIntoMiddle(arr1, 6));

const deleteFromMiddle = (arr) => {
  arr.splice(Math.floor(arr.length/2),1) 
};

const isRightIndex = (arr, value ,index) => {
if (arr[index] === value  ){ 
return true 
};
return false 
};
const roundAllNumsDown = (arr) => {
  // const array = [ ...arr ]
  const arrayy = []
  for(let i=0; arr.length > i; i++ ){ 
    // console.log(math.floor(arr[i])) 
    arrayy.push(Math.floor(arr[i])) 
    // math.floor(arr[i])
  };
return arrayy
};

const arr1 =  [5.9, -7.9, 12.9]
console.log(roundAllNumsDown(arr1))

const getAllYCoordinates = () => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
