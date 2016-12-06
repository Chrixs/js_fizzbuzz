describe("Fizzbuzz", function() {
  var number;

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

  it("shold return Fizz if 3 is divisble by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
  });

});
