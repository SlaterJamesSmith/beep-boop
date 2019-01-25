$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();


var userInput = parseInt($("input#number").val());

  if (userInput >= 1) {

  var newInputs = []
    for (i = 0; i < userInput + 1; i +=1) {
      newInputs.push(userInput - (userInput - i))
    }
  var rmvThrees = []
    newInputs.forEach(function(newInput) {
      if (String(newInput).includes("3")) {
        rmvThrees.push("I'm sorry Dave. I'm afraid I can't do that.")
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
      var rmvOnes = []
        rmvTwos.forEach(function(rmvTwo) {
          if (String(rmvTwo).includes("1")) {
            rmvOnes.push("Beep!")
          } else {
            rmvOnes.push(rmvTwo)
          }
        });

        $("#result").text(rmvOnes.join(", "))
        $("#error").hide();
        $("#result").show();
    } else {
      $("#error").show();
      $("#result").hide();
    }

console.log(rmvOnes)
});
});
