const Student = require('../models/Student');

async function addStudent(req, res) {
    try {
        console.log(req.body, 'req.body')
        let student = new Student(req.body);
        await student.save();
        console.log("data saved succeessfully...")
        res.end("data added....")
    } catch (err) {
        console.log(err)
    }
}
const getStudents = async function (req, res) {
    try {
        let students = await Student.find({});
        console.log(students)
        res.send(students)

    } catch (err) {
        console, log(err)
    }
}//select *from table name
module.exports = {
    addStudent,
    getStudents
}