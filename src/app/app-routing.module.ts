import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { InicioComponent } from './auth/inicio/inicio.component';
import { RegistroPaso1Component } from './auth/registro-paso1/registro-paso1.component';
import { ElegirRolComponent } from './auth/elegir-rol/elegir-rol.component';
import { RegistroTatuadorComponent } from './auth/registro-tatuador/registro-tatuador.component';
import { RegistroClienteComponent } from './auth/registro-cliente/registro-cliente.component';
import { EditarPerfilTatuadorComponent } from './pages/profile/editar-tatuador/editar-perfil-tatuador.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MisTatuajesComponent } from './pages/tatuajes/mis-tatuajes/mis-tatuajes.component';
import { NuevoTatuajeComponent } from './pages/tatuajes/nuevo-tatuaje/nuevo-tatuaje.component';
import { DetalleTatuajeComponent } from './pages/tatuajes/detalle-tatuaje/detalle-tatuaje.component';
import { MisDisenyosComponent } from './pages/disenyos/mis-disenyos/mis-disenyos.component';
import { NuevoDisenyoComponent } from './pages/disenyos/nuevo-disenyo/nuevo-disenyo.component';
import { DetalleDisenyoComponent } from './pages/disenyos/detalle-disenyo/detalle-disenyo.component';
import { MisPedidosComponent } from './pages/pedidos/mis-pedidos/mis-pedidos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'registro/paso1', component: RegistroPaso1Component },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'registro/elegir-rol', component: ElegirRolComponent },
  { path: 'registro/tatuador', component: RegistroTatuadorComponent },
  { path: 'registro/cliente', component: RegistroClienteComponent },
  { path: 'profile/editar', component: EditarPerfilTatuadorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'mis-tatuajes', component: MisTatuajesComponent },
  { path: 'tatuajes/nuevo', component: NuevoTatuajeComponent },
  { path: 'tatuajes/:id', component: DetalleTatuajeComponent },
  { path: "mis-disenyos", component: MisDisenyosComponent },
  { path: "disenyos/nuevo", component: NuevoDisenyoComponent },
  { path: "disenyos/:id", component: DetalleDisenyoComponent },
  { path: "mis-pedidos", component: MisPedidosComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
