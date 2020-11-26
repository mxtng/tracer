const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const businessSchema = new Schema(
  {
    owner: String,
    name: String,
    address: String,
    contact: Number,
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
