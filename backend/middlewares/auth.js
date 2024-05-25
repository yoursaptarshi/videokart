const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandler');
const {catchAsyncError} = require('./catchAsyncError')
const User = require('../models/User');

exports.isAuthenticated = catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token)
        {
            return next(new ErrorHandler("Not Logged In",401));
        }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
});

exports.authorizeSubscribers = (req,res,next)=>{
    if(req.user.subscription.status != "active" && req.user.role != "admin")
        {
            return next(new ErrorHandler('Only Subscribers can access this resource',403));
            
        }
        next();

}

exports.authorizeAdmin = (req,res,next)=>{
    if(req.user.role != "admin")
        {
            return next(new ErrorHandler(`${req.user.role} is not allowed to access this resource`),403)
        }
        next();
}