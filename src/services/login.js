const User = require('../models/User');

async function checkUserLogin(user) {
  try {
    const { email, password } = user;
    const userFounded = await User.findOne({ email, password });
    return userFounded;
  } catch (error) {
    console.error('Error finding user:', error);
    throw error;
  }
}

module.exports = {
  checkUserLogin,
};