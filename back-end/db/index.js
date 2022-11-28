const mongoose = require('mongoose');

// `npm install mongoose`
const options = {
    keepAlive: true,
    connectTimeoutMS: 10000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// const dbUrl = `mongodb+srv://admin:lDwDH1ijgV95YOd8@cluster0.hylimuo.mongodb.net/projectManagementAppMern?retryWrites=true&w=majority`;
const dbUrl = `mongodb+srv://testuser:testuser@cluster0.vaxtqvv.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(dbUrl, options, (err) => {
  if (err) console.log(err);
});

// Validate DB connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Mongo DB Connected successfully");
});


module.exports = db;