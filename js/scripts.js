// Business Logic //

function beepBoop (number) {
  for(let i = 0; i <= number; i++) {
    console.log(i)
  }
};

// User Interface Logic //

$(document).ready(function(){
  $("form#userInput").submit(function(){
    let number = parseInt($("#input").val());
  })
})