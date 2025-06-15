import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EditarPerfilTatuadorComponent } from './profile/editar-tatuador/editar-perfil-tatuador.component';
import { NuevoTatuajeComponent } from './tatuajes/nuevo-tatuaje/nuevo-tatuaje.component';
import { MisTatuajesComponent } from './tatuajes/mis-tatuajes/mis-tatuajes.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { DetalleTatuajeComponent } from './tatuajes/detalle-tatuaje/detalle-tatuaje.component';
import { MisDisenyosComponent } from './disenyos/mis-disenyos/mis-disenyos.component';
import { NuevoDisenyoComponent } from './disenyos/nuevo-disenyo/nuevo-disenyo.component';
import { DetalleDisenyoComponent } from './disenyos/detalle-disenyo/detalle-disenyo.component';
import { MisPedidosComponent } from './pedidos/mis-pedidos/mis-pedidos.component';
import { EditarPerfilClienteComponent } from './profile/editar-cliente/editar-perfil-cliente.component';



@NgModule({
  declarations: [
    ProfileComponent,
    NavbarComponent,
    EditarPerfilTatuadorComponent,
    EditarPerfilClienteComponent,
    NuevoTatuajeComponent,
    MisTatuajesComponent,
    DetalleTatuajeComponent,
    NuevoDisenyoComponent,
    MisDisenyosComponent,
    DetalleDisenyoComponent,
    MisPedidosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PagesModule { }
