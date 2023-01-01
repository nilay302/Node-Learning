const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db('e-comm');
    return db.collection('product');
}

module.exports = dbConnect;