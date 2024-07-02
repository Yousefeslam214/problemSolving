// function summaryRanges(nums: number[]): string[] {
//     let str: number[][] = [];
//     let y = 0
//     let n = 0
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] ===( nums[i+1]-1) ) {
//             if (!str[y]) {
//                 str[y] = [];
//             }
//             str[y][n]= nums[i]
//             n++
//         }
//         // (if num is biggest or last num in iteration) or (if single number)
//         else {
//             if (!str[y]) {
//                 str[y] = [];
//             }
//             str[y][n]= nums[i]
//             y++
//             n= 0
//         }
//     }
    
//     //make final str list
//     let retList : string[]= []
//     for (let i = 0; i < str.length; i++){
//         if (str[i].length === 1){
//             retList[i]= `${str[i][0]}`
//         } else {
//             retList[i]= `${str[i][0]}->${str[i][str[i].length - 1]}`
//         }
//     }
//     // console.log(str)
//     // console.log(retList)
//     return retList

// };

// console.log(summaryRanges([0,1 ,2,4,5,7]))


function summaryRanges(nums: number[]): string[] {
    const retList: string[] = [];
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i + 1 === nums.length || nums[i] + 1 !== nums[i + 1]) {
            if (start === i) {
                retList.push(`${nums[start]}`);
            } else {
                retList.push(`${nums[start]}->${nums[i]}`);
            }
            start = i + 1;
        }
    }

    return retList;
}

