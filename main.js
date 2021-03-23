/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

  let sixes = document.createElement('img');
  sixes.src = "images/start/d6.png";
  document.querySelector('#6d-button').appendChild(sixes);



  let doubleSixes = document.createElement('img');
  doubleSixes.src = 'images/start/d6.png' + 'images/start/d6.png';
  document.querySelector('#double-6d-buttons').appendChild(doubleSixes);

  let twelves = document.createElement('img');
  twelves.src = 'images/start/d12.jpeg';
  document.querySelector('#d12-button').appendChild(twelves);

  let twenties = document.createElement('img');
  twentiesImg.src = 'images/start/d20.jpg';
  document.querySelector('#d20-button').appendChild(twenties);


/*******************
 * EVENT LISTENERS *
 *******************/
const startingDice = document.querySelector('#d6'); 
startingDice.addEventListener('click', startingDice);

const startingDblSixes = document.querySelector('#double-d6');
startingDblSixes.addEventListener('click', startingDblSixes);

const startingTwelves = document.querySelector('#d12');
startingTwelves.addEventListener('click', startingTwelves);

const startingTwenties = document.querySelector('#d20');
startingTwenties.addEventListener('click', startingTwenties);

/******************
 * RESET FUNCTION *
 ******************/

let sixes = [];
const 6RollImg = document.querySelector('#d6-roll');
6RollImg.addEventListener('click', function() ) {

}

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
