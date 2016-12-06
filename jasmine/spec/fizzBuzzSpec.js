describe("Fizzbuzz Logic", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should return 1", function() {
    expect(fizzbuzz.number(1,1)).toEqual([1])
  });

  it("should return 100", function() {
    expect(fizzbuzz.number(100,100)).toEqual([100])
  });

  it("should return a number between 1 and 5", function() {
    expect(fizzbuzz.number(1,5)).toEqual([1,2,3,4,5])
  });

  it("should return true if 3 is divisble by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
  });

  it("should return true if 5 is divisble by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true)
  });

  it("should return true if 15 is divisble by 15", function() {
    expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true)
  });

  it ("should return false if 4 is indivisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(4)).toEqual(false)
  });

});

describe("Fizzbuzz Frontend", function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it ("should return Fizz if n is divisibe by 3", function () {
    expect(fizzbuzz.test(3)).toEqual("Fizz")
  });

  it ("should return Buzz if n is divisibe by 5", function () {
    expect(fizzbuzz.test(5)).toEqual("Buzz")
  });

  it ("should return Fizzbuzz if n is divisibe by 15", function () {
    expect(fizzbuzz.test(15)).toEqual("FizzBuzz")
  });

  it ("should return n if n is not divisibe by 15, 5 or 3", function () {
    expect(fizzbuzz.test(14)).toEqual(14)
  });

});
