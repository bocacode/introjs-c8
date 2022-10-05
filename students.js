const students = require("./students.json")

// display all the student's first names one at a time, 
// one per line.
// eg.
// bobby
// jenny
// tara
function showStudents(studentList) {
    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i]
        console.log(student.firstName)
    }
}

showStudents(students)