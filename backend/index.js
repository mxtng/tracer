/*
ENV VARIABLES CONFIG LIST
(1) process.env.MONGODB_URI
(2) process.env.PORT
*/

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

(async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('process.env.MONGODB_URI not found');
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.use(express.json());

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
