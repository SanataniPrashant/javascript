function ram(){
    let a = 0.1;
    let b = 0.2;
    console.log(a+b); // irrational no. cannot be represented in binary form
    console.log("\\"); // 
    let sum;
    console.log(typeof(sum)); // undefined
    let dum = null;
    console.log(typeof(dum)); // object
    dum = 90;
    console.log(typeof(dum));
    // bigint if you want to perform any operation then both the variable of same type ya to bigint - bigint ya to number - number. 
    // number has limit -2*10^16 to 2*10^16 but bigint is limitless.
    let big = 100n;
    console.log(typeof(big));
    let bigg = 200n;
    console.log(big + bigg); // 300n
    //2byte - character -  16bit
    // string is a collection of string  let a= "ramm" 2*4=8byte = 64bit;
    // symbol data type is used to make object key.

    let sy =("boom");
    let symbo =("boom");
    console.log(sy===symbo);

    let sym = Symbol("boom");
    let symb = Symbol("boom");
    console.log(sym===symb);

}
ram();
