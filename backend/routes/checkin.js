const express = require('express');
const router = express.Router();

const CheckIn = require('../models/checkin');
const Business = require('../models/business');

router.get('/checkin/admin', async (req, res) => {
  if (!req.isAuth) {
    return res.status(403).send({ error: 'Permission denied' });
  }

  const { businessId } = req.userData;

  const adminCheckIn = await CheckIn.findOne({ business: businessId });
  if (!adminCheckIn) return res.send('null');
  return res.send(adminCheckIn);
});

router.get('/checkin/verify-link/:checkInLink', async (req, res) => {
  const { checkInLink } = req.params;

  const checkIn = await CheckIn.findOne({ checkInLink }).populate('business');
  if (!checkIn) return res.status(400).send({ error: 'Invalid URL' });

  const businessName = checkIn.business.name;

  return res.send({ businessName });
});

router.post('/checkin/create-new-link', async (req, res) => {
  if (!req.isAuth) {
    return res.status(403).send({ error: 'Permission denied' });
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

  // return res.send({ checkInLink: newLink.checkInLink });
  return res.send('success');
});

router.post('/checkin/customer-checkin', async (req, res) => {
  const { checkInLink, ...customerDetail } = req.body;

  try {
    const existingCheckInLink = await CheckIn.findOne({ checkInLink });
    if (!existingCheckInLink)
      return res.status(400).send({
        error: 'Check-in link not found',
      });

    existingCheckInLink.customers.push(customerDetail);
    await existingCheckInLink.save();

    return res.send('success');
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: 'Check-in failed' });
  }
});

module.exports = router;
