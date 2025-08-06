// config/connection.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("db connection is success")
    } catch (err) {
        console.error("connection falied", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
