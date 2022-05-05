const express = require('express');
// controller global error handler
const { globalErrHandler } = require('./controllers/errController');
//routers
const { usersRouter } = require('./routes/userRouter');
const { repairRouter } = require('./routes/repairsRouter');

//create new instance of express
const app = express();
// enable incoming JSON data with express.json()
app.use(express.json());
// endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairRouter);
// global error handler
app.use('*', globalErrHandler);

module.exports = { app };
