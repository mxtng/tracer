const express = require('express');
const router = express.Router();

const CheckIn = require('../models/checkin');
const Business = require('../models/business');

router.post('/checkin/create-new-link', async (req, res) => {
  if (!req.isAuth) {
    return res.status(403).send('Permission denied');
  }

  const { businessId } = req.userData;

  const checkInLink = businessId.slice(0, 12) + '_checkin';

  const existingCheckInLink = await CheckIn.findOne({ business: businessId });
  if (existingCheckInLink)
    return res.status(400).send({
      error: 'Existing check-in link found',
    });

  const business = await Business.findOneAndUpdate(
    { _id: businessId },
    { checkInLink },
    { new: true }
  );
  if (!business) return res.status(400).send({ error: 'Business not found' });

  const newLink = new CheckIn({
    business: businessId,
    checkInLink,
  });

  await newLink.save();

  return res.send({ checkInLink: newLink.checkInLink });
});

module.exports = router;
