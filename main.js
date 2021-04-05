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

  let d6 = document.querySelector('#d6-roll');
  let firstD6 = document.querySelector('#first-d-6-roll');
  let secondD6 = document.querySelector('#second-d-6-roll');
  let d12 = document.querySelector('#d12-roll');
  let d20 = document.querySelector('#d20-roll');
  let reset = document.querySelector('#reset-roll');

  d6.src = 'images/start/d6.png';
  firstD6.src = 'images/start/d6.png';
  secondD6.src = 'images/start/d6.png';
  d12.src = 'images/start/d12.jpeg';
  d20.src = 'images/start/d20.jpg';
/*******************
 * EVENT LISTENERS *
 *******************/
d6.addEventListener('click', handleD6Click); // called in the handle functions
firstD6.addEventListener('click', handleFirstD6Click );
secondD6.addEventListener('click', handleSecondD6Click);
d12.addEventListener('click', handleD12Click);
d20.addEventListener('click', handleD20Click);
reset.addEventListener('click', handleResetClick);

/******************
 * RESET FUNCTION *
 ******************/

function handleResetClick() {
  console.log('reset was clicked');
}

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function handleD6Click() {
  console.log('d6 was clicked');
}
function handleFirstD6Click() {
  console.log('firstD6 was clicked');
}
function handleSecondD6Click() {
  console.log('SecondD6 was clicked');
}
function handleD12Click() {
  console.log('d12 was clicked');
}
function handleD20Click() {
  console.log('d20 was clicked');
}

/****************
 * MATH SECTION *
 ****************/

const mean = function(rolls) {
  let sum = 0;
  for (const roll of rolls) {
    sum += roll;
  }
  return (sum / rolls.length).toFixed(2);
}

const median = function(rolls) {
  const sorted = sortByNumber(rolls);
  const middle = math.floor(sorted.length / 2)
  if (sorted.length % 2 === 0) {
    return mean([sorted[middle], sorted [middle -1]]);

  }else {
    return sorted[middle].toFixed(2);
  }
}

const mode = function(rolls) {
  const counts = {};
  let modeNum = 'Discovering'
  for (const rolls of rolls) {
    if (roll in counts) {
      count[roll]++;

    } else {
      counts[roll] = 1;
    }
  if (counts[modeNum] === undefined|| counts[roll] > counts[modeNum] )
    modeNum = roll;
  }
  }
  return modeNum;
}