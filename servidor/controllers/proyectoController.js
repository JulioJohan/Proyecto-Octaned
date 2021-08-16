const Proyecto = require("../models/Proyecto");


exports.crearProyecto = async (req,res) => {
    try{
        let proyecto;

        //Creamos nuestro Producto
        proyecto = new Proyecto(req.body);

        await proyecto.save();
        res.send(proyecto);

    }catch(error){
        console.log(error);
        res.status(500).send("Hubo un error");
    }
 
}
exports.obtenerProyectos = async (req, res) => {
    try{
        const proyectos = await Proyecto.find();
        res.json(proyectos)

    }catch(error){
        console.log(error);
        res.status(500).send("Hubo un error");
    }

}

exports.actualizarProyecto = async (req, res) => {
    try {
        const { nombre, cliente, estatus, interna, usuario1, usuario2 ,fecha } = req.body;
        let proyecto = await Proyecto.findById(req.params.id);

        if(!proyecto){
            res.status(404).json ({msg: 'No existe el proyecto'})
        }
        
        proyecto.nombre = nombre;
        proyecto.cliente = cliente;
        proyecto.estatus = estatus;
        proyecto.interna = interna;
        proyecto.usuario1 = usuario1;
        proyecto.usuario2 = usuario2;
        proyecto.fecha = fecha;

        proyecto =  await Proyecto.findOneAndUpdate({_id: req.params.id},proyecto,{new: proyecto})
        res.json(proyecto);
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProyecto = async (req, res) => {
    try {

        let proyecto = await Proyecto.findById(req.params.id);

        if(!proyecto){
            res.status(404).json ({msg: 'No existe el proyecto'})
        }
        res.json(proyecto);

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProyecto = async (req, res) => {
    try {

        let proyecto = await Proyecto.findById(req.params.id);

        if(!proyecto){
            res.status(404).json ({msg: 'No existe el proyecto'})
        }
        await Proyecto.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Producto Eliminado con exito'});
        
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

