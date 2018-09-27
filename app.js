const allWords = ["function", "const", "let", "var", "innerHTML", "querySelector", "addEventListener", "document", "window", "&", "{", "!", "?", "if", "else if", "else", "case", "match", "break", "return", "parseInt", "shift", "pop", "unshift", "join", "push", "map", "indexOf", "typeof", "for", "while", "this", "create"];
let wordCount = 0;
let currentWord = '';  

function randomizer() {
    for(let i = allWords.length - 1; i > 0; i--) {
        const randomWord = Math.floor(Math.random() * (i + 1));
        [allWords[i], allWords[randomWord]] = [allWords[randomWord], allWords[i]];
    }
}
randomizer();

function appendArrayToContainer() {
    const appendArray = document.querySelector('.ActualText');
    appendArray.innerHTML = '<span>' + allWords[0] + '</span> ';
    currentWord = allWords.shift();
    allWords.push(currentWord);
    appendArray.innerHTML += allWords.join(' ');
}
appendArrayToContainer();
const nameInput = document.querySelector('.inputText');
document.querySelector('.WriteText').addEventListener('submit', function (e) {
    e.preventDefault();
    let y = nameInput.value;
    if (y === currentWord) {
        appendArrayToContainer();
        document.querySelector('.inputText').value = "";
        document.querySelector('.inputText').style.backgroundColor = "white";
        wordCount = wordCount + 1;
    } else {
        document.querySelector('.inputText').style.backgroundColor = "red";
        
    };
});


document.querySelector('.inputText').addEventListener('click', function (e) {
    startTimer();
});

document.querySelector('.timer').innerHTML =
  01 + ":" + 00;


function startTimer() {
  var presentTime = document.querySelector('.timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0) {
      document.querySelector('.ResultContainer').innerHTML = "<p>" + "You just wrote " + wordCount + " Words per Minute!" + "<br>" + "Hit the reload button to play again" + "</p>";
      setTimeout();
  }
  
  document.querySelector('.timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}