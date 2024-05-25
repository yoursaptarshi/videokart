const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config({path:'./config/config.env'});

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
    methods:["Get","Post","Put","Delete"]
}))

module.exports = app;