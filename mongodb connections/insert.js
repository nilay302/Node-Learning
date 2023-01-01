const dbConnect = require('./mongodb');

const insertData =async ()=>{
    const db = await dbConnect();
    const result =await db.insert({
          name:'pen',
          price:'$05'
    })
    const data = await db.find().toArray();
    console.log(data);
}

insertData();