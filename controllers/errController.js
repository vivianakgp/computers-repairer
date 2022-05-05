const globalErrHandler = (err, req, res, next) => {
  res.status(500).json({
    status: 'error',
    err: err,
  });
};
module.exports = { globalErrHandler };
