// @desc Admin Register
// @route POST /api/admins/register
// @access private

exports.adminRegisterCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Admin has been registered!'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}


// @desc Admin Login
// @route POST /api/admins/login
// @access private

exports.adminLoginCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Admin has been Login!'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}


// @desc Get All Admin
// @route GET /api/admins/
// @access private

exports.getAllAdminCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Get all admins'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}


// @desc Get Single Admin
// @route GET /api/admins/:id
// @access private

exports.getSingleAdminCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Get single admins'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}


// @desc Update Single Admin
// @route PUT /api/admins/:id
// @access private

exports.updateAdminCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Update single admins'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}


// @desc Delete Single Admin
// @route DELETE /api/admins/:id
// @access private

exports.deleteAdminCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Delete single admin'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}


// @desc Admin suspending teacher
// @route PUT api/admins/suspend/teacher/:id
// @access private

exports.adminSuspendTeacherCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Admin suspending teacher'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}


// @desc Admin Unsuspending teacher
// @route PUT api/admins/unsuspend/teacher/:id
// @access private

exports.adminUnsuspendTeacherCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Admin Unsuspending teacher'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}


// @desc Admin Withdrawing teacher
// @route PUT api/admins/withdraw/teacher/:id
// @access private

exports.adminWithdrawTeacherCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Admin Withdrawing teacher'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}


// @desc Admin Unwithdrawing teacher
// @route PUT api/admins/unwithdraw/teacher/:id
// @access private

exports.adminUnwithdrawTeacherCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Admin Unithdrawing teacher'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}


// @desc Admin Published exam
// @route PUT api/admins/publish/exam/:id
// @access private

exports.adminPublishedExamCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Admin Published exam'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}


// @desc Admin Unpublished exam
// @route PUT api/admins/unpublish/exam/:id
// @access private

exports.adminUnpublishedExamCtlr = (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'Admin UnPublished exam'
    })
  } catch (error) {
    res.json({
      status: 'failed',
      error: error.message
    })
  }
}