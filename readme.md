## Number Guesser readme ##

##### HTML #####

During the building of the Number Guesser the first thing that was taken into account was the HTML structure.
Reviewing the provided comp in a "top to bottom" approach, it was determined the the header would include the ``<h1>`` for the header titling the game.
The ``<main>`` section would follow the header and also be contained within the body and hold the interactive portion of the game.
Noted in the ``<main>`` section all the information and elements are aligned in the center in what appears to be a uniform section.
This section contains the interactive input field, "Guess" and "Clear" buttons ``<button>, an information display including the last guessed number and a "Reset" ``<button>``.
While building the structure of the HTML, I.D.'s and classes were assigned to the elements for later use in CSS styling and in Javascript.

##### CSS #####

After completing the initial structure of HTML the comp was again reviewed to determine the styling of the page.  
First the provided color information was assigned to the respective elements as noted in the comp.
- Header Background Color #404041
- H1 "Number" #ED458B, "Guesser" #E6E7E8
BUTTONS
- Background Color #929497, Text #FFFFFF
- Disabled State : Background Color #D0D2D3, Text #FFFFFF
- Hover: Background Color #EB008B, Text #FFFFFF
FEEDBACK
- info feedback area: Feedback #404041, Number Text #EB008B

The ``<h1>`` and ``<p>`` tags were then assigned to the provided font-family:'Open Sans', sans-serif.  Each element font-size was
evaluated and adjusted based on relationships to other elements on comp within proportion.

##### CSS attributes#####
  border-radius:
  width:
  height:
  color:
  margin:
  font-family:
  font-weight:
  font-size:
  background-color:
  decoration:

  Noted:  ``<button>`` attributes order need to adjust after javascript inorder to function properly.

  #####  JavaScript#####

  upon workup of HTML and CSS, Java script was incorporated based on functionality of page.  First, define global variables for use in later function:
  - var guessButton = document.getElementById('guessButton');
  - var clearButton = document.getElementById('clearButton');
  - var resetButton = document.getElementById('resetButton');
  - var randomNumber;
  var userState = document.getElementById('userState');
  - var zeroState = document.getElementById('zeroState');
  - var lastGuessMessage
  Variables use "I.D." to better determine usage.

  "top to bottom" approach used again based on structure of HTML.
  The next step, determine clickable buttons and relations to action of page.
  - guessButton - used to submit guess
  - clearButton - used to clear out input field of last guess and attempt another guess.
  - resetButton -  used to clear contents of input field and last guess number and start over

  Create a function list to incorporate the variables into a function associated with each button.
  Console. log was added to functions inorder to test actions while building page.
  - function clearInput() clears input field
  - function clearZero() clears last guess return
  - function disableButton() used to disable button until input field is complete
  - function unDisableButton() used to enable button once input complete
  - function clearLastGuessMessage() clears message return
  - function clearUserState() clears result
  - function getRandomNumber() will assign number on load and reset
  - function evaluateGuess() compares random number to user guess
 @rburnette3
s
