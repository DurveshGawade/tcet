const mongoose = require("mongoose");

const conn_str = "mongodb+srv://root:admin@cluster0.3mbrayu.mongodb.net/tcet2?retryWrites=true&w=majority";

mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection sucessful"))
    .catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
})

const userObject = new mongoose.model("users", userSchema)

exports.User = userObject;