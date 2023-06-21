const mongoose = require("mongoose");


mongoose
.connect("mongodb://localhost:27017/EvTap")
.then(() => {
    console.log("Connected to MongoDBs");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
user.pre('save', async function (next) {
    const doc = this;
    if (doc.isNew) {
      const countDoc = await Counter.findOneAndUpdate(
        { _id: 'productId' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );
      doc.id = countDoc.seq;
    }
    next();
});
  
const Users = new mongoose.model("Users",user)

module.exports = Users