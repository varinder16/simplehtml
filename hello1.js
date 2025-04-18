console.log("hello world");
const mname = document.getElementById("main-heading");
const second = document.getElementById("second");
var btn = document.getElementById("clickb");
var clicksecond =document.getElementById("clicksecond");

var body = document.getElementById("body1");
console.log(clicksecond);
console.log(second);
console.log(mname);
console.log(btn);





btn.addEventListener("click", function() {
    
    mname.style.backgroundColor = "yellow";
    mname.style.fontSize = "50px";
    mname.style.border = "2px solid black";
    mname.style.padding = "10px";
    mname.style.textAlign = "center";
})

clicksecond.addEventListener("click", function(){
    
   let newitem = document.createElement("p");
    newitem.textContent = "hello world";
    body.appendChild(newitem);
})


setTimeout(function(){    // asynchronus nature of javascript is shown in htis example
    console.log("hello world"); // after some time we want to execute a function
}, 2000);


//CLOUSER

function outer() {
    let count = 0;
    return function(){
        count++;
        console.log(count); 
    }
}
let increment = outer();
console.log(increment);