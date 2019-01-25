$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();


var firstInput = parseInt($("input#number").val());
var inputs = 4

var newInputs = []
	// newInputs.forEach(function(newInput) {
  // if (newInputs[0] === firstInput - 1) {newInputs.unshift(firstInput)
  // } else {
  // newInputs.unshift(newInput[newInput] + 1)
  // }})

  for (i = 0; i < firstInput + 1; i +=1) {
    newInputs.push(firstInput - (firstInput - i))
  }

console.log(newInputs)

alert(newInputs)
});
});
