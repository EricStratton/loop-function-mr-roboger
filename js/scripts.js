// Business Logic //

function beepBoop (number) {
  for(let i = 0; i <= number; i++) {
    return number[i];
  }
};

// User Interface Logic //

$(document).ready(function(){
  $("form#userInput").submit(function(){
    let number = parseInt($("#input").val());
  });
});