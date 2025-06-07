import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const body = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/usuarios/registro', body).subscribe({
      next: (res) => {
        console.log('✅ Usuario creado:', res);
        // Aquí podrías guardar el ID u otra info si hace falta
        this.router.navigate(['/register-step2']); // redirigir al segundo paso
      },
      error: (err) => {
        console.error('Error al registrar usuario', err);
        alert('Error al registrar. Revisa los datos.');
      }
    });
  }
}
