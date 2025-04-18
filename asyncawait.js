/*async function getdata() {// it always return a promise 

    return "hello";
}
const datapromise = getdata();

datapromise.then(function(ans){
    console.log(ans);
})*/

//difference between promise hallign with and without async await 

const p = new Promise((resolve , reject) => {
    setTimeout( () => {
        resolve("hello");
    }, 2000);
})

function getdata(){
    p.then((res) => {
        console.log(res);
    })
    console.log("who");
}

//getdata();
// IN CASE OF NORMAL EXECUTION OF THE PROMISE THE PROMISE WILL NOT WAIT OR THE TIMER TO EXPIRE IT WILL PRINT THE 
// VALUE BUT IN ASYNC AWAIT IT WAIT FOR SOME TIME UNTIL THE PROMISE IS RESOLVED we made to wait for the promise to resolved
async function haldlepromise(){
    const val1 = await p;
    console.log(val1);
    
    console.log("___________");
   //so in this case both the promises will be resolved parallely 
// if i have 2 promises one is doing after 3 sec and other aftr 5 sec then 
// if we use the promise with 5 se time 1st then the whole code will be waiting for 5 sec then immidately the rest will be 
// but in other case if 3 sec is called first then it will execute after 3 sec and the second one after 5 sec 




   
    const val = await p;
    console.log(val);
    console.log("THE DIFFERENCE WE SEE WHEN WE USE ASYNC AWAIT ");
}

haldlepromise();


