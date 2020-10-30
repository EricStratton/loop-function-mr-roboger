// Business Logic //
// let blank = [];
// function beepBoop (number) {
//   for(let i = 0; i <= number; i++) {
//     return number[i];
//   }
// };

let emptyArray = [];
const targetArray = [1, 2, 3]


function beepBoop(userNumber) {
  for (let i = 0; i <= userNumber; i++) {
    emptyArray.push(i);
  }
  
    return [userNumber];
};



// User Interface Logic //

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    let userNumber = parseInt($("#input").val());

    const result = beepBoop(userNumber);
    
    $("#print").text(emptyArray);
  });
});

