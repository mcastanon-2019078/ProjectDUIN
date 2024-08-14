import React, { useState } from 'react';
import axios from 'axios';
import './CreateStudent.css';

/**
 * `CreateStudent` es un componente para crear un nuevo estudiante.
 */
const CreateStudent = () => {
    // Estado para los datos del formulario
    const [formData, setFormData] = useState({
        name: '',
        birthDate: '',
        fatherName: '',
        motherName: '',
        grade: '',
        section: '',
        admissionDate: ''
    });

    // Estado para manejar alertas
    const [alert, setAlert] = useState({ message: '', type: '' });

    /**
     * Maneja cambios en los campos del formulario.
     * @param {Object} e - Evento del cambio.
     */
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /**
     * Envía los datos del formulario al servidor.
     * @param {Object} e - Evento de envío del formulario.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/student/crear-alumno', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setAlert({ message: response.data.message, type: 'success' });
        } catch (error) {
            console.error(error);
            setAlert({ message: 'Error creating student', type: 'error' });
        }
    };

    return (
        <div className="create-student-container">
            <h2>Create Student</h2>
            <form onSubmit={handleSubmit}>
                {/* Campos del formulario */}
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter student's name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
                
                <label htmlFor="birthDate">Birth Date</label>
                <input 
                    type="date" 
                    id="birthDate" 
                    name="birthDate" 
                    value={formData.birthDate} 
                    onChange={handleChange} 
                    required 
                />
                
                <label htmlFor="fatherName">Father's Name</label>
                <input 
                    type="text" 
                    id="fatherName" 
                    name="fatherName" 
                    placeholder="Enter father's name" 
                    value={formData.fatherName} 
                    onChange={handleChange} 
                    required 
                />
                
                <label htmlFor="motherName">Mother's Name</label>
                <input 
                    type="text" 
                    id="motherName" 
                    name="motherName" 
                    placeholder="Enter mother's name" 
                    value={formData.motherName} 
                    onChange={handleChange} 
                    required 
                />
                
                <label htmlFor="grade">Grade</label>
                <input 
                    type="text" 
                    id="grade" 
                    name="grade" 
                    placeholder="Enter student's grade" 
                    value={formData.grade} 
                    onChange={handleChange} 
                    required 
                />
                
                <label htmlFor="section">Section</label>
                <input 
                    type="text" 
                    id="section" 
                    name="section" 
                    placeholder="Enter student's section" 
                    value={formData.section} 
                    onChange={handleChange} 
                    required 
                />
                
                <label htmlFor="admissionDate">Admission Date</label>
                <input 
                    type="date" 
                    id="admissionDate" 
                    name="admissionDate" 
                    value={formData.admissionDate} 
                    onChange={handleChange} 
                    required 
                />
                
                <button type="submit">Create Student</button>
            </form>
            {/* Mostrar alertas */}
            {alert.message && (
                <div className={`alert ${alert.type}`}>
                    {alert.message}
                </div>
            )}
        </div>
    );
};

export default CreateStudent;
