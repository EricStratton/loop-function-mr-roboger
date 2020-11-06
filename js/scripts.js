// Business Logic //
function beepBoop(userNumber) {
  let emptyArray = [];
  for (let i = 0; i <= userNumber; i++) {
    emptyArray.push(i);
    if (i < 100) {
      if (i === 3 || i % 10 === 3) {
        emptyArray[i] = " Will you be my neighbor?";
      } else if (i === 2 || i % 10 === 2) {
        emptyArray[i] = " Boop!";
      } else if (i === 1) {
        emptyArray[i] = " Beep!";
      }
    } else {
      $("#too-much").show();
      break;
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
    $("#too-much").hide();

  });
});