// Business Logic //
// let blank = [];
// function beepBoop (number) {
//   for(let i = 0; i <= number; i++) {
//     return number[i];
//   }
// };


function beepBoop(userNumber) {
  for (let index = userNumber; index > 0; index--) {
  } console.log(index);
  return [];
};



// User Interface Logic //

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    let userNumber = parseInt($("#input").val());
 
    const result = beepBoop(userNumber);

    $(".results").text(result);
  });
});