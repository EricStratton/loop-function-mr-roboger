// Business Logic //

let emptyArray = [];
// const targetArray = [1, 2, 3]


function beepBoop(userNumber) {
  for (let i = 0; i <= userNumber; i++) {
    emptyArray.push(i);
  } emptyArray.forEach(function(number) {
    if (number.includes(1)) {
      emptyArray.push("Beep!")
    } else {
      emptyArray.push("Nothing")
    }

  });
    return userNumber;
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

