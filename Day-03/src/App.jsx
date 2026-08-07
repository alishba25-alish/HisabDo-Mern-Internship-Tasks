import React, { useState } from 'react';
import './App.css';

const initialStudents = [
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

const getInitials = (name) => {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <i className="fa-solid fa-graduation-cap"></i>
        <span>Student Management Dashboard</span>
      </div>

      <div className="sidebar-section-label">MAIN MENU</div>
      <ul className="sidebar-menu">
        <li><a href="#home" className="sidebar-link"><i className="fa-solid fa-house"></i> Home</a></li>
        <li><a href="#students" className="sidebar-link active"><i className="fa-solid fa-users"></i> Students</a></li>
        <li><a href="#classes" className="sidebar-link"><i className="fa-solid fa-chalkboard-user"></i> Classes</a></li>
        <li><a href="#groups" className="sidebar-link"><i className="fa-solid fa-layer-group"></i> Groups</a></li>
      </ul>

      <div className="sidebar-section-label">ADMINISTRATION</div>
      <ul className="sidebar-menu">
        <li><a href="#subjects" className="sidebar-link"><i className="fa-solid fa-book-open"></i> Subjects</a></li>
        <li><a href="#assignment" className="sidebar-link"><i className="fa-solid fa-briefcase"></i> Assignment</a></li>
        <li><a href="#library" className="sidebar-link"><i className="fa-solid fa-bookmark"></i> Library</a></li>
      </ul>
    </aside>
  );
}

function TopHeader() {
  return (
    <header className="top-header">
      <div className="header-icons">
        <i className="fa-solid fa-gear" style={{ cursor: 'pointer' }}></i>
        <i className="fa-solid fa-bell" style={{ cursor: 'pointer' }}></i>
      </div>
      <div className="header-user">
        <div className="user-avatar-badge">AD</div>
        <span className="user-name">Admin</span>
      </div>
    </header>
  );
}

function PageHeader({ totalCount, onOpenModal }) {
  return (
    <div className="title-row">
      <div>
        <h1 className="page-title">Students</h1>
        <div className="total-count-badge">
          <i className="fa-solid fa-user"></i> Total: {totalCount}
        </div>
      </div>
      <div className="header-btn-group">
        <button className="btn-export">
          <i className="fa-solid fa-download"></i> Export data
        </button>
        <button className="btn-add" onClick={onOpenModal}>
          <i className="fa-solid fa-plus"></i> Add student
        </button>
      </div>
    </div>
  );
}

function FilterToolbar({ searchName, setSearchName, selectedCourse, setSelectedCourse, onReset }) {
  return (
    <div className="toolbar-row">
      <div className="filter-left-inputs">
        <input 
          type="text" 
          className="filter-input-box" 
          placeholder="Search by name..." 
          value={searchName} 
          onChange={(e) => setSearchName(e.target.value)}
        />
        
        {}
        <select 
          className="filter-input-box"
          value={selectedCourse} 
          onChange={(e) => setSelectedCourse(e.target.value)}
          style={{ cursor: 'pointer', color: selectedCourse === 'All' ? '#94a3b8' : '#0f172a' }}
        >
          <option value="All">All Courses</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Data Science">Data Science</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Information Technology">Information Technology</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="Web Development">Web Development</option>3
        </select>

        <button className="btn-reset" onClick={onReset}>
          <i className="fa-solid fa-rotate-left"></i> Reset
        </button>
      </div>

      <div className="action-icon-group">
        <button className="action-icon-btn" title="Tag"><i className="fa-solid fa-tag"></i></button>
        <button className="action-icon-btn" title="Share"><i className="fa-solid fa-share-nodes"></i></button>
      </div>
    </div>
  );
}

const avatarColors = ["#8b5cf6", "#14b8a6", "#ef4444", "#f59e0b", "#0d9488", "#6366f1", "#ec4899", "#3b82f6"];

