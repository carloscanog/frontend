import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MuroTatuajesComponent } from './tatuajes/muro-tatuajes/muro-tatuajes.component';
import { VerOtroPerfilComponent } from './profile/ver-otro-perfil/ver-otro-perfil.component';
import { MuroDisenyosComponent } from './disenyos/muro-disenyos/muro-disenyos.component';
import { DisenyosTatuadorComponent } from './disenyos/disenyos-tatuador/disenyos-tatuador.component';
import { TatuajesTatuadorComponent } from './tatuajes/tatuajes-tatuador/tatuajes-tatuador.component';



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
    MisPedidosComponent,
    MuroTatuajesComponent,
    MuroDisenyosComponent,
    DisenyosTatuadorComponent,
    TatuajesTatuadorComponent,
    VerOtroPerfilComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
