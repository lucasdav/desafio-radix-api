const {
  insertUser,
} = require("../services/user");


async function postUser(req, res) {
  try {
    const newUser = req.body;
    const result = await insertUser(newUser);
    if (result.success) {
      res.status(201).json({ message: result.message });
    } else {
      res.status(400).json({ message: result.message });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  postUser,
};
