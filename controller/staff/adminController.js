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
    data: user
  })
})


// @desc Admin Login
// @route POST /api/admins/login
// @access private

exports.adminLoginCtlr = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await Admin.findOne({ email: email });
  if (!user) {
    return res.json({ message: "User not found for this email" })
  }
  if (user && await user.verifyPassword(password)) {
    return res.json({ data: generateToken(user._id) })
  } else {
    return res.json({ message: "Invalid user credentials" })
  }
})


// @desc Get All Admin
// @route GET /api/admins/
// @access private

exports.getAllAdminCtlr = AsyncHandler(async (req, res) => {
  res.json({
    status: 'success',
    data: 'Get all admins'
  })
})


// @desc Get Single Admin
// @route GET /api/admins/:id
// @access private

exports.getSingleAdminCtlr = AsyncHandler((req, res) => {
  console.log(req.userAuth);
  res.json({
    status: 'success',
    data: 'Get single admins'
  })

})


// @desc Update Single Admin
// @route PUT /api/admins/:id
// @access private

exports.updateAdminCtlr = AsyncHandler((req, res) => {
  res.json({
    status: 'success',
    data: 'Update single admins'
  })

})


// @desc Delete Single Admin
// @route DELETE /api/admins/:id
// @access private

exports.deleteAdminCtlr = AsyncHandler((req, res) => {
  res.json({
    status: 'success',
    data: 'Delete single admin'
  })

})


// @desc Admin suspending teacher
// @route PUT api/admins/suspend/teacher/:id
// @access private

exports.adminSuspendTeacherCtlr = AsyncHandler((req, res) => {
  res.json({
    status: 'success',
    data: 'Admin suspending teacher'
  })
}
)

// @desc Admin Unsuspending teacher
// @route PUT api/admins/unsuspend/teacher/:id
// @access private

exports.adminUnsuspendTeacherCtlr = AsyncHandler((req, res) => {
  res.json({
    status: 'success',
    data: 'Admin Unsuspending teacher'
  })
}
)

// @desc Admin Withdrawing teacher
// @route PUT api/admins/withdraw/teacher/:id
// @access private

exports.adminWithdrawTeacherCtlr = AsyncHandler((req, res) => {
  res.json({
    status: 'success',
    data: 'Admin Withdrawing teacher'
  })
}
)

// @desc Admin Unwithdrawing teacher
// @route PUT api/admins/unwithdraw/teacher/:id
// @access private

exports.adminUnwithdrawTeacherCtlr = AsyncHandler((req, res) => {
  res.json({
    status: 'success',
    data: 'Admin Unithdrawing teacher'
  })
}
)
// @desc Admin Published exam
// @route PUT api/admins/publish/exam/:id
// @access private

exports.adminPublishedExamCtlr = AsyncHandler((req, res) => {
  res.json({
    status: 'success',
    data: 'Admin Published exam'
  })
}
)

// @desc Admin Unpublished exam
// @route PUT api/admins/unpublish/exam/:id
// @access private

exports.adminUnpublishedExamCtlr = AsyncHandler((req, res) => {
  res.json({
    status: 'success',
    data: 'Admin UnPublished exam'
  })

})