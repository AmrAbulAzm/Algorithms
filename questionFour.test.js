const solve = require('./questionFour')

test('solve receives an array of numbers and a target. It returns the indices of numbers that add up to the target', () => {
  const numbers1 = [2, 7, 11, 15]
  const target1 = 9

  const actual1 = solve(numbers1, target1)
  const expected1 = [0, 1]

  const numbers2 = [17, 8, 1, 5]
  const target2 = 13

  const actual2 = solve(numbers2, target2)
  const expected2 = [1, 3]

  const number3 = [4, 6, 53, 16, 23, 1, -4, -8]
  const target3 = 12

  const actual3 = solve(number3, target3)
  const expected3 = [3,6]

  expect(actual1).toEqual(expected1)
  expect(actual2).toEqual(expected2)
  expect(actual3).toEqual(expected3)
})