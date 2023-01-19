const express = require('express');
const { adminRegisterCtlr, adminLoginCtlr, getAllAdminCtlr, updateAdminCtlr, getSingleAdminCtlr, deleteAdminCtlr, adminSuspendTeacherCtlr, adminUnsuspendTeacherCtlr, adminWithdrawTeacherCtlr, adminUnwithdrawTeacherCtlr, adminPublishedExamCtlr, adminUnpublishedExamCtlr } = require('../../controller/staff/adminController');

const adminRouter = express.Router()

// Admin Register
adminRouter.post('/register', adminRegisterCtlr)

// Admin Login
adminRouter.post('/login', adminLoginCtlr)

// Get all Admin
adminRouter.get('/', getAllAdminCtlr)

// Get Single Admin
adminRouter.get('/:id', getSingleAdminCtlr)

// Update Admin
adminRouter.put('/:id', updateAdminCtlr)

// Delete Admin
adminRouter.delete('/:id', deleteAdminCtlr)

// Admin suspending teacher
adminRouter.put('/suspend/teacher/:id', adminSuspendTeacherCtlr)

// Admin Unsuspending teacher
adminRouter.put('/unsuspend/teacher/:id', adminUnsuspendTeacherCtlr)

// Admin Withdrawing teacher
adminRouter.put('/withdraw/teacher/:id', adminWithdrawTeacherCtlr)

// Admin Unwithdrawing teacher
adminRouter.put('/unwithdraw/teacher/:id', adminUnwithdrawTeacherCtlr)

// Admin Published exam
adminRouter.put('/publish/exam/:id', adminPublishedExamCtlr)

// Admin Unpublished exam
adminRouter.put('/unpublish/exam/:id', adminUnpublishedExamCtlr)

module.exports = adminRouter;