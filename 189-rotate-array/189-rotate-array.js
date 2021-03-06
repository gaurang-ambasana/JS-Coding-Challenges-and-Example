/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => k === 0 ? nums : nums.splice(0, 0, ...nums.splice(nums.length - (k % nums.length), (k % nums.length)));