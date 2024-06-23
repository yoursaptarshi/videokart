const express = require('express')
const {contact,courseRequest,getDashboardStats} = require('../controllers/otherController')

const {authorizeAdmin,isAuthenticated} = require('../middlewares/auth')

const router = express.Router();

router.route('/contact').post(contact)
router.route('/courserequest').post(courseRequest)

router.route("/admin/stats")
.get(isAuthenticated,authorizeAdmin,getDashboardStats)

module.exports = router