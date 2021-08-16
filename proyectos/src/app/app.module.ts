import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';
import { ListarProyectosComponent } from './components/listar-proyectos/listar-proyectos.component';
import {HttpClientModule}from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CrearProyectoComponent,
    ListarProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
