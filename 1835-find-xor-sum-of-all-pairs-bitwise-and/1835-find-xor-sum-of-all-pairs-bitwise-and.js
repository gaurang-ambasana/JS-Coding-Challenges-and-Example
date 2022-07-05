/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

// Since (X & A) ^ (X & B) = X & (A ^ B)

const doXOR = (a, b) => a ^ b;

const getXORSum = (arr1, arr2) => arr1.reduce(doXOR) & arr2.reduce(doXOR);