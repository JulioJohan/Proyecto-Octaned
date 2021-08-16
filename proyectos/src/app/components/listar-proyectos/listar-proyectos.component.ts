import { ToastrService } from 'ngx-toastr';
import { ProyectoService } from './../../services/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-listar-proyectos',
  templateUrl: './listar-proyectos.component.html',
  styleUrls: ['./listar-proyectos.component.css']
})

export class ListarProyectosComponent implements OnInit {
  listarProyectos: Proyecto[] = [];

  constructor( private _proyectoService: ProyectoService,
              private toastr: ToastrService){} 

  ngOnInit(): void {
    this.obtenerProyectos();
  }
  
  obtenerProyectos() {
    this._proyectoService.getProyectos().subscribe(data => {
      console.log (data);
      this.listarProyectos = data
    }, error =>{
      console.log(error);
    })
  }
  eliminarProyecto(id: any){
    this._proyectoService.eliminarProyecto(id).subscribe(data =>{
      this.toastr.error('El proyecto fue eliminado exitosamente', 'Proyecto Eliminado');
      this.obtenerProyectos();
    }, error =>{
      console.log(error);
    
    })
  }
}

