const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  Password: String
},
  { collection: "users" }
);


module.exports = mongoose.model("userSchema", userSchema);
