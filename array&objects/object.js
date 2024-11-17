let obj = {
    "name": "John",
    "age": 30,
    "'contact":94567,
    "address": ['hh','tt','gh']
}
// access data from object two ways 1. by . and 2.by []
console.log(obj.name); // used when key has no space
console.log(obj["name"]);// used when key has space because key also is in string form 
console.log(obj["age"]);

// how to add key value pair to object
obj["city"]="New York";
console.log(obj);

obj["hobbies"] = ["playing football",'dancing','gaming'];
console.log(obj);

