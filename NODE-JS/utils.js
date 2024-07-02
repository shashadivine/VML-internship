// -- FILE FOR RANDOM FUNCTIONS --

// to use this function in other files, we have to export it
function generateRandomNumber(){
  return Math.floor(Math.random() * 100) + 1;
}

function celcius_to_Farrenheit(celcius){
  ans = (celcius * 9)/5 + 32;
  return ans;
}

// using common js in exporting:
module.exports = {
  generateRandomNumber,
  celcius_to_Farrenheit
};