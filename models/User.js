const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
});

// Hash password before saving
// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });

// Method to compare passwords
// userSchema.methods.compareEmail = async function (candidateEmail) {
//   return await bcrypt.compare(candidateEmail, this.email);
// };

const User = mongoose.model("User", userSchema);

module.exports = User;
