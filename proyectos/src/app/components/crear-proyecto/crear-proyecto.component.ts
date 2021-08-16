import { ProyectoService } from './../../services/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {
  proyectoForm: FormGroup;
  titulo = 'Crear Proyecto'
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _proyectoService: ProyectoService,
              private aRouter: ActivatedRoute) {
    this.proyectoForm = this.fb.group({
      //clave: ['',Validators.required],
      nombre: ['',Validators.required],
      cliente: ['',Validators.required],
      estatus: ['',Validators.required],
      interna: ['',Validators.required],
      usuario1: ['',Validators.required],
      usuario2: ['',Validators.required],
      fecha: ['',Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }


  
  agregarProyecto(){
   
    const PROYECTO: Proyecto = {
      //clave: this.proyectoForm.get('clave')?.value,
      nombre: this.proyectoForm.get('nombre')?.value,
      cliente: this.proyectoForm.get('cliente')?.value,
      estatus: this.proyectoForm.get('estatus')?.value,
      interna: this.proyectoForm.get('interna')?.value,
      usuario1: this.proyectoForm.get('usuario1')?.value,
      usuario2: this.proyectoForm.get('usuario2')?.value,
      fecha: this.proyectoForm.get('fecha')?.value
    
     
    }

    if(this.id !== null){
      //editamos proyecto
      this._proyectoService.editarProyecto(this.id, PROYECTO).subscribe(data =>{
        this.toastr.success('El Proyecto fue actualizado con exito', 'Proyecto Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.proyectoForm.reset();
     
          
      })
    }else{
      //agregamos proyecto
      console.log(PROYECTO);
      this._proyectoService.guardarProyecto(PROYECTO).subscribe(data => {
      this.toastr.info('El Proyecto fue registrado con exito', 'Proyecto Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.proyectoForm.reset();
    })
        
      
    }
 

  }
  esEditar() {
    if(this.id !== null){
      this.titulo = 'Editar Proyecto';
      this._proyectoService.obtenerProyecto(this.id).subscribe(data => {
        this.proyectoForm.setValue({
          clave: data.clave,
          nombre: data.nombre,
          cliente: data.cliente,
          estatus: data.estatus,
          interna: data.interna,
          usuario1: data.usuario1,
          usuario2: data.usuario2,
          fecha: data.fecha,
        })
      })
    }
  }
}
