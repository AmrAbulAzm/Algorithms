function solve(nums, target) {
  const numsReference = {}
  for (let i = 0 ; i < nums.length ; i++) {
    const secondNumber = target - nums[i]
    if (numsReference[secondNumber] !== undefined) {
      return [numsReference[secondNumber], i]
    }
    numsReference[nums[i]] = i
  }
}

module.exports = solve