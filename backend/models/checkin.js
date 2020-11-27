const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    fullName: String,
    nric: Number,
    temperature: Number,
  },
  {
    timestamps: true,
  }
);

const checkInSchema = new Schema(
  {
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business',
    },
    checkInLink: { type: String, required: true },
    customers: [customerSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('CheckIn', checkInSchema);
