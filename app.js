//Aquí estamos importando el Paquete express 
const express = require('express');  
// inicializamos app con el paquete express 
const app = express();  

// Importamos paquete mongoose de Conexión Mongo DB
const mongoose = require('mongoose');
// Importar Body-Parser 
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());

//Rutas a las que accederemos 
// Importar Routes 
const rutasRoute = require('./routes/rutas'); 
app.use('/api', rutasRoute);


app.get('/', (req, res) => {    
     res.send('Estamos en el método GET'); 
    });
//Conexión a la Base de Datos de Mongo DB 
mongoose.connect('mongodb://localhost:27017/BD_NoSQL', () =>console.log('Conexión a Mongo DB Exitosa'));

//Escuchando al Servidor 
app.listen(3000);