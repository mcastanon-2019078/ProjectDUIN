'use strict'

import { Router } from "express"
import { saveStudent, updateStudent, deleteStudent, getStudentsByGrade} from './student.controller.js';

const api = Router()

api.post('/crear-alumno', saveStudent);
api.put('/actualizar-alumno/:id',  updateStudent);
api.delete('/eliminar-alumno/:id',  deleteStudent);
api.get('/consultar-alumno/:idGrado', getStudentsByGrade)

export default api