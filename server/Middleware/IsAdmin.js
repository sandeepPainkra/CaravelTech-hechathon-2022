module.exports = (req, res, next) => {
  if (req.user.admin) {
    next();
  } else {
    res.status(401).json({ error: "you are not admin" });
  }
};
