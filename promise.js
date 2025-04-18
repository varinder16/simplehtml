console.log("hello");
const cart = ['shoes' , 'sockes'];
const promise  = creatorder(cart);// so we create a promise 




promise.then(function(orderid){   // this is the consuming part of the promise how it is consumed
    console.log("promise resolved" + orderid);
    return orderid;
})

promise.then(function(orderid){
   return  addtocart(orderid); /// agin using promise.then is known as primise chaining if we want to do work in the nested manner 
                 // we want output of 1 to follow as input of other but while doing this we also need to return them also
                 // so they get into the chaining 
})
promise.catch(function(error){ // it catches the error in case of reject message
   console.log(error.message);
})

function creatorder(cart){        // actual function which create the promise
      const pr = new Promise(function(resolved, rejected){ // constructor to create a promise
        if(!validcart(cart)){
            rejected("cart is not valid"); 
        }
        if(validcart(cart)){
            const orderid = 1234;
            console.log("order created " + orderid);
            resolved(orderid);
        }
      });

    return pr; // return the promise
 }

function validcart(cart){
    return true;
}

function addtocart(orderid){
    console.log(`add to cart ${orderid}`);
}
// hello 