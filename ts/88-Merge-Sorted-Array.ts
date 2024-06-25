/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
     for (let i = 0,  y = m; i < n; i++, y++) {
        nums1[y] = nums2[i]
    }
    nums1.sort((a, b) => a - b)
    
};