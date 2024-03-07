const mongoose = require("mongoose");
const slugify = require("slugify");

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "add a name"
    },
    slug: String,
    description: {
        type: String,
        trim: true,
        required: "add a description"
    }
})

gameSchema.pre("save", function (next) {
    if (!this.isModified("name")) {
      next();
      return;
    }
    this.slug = slugify(this.name);
    next();
  });
  
module.exports = mongoose.model("Game", gameSchema)