const car = {
    name: "ford",
    model: "mustang",
    year: 2020,
    color: "red"

}
const tesla = {
    name: "tesla",
    model: "model s",
    
    color: "black"
}

Object.setPrototypeOf(tesla, car); //giving acces of 1 object to another
//console.log(tesla.year );
function Mycar(name , year){// with the first letter capital we create a constructor function 
    this.name = name;
    this.year = year;
}
const mycar = new Mycar("ford", 2020);  // to use the function we use a new keyword for it
console.log(mycar);           // if we remove the new keyword it will not work give me undefined 

function Tea(mytea){
      this.mytea = mytea;
      this.describe = function(){
        console.log("my tea is " + this.mytea);
      }
      
}
const mytea = new Tea("green tea");
console.log(mytea.describe());

function Speices(name, color){
    this.name = name;
    this.color = color;
    
    
}
Speices.prototype.describe = function(){
    console.log("my name is " + this.name);
}
let rose = new Speices("rose", "red");
rose.describe();



class vehicle{
    constructor(name, model, year){
        this.name = name;
        this.model = model;
        this.year = year;
    }
    describe(){
        console.log("my name is " + this.name);
    }
}