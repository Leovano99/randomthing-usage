const randomthing = require('randomthinger');

const randomNumber = randomthing.generateRandomNumber(1, 100);
console.log('Random Number in New Project:', randomNumber);

const randomArray = randomthing.generateRandomArray(5, 1, 100);
console.log('Random Array in New Project:', randomArray);

const average = randomthing.calculateArrayAverage(randomArray);
console.log('Average of the Random Array in New Project:', average);
