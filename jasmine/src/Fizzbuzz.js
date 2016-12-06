function Fizzbuzz() {
}
Fizzbuzz.prototype.number = function(start,end) {
  var output = [];
  for(var i = start; i <= end; i++) {
    output.push(i);
  }
  return output;
};

Fizzbuzz.prototype.isDivisibleByThree = function(num) {
  return (num % 3 === 0);
};

Fizzbuzz.prototype.isDivisibleByFive = function(num) {
  return (num % 5 === 0);
};

Fizzbuzz.prototype.isDivisibleByFifteen = function(num) {
  return (num % 15 === 0);
};

Fizzbuzz.prototype.test = function(num) {
  if (this.isDivisibleByFifteen(num)) return ("FizzBuzz");
  else if (this.isDivisibleByFive(num)) return ("Buzz");
  else if (this.isDivisibleByThree(num)) return ("Fizz");
  else return num;
};
