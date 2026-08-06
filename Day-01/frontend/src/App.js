import React, { useState } from 'react';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      {/* 1. Heading */}
      <h1>Welcome to My First React Webpage</h1>

      {/* 2. Text Paragraph */}
      <p>This is my Day 1 task for the MERN Stack Internship. Setting up React and Node.js!</p>

      {/* 3. Main Button */}
      <button 
        onClick={openModal}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 123, 255, 0.2)'
        }}
      >
        Click Me!
      </button>

      {/* Modern Custom Alert Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '12px',
            width: '320px',
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>🎉</div>
            <h2 style={{ margin: '0 0 10px 0', color: '#2c3e50', fontSize: '20px' }}>Task Completed!</h2>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
              Day 1 Task Completed Successfully!
            </p>
            <button 
              onClick={closeModal}
              style={{
                padding: '8px 20px',
                fontSize: '14px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;