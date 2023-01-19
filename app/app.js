const express = require('express');
const morgan = require('morgan');
const app = express();
const adminRouter = require('../routes/staff/adminRouter');

// === Middlewares ===
app.use(morgan('dev'));


// === Routes ===
app.use('/api/admins', adminRouter)


module.exports = app;