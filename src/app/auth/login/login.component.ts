import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string | null = null;

  constructor(
    private authService: AuthService,
    public router: Router
  ) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      this.error = 'Por favor, completa todos los campos.';
      return;
    }

    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        this.error = null;
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        this.error = 'Credenciales incorrectas o servidor no disponible.';
      }
    });
  }
}
