let arr = [45,55,45,411,41,55,55,66,66,77,77,22];

console.log(arr.length);

arr.pop();// to delete last index
arr.pop();
console.log(arr);

arr.push("ram");// to insert in last index
console.log(arr);

arr.shift();
console.log(arr);// to delete 0 index

arr.unshift(777);// to insert in 0 index
console.log(arr);

delete arr[2]; // it deletes the value but index does not removed
console.log(arr);

// arr.splice(startfrom,howmany,addhowmany);
arr.splice(0,1);
console.log(arr);

arr.splice(0,0,7000);
console.log(arr);

arr.splice(0,0,7000,5,6,1,2,3);
console.log(arr);

arr.splice(arr.length-1,1);
console.log(arr);

arr.splice(arr.length,0,45,78,63);
console.log(arr);

arr.splice(3,5);
console.log(arr);

arr.splice(7,0,45,78,12,"jbdf");
console.log(arr);