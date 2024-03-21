const mongoose = require("mongoose");
const slugify = require("slugify");

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "add a name for your room"
    },
    slug: String,
    description: {
        type: String,
        trim: true,
        required: "add a description"
    },
    capacity: Number,
    connected: Number,
    started: Boolean,
});

gameSchema.pre("save", function (next) {
    if (!this.isModified("name")) {
      next();
      return;
    }
    this.slug = slugify(this.name);
    next();
  });
  
module.exports = mongoose.model("Game", gameSchema);