const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    nickname: { type: String, required: true },
    age: { type: Number, required: true },
    job: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);
