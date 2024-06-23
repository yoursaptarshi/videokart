const express = require('express')
const {addLecture,createCourse,deleteCourse,getAllCourses,getCourseLectures, deleteLecture

} = require('../controllers/videoController')

const {authorizeAdmin,isAuthenticated,authorizeSubscribers} = require('../middlewares/auth')

const singleUpload = require('../middlewares/multer')

const router = express.Router()


router.route("/courses").get(getAllCourses)

router.route("/createcourse").post(isAuthenticated,authorizeAdmin,singleUpload,createCourse)

router.route('/course/:id')
.get(isAuthenticated,authorizeSubscribers,getCourseLectures).post(isAuthenticated,authorizeAdmin,singleUpload,addLecture)
.delete(isAuthenticated,authorizeAdmin,deleteCourse)

router.route('/lecture').delete(isAuthenticated,authorizeAdmin,deleteLecture)

module.exports = router