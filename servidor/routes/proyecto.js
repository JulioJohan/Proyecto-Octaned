//Rutas para proyecto
const express = require('express');
const router =  express.Router();
const proyectoController = require ('../controllers/proyectoController');

//api/proyectos
router.post('/',proyectoController.crearProyecto);
router.get('/',proyectoController.obtenerProyectos);
router.put('/:id',proyectoController.actualizarProyecto);
router.get('/:id',proyectoController.obtenerProyecto);
router.delete('/:id',proyectoController.eliminarProyecto);

module.exports = router;