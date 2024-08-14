'use strict'

import { Schema, model } from "mongoose"

const studentSchemma = Schema({
    name: {
        type: String
    },
    birthDate: {
        type: Date,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    admissionDate: {
        type: Date,
        required: true
    }
}, {
    versionKey: false
})

export default model('Student', studentSchemma);
