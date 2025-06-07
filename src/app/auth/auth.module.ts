import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../core/interceptors/auth.interceptor';
import { RegistroPaso1Component } from './registro-paso1/registro-paso1.component';
import { InicioComponent } from './inicio/inicio.component';
import { ElegirRolComponent } from './elegir-rol/elegir-rol.component';
import { RegistroTatuadorComponent } from './registro-tatuador/registro-tatuador.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { RouterModule } from '@angular/router';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegistroPaso1Component,
    InicioComponent,
    ElegirRolComponent,
    RegistroTatuadorComponent,
    RegistroClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }
