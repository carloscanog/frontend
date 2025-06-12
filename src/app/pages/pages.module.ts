import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EditarPerfilTatuadorComponent } from './profile/editar-tatuador/editar-perfil-tatuador.component';



@NgModule({
  declarations: [
    ProfileComponent,
    EditarPerfilTatuadorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
