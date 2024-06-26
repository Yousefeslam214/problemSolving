function removeElement(nums: number[], val: number): number {
    // console.log(nums[val]);
    let y = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[y] = nums[i];
            y++;
        }
    }
    // console.log(y)
    return y;
};