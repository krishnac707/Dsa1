// 1)
// function removeElement(nums,val){
//     let k = 0;
//     var res = []
//     for(let i = 0;i<nums.length;i++){
//         if(nums[i]!== val){
//             nums[k]= nums[i]
//             k++;
//             res.push(nums[k])
//         }
//     }
//     return k;
// }
// console.log(removeElement([3,2,2,3],3));

// 2)

// var x = 121;
// var arr = x.toString().split('');
// function isPalindrome(str) {
//   left = 0;
//   right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(isPalindrome(arr));

// 3) sum of all array

// var arr = [1,2,3,4,5]

// function calculateSum(arr){
//     sum = 0
//     for (var i=0;i<arr.length;i++){
//         sum = sum + arr[i]
//     }
//     return sum;
// }

// console.log(calculateSum(arr));

// 4)

// var x = "tat";
// var arr = x.toString().split('');
// function isPalindrome(str) {
//   left = 0;
//   right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(isPalindrome(arr));

// var revArray = [1, 4, 6, 2, 6, 32, 4];
// var temp;
// function reverseArray(data, start, end) {
//   if (start <= end) {
//     temp = data[start];
//     data[start] = data[end];
//     data[end] = temp;
//     reverseArray(data, start + 1, end - 1);
//   }
// }
// console.log(reverseArray(revArray, 0, revArray.length - 1));

// 10)

// var sortNumber = [3,5,2,1,9,3]

// sortNumber.sort();
// console.log(sortNumber);
