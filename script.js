//variables//

var guessButton = document.getElementById('guessButton');
var clearButton = document.getElementById('clearButton');
var resetButton = document.getElementById('resetButton');
var randomNumber;
var userState = document.getElementById('userState');
var zeroState = document.getElementById('zeroState');
var lastGuessMessage = document.getElementById('lastGuessMessage');

//eventListeners//

guessButton.addEventListener('click', function(){
  evaluateGuess()
})

clearButton.addEventListener('click', function(){
  clearInput();
  disableButton();
})

resetButton.addEventListener('click', function(){
  clearInput();
  clearZero();
  getRandomNumber();
  clearLastGuessMessage();
  clearUserState();
  disableButton();
})

//functions//

  function clearInput() {
    guessInput.value = '';
  }
  function clearZero(){
    zeroState.innerText = '0';
  }
  function disableButton(){
    document.querySelector('.db1').disabled = true;
    document.querySelector('.db2').disabled = true;
    document.querySelector('.db3').disabled = true;
  }
  function unDisableButton(){
    document.querySelector('.db1').disabled = false;
    document.querySelector('.db2').disabled = false;
    document.querySelector('.db3').disabled = false;
  }
  function clearLastGuessMessage(){
    lastGuessMessage.innerText = 'Try Again';
  }
  function clearUserState(){
    userState.innerText = 'Guess a Number between 1 and 100';
  }
  function getRandomNumber(){
  randomNumber = Math.floor(Math.random()*100);
  console.log(randomNumber);
  }
  
//function to comapare user guess against random//

  function evaluateGuess() {
  var userGuess = parseInt(guessInput.value, 10);
  zeroState.innerText = userGuess;
  lastGuessMessage.innerText = 'Your last guess was';
   if(userGuess > randomNumber){
    console.log('too high');
    userState.innerText = 'Your guess was too high';
  }   else if (userGuess < randomNumber) {
    console.log('too low');
      userState.innerText = 'Your guess was too low';
  }   else{
    console.log('just right');
    userState.innerText = 'BOOM!!';
  }
}
