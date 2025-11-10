const mongoose = require('mongoose');

const DB_Connect = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI,)
        console.log("Connected to MongoDB Successfully...\n")
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = DB_Connect;