import React, { useState } from 'react';
import axios from 'axios';
import './ViewStudent.css';

/**
 * `ViewStudents` es un componente para buscar y mostrar estudiantes por grado.
 */
const ViewStudents = () => {
    // Estado para el grado a buscar
    const [grade, setGrade] = useState('');
    // Estado para los estudiantes obtenidos
    const [students, setStudents] = useState([]);
    // Estado para manejar alertas
    const [alert, setAlert] = useState({ message: '', type: '' });

    /**
     * Maneja cambios en el campo del grado.
     * @param {Object} e - Evento del cambio.
     */
    const handleChange = (e) => {
        setGrade(e.target.value);
    };

    /**
     * Realiza la búsqueda de estudiantes por grado.
     */
    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/student/consultar-alumno/${grade}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setStudents(response.data);
            setAlert({ message: 'Students fetched successfully', type: 'success' });
        } catch (error) {
            console.error(error);
            setAlert({ message: 'There are no students in this grade', type: 'error' });
        }
    };

    return (
        <div className="view-student-container">
            <h2>View Students by Grade</h2>
            <form>
                <label htmlFor="grade">Grade</label>
                <input 
                    type="text" 
                    id="grade" 
                    placeholder="Enter grade" 
                    value={grade} 
                    onChange={handleChange} 
                />
                <button type="button" onClick={handleSearch}>Search</button>
            </form>
            {/* Mostrar alertas */}
            {alert.message && (
                <div className={`alert ${alert.type}`}>
                    {alert.message}
                </div>
            )}
            <div className="results">
                {/* Mostrar resultados o mensaje de no encontrados */}
                {students.length > 0 ? (
                    <ul>
                        {students.map((student) => (
                            <li key={student._id}>
                                {student.name} - {student.grade} {student.section} (Father: {student.fatherName}, Mother: {student.motherName})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No students found for this grade</p>
                )}
            </div>
        </div>
    );
};

export default ViewStudents;
