const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (!token) {
    res.status(401).json({ msg: "Access Denied" });
  }

  try {
    const result = jwt.verify(token, "dfsdfsdfsdfsewrwerw");
    console.log(result);
  } catch (error) {
    res.status(401).json({ msg: "Access Denied" });
    return;
  }
  next();
};
