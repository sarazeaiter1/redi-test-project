// Print all the numbers from 1 to 100 to console
// If the number is divisible by 3, print “Fizz” instead
// If the number is divisible by 5 (and not by 3), print “Buzz” instead
// If the number is divisible by both 3 and 5, print “FizzBuzz” instead

var fizzBuzzCount = 0;
var fizzCount = 0;
var buzzCount = 0;

// object
var count = {
  fizzBuzz: 0,
  fizz: 0,
  buzz: 0,
};

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzzCount++;
    count.fizzBuzz++;
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    fizzCount++;
    count.fizz++;
    console.log("Fizz");
  } else if (i % 5 === 0) {
    buzzCount++;
    // buzzCount = buzzCount + 1;
    // buzzCount += 1;
    count.buzz++;
    console.log("Buzz");
  }
}
console.log("Buzz:", buzzCount);
