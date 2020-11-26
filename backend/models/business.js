const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const businessSchema = new Schema(
  {
    owner: String,
    name: String,
    address: String,
    contact: Number,
    checkInLink: { type: String, default: null },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Business', businessSchema);
