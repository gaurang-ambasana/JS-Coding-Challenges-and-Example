class NumArray {
    constructor (nums) {
        this.arr = nums;
    }
    
    sumRange (left, right) {
        return this.arr.slice(left, right + 1).reduce((sum, e) => sum + e, 0);
    }
};