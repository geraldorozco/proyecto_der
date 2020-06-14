const mongoose = require('mongoose');

//Estructura de la coleccion de cursos

const cursos = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    duracion:{
        type: Number,
        required: true
    },
    fecha_inicio: {
        type: Date,
        required: true
    },
    fecha_fin: {
        type: Date,
        required: true
    }
});

//Estructura de la coleccion de alumnos

const alumnos = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

//Estructura de la coleccion de instructores

const instructores = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Curso = mongoose.model('cursos', cursos);
const Alumno = mongoose.model('alumnos', alumnos);
const Instructor = mongoose.model('instructores', instructores);

module.exports = {
    Curso: Curso,
    Alumno: Alumno,
    Instructor: Instructor
};