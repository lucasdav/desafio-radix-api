const {
  checkUserLogin,
} = require("../services/login");

async function postLogin(req, res) {
  try {
    const user = req.body;
    const userFounded = await checkUserLogin(user);
    if (userFounded) {
      res.json({ message: user.email });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  postLogin,
};
