const express = require('express');
const router = express.Router();

const Business = require('../models/business');

router.get('/business/link', async (req, res) => {
  if (!req.isAuth) {
    return res.status(403).send('Permission denied');
  }

  const { businessId } = req.userData;

  const business = await Business.findById(businessId);
  if (!business) return res.status(400).send('Business not found');
  return res.send({ checkInLink: business.checkInLink });
});

module.exports = router;
