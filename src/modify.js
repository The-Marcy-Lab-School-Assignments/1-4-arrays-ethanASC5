const uppercaseAll = (...words) => {
  const arrayy = [] 
  for(let i=0; words.length > i; i++ ){ 
    
// words.toUpperCase()
arrayy.push(words[i].toUpperCase()) 
   }
   return arrayy
};

const destructureCoordinates = (coordinates) => {
  const x = coordinates[0];
  const y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
