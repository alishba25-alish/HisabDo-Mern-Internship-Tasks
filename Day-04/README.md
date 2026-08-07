# Day 04 - Student Management REST API

A RESTful backend API for a Student Management System built with Node.js, Express.js, and an in-memory data store.

## Features & Requirements
- **CRUD Operations**: Full support for Create, Read, Update, and Delete endpoints.
- **In-Memory Storage**: Manages student records dynamically using JavaScript arrays.
- **Data Validation**: Ensures required fields (`name`, `email`, `course`, `marks`), valid email formatting, and valid numeric marks range (0–100).
- **HTTP Status Codes**: Returns standard status codes (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`).
- **Comprehensive API Testing**: Tested using both Thunder Client and Postman.

## Student Object Schema
```json
{
  "id": 1,
  "name": "Muhammad Ahmed",
  "email": "ahmed@example.com",
  "course": "Software Engineering",
  "marks": 88
}
```

## Installation & Setup

1. **Navigate to the Day-04 directory**:
   ```bash
   cd Day-04
   ```

2. **Install required dependencies**:
   ```bash
   npm install
   ```
(Note: If setting up from scratch, install via ```npm install express cors ``` and ```npm install --save-dev nodemon```)

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Server will run at: `http://localhost:5000`

## API Endpoints Summary

| HTTP Method | Endpoint | Description | Success Code | Error Codes |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/students` | Retrieve all student records | `200 OK` | — |
| **GET** | `/students/:id` | Retrieve a single student by ID | `200 OK` | `400`, `404` |
| **POST** | `/students` | Create a new student record | `201 Created` | `400` |
| **PUT** | `/students/:id` | Update an existing student record | `200 OK` | `400`, `404` |
| **DELETE** | `/students/:id` | Delete a student record by ID | `200 OK` | `400`, `404` |

## Sample Requests & Responses

### 1. Create Student (`POST /students`)
**Request Body**:
```json
{
  "name": "Alishba Khan",
  "email": "alishba@example.com",
  "course": "Software Engineering",
  "marks": 95
}
```

**Response (`201 Created`)**:
```json
{
  "success": true,
  "message": "Student record created successfully.",
  "data": {
    "id": 3,
    "name": "Alishba Khan",
    "email": "alishba@example.com",
    "course": "Software Engineering",
    "marks": 95
  }
}
```

## API Testing & Screenshots

API endpoints have been verified for both successful operations and error edge cases (missing fields, invalid IDs, improper data types).

Proof of testing is documented in the repository under:
- `assets/Thunder-Client-API-test/`
- `assets/Postman-API-test/`
