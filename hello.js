    
console.log("hello");
const pname = {
    first: "john",
    last: "doe"
}; // Added the missing closing brace here
console.log(pname.first);
console.log(pname.last);

const str = "hello";
console.log( `${str}`);


const cal = (price , quantity)=> {
    console.log("hello");

    return price*quantity;
}

console.log(cal(10, 20));    


// clouser example in this we not only get the return value but the function also carries the outer functiom
// information with it it apacks the info
function outer() {
    let count = 5;
    return function(){
        count++;
        return count;   
    };
}
let increment = outer();
console.log(increment());
