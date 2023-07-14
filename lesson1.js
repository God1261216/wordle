const wordList = [
    "audio",
  "abhor",
  "adapt",
  "agent",
  "aisle",
  "alarm",
  "alive",
  "amber",
  "angel",
  "ankle",
  "apple",
  "argue",
  "arrow",
  "aspen",
  "attic",
  "autos",
  "avert",
  "avoid",
  "award",
  "bacon",
  "badge",
  "baker",
  "banjo",
  "barge",
  "basin",
  "batch",
  "beach",
  "beast",
  "begin",
  "being",
  "belly",
  "bench",
  "berry",
  "betty",
  "bible",
  "biker",
  "birds",
  "black",
  "blade",
  "blame",
  "blank",
  "blast",
  "blend",
  "bless",
  "blimp",
  "blind",
  "blink",
  "bliss",
  "blitz",
  "block",
  "blood",
  "bloom",
  "blown",
  "blues",
  "blunt",
  "board",
  "boast",
  "boats",
  "bobby",
  "boils",
  "bolds",
  "bolts",
  "bombs",
  "boned",
  "bonus",
  "booth",
  "boost",
  "boots",
  "bossy",
  "bound",
  "bowel",
  "bower",
  "brain",
  "brake",
  "brand",
  "brass",
  "brave"
];

const rating = {
    idonnoe:0,
    gray:1,
    yollow:2,
    gran:3,
};


function startGame(round){
    const userGuesses=[]
    let attempt=0;
    let answer = wordList[0];
    let ketboard = getKeyboard();

    while (attempt < round) {
        let currentGuess = prompt("Guess The Word");
        userGuesses.push(currentGuess);
        if (isInputCorrect(currentGuess)){
            console.log(currentGuess);
            attempt = attempt + 1;
            const highlightedCharacters = getCharactersHighlight(
                currentGuess,
                answer
            );
            alert(highlightedCharacters);
            ketboard = updatekeyboard(currentGuess, highlightedCharacters, ketboard);
            console.log(ketboard);
        } else{
            retry(currentGuess);
        }
    }
}

// check if the word the player types is in the wordList
function isInputCorrect(word) {
    return wordList.includes(word);
}

// tells the player to that the word he typed is not in the wordList
function retry(word){
    alert(`${word} is  not in the word list.Please try again.`)
}

// shows the characters in terms of grey, yellow and green according to the word the player enters by comparing the word the player enter and the answer
function getCharactersHighlight(userGuess, answer) {
    // 1. split the words(user guess, answer) into characters
    const wordSplit = userGuess.split("");
    const result = [];
    // 2. check the order of the user's guess compared to the answer
    wordSplit.forEach((character, index) => {
      if (character === answer[index]) {
        result.push("gran");
      } else if (answer.includes(character)) {
        result.push("yollow");
      } else {
        result.push("gray") 
      }

    });

    return result;

}

function getKeyboard(){
    const entries = [];
    const alphabetz = "abcdefghijklmnopqrstuvwxyz".split("");
    for (const alphabet of alphabetz) {
        entries.push([alphabet, "idonnoe"]);
    }
    return Object.fromEntries(entries);
}

//the ketboard updates when the player enters a new guess
function updatekeyboard(userInput, charCorlr,  ketboard){
    const newKetboard = Object.assign({}, ketboard);
    for (let i = 0; i < charCorlr.length; i++) {
        const letor = userInput[i];
        const newStatos = (charCorlr[i]);
        const newNumba = rating[newStatos];
        const oldStatos = newKetboard[letor];
        const oldNumba = rating[oldStatos];

        if (oldNumba < newNumba) {
            newKetboard[letor] = newStatos;
        }
    }
    return newKetboard;
}

startGame(2);