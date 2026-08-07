const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let students = [
  {id: 1,name: "Muhammad Ahmed",email: "ahmed@example.com",course: "Software Engineering", marks: 88},
  {id: 2,name: "Zainab Ramzan",email: "zainab@example.com",course: "Data Science",marks: 92}
];

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 1. GET
app.get('/students', (req, res) => {
  res.status(200).json({
    success: true,
    count: students.length,
    data: students
  });
});

app.get('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);

  if (isNaN(studentId)) {
    return res.status(400).json({
      success: false,
      error: "Invalid ID format. Student ID must be a number."
    });
  }

  const student = students.find(s => s.id === studentId);

  if (!student) {
    return res.status(404).json({
      success: false,
      error: `Student with ID ${studentId} not found.`
    });
  }

  res.status(200).json({
    success: true,
    data: student
  });
});

// 2. POST 
app.post('/students', (req, res) => {
  const { name, email, course, marks } = req.body;

  if (!name || !email || !course || marks === undefined) {
    return res.status(400).json({
      success: false,
      error: "Validation Error: 'name', 'email', 'course', and 'marks' are required fields."
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      error: "Validation Error: Invalid email address format."
    });
  }

  if (typeof marks !== 'number' || marks < 0 || marks > 100) {
    return res.status(400).json({
      success: false,
      error: "Validation Error: 'marks' must be a number between 0 and 100."
    });
  }

  const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;

  const newStudent = {
    id: newId,
    name: name.trim(),
    email: email.trim(),
    course: course.trim(),
    marks
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student record created successfully.",
    data: newStudent
  });
});

// 3. PUT 
app.put('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);

  if (isNaN(studentId)) {
    return res.status(400).json({
      success: false,
      error: "Invalid ID format. Student ID must be a number."
    });
  }

  const student = students.find(s => s.id === studentId);

  if (!student) {
    return res.status(404).json({
      success: false,
      error: `Student with ID ${studentId} not found.`
    });
  }

  const { name, email, course, marks } = req.body;

  if (email && !isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      error: "Validation Error: Invalid email address format."
    });
  }

  if (marks !== undefined && (typeof marks !== 'number' || marks < 0 || marks > 100)) {
    return res.status(400).json({
      success: false,
      error: "Validation Error: 'marks' must be a number between 0 and 100."
    });
  }

  if (name) student.name = name.trim();
  if (email) student.email = email.trim();
  if (course) student.course = course.trim();
  if (marks !== undefined) student.marks = marks;

  res.status(200).json({
    success: true,
    message: "Student record updated successfully.",
    data: student
  });
});

// 4. DELETE 
app.delete('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);

  if (isNaN(studentId)) {
    return res.status(400).json({
      success: false,
      error: "Invalid ID format. Student ID must be a number."
    });
  }

  const index = students.findIndex(s => s.id === studentId);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: `Student with ID ${studentId} not found.`
    });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: "Student record deleted successfully.",
    deletedRecord: deletedStudent
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});