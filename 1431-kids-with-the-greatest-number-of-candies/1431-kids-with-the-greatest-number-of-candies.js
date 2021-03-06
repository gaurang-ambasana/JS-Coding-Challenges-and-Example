/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    const max = candies.reduce((max, c) => c > max ? c : max, -Infinity);
    return candies.map(c => (c + extraCandies + 1) > max);
};