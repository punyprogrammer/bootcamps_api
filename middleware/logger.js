//@desc Logs req to consoloe
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")} ${req.originalUrl}`
  );
  next();
};
module.exports = logger;
