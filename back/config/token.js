const jwt = require("jsonwebtoken");
const SECRET = "margarita";

function generateToken(payload) {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" });
  return token;
}

function validateToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { generateToken, validateToken };
