/** Task#1
* Output even numbers in the loop
* Use the for loop to output even numbers from 2 to 10
*/

let num = 0;
while (num < 100) {
  num += 2;
  console.log(num);
} // task#1 > solution 1

for (let n = 2; n <= 10; n++) {
  if (n % 2 == 0) {
    console.log(n);
  }
} // task#1 > solution 2

/**
* Task#2
* Write a loop which prompts for a number greater than 100.
* If the visitor enters another number – ask him to input again.
* The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line
*/

let number;
do {
  number = prompt('Enter a number which is greater than 100', 0);
}
while (number <= 100 && number != null);

/**
* Task#3
* Write the code which outputs prime numbers in the interval from 2 to n.
*/

for (let primeNumber = 2; ; primeNumber++) {
  for (let modNumber = 2; modNumber < primeNumber; modNumber++) {
    if (primeNumber % modNumber == 0) continue;
  }
  console.log(primeNumber);
}
