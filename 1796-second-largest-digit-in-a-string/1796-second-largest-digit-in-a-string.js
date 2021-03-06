/**
 * @param {string} s
 * @return {number}
 */
let secondHighest = s => {
    const numsInS = s.match(/\d/g);
    const nums = numsInS ? Array.from(new Set(numsInS.join('').split(''))).sort((a, b) => b - a) : [];
    return nums.length > 1 ? nums[1] : -1;
};