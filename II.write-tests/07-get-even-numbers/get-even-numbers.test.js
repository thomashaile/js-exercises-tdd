var getEven = require("./get-even-numbers");
test("get even numbers", function() {
  // Arrange
  var input = [22, 13, 73, 82, 4];
  var unchanged = [22, 13, 73, 82, 4];
  var expected = [22, 82, 4];
  // Act
  var result = getEven(input);
  // Assert
  expect(result).toEqual(expected);
  expect(unchanged).toEqual(input);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

/*
 test code passed
*/
