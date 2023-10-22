const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const { sq } = require('./config/db');
const userRouter = require('./routes/user.route');
const actionRouter = require('./routes/action.route');
app.use(express.json());

dotenv.config();
app.use(morgan('tiny'));
app.use('/users/', userRouter);
app.use('/actions/', actionRouter);

app.listen(4000, () => {
  console.log(`App is running on port 4000`);
});
