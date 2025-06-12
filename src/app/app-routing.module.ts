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
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
