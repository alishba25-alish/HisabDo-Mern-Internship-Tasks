let students = [
    { id: 101, name: "Muhammad Ahmed", email: "ahmed.m@example.com", course: "Software Engineering", marks: 88 },
    { id: 102, name: "Fatima Noor", email: "fatima.noor@example.com", course: "Computer Science", marks: 92 },
    { id: 103, name: "Zainab Khan", email: "zainab.k@example.com", course: "Data Science", marks: 79 },
    { id: 104, name: "Syed Bilal Ali", email: "bilal.ali@example.com", course: "Artificial Intelligence", marks: 85 },
    { id: 105, name: "Ayesha Malik", email: "ayesha.m@example.com", course: "Software Engineering", marks: 94 },
    { id: 106, name: "Hamza Tariq", email: "hamza.tariq@example.com", course: "Cyber Security", marks: 67 },
    { id: 107, name: "Hafsa Siddiqui", email: "hafsa.s@example.com", course: "Information Technology", marks: 90 },
    { id: 108, name: "Usman Ghani", email: "usman.g@example.com", course: "Computer Science", marks: 73 },
    { id: 109, name: "Mariam Raza", email: "mariam.raza@example.com", course: "UI/UX Design", marks: 82 },
    { id: 110, name: "Omer Farooq", email: "omer.f@example.com", course: "Data Science", marks: 89 },
    { id: 111, name: "Sana Mahmood", email: "sana.m@example.com", course: "Software Engineering", marks: 76 },
    { id: 112, name: "Ali Hasan", email: "ali.hasan@example.com", course: "Cloud Computing", marks: 91 },
    { id: 113, name: "Hira Zubair", email: "hira.z@example.com", course: "Artificial Intelligence", marks: 84 },
    { id: 114, name: "Saad Rehman", email: "saad.r@example.com", course: "Cyber Security", marks: 62 },
    { id: 115, name: "Yusuf Ibrahim", email: "yusuf.i@example.com", course: "Computer Science", marks: 95 },
    { id: 116, name: "Khadija Javed", email: "khadija.j@example.com", course: "Web Development", marks: 87 },
    { id: 117, name: "Abdullah Sheikh", email: "abdullah.s@example.com", course: "Software Engineering", marks: 71 },
    { id: 118, name: "Laiba Arshad", email: "laiba.a@example.com", course: "Data Science", marks: 80 },
    { id: 119, name: "Zaid Saeed", email: "zaid.saeed@example.com", course: "Information Technology", marks: 68 },
    { id: 120, name: "Anum Parvez", email: "anum.p@example.com", course: "UI/UX Design", marks: 93 },
    { id: 121, name: "Taha Hussain", email: "taha.h@example.com", course: "Artificial Intelligence", marks: 77 },
    { id: 122, name: "Sumayya Baig", email: "sumayya.b@example.com", course: "Computer Science", marks: 86 },
    { id: 123, name: "Ibrahim Qureshi", email: "ibrahim.q@example.com", course: "Software Engineering", marks: 81 },
    { id: 124, name: "Nida Aslam", email: "nida.a@example.com", course: "Web Development", marks: 74 },
    { id: 125, name: "Mustafa Kamal", email: "mustafa.k@example.com", course: "Cyber Security", marks: 90 },
    { id: 126, name: "Mahnoor Fatima", email: "mahnoor.f@example.com", course: "Data Science", marks: 83 },
    { id: 127, name: "Shahzaib Imran", email: "shahzaib.i@example.com", course: "Cloud Computing", marks: 69 },
    { id: 128, name: "Bisma Sohail", email: "bisma.s@example.com", course: "Software Engineering", marks: 96 },
    { id: 129, name: "Hassan Alvi", email: "hassan.a@example.com", course: "Computer Science", marks: 75 },
    { id: 130, name: "Zunaira Shafiq", email: "zunaira.s@example.com", course: "Artificial Intelligence", marks: 87 }
];

const studentTableBody = document.getElementById("student-table-body");
const totalCountSpan = document.getElementById("total-count");
const paginationCount = document.getElementById("pagination-count");
const paginationTotal = document.getElementById("pagination-total");

const studentModal = document.getElementById("student-modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cancelModalBtn = document.getElementById("cancel-modal-btn");
const studentForm = document.getElementById("student-form");

const searchInput = document.getElementById("search-input");
const globalSearch = document.getElementById("global-search");
const filterMarksInput = document.getElementById("filter-marks");
const resetBtn = document.getElementById("reset-btn");

function renderStudents(dataToRender) {
    studentTableBody.innerHTML = "";

    if (dataToRender.length === 0) {
        studentTableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; color: #64748b; padding: 24px;">
                    No students found matching your search or filter.
                </td>
            </tr>`;
    } else {
        dataToRender.forEach((student) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td><strong>#${student.id}</strong></td>
                <td>
                    <div class="student-cell">
                        <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random" class="student-avatar" alt="${student.name}">
                        <span>${student.name}</span>
                    </div>
                </td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td><strong>${student.marks}</strong></td>
            `;
            studentTableBody.appendChild(row);
        });
    }

    if (totalCountSpan) totalCountSpan.textContent = dataToRender.length;
    if (paginationCount) paginationCount.textContent = dataToRender.length;
    if (paginationTotal) paginationTotal.textContent = students.length;
}

studentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value.trim();
    const marks = Number(document.getElementById("marks").value);

    const newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;
    const newStudent = { id: newId, name, email, course, marks };
    
    students.push(newStudent);

    applyFilters();
    closeModal();
});

function applyFilters() {
    const query = (searchInput ? searchInput.value : "").toLowerCase().trim();
    const minMarks = (filterMarksInput && filterMarksInput.value !== "") ? Number(filterMarksInput.value) : 0;

    const filteredStudents = students.filter((student) => {
        const matchesName = student.name.toLowerCase().includes(query);
        const matchesMarks = student.marks >= minMarks; 
        return matchesName && matchesMarks;
    });

    renderStudents(filteredStudents);
}

if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        if (filterMarksInput) filterMarksInput.value = "";
        renderStudents(students);
    });
}

if (openModalBtn) {
    openModalBtn.addEventListener("click", () => {
        studentForm.reset();
        studentModal.classList.add("active");
    });
}

function closeModal() {
    if (studentModal) studentModal.classList.remove("active");
    studentForm.reset();
}

if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === studentModal) {
        closeModal();
    }
});

if (searchInput) searchInput.addEventListener("input", applyFilters);
if (filterMarksInput) filterMarksInput.addEventListener("input", applyFilters);

renderStudents(students);