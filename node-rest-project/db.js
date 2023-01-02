const Mongoose = require("mongoose")

const connectDB = async () => {
  await Mongoose.connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("Connection SuccessFul !!!");
}
module.exports = connectDB