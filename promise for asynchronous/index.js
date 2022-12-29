let a = 10;
let b = 0;
console.log(a+b);

//promise is used to take care of drawbacks caused in asynchronous data
//resolve works when it works fine and reject when the code gives error
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve(20);
    },2000)
})

waitingData.then((data)=>{
    console.log(a+data);
})
