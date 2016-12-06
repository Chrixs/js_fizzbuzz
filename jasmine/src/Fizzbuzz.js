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
