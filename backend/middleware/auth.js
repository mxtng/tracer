const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.get('Authorization');
  if (!token) {
    req.isAuth = false;
    return next();
  }

  let authData;
  try {
    authData = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!authData) {
    req.isAuth = false;
    return next();
  }

  req.isAuth = true;
  req.userData = authData;
  next();
};
