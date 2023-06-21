const mongoose = require("mongoose");


mongoose
.connect("mongodb://localhost:27017/EvTap")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

const productSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});
productSchema.pre('save', async function (next) {
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
  
const Products = new mongoose.model("Products",productSchema)

module.exports = Products