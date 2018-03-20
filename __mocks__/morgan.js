module.exports = kind => (req, res, next) => {
  res.header("MORGAN", kind);
  next();
};
