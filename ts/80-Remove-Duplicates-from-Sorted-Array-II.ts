function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let y = 0;
    let indexOfLastDep = 1

    for (let i = 0; i < (nums.length); i++) {
        if (nums[i] === nums[i - 1] ) {
            indexOfLastDep++
        }
        else {
            indexOfLastDep = 1
        }
        if (indexOfLastDep <= 2) {
            nums[y] = nums[i];
            y++;
        }
    }
    // nums = []
    // nums = arr.sort((a, b) => a - b)
    nums = nums.slice(0, y)
    // console.log(nums)
    // console.log(y)

    // console.log(nums.slice(0, length));
    return y
};