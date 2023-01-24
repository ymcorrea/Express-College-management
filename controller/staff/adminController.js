const AsyncHandler = require('express-async-handler');
const Admin = require('../../model/staff/Admin');
const generateToken = require('../../utils/generateToken');

// @desc Admin Register
// @route POST /api/admins/register
// @access private

exports.adminRegisterCtlr = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const foundAdmin = await Admin.findOne({ email });

  if (foundAdmin) {
    return res.json({
      message: "Admin already exist!"
    })
  }

  const user = await Admin.create({
    name,
    email,
    password
  });

  return res.status(201).json({
    status: 'success',
    data: user,
    message: "Admin registered successfully"
  })
})


// @desc Admin Login
// @route POST /api/admins/login
// @access private

exports.adminLoginCtlr = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await Admin.findOne({ email: email }).select('-createdAt -updatedAt -__v');
  if (!user) {
    return res.json({ message: "User not found for this email" })
  }
  if (user && await user.verifyPassword(password)) {
    return res.json({
      profile: user,
      token: generateToken(user._id),
      message: "Admin Login Succesfully"
    })
  } else {
    return res.json({ message: "Invalid user credentials" })
  }
})


// @desc Get All Admin
// @route GET /api/admins/
// @access private

exports.getAllAdminCtlr = AsyncHandler(async (req, res) => {
  const admins = await Admin.find().select('-password -createdAt -updatedAt -__v');
  res.status(200).json({
    status: "Success",
    data: admins,
    message: "Get admins successfully!"
  })
})


// @desc Get Single Admin
// @route GET /api/admins/:id
// @access private

exports.getAdminProfileCtlr = AsyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.userAuth.id).select(
    '-password -createdAt -updatedAt -__v'
  );
  if (!admin) {
    throw new Error("Admin not found!")
  } {
    res.status(200).json({
      status: "Success",
      profile: admin
    })
  }
})


// @desc Update Single Admin
// @route PUT /api/admins/:id
// @access private

exports.updateAdminCtlr = AsyncHandler(async (req, res) => {

})


// @desc Delete Single Admin
// @route DELETE /api/admins/:id
// @access private

exports.deleteAdminCtlr = AsyncHandler(async (req, res) => {

})



// @desc Admin suspending teacher
// @route PUT api/admins/suspend/teacher/:id
// @access private

exports.adminSuspendTeacherCtlr = AsyncHandler(async (req, res) => {

})


// @desc Admin Unsuspending teacher
// @route PUT api/admins/unsuspend/teacher/:id
// @access private

exports.adminUnsuspendTeacherCtlr = AsyncHandler(async (req, res) => {

})


// @desc Admin Withdrawing teacher
// @route PUT api/admins/withdraw/teacher/:id
// @access private

exports.adminWithdrawTeacherCtlr = AsyncHandler(async (req, res) => {

})


// @desc Admin Unwithdrawing teacher
// @route PUT api/admins/unwithdraw/teacher/:id
// @access private

exports.adminUnwithdrawTeacherCtlr = AsyncHandler(async (req, res) => {

})

// @desc Admin Published exam
// @route PUT api/admins/publish/exam/:id
// @access private

exports.adminPublishedExamCtlr = AsyncHandler(async (req, res) => {

})


// @desc Admin Unpublished exam
// @route PUT api/admins/unpublish/exam/:id
// @access private

exports.adminUnpublishedExamCtlr = AsyncHandler(async (req, res) => {

})
