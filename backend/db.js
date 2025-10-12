const mongoose = require('mongoose');
const Mongo_URI = "mongodb+srv://cloudNotes:Pass%40123@cluster0.7dklqjh.mongodb.net/cloudnotes"

const DB_Connect = async () => {
    try {
       await mongoose.connect(Mongo_URI,)
        console.log("Connected to MongoDB Successfully...")
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = DB_Connect;