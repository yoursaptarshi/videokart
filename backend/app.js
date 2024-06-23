const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const ErrorMiddleware = require('./middlewares/Error')
dotenv.config({path:'./config/config.env'});

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(cookieParser());
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
    methods:["Get","Post","Put","Delete"]
}))

//importing routes
const course = require('./routes/courseRoutes')
const user = require('./routes/userRoutes')
const payment = require('./routes/paymentRoutes')
const other = require('./routes/otherRoutes')


app.use("/api/v1",course)
app.use("/api/v1/",user)
app.use('/api/v1/',payment)
app.use('/api/v1/',other)


module.exports = app;

app.use(ErrorMiddleware)