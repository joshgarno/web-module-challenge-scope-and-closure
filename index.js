// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * A. counter1 is contained within a function and will reset each time it is called. counter2 reaches out to affect a variable on world scope that can be added to without resetting the valuse each time.
 * 2. Which of the two uses a closure? How can you tell?
 * A. counter2 because it reaches out to affect a varible in world scope.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * A. counter1 would be good if you wanted the result of the code to be reset each time and start the code fresh each call. counter2 would be good if you wanted to remember the value of the result and add to it each call.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(runs) {
  return Math.floor(Math.random() * 3);
}

let newInningScore = inning();

console.log(newInningScore);

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(numInnings) {
  let endGame = { Home: 0, Away: 0 };
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < numInnings; i++) {
    homeScore = homeScore + inning();
    awayScore = awayScore + inning();
  }
  endGame.Home = homeScore;
  endGame.Away = awayScore;
  return endGame;
}

let theScore = finalScore(9);

console.log(theScore);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(numInnings) {
  let newScoreBoard = [];
  newScoreBoard[0] = { Name: "1st inning", Score: "" };
  newScoreBoard[1] = { Name: "2nd inning", Score: "" };
  newScoreBoard[2] = { Name: "3rd inning", Score: "" };
  newScoreBoard[3] = { Name: "4th inning", Score: "" };
  newScoreBoard[4] = { Name: "5th inning", Score: "" };
  newScoreBoard[5] = { Name: "6th inning", Score: "" };
  newScoreBoard[6] = { Name: "7th inning", Score: "" };
  newScoreBoard[7] = { Name: "8th inning", Score: "" };
  newScoreBoard[8] = { Name: "9th inning", Score: "" };
  newScoreBoard[9] = { Name: "Final Score", awayScore: 0, homeScore: 0 };

  function getInningScore(a, h) {
    let away = inning();
    let home = inning();
    newScoreBoard[9].awayScore = newScoreBoard[9].awayScore + away;
    newScoreBoard[9].homeScore = newScoreBoard[9].homeScore + home;
    return `awayTeam ${away} - homeTeam ${home}`;
  }

  for (let i = 0; i < numInnings; i++) {
    newScoreBoard[i].Score = getInningScore();
  }
  return newScoreBoard;
}

let allInnings = scoreboard(6);

console.log(allInnings);
