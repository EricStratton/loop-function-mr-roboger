// Business Logic //
function beepBoop(userNumber) {
  let emptyArray = [];
  for (let i = 0; i <= userNumber; i++) {
    emptyArray.push(i.toString());
    
    if (emptyArray[i].includes("3")) {
      emptyArray[i] = "Will you be my neighbor?"
    } else if (emptyArray[i].includes("2")) {
      emptyArray[i] = "Boop!"
    } else if (emptyArray[i].includes("1")) {
      emptyArray[i] = "Beep!"
    }
  } 
  return emptyArray;
}

// User Interface Logic //


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    let userNumber = parseInt($("#input").val());

    const result = beepBoop(userNumber);
    
    $("#print").text(result);

  });
});