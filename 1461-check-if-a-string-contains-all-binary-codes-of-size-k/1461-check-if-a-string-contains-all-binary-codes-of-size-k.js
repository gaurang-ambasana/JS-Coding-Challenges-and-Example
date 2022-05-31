/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
let hasAllCodes = (s, k) => {
    const set = new Set();

    for (let i = 0; i <= s.length - k; i++)
        set.add(s.substr(i, k));

    return set.size === Math.pow(2, k);
};