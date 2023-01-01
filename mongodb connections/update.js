const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne({ name: 'bottle' },
     { $set: { price: '$1' } });

    console.log(result);
}

updateData();