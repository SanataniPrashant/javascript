// spread operator (...)  you can copy an object or array into another object or array. 

// object 
let obj1 = { 
    a: 1, 
    b: 2, 
    c: 3 
};
let obj2 = { ...obj1,d:4 }; 
console.log(obj2); 

// array
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4,5,6];
console.log(arr2)

// rest parameters (...) // as an array
// rest parameters are used to pass a variable number of arguments to a function.
function display(...num){
    console.log(num);
}
display(1,2,3,4,5,6,7,8,9,);

function sum(...numbers) {  
    let sum = 0;
    // for (let number of numbers)
    //     {
    //         sum += number;
    //     }

    numbers.map((num)=>{
        sum+=num;
    });
    // console.log(sum);
    return sum;
}
console.log(sum(12,13,14,15,40,45));     // call the function with multiple arguments
//rest parameters returns the output as an array

// introduction:
//1.name
//2.from
//3.highest education qualification 4. projects and internship 