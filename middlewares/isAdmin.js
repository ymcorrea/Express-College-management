const Admin = require("../model/staff/Admin");

const isAdmin = async (req, res, next) => {
  const userId = req?.userAuth?._id;
  const adminFound = await Admin.findById(userId);

  if (adminFound?.role === "admin") {
    next()
  } else {
    next(new Error("Access denied, Admin only"));
  }

}

module.exports = isAdmin;