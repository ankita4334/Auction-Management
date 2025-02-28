const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    uname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mno: { type: String, required: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ["admin", "user"], 
        default: "user"  // Default role is 'user'
    }
}, { timestamps: true });

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
