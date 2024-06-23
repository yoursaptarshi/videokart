const express = require('express')

const {buySubscription,cancelSubscription,getRazorPayKey,paymentVerification} = require('../controllers/paymentController')
const {isAuthenticated} = require('../middlewares/auth')

const router = express.Router();


router.route('/paymentverification').post(isAuthenticated,paymentVerification);

router.route('/razorpaykey').get(getRazorPayKey);

router.route("/subscribe/cancel").delete(isAuthenticated,cancelSubscription);

module.exports = router;