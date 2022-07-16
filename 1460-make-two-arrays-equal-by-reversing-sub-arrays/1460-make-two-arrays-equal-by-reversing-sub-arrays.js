/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const getFreq = array => array.reduce((c, e) => (c[e] = (c[e] ?? 0) + 1, c), {});
    const targetCounter = getFreq(target);
    const arrCounter = getFreq(arr);
    return Object.keys(targetCounter).every(e => (targetCounter[e] === arrCounter[e]));
};