import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EditarPerfilTatuadorComponent } from './profile/editar-tatuador/editar-perfil-tatuador.component';
import { NuevoTatuajeComponent } from './tatuajes/nuevo-tatuaje/nuevo-tatuaje.component';
import { MisTatuajesComponent } from './tatuajes/mis-tatuajes/mis-tatuajes.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';



@NgModule({
  declarations: [
    ProfileComponent,
    EditarPerfilTatuadorComponent,
    NuevoTatuajeComponent,
    MisTatuajesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PagesModule { }
