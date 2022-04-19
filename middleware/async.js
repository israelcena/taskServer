const asyncWrapper = (fn) => {
  try{
    await fn(req, res, next);
  } catch(err) {
    next(err);
  }
};

module.exports = asyncWrapper;