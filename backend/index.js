/*
ENV VARIABLES CONFIG LIST
(1) process.env.MONGODB_URI
(2) process.env.PORT
(2) process.env.JWT_SECRET
*/

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 5000;
const auth = require('./middleware/auth');
const authRoute = require('./routes/auth.js');
const businessRoute = require('./routes/business.js');
const checkInRoute = require('./routes/checkin.js');

(async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('process.env.MONGODB_URI not found');
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    app.use(express.json());
    app.use(cors('*'));

    // auth middleware
    app.use(auth);

    // route middlewares
    app.use('/api', authRoute);
    app.use('/api', businessRoute);
    app.use('/api', checkInRoute);

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.listen(port, () =>
      console.log(`Server connection established on PORT ${port}`)
    );
  } catch (err) {
    console.log(err);
  }
})();
