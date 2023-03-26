const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((con) => {
        console.log("DB connection successful!");
      });
};

module.exports = connectDB;