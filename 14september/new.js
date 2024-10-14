let arr = [78,45,12,45,"fjdks"];
console.log(arr);
console.log(arr[3]);

console.log(typeof(arr));
console.log(typeof(arr[4]));
console.log(typeof(arr[4][2]));
console.log(typeof(arr[2]));

let arr2 = ["dhdkjfelked"];
console.log(arr2[0][0]);
console.log(arr2[0][3]);

let arr3 = [45,12, function(){console.log("function called")}];
console.log(arr3[2]());
console.log(typeof(arr3[2]));

let arr4 = [null,undefined,1,2,3,4,5,6,7,8,9,10];
// console.log(arr4.slice(3,7));
for (let i=0; i<arr4.length;i++){
    console.log(arr4[i]);
    console.log(i);
}
for(let i in arr4){
    console.log(i);
}
for(let i of arr4){
    console.log(i);
}

let arr5 = [1,2,3,4,5,"fjkfjsfsdf",6,7,8,9,10];
console.log(arr5[5]);
for(let i of arr5){
    console.log(i);
}
