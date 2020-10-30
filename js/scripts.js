// Business Logic //
// let blank = [];
// function beepBoop (number) {
//   for(let i = 0; i <= number; i++) {
//     return number[i];
//   }
// };


function beepBoop(userNumber, result) {
  return userNumber * 2;
};



// User Interface Logic //

$(document).ready(function() {
  $("form#userInput").submit(function() {
    let userNumber = parseInt($("#input").val());
 
    const result = beepBoop (userNumber);

  });
});