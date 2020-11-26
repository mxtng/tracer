const express = require('express');
const router = express.Router();

const Business = require('../models/business');

router.get('/business/:businessId/link', async (req, res) => {
  const { businessId } = req.params;

  const business = await Business.findById(businessId);
  if (!business) return res.status(400).send('Business not found');

  return res.send({ checkInLink: business.checkInLink });
});

module.exports = router;
