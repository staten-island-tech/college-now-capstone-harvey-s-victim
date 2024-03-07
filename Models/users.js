const mongoose = require("mongoose");
const slugify = require("slugify");

const userSchema = new mongoose.Schema({ 
    username: {
        type: String,
        trim: true,
        required: "Please enter a username",
    }, 
    balance: {
        type: Number,
    }, 
    slug: String,
    _id: {
        type: Number,
    }
})

userSchema.pre("save", function (next) {
    if(!this.isModified("username")) {
        next();
        return
    }
    this.slug = slugify(this.username);
    next()
});



module.exports = mongoose.model("User", userSchema)