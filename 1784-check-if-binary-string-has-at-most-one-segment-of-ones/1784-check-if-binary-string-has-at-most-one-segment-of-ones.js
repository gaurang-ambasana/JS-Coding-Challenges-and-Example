/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = s => s.split(`0`).filter(Boolean).length < 2;