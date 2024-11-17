let arr = ["ram","mohan",'roy',"lovely"]
arr.push("rama")
console.log(arr);
arr.pop();
console.log(arr);
a =arr.pop()
console.log(a);

let arr1 = [1,2,3,4,5,6,78,9,10]
let arr2 = [3,4,5,6,78,9,10]
let arr3 = [...arr1, ...arr2]
console.log(arr3);
let arr4 = [...arr1.slice(3), ...arr2]
console.log(arr4)

let arr5 = [].concat(arr1)
console.log(arr5)
