const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    email: String,
    password: String,
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Account', accountSchema);
