function validateRegistrationUser(req, res, next) {
  let requiredFields = ["email", "password"];

  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: "Missing required fields",
      missingFields,
    });
  }

  next();
}
module.exports = { validateRegistrationUser };
