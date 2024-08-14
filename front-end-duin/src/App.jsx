// App.js
import React from 'react';
import './App.css';
import CreateStudent from './components/CreateStudent.jsx';
import ViewStudents from './components/ViewStudents.jsx';

function App() {
    return (
        <div className="App">
            <h1>Student Management System</h1>
            <CreateStudent />
            <hr />
            <ViewStudents />
        </div>
    );
}

export default App;
