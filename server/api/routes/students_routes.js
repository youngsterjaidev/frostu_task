const express = require('express')
const student_router = express.Router()
const {
  getStudents,
  addStudents
} = require('../controllers/students_controller.js')

student_router.route('/').get(getStudents);
student_router.route("/add").post(addStudents);

module.exports = student_router

