'use strict'

import Student from './student.model.js'

export const saveStudent = async (req, res) => {
    try {
        let data = req.body;

        let studentExists = await Student.findOne({ name: data.name, grade: data.grade, section: data.section });
        if (studentExists) return res.send({ message: 'This student already exists in the same grade and section' });

        let student = new Student(data);
        await student.save();
        return res.status(201).send({ message: 'Student created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: 'Error creating student' });
    }
}

// Actualizar un alumno existente
export const updateStudent = async (req, res) => {
    try {
        let studentId = req.params.id;
        let data = req.body;

        let studentExists = await Student.findOne({ name: data.name, grade: data.grade, section: data.section });
        if (studentExists && studentExists._id != studentId) {
            return res.send({ message: 'This student already exists in the same grade and section' });
        }

        let updatedStudent = await Student.findOneAndUpdate(
            { _id: studentId },
            data,
            { new: true, upsert: true }
        );
        if (!updatedStudent) return res.send({ message: 'Student not found and not updated' });
        return res.send({ message: 'Student updated successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: 'Error updating student' });
    }
}

// Eliminar un alumno existente
export const deleteStudent = async (req, res) => {
    try {
        let studentId = req.params.id;
        let studentDeleted = await Student.findOneAndDelete({ _id: studentId });
        if (!studentDeleted) return res.send({ message: 'Student not found and not deleted' });
        return res.send({ message: 'Student deleted successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: 'Error deleting student' });
    }
}

export const getStudentsByGrade = async (req, res) => {
    try {
        let { idGrado } = req.params;
        let students = await Student.find({ grade: idGrado });
        if (!students || students.length === 0) {
            return res.status(404).send({ message: 'No students found for this grade' });
        }
        return res.status(200).send(students);
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: 'Error retrieving students' });
    }
}