function StudentTable({ students, onDelete, onEdit }) {
  return (
    <div className="data-card">
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>STUDENT</th>
            <th>EMAIL</th>
            <th>COURSE</th>
            <th>MARKS</th>
            <th style={{ textAlign: 'center' }}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            
            students.map((student, index) => (
              <tr key={student.id}>
                <td><strong>#{student.id}</strong></td>
                <td>
                  <div className="student-info-cell">
                    {}
                    <div 
                      className="student-initial-avatar" 
                      style={{ backgroundColor: student.color || avatarColors[index % avatarColors.length] }}
                    >
                      {getInitials(student.name)}
                    </div>
                    <span style={{ fontWeight: '600' }}>{student.name}</span>
                  </div>
                </td>
                <td style={{ color: '#475569' }}>{student.email}</td>
                <td style={{ color: '#334155' }}>{student.course}</td>
                <td><strong>{student.marks}</strong></td>
                <td>
                  <div className="table-action-btn-group" style={{ justifyContent: 'center' }}>
                    <button className="row-action-btn" onClick={() => onEdit(student)} title="Edit">
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button className="row-action-btn delete-btn" onClick={() => onDelete(student.id)} title="Delete">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '32px', color: '#64748b' }}>
                No students found matching your criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


function StudentModal({ isOpen, onClose, onSubmit, formData, setFormData, isEditing }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{isEditing ? "Edit Student" : "Add New Student"}</h2>
        <form onSubmit={onSubmit} className="modal-form">
          <div className="form-field">
            <label>Student Name</label>
            <input 
              type="text" 
              placeholder="Bilal Ahmed"
              required 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            />
          </div>
          <div className="form-field">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="bilal.ahmed@example.com"
              required 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            />
          </div>
          <div className="form-field">
            <label>Course</label>
            <input 
              type="text" 
              placeholder="Software Engineering"
              required 
              value={formData.course} 
              onChange={(e) => setFormData({ ...formData, course: e.target.value })} 
            />
          </div>
          <div className="form-field">
            <label>Marks</label>
            <input 
              type="number" 
              placeholder="(0-100)"
              required 
              min="0" 
              max="100"
              value={formData.marks} 
              onChange={(e) => setFormData({ ...formData, marks: e.target.value })} 
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-reset" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-add">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchName, setSearchName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', course: '', marks: '' });

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this student?")) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const handleOpenAddModal = () => {
    setCurrentEditId(null);
    setFormData({ name: '', email: '', course: '', marks: '' });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (student) => {
    setCurrentEditId(student.id);
    setFormData(student);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentEditId) {
      setStudents(students.map(s => s.id === currentEditId ? { ...formData, id: currentEditId, marks: Number(formData.marks) } : s));
    } else {
      const colors = ["#8b5cf6", "#14b8a6", "#ef4444", "#f59e0b", "#0d9488", "#6366f1"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const newStudent = { ...formData, id: Date.now(), marks: Number(formData.marks), color: randomColor };
      setStudents([...students, newStudent]);
    }
    setIsModalOpen(false);
  };

  const filteredStudents = students.filter(student => {
    const matchesName = student.name.toLowerCase().includes(searchName.toLowerCase().trim());
    const matchesCourse = selectedCourse === 'All' || student.course === selectedCourse;
    return matchesName && matchesCourse;
  });

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-area">
        <TopHeader />
        <main className="content-wrapper">
          <PageHeader totalCount={students.length} onOpenModal={handleOpenAddModal} />
          <FilterToolbar 
            searchName={searchName} 
            setSearchName={setSearchName} 
            selectedCourse={selectedCourse} 
            setSelectedCourse={setSelectedCourse}
            onReset={() => { setSearchName(''); setSelectedCourse('All'); }}
          />
          <StudentTable 
            students={filteredStudents} 
            onDelete={handleDelete} 
            onEdit={handleOpenEditModal} 
          />
        </main>
      </div>

      <StudentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        formData={formData}
        setFormData={setFormData}
        isEditing={currentEditId !== null}
      />
    </div>
  );
}