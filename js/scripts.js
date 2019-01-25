$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();


var userInput = parseInt($("input#number").val());

var newInputs = []
  for (i = 0; i < userInput + 1; i +=1) {
    newInputs.push(userInput - (userInput - i))
  }
var rmvThrees = []
  newInputs.forEach(function(newInput) {
    if (String(newInput).includes("3")) {
      rmvThrees.push("sorry Dave")
    } else {
      rmvThrees.push(newInput)
    }
  });
  var rmvTwos = []
    rmvThrees.forEach(function(rmvThree) {
      if (String(rmvThree).includes("2")) {
        rmvTwos.push("Boop")
      } else {
        rmvTwos.push(rmvThree)
      }
    });

console.log(rmvTwos)
});
});
