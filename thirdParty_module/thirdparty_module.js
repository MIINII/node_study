const cowsay = require('cowsay/cows/cat.cow');
const colors = require('color-name');
colors.red; //[255,0,0]

console.log(
  cowsay.say({
    text: 'I love javascript'
  })
);
