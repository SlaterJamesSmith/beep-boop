var firstInput = 4
var inputs = 4

var newInputs = [0]
	newInputs.forEach(function(newInput) {
  if (newInputs[0] === firstInput - 1) {newInputs.unshift(firstInput)
  } else {
  newInputs.unshift(newInputs[0] + 1)

  }})

alert(newInputs)

var numbers = []
	inputs.forEach(function(input) {
  numbers.push(input-=1)


  });
