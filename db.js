// database.js
const mongoose = require("mongoose");
const dbPath = "mongodb://root:"+process.env.MONGO_LOCAL_PW+"@localhost:27017/nodeRest";
// const dbPath = "mongodb+srv://dev:"+process.env.MONGO_LOCAL_PW+"@sandboxcluster-aoqeu.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;