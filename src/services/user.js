const User = require("../models/User");

async function insertUser(user) {
  try {
    const { email, password } = user;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, message: "Usuário já existe" };
    }

    const newUser = new User({ email, password });
    await newUser.save();
    return { success: true, message: "Usuário cadastrado com sucesso" };
  } catch (error) {
    console.error("Error inserting new user:", error);
    throw error;
  }
}

module.exports = {
  insertUser,
};
