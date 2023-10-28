const jwt = require("jsonwebtoken");
const router = require("express").Router();
const UserModel = require("../model/user-model");
// const saltRounds = 5;

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await UserModel.create({
      name,
      email,
      password,
    });
    res.status(200).json({ success: true, msg: "user created successfully" });
  } catch (error) {
    res.status(400).json({ success: false, msg: "error in registering user." });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ where: { email } });
    if (user) {
      user.password = password;
      const token = jwt.sign({ id: "sdfjsdjhsd" }, "dfsdfsdfsdfsewrwerw", {
        expiresIn: "20s",
      });
      res.status(200).json({ success: true, token });
      return;
    }
    res.status(400).json({ success: false, msg: "error in logging user." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, msg: "error in logging user." });
  }
});

module.exports = router;
