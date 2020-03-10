var getLargestNumber = require("./largest-number");
test("get second and third from array", function() {
  // Arrange
  var input = [3, 21, 88, 4, 36];
  var unchanged = [3, 21, 88, 4, 36];
  var expected = 88;
  // Act
  var result = getLargestNumber(input);
  // Assert
  expect(result).toEqual(expected);
  expect(unchanged).toEqual(input);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

/*
our test passed and our code is pure no bugs

*/
