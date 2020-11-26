const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Account = require('../models/account');
const Business = require('../models/business');

router.post('/register', async (req, res) => {
  const { email, password, business } = req.body;

  try {
    const account = await Account.findOne({ email });
    if (!account) throw new Error('Email is in use');

    const newAccount = new Account({
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newAccount.password, salt);

    newAccount.password = hashedPassword;
    await newAccount.save();

    const newBusiness = new Business({
      owner: business.owner,
      name: business.name,
      address: business.address,
      contact: business.contact,
      account: newAccount._id,
    });

    await newBusiness.save();

    await Account.findOneAndUpdate(
      { _id: newAccount._id },
      { business: newBusiness._id }
    );

    return res.send({ _id: newAccount._id, email: newAccount.email });
  } catch (err) {
    console.log(err);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const account = await Account.findOne({ email });
    if (!account) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) throw new Error('Invalid credentials');

    return res.send({ _id: account._id, email: account.email });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
