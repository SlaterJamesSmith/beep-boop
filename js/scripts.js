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

console.log(rmvThrees)
});
});
