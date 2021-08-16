const express = require('express');
const conectarDB = require ('./config/db');
const { use } = require('./routes/proyecto');
const cors = require('cors');


//Creacion del servidor
const app = express();

//Conectamos a la base de datos
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/proyectos',require('./routes/proyecto'));
//Definicion de ruta principal
/*app.get('/',(req, res) => {
    res.send('Hola Mundo');
})*/

app.listen(4000, () => {
    console.log('El servidor esta funcionando')
})