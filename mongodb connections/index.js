const dbConnect = require('./mongodb');
//below code gives promise error
// console.log(dbConnect());

//method 1 to handle promises:
// dbConnect().then((res) => {
    
//     res.find({}).toArray().then((data) => { //using toArray also returns promise
//         console.log(data);
//     });
// })

//method 2 to handle promise using async and await
const main =async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();