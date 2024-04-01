const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = () => {
  // mongoose.connect(mongoURI, ()=>{
  //     console.log("Connected to Mongo Succesfully");
  // })

  mongoose.connect(mongoURI);

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected succesfully to the database");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
  });
};

module.exports = connectToMongo;
