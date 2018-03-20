module.exports = opts => (req, res, next) => {
  res.header("CORS", opts.origin);
  next();
};
