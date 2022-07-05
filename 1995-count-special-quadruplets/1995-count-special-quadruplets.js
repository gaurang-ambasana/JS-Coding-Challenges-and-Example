/**
 * @param {number[]} nums
 * @return {number}
 */
const countQuadruplets = nums => {
    let res = 0;
    
    for (let i = 0; i < nums.length; i++)
        for (let j = i + 1; j < nums.length; j++)
            for (let k = j + 1; k < nums.length; k++)
               for (let d = k + 1; d < nums.length; d++)
                   nums[i] + nums[j] + nums[k] === nums[d] && res++;
    
    return res;
};