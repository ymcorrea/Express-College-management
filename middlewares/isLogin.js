const Admin = require("../model/staff/Admin");
const verifyToken = require("../utils/verifyToken");

const isLogin = async (req, res, next) => {
  // Get token from the header
  const header = req.headers;
  const token = header?.authorization?.split(' ')[1];

  // Verify the token
  const verifiedToken = verifyToken(token);

  if (verifiedToken) {
    const admin = await Admin.findById(verifiedToken.id).select("name email role");
    req.userAuth = admin; // Save user to req.obj
    next();
  } else {
    const err = new Error("Token expired or invalid");
    next(err);
  }
}

module.exports = isLogin;