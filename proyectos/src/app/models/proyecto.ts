export class Proyecto{
    _id?: number;
    //clave: number;
    nombre: string;
    cliente: string;
    estatus: string;   
    interna: string;
    usuario1: string;
    usuario2: string;
    fecha: string;

    constructor(clave: number, nombre: string,cliente: string, estatus:string, interna:string, usuario1:string, usuario2:string, fecha:string){
        //this.clave = clave;
        this.nombre = nombre;  
        this.cliente = cliente;
        this.estatus = estatus;
        this.interna = interna;
        this.usuario1 = usuario1;
        this.usuario2 = usuario2;
        this.fecha = fecha;
    }
}