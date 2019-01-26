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
  
  // There's likely a way to dry up code below, probably using a forEach loop, but I did not have time to do so before project deadline. (code written for further exploration, regular expression initial code found in online forum.)
    var oldBeep = 'Beep!';
    var newBeep = '<span id=green>Beep!</span>';
    var greenBeep = $('#result').text().replace(RegExp(oldBeep,"gi"),newBeep);
      $('#result').html(greenBeep);
    var oldBoop = 'Boop';
    var newBoop = '<span id=orange>Boop</span>';
    var orangeBoop = greenBeep.replace(RegExp(oldBoop,"gi"),newBoop);
      $('#result').html(orangeBoop);
    var oldSry = "I'm sorry Dave. I'm afraid I can't do that.";
    var newSry = "<span id=red>I'm sorry Dave. I'm afraid I can't do that.</span>";
    var redSry = orangeBoop.replace(RegExp(oldSry,"gi"),newSry);
      $('#result').html(redSry);
  });
  });